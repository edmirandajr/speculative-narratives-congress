/**
 * Design: Surrealismo Onírico Académico
 * Hero com imagem portal especulativo, texto fluido, formas orgânicas
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section com Portal Especulativo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image com Overlay Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image-home.webp"
            alt="Speculative Portal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-6 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-2xl md:text-3xl font-display font-semibold text-primary mb-8">
            {t("hero.subtitle")}
          </p>
          <div className="space-y-2 text-lg md:text-xl text-foreground/80">
            <p>{t("hero.date")}</p>
            <p className="font-medium">{t("hero.location")}</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Apresentação Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/image-home.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12 text-center">
            {t("home.title")}
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-foreground/90">
            <p className="text-xl font-medium text-primary/90 italic font-accent">
              {t("home.intro")}
            </p>

            <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
              <p>{t("home.p1")}</p>
            </div>

            <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
              <p>{t("home.p2")}</p>
            </div>

            <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
              <p>{t("home.p3")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
