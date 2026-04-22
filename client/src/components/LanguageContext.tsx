import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "About",
    "nav.themes": "Themes",
    "nav.keynotes": "Keynotes",
    "nav.call": "Call for Papers",
    "nav.program": "Program",
    "nav.registration": "Registration",
    "nav.venue": "Venue",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Speculative Narratives Beyond Consensus Reality",
    "hero.subtitle": "Navigating the Senses from Wonder to Horror",
    "hero.date": "29–30 June and 1 July 2026",
    "hero.location": "Department of Languages and Cultures — University of Aveiro, Portugal",

    // Home
    "home.title": "About",
    "home.intro": "This international conference explores the multiple dimensions of contemporary speculative fiction, questioning the limits of consensus reality through narratives that navigate between wonder and horror. At a time when the boundaries between the real and the imagined are becoming increasingly permeable, we propose an interdisciplinary reflection on how speculative narratives shape our understanding of the present and the imagination of possible futures.",
    "home.p1": "We invite scholars, researchers, and artists to submit abstracts for the upcoming academic conference, Speculative Narratives Beyond Consensus Reality: Navigating the Senses from Wonder to Horror. This event will explore the transformative potential of speculative narratives—across literature, film, visual arts, and other media—in breaking free from the boundaries of \"consensus reality.\"\n\n\"No Martians,\" explains Margaret Atwood in In Other Worlds: SF and the Human Imagination, on what separates her writing from science fiction (Atwood, 2011, p. 6). Instead, locating herself in the sphere of speculative fiction, she describes it as the narrative of \"things that really could happen but just hadn't completely happened\" (Atwood, 2011, p. 6). Promoted by Marek Oziewicz as a \"meta-generic fuzzy set supercategory,\" speculative fiction sets itself against \"consensus reality\" as a cultural and literary tool of investigative exploration that rejects mimetic approaches (Oziewicz, 2017, p. 1).",
    "home.p2": "Despite their conceptual slipperiness, the term and field of speculative fiction are now mature. The term \"speculative fiction\" itself made its first appearance in Robert A. Heinlein's \"On the Writing of Speculative Fiction\" in 1947, and today the umbrella of speculative fiction covers a wide variety of literary traditions from which various hybrids have emerged and continue to do so. Feminist speculative fiction, like other types of spec-fi, thrives in the undecidability of its identity, taking advantage of the porous boundaries between fields such as science fiction, fantasy, and horror. In the introduction to Sisters of the Revolution: A Feminist Speculative Fiction Anthology (2015), Ann Vandermeer (editor of the horror magazine Weird Tales) and Jeff Vandermeer, with whom she has co-edited recognised collections such as the Steampunk series (2008, 2010, and 2012) and The New Weird (2007), promote what they describe as \"an ongoing conversation\" that is fraught with contradictions (Vandermeer & Vandermeer, 2015, p. 1).",
    "home.p3": "Speculative fiction's political value has proven to be immense, and it has been making contributions not only to feminist literature but also to indigenous literature, refugee and migration fiction, cli-fi, and anti-globalisation writing. Dwelling in a cultural cross-genre third space, speculative work uses gothic elements, re-animating vampires, ghosts, and zombies; it creates dystopian post-apocalyptic futures, fractures fairy tales, revises the past through alternate/alternative histories (e.g., winepunk on Port wine powering a monarchy in the North of Portugal), and materialises trans and posthuman aspirations. Speculative fiction embodies a worldwide political response of human creativity, attempting to imagine potential futures during a significant shift towards a globalised human experience. In imagining and making these futures, the responses navigate between anxiety and hope (Braidotti, 2011, 2019), but the urge to create these speculative imagined communities cannot be repressed.",

    // Themes
    "themes.title": "Thematic Axes",
    "themes.intro": "The conference welcomes proposals addressing, among others, the following thematic axes:",
    "themes.horror": "Horror and Weird Fiction: aesthetics of the strange, the uncanny, and the unnameable",
    "themes.feminist": "Feminist Futures: feminist, queer, and decolonial futurisms",
    "themes.punk": "Punk Genres: steampunk, solarpunk, winepunk, and other retrofuturist aesthetics",
    "themes.digital": "Digital Futurisms: cyberspace, virtual reality, metaverse",
    "themes.superheroes": "Superheroes and Crisis: narratives of power, surveillance, and justice",
    "themes.alternate": "Alternate Histories: uchronias and reimaginations of the past",
    "themes.animals": "Animal Studies: non-humans, zoomorphism, speculative ecologies",
    "themes.clifi": "Cli-fi and Social Justice: climate fiction and ecological futures",
    "themes.mobility": "Global Mobility: migrations, diasporas, speculative borders",
    "themes.postcapitalism": "Post-capitalist Economies: economic utopias and neoliberal dystopias",
    "themes.intersectionality": "Intersectionality: race, gender, class in speculative narratives",
    "themes.postapocalypse": "Post-apocalypse and Dystopia: collapse, survival, reconstruction",
    "themes.ai": "AI and Technological Anxiety: artificial intelligence, singularity, human obsolescence",
    "themes.posthuman": "Posthumanism and Ethics of the Future: cyborgs, transhumanism, new ethical paradigms",

    // Keynotes
    "keynotes.title": "Keynote Speakers",
    "keynotes.bio1": "Ana da Silveira Moura is a professor at the University of Vigo, where she researches speculative fiction, gender studies, and contemporary narratives. Her research explores the intersections between feminism, futurism, and science fiction.",
    "keynotes.bio2": "AMP Rodriguez is a researcher at the University of Vigo, specialized in comparative literature and cultural studies. His work focuses on representations of horror and the weird in contemporary culture.",
    "keynotes.bio3": "Camilla Grudova is an author of speculative and weird fiction. Her short stories explore strange and unsettling universes, combining Gothic elements with contemporary sensibilities. She is the author of 'The Doll's Alphabet' and 'Children of Paradise'.",
    "keynotes.bio4": "Michael Lundblad is a professor at the University of Oslo, where he researches animal studies, ecocriticism, and speculative fiction. His research examines representations of non-humans in literature and cinema.",
    "keynotes.bio5": "Nelson Zagalo is a professor at the University of Aveiro, specialized in interactive narratives, video games, and digital media. His work explores the speculative dimensions of contemporary media.",

    // Call for Papers
    "call.title": "Call for Papers",
    "call.intro": "We invite the submission of proposals for papers, panels, posters, and creative presentations addressing the conference themes.",
    "call.format": "Presentation Formats",
    "call.format1": "Individual paper (20 minutes + discussion)",
    "call.format2": "Organized panel (3-4 papers on a common theme)",
    "call.format3": "Academic poster",
    "call.format4": "Creative presentation (performance, installation, screening)",
    "call.submission": "Submission",
    "call.submission.text": "Proposals should include an abstract of approximately 300 words in English and a bio-note of 150 words. Submit to:",
    "call.deadline": "Extended submission deadline: May 10, 2026",
    "call.notification": "Notification of acceptance: 30 April 2026",

    // Program
    "program.title": "Program",
    "program.tba": "Program under construction — will be published soon.",

    // Registration
    "registration.title": "Registration",
    "registration.info": " ",

    // Venue
    "venue.title": "Venue",
    "venue.text": "The conference takes place at the Department of Languages and Cultures of the University of Aveiro, Portugal. Aveiro is a university city located in the central region of Portugal, known for its canals, Art Nouveau architecture, and proximity to the Atlantic coast.",

    // Contact
    "contact.title": "Contact",
    "contact.organizers": "Organizers",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
