"use client";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";
const STORAGE_KEY = "nextjs-blog-starter-theme";

export const Navbar = () => {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored) setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);

    // 🔑 Let your existing theme system handle DOM updates
    window.updateDOM?.();
  };

  const navItems = [
    { name: "Product", path: "/product" },
    { name: "Technology", path: "/technology" },
    { name: "Community", path: "/community" },
    { name: "Company", path: "/company" },
    { name: "Blog", path: "/" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="font-display font-bold text-xl">Mist.cash</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Link href="https://mist.cash">
              <Button className="bg-primary text-primary-foreground font-semibold">
                Launch Demo
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
