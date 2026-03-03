/**
 * Design: Surrealismo Onírico Académico
 * Navegação fluida com formas orgânicas, backdrop blur, e transições suaves
 */

import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: "nav.home", path: "/" },
    { key: "nav.themes", path: "/themes" },
    { key: "nav.keynotes", path: "/keynotes" },
    { key: "nav.call", path: "/call" },
    { key: "nav.program", path: "/program" },
    { key: "nav.registration", path: "/registration" },
    { key: "nav.venue", path: "/venue" },
    { key: "nav.contact", path: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link href="/" className="text-lg font-display font-bold text-primary hover:text-primary/80 transition-colors duration-300">
            Speculative Narratives
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.key}
                  href={item.path}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2 rounded-full"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium uppercase">{language}</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link
                key={item.key}
                href={item.path}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
