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
      affiliation: "University of Vigo",
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
            src="https://private-us-east-1.manuscdn.com/sessionFile/PWm3SGJOx6aChsaibUGCEg/sandbox/XlvANvXfkweAEPdrlY3l29-img-3_1770408928000_na1fn_ZmVtaW5pc3QtZnV0dXJlcy1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUFdtM1NHSk94NmFDaHNhaWJVR0NFZy9zYW5kYm94L1hsdkFOdlhma3dlQUVQZHJsWTNsMjktaW1nLTNfMTc3MDQwODkyODAwMF9uYTFmbl9abVZ0YVc1cGMzUXRablYwZFhKbGN5MWhZbk4wY21GamRBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=d~JT-JnK3QuSTwlzBFupUWBjKd9vFUDjSyU7Kx1sKl9fNioQHgJQGF0aYjCPGi0cThHAWtwTrQ2XCJbj70oY4CNpJxsPX~M~~BKjQezDqz5HPM0jJZ6N2WXlGTQ9le3YVn3113oUKXCGRaakfpL7oVjRCvgQ6UjR6QocqUFWjATWQq6cUP-gCTeqrO8o2gWGYso6AEdzIc1Fz9HKr6apB2x4DE4xY5-B7QrtpGzGF--~9uOJtWj5KFtxj0g7zVHt9hbZxYtBYP7MM6iT6rtdx9v4pQqaujfBt5rGsEUvXBzpAbxB-~mue--iFIxRzdhrHzc8dKlMlWnVCA3TE4Tftg__"
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
