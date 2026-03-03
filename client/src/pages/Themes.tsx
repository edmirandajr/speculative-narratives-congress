/**
 * Design: Surrealismo Onírico Académico
 * Lista de temas com cards fluidos e imagem weird horror
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Themes() {
  const { t } = useLanguage();

  const themes = [
    "themes.horror",
    "themes.feminist",
    "themes.punk",
    "themes.digital",
    "themes.superheroes",
    "themes.alternate",
    "themes.animals",
    "themes.clifi",
    "themes.mobility",
    "themes.postcapitalism",
    "themes.intersectionality",
    "themes.postapocalypse",
    "themes.ai",
    "themes.posthuman",
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero com Imagem Weird Horror */}
      <section className="relative mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image-themes.webp"
            alt="Weird Horror"
            className="w-full h-96 object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            {t("themes.title")}
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            {t("themes.intro")}
          </p>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {themes.map((themeKey, index) => (
            <div
              key={themeKey}
              className="backdrop-blur-sm bg-card/50 p-6 rounded-3xl border border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="text-base leading-relaxed text-foreground/90">
                {t(themeKey)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
