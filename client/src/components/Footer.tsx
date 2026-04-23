/**
 * Design: Surrealismo Onírico Académico
 * Footer com formas orgânicas e gradientes
 */

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/30 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>

      {/* Floating Shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-display font-bold text-foreground">
            Speculative Narratives Beyond Consensus Reality
          </h3>
          <p className="text-sm text-muted-foreground">
            29–30 June &amp; 1 July 2026
          </p>
          <p className="text-sm text-muted-foreground">
            Department of Languages and Cultures — University of Aveiro, Portugal
          </p>

          {/* Institutional Funding Message */}
          <div className="mt-8 pt-8 border-t border-border/20 max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed text-center">
              This conference is funded by national funds through the Foundation for Science and
              Technology (FCT), I.P., under the project UID/04188/2025, with the DOI identifier:{" "}
              <a
                href="https://doi.org/10.54499/UID/04188/2025"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                https://doi.org/10.54499/UID/04188/2025
              </a>
            </p>
          </div>

          {/* Institutional Logos */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap8">
            <img
              src="/logos/logo-cllc.png"
              alt="CLLC – Centro de Línguas, Literaturas e Culturas"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/logos/logo-fct.png"
              alt="FCT – Fundação para a Ciência e a Tecnologia"
              className="h-20 w-auto object-contain"
            />
            <img
              src="/logos/logo-30anos.png"
              alt="CLLC 30 Anos"
              className="h-20 w-auto object-contain"
            />
          </div>

          <div className="pt-6 text-xs text-muted-foreground/60">
            © 2026 University of Aveiro
          </div>
        </div>
      </div>
    </footer>
  );
}
