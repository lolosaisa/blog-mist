"use client";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light");
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
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-display font-bold text-primary-foreground">
              M
            </div>
            <span className="font-display font-bold text-xl">Mist.cash</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - CTA + Theme toggle */}
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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Launch Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-4 pt-2">
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
              <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Launch Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
