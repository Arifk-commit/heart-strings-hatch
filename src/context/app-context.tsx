import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "@/context/auth-context";
import { db } from "@/lib/firebase";

type Theme = "light" | "dark";

type AppContextValue = {
  favorites: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number, name: string) => void;
  theme: Theme;
  toggleTheme: () => void;
  hydrated: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const { user, openAuthModal } = useAuth();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [theme, setTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  // Load theme and initial local favorites on mount
  useEffect(() => {
    try {
      const savedTheme =
        localStorage.getItem("pawconnect-theme") === "dark" ? "dark" : "light";
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");

      const savedFavs = JSON.parse(
        localStorage.getItem("pawconnect-favorites") ?? "[]",
      ) as number[];
      setFavorites(Array.isArray(savedFavs) ? savedFavs : []);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Sync favorites when user logs in / changes
  useEffect(() => {
    if (!user) return;

    let isMounted = true;
    const loadUserFavorites = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists() && isMounted) {
          const cloudFavs = userSnap.data()?.favorites;
          if (Array.isArray(cloudFavs)) {
            setFavorites(cloudFavs);
            localStorage.setItem("pawconnect-favorites", JSON.stringify(cloudFavs));
          }
        }
      } catch (err) {
        console.warn("Could not sync cloud favorites:", err);
      }
    };

    loadUserFavorites();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const toggleFavorite = (id: number, name: string) => {
    // Require authentication to add/remove favorites
    if (!user) {
      openAuthModal(
        `Please sign in or create an account to save ${name} to your favorites.`,
        () => {
          // After successful login, toggle the favorite
          setFavorites((current) => {
            const removing = current.includes(id);
            const next = removing
              ? current.filter((item) => item !== id)
              : [...current, id];
            localStorage.setItem("pawconnect-favorites", JSON.stringify(next));
            toast(
              removing
                ? `${name} removed from favorites`
                : `${name} saved to favorites ❤️`,
              {
                description: removing
                  ? "You can add them again anytime."
                  : "Saved to your account.",
              },
            );
            return next;
          });
        },
      );
      return;
    }

    // Authenticated user favorite toggle
    setFavorites((current) => {
      const removing = current.includes(id);
      const next = removing
        ? current.filter((item) => item !== id)
        : [...current, id];

      localStorage.setItem("pawconnect-favorites", JSON.stringify(next));

      // Attempt background Firestore sync
      if (user) {
        setDoc(doc(db, "users", user.uid), { favorites: next }, { merge: true }).catch(
          (err) => console.warn("Firestore favorites sync error:", err),
        );
      }

      toast(
        removing
          ? `${name} removed from favorites`
          : `${name} saved to favorites ❤️`,
        {
          description: removing
            ? "You can add them again anytime."
            : "Saved to your account.",
        },
      );
      return next;
    });
  };

  const toggleTheme = () =>
    setTheme((current) => {
      const next = current === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("pawconnect-theme", next);
      return next;
    });

  const value = useMemo(
    () => ({
      favorites,
      isFavorite: (id: number) => favorites.includes(id),
      toggleFavorite,
      theme,
      toggleTheme,
      hydrated,
    }),
    [favorites, theme, hydrated, user],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used inside AppProvider");
  return value;
}
