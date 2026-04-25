/**
 * Design: Surrealismo Onírico Académico
 * Call for Papers com informações de submissão
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Calendar, CheckCircle } from "lucide-react";

export default function CallForPapers() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 text-center">
          {t("call.title")}
        </h1>

        <div className="space-y-8">
          <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
            <p className="text-lg leading-relaxed text-foreground/90">
              {t("call.intro")}
            </p>
          </div>

          <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              {t("call.format")}
            </h2>
            <ul className="space-y-3">
              {["call.format1", "call.format2", "call.format3", "call.format4"].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-base text-foreground/90">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              {t("call.submission")}
            </h2>
            <p className="text-base leading-relaxed text-foreground/90 mb-6 text-left">
              {t("call.submission.text")}
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-2xl self-start">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href="mailto:cllc-speculativeconference.aveiro@ua.pt"
                className="text-base font-medium text-primary hover:underline break-all"
              >
                cllc-speculativeconference.aveiro@ua.pt
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_1.15fr] gap-6">
            <div className="backdrop-blur-sm bg-card/50 p-6 rounded-3xl border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  {t("call.deadline")}
                </h3>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-card/50 p-6 rounded-3xl border border-border/30">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  {t("call.notification")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className="mt-10 space-y-6 max-w-2xl mx-auto text-center">
  <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
    <h2 className="text-2xl font-display font-bold text-primary mb-6">
      Scientific Committee
    </h2>
    <ul className="space-y-2 text-foreground/90">
      <li>Aline Ferreira (University of Aveiro, Portugal)</li>
      <li>Anabela Simões (Águeda School of Technology and Management, Portugal)</li>
      <li>Belén Martín Lucas (University of Vigo, Spain)</li>
      <li>Carolina Nuñez Sanchez (University of A Coruña, Spain)</li>
      <li>Lars Jensen (University of Roskilde, Denmark)</li>
      <li>Marie-Manuelle da Silva (Open University, Portugal)</li>
    </ul>
  </div>

  <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
    <h2 className="text-2xl font-display font-bold text-primary mb-6">
      Honours Committee
    </h2>
    <ul className="space-y-2 text-foreground/90">
      <li>Gillian Grace Owen Moreira (University of Aveiro, Portugal)</li>
      <li>David Callahan (University of Aveiro, Portugal)</li>
    </ul>
  </div>
</div>

    </div>

  );
}
