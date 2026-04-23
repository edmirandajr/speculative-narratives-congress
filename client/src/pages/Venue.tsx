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
          <div className="space-y-10 text-base md:text-lg leading-relaxed text-foreground/90">

  <section>
    <h2 className="text-2xl font-bold text-primary mb-4">Venue</h2>
    <p>
      The conference will take place at the University of Aveiro campus, in Building 2 of the Department of Languages and 
Cultures.
    </p>
    <p className="mt-2">
      Registration will take place on the ground floor, with clear signage directing participants.
    </p>
    <p className="mt-2">
      Department of Languages and Cultures, 3810-164 Aveiro, Portugal
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-primary mb-4">Travelling to Aveiro</h2>
    <p>
      The nearest airport is Porto (OPO). Lisbon (LIS) is also a viable option.
    </p>
  </section>

  <section>
    <h3 className="text-xl font-semibold mb-2">From Porto</h3>
    <p>
      Take the metro to Campanhã Station, then a train to Aveiro.
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>Urban trains: ~1 hour</li>
      <li>Alfa / Intercidades: 30–40 minutes (€12–€14)</li>
    </ul>
  </section>

  <section>
    <h3 className="text-xl font-semibold mb-2">From Lisbon</h3>
    <p>
      Take the metro to Oriente Station, then a train to Aveiro (2h20–2h40).
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-primary mb-4">Accommodation</h2>
    <ul className="list-disc ml-6">
      <li>Meliá Ria Hotel & Spa</li>
      <li>Hotel Moliceiro</li>
      <li>Hotel das Salinas</li>
      <li>Mercure Aveiro / Hotel As Américas</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-primary mb-4">Getting Around</h2>
    <p>
      Aveiro is small and walkable. Free bicycles are available and the city is generally safe.
    </p>
  </section>

</div>
        </div>
      </div>
    </div>
  );
}
