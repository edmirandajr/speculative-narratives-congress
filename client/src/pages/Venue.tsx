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
            src="https://private-us-east-1.manuscdn.com/sessionFile/PWm3SGJOx6aChsaibUGCEg/sandbox/XlvANvXfkweAEPdrlY3l29-img-4_1770408938000_na1fn_cG9zdGh1bWFuLWxhbmRzY2FwZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFdtM1NHSk94NmFDaHNhaWJVR0NFZy9zYW5kYm94L1hsdkFOdlhma3dlQUVQZHJsWTNsMjktaW1nLTRfMTc3MDQwODkzODAwMF9uYTFmbl9jRzl6ZEdoMWJXRnVMV3hoYm1SelkyRndaUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ArFFEDZczC-B1aSi5cb3H2dC4Ww6LVh5zVCvy9FvhRQ2iSVMehcdWikOkymzGL8TZbCmEAd-6Aj1Bzyx3dngsEw3cFq2wonhjclCAMPXNc~UQadESr5JK~5K79V8z694kh7t~TeaGU8D3ueNB3VoQcdPSFp0AsQ0nx2p-QyAQ~fueIAsNQyQBZP18ZW3TQN8qMWJLExL2v2cDQtWKcE5imkzWzOyB0wCffH1q5V6by3VtFvvzv8hv9bJ9HTQfN-2lsJUD1tftYiiT29NEKdo2opewCpXmBOG-Ojp5UcWTlIcUwg4xU7DpTJ-1Dt30WqEzBIEqO50MthioOOLOYNZ1w__"
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
