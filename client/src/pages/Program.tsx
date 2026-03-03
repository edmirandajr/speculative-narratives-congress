/**
 * Design: Surrealismo Onírico Académico
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Clock } from "lucide-react";

export default function Program() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 text-center">
          {t("program.title")}
        </h1>

        <div className="backdrop-blur-sm bg-card/50 p-12 rounded-3xl border border-border/30 text-center">
          <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
          <p className="text-xl leading-relaxed text-foreground/90 font-medium">
            {t("program.tba")}
          </p>
        </div>
      </div>
    </div>
  );
}
