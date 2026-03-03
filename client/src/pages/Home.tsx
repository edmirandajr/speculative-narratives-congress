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
            src="https://private-us-east-1.manuscdn.com/sessionFile/PWm3SGJOx6aChsaibUGCEg/sandbox/XlvANvXfkweAEPdrlY3l29-img-1_1770408933000_na1fn_aGVyby1zcGVjdWxhdGl2ZS1wb3J0YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFdtM1NHSk94NmFDaHNhaWJVR0NFZy9zYW5kYm94L1hsdkFOdlhma3dlQUVQZHJsWTNsMjktaW1nLTFfMTc3MDQwODkzMzAwMF9uYTFmbl9hR1Z5YnkxemNHVmpkV3hoZEdsMlpTMXdiM0owWVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Hbl04WCd9G5YcEJVpMrmRkv9-tUAScMr9-FjBqO2wmrRyotLlukygL2FDNvL2Cjc8jeu9ZcQGNc6TaflXR4t3V~6nUthdYPllyZLHr94Coq3BUK0NCQDqmAgCjO74c35Lkn0LdSzSsuT5SKlIj~ByMo0J517eiagjS1r~b0zJ3nzmkY-UhrtEEDi0Qqz-x31ppI2eb2pas2TWdiwR~6dITyFpaEvek21eHqf9xaGCDsRWMCPBG9AJP8d~0ujyoj8G9FV9HhDizCX0qFna-Aaamr2FuLWua840pOyDEs1Ro07dqAR3L5QLGipvlvEzzKLQYi44pLx3mDkvLm-HVAPJw__"
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
            src="https://private-us-east-1.manuscdn.com/sessionFile/PWm3SGJOx6aChsaibUGCEg/sandbox/XlvANvXfkweAEPdrlY3l29-img-5_1770408934000_na1fn_Y29uZ3Jlc3MtYWJzdHJhY3QtcGF0dGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFdtM1NHSk94NmFDaHNhaWJVR0NFZy9zYW5kYm94L1hsdkFOdlhma3dlQUVQZHJsWTNsMjktaW1nLTVfMTc3MDQwODkzNDAwMF9uYTFmbl9ZMjl1WjNKbGMzTXRZV0p6ZEhKaFkzUXRjR0YwZEdWeWJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NKUnRoTr35ch3tKcXk5l5ljSkoJ94nqm-6LNEjqKeMTqWHHsbZV00NzDrY6K3LWDoEyCzvP6G-t0Nf2j6Iep-AKo63T68hBhdpkK3j9~6m27ieQRpGKqdHK-8GS6hqKfBHgziT~9CXdPAnMeVnube2HjOhXWb41kxLl3p~uCDLECQzjiQqChG~2cCM9Q~1sXkY3ED8Ms8nnRrgeJRfd1JuLZK5WjWvCcpW9rHmSaMTqbyRSSC0FYo88PfCqRf1v0KCr1EiFA6QTYuEphcWDcqLv4HoZVLGjbOBF8bXzeh1hHNrhBFJWzmOidyi0Qo2985wGC961JJwClKHJ1WA34LQ__"
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
