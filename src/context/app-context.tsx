import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";

type Theme = "light" | "dark";
type AppContextValue = { favorites:number[]; isFavorite:(id:number)=>boolean; toggleFavorite:(id:number,name:string)=>void; theme:Theme; toggleTheme:()=>void; hydrated:boolean };
const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [favorites,setFavorites] = useState<number[]>([]);
  const [theme,setTheme] = useState<Theme>("light");
  const [hydrated,setHydrated] = useState(false);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("pawconnect-favorites") ?? "[]") as number[];
      setFavorites(Array.isArray(saved) ? saved : []);
      const savedTheme = localStorage.getItem("pawconnect-theme") === "dark" ? "dark" : "light";
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } finally { setHydrated(true); }
  }, []);
  const toggleFavorite = (id:number,name:string) => setFavorites((current) => {
    const removing = current.includes(id);
    const next = removing ? current.filter((item)=>item!==id) : [...current,id];
    localStorage.setItem("pawconnect-favorites", JSON.stringify(next));
    toast(removing ? `${name} removed from favorites` : `${name} saved to favorites`, { description: removing ? "You can add them again anytime." : "Your saved pets stay on this device." });
    return next;
  });
  const toggleTheme = () => setTheme((current) => {
    const next = current === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("pawconnect-theme", next);
    return next;
  });
  const value = useMemo(() => ({favorites,isFavorite:(id:number)=>favorites.includes(id),toggleFavorite,theme,toggleTheme,hydrated}), [favorites,theme,hydrated]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useApp() { const value = useContext(AppContext); if (!value) throw new Error("useApp must be used inside AppProvider"); return value; }
