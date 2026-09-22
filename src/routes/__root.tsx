import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Navbar } from "@/components/pawconnect/site-shell";
import { AuthModal } from "@/components/pawconnect/auth-modal";
import { AppProvider } from "@/context/app-context";
import { AuthProvider } from "@/context/auth-context";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#F59E0B" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Nunito:wght@700;800;900&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="font-display text-8xl font-black text-primary">404</p>
        <h1 className="font-display text-3xl font-bold">This trail went cold.</h1>
        <p className="mt-2 text-muted-foreground">Let’s head back to the pets.</p>
      </div>
    </main>
  ),
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          <Navbar />
          <Outlet />
          <Footer />
          <AuthModal />
          <Toaster richColors position="bottom-right" />
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

