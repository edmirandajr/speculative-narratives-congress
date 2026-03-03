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
            src="https://private-us-east-1.manuscdn.com/sessionFile/PWm3SGJOx6aChsaibUGCEg/sandbox/XlvANvXfkweAEPdrlY3l29-img-2_1770408933000_na1fn_dGhlbWVzLXdlaXJkLWhvcnJvcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFdtM1NHSk94NmFDaHNhaWJVR0NFZy9zYW5kYm94L1hsdkFOdlhma3dlQUVQZHJsWTNsMjktaW1nLTJfMTc3MDQwODkzMzAwMF9uYTFmbl9kR2hsYldWekxYZGxhWEprTFdodmNuSnZjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MFU~Va5g9IQr26cQy1Bp4RNBbXwQuP9OhTuaN6ekHNfftGpjhUePH-Wnpe9G4nCl5E1IiETJLLl8HNy4mrXIwt-dq8p4N1c3um-~lwotRPpoiXxez7SMlIS1grei-NoxS7BZpYNybdzeDOYJT5vQPuUhxdYafWlvVBRKYBfZbfX~yrwEHimxd76HC92JDIXS4A9xI0wM1VjQMRlzo2aBhB5kUX7Cc3tHy6NG0xptjoMWQPWxZcpXPWDVOd1vGx3c7dK0HPwGeIuESfTjaNE1sUEZtlAveCAWig-PJVU2gu3OoPHfLOxTpBGJEEmeaB7xnjyIyDia~fj1JUquwZ9D5w__"
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
