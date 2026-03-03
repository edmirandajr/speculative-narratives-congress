/**
 * Design: Surrealismo Onírico Académico
 */

import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, User } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  const organizers = [
    {
      name: "Maria Sofia Pimentel Biscaia",
      email: "msbiscaia@ua.pt",
    },
    {
      name: "António Oliveira",
      email: "ajmo@iscap.ipp.pt",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-12 text-center">
          {t("contact.title")}
        </h1>

        <div className="space-y-6">
          <div className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30">
            <h2 className="text-2xl font-display font-bold text-primary mb-6">
              {t("contact.organizers")}
            </h2>

            <div className="space-y-6">
              {organizers.map((organizer) => (
                <div
                  key={organizer.email}
                  className="flex items-start gap-4 p-6 bg-background/50 rounded-2xl"
                >
                  <User className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {organizer.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <a
                        href={`mailto:${organizer.email}`}
                        className="text-base text-primary hover:underline"
                      >
                        {organizer.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
