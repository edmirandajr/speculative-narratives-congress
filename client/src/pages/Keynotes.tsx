/**
 * Design: Surrealismo Onírico Académico
 * Keynote speakers com cards elegantes, foto e imagem feminist futures
 */

import { useLanguage } from "@/contexts/LanguageContext";

export default function Keynotes() {
  const { t } = useLanguage();

  const speakers = [
    {
      name: "Ana da Silveira Moura",
      affiliation: "University of Porto",
      bioKey: "keynotes.bio1",
      photo: "/keynotes/Ana-Moura.jpg",
    },
    {
      name: "Camilla Grudova",
      affiliation: "Author",
      bioKey: "keynotes.bio3",
      photo: "/keynotes/Camilla_Grudova.jpg",
    },
    {
      name: "Michael Lundblad",
      affiliation: "University of Oslo",
      bioKey: "keynotes.bio4",
      photo: "/keynotes/Michael-Lundblad.jpg",
    },
    {
      name: "Nelson Zagalo",
      affiliation: "University of Aveiro",
      bioKey: "keynotes.bio5",
      photo: "/keynotes/Nelson-Zagalo.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero */}
      <section className="relative mb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image-keynotes.webp"
            alt="Feminist Futures"
            className="w-full h-96 object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-24 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
            {t("keynotes.title")}
          </h1>
        </div>
      </section>

      {/* Speakers */}
      <section className="container mx-auto px-4">
        <div className="space-y-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="backdrop-blur-sm bg-card/50 p-8 rounded-3xl border border-border/30 hover:border-primary/50 transition-all duration-500 animate-fade-in-up flex gap-8 items-start"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Photo */}
              <div className="flex-shrink-0">
                {speaker.photo ? (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-32 h-40 object-cover rounded-2xl border border-border/50"
                  />
                ) : (
                  <div className="w-32 h-40 bg-muted rounded-2xl border border-border/50 flex items-center justify-center">
                    <p className="text-xs text-muted-foreground text-center px-2">Photo</p>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  {speaker.affiliation}
                </p>
                <p className="text-base leading-relaxed text-foreground/90">
                  {t(speaker.bioKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
