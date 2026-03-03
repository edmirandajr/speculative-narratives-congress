/**
 * Design: Surrealismo Onírico Académico
 * Venue com imagem pós-humana landscape
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

export default function Venue() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero com Imagem Pós-humana */}
      <section className="relative mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image-venue.webp"
            alt="Posthuman Landscape"
            className="w-full h-96 object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            {t("venue.title")}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                University of Aveiro
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90">
                {t("venue.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
