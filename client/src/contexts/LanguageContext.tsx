import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.home": "Apresentação",
    "nav.themes": "Temas",
    "nav.keynotes": "Keynotes",
    "nav.call": "Call for Papers",
    "nav.program": "Programa",
    "nav.registration": "Inscrição",
    "nav.venue": "Local",
    "nav.contact": "Contactos",
    
    // Hero
    "hero.title": "Speculative Narratives Beyond Consensus Reality",
    "hero.subtitle": "Navigating the Senses from Wonder to Horror",
    "hero.date": "29–30 Junho e 1 Julho 2026",
    "hero.location": "Department of Languages and Cultures — University of Aveiro, Portugal",
    
    // Home
    "home.title": "Apresentação",
    "home.intro": "Este congresso internacional explora as múltiplas dimensões da ficção especulativa contemporânea, questionando os limites da realidade consensual através de narrativas que navegam entre o maravilhamento e o horror. Num momento em que as fronteiras entre o real e o imaginado se tornam cada vez mais permeáveis, propomos uma reflexão interdisciplinar sobre como as narrativas especulativas moldam a nossa compreensão do presente e a imaginação de futuros possíveis.",
    "home.p1": "Convidamos académicos, investigadores e artistas a submeter resumos para a próxima conferência académica, Speculative Narratives Beyond Consensus Reality: Navigating the Senses from Wonder to Horror. Este evento irá explorar o potencial transformador das narrativas especulativas – na literatura, no cinema, nas artes visuais e noutros media – para romper com os limites da \"realidade consensual\".\n\n\"Sem marcianos\", explica Margaret Atwood em In Other Worlds: SF and the Human Imagination, ao distinguir a sua escrita da ficção científica (Atwood, 2011, p. 6). Em vez disso, situando-se no campo da ficção especulativa, descreve-a como a narrativa de \"coisas que realmente poderiam acontecer, mas que ainda não tinham acontecido por completo\" (Atwood, 2011, p. 6). Promovida por Marek Oziewicz como uma \"supercategoria meta-genérica de conjunto difuso\", a ficção especulativa posiciona-se contra a \"realidade consensual\" enquanto ferramenta cultural e literária de exploração investigativa que rejeita abordagens miméticas (Oziewicz, 2017, p. 1).",
    "home.p2": "Apesar da sua fluidez conceptual, o termo e o campo da ficção especulativa encontram-se hoje plenamente consolidados. A própria expressão \"ficção especulativa\" surgiu pela primeira vez em \"On the Writing of Speculative Fiction\", de Robert A. Heinlein, em 1947, e, actualmente, o seu guarda-chuva conceptual abrange uma vasta diversidade de tradições literárias, das quais emergiram – e continuam a emergir – múltiplos híbridos. A ficção especulativa feminista, tal como outras modalidades do género, prospera na indeterminação da sua identidade, tirando partido das fronteiras porosas entre campos como a ficção científica, a fantasia e o horror. Na introdução de Sisters of the Revolution: A Feminist Speculative Fiction Anthology (2015), Ann Vandermeer (editora da revista de horror Weird Tales) e Jeff Vandermeer, com quem co-editou colecções reconhecidas como a série Steampunk (2008, 2010, 2012) e The New Weird (2007), promovem aquilo que descrevem como \"uma conversa em curso\", marcada por tensões e contradições (Vandermeer & Vandermeer, 2015, p. 1).",
    "home.p3": "O valor político da ficção especulativa tem-se revelado imenso, contribuindo não apenas para a literatura feminista, mas também para a literatura indígena, a ficção sobre refugiados e migrações, a cli-fi e a escrita anti-globalização. Habitando um terceiro espaço cultural transgenérico, a produção especulativa mobiliza elementos góticos, reanimando vampiros, fantasmas e zombies; cria futuros distópicos pós-apocalípticos; fragmenta contos de fadas; revisita o passado através de histórias alternativas (por exemplo, o winepunk, no qual o vinho do Porto alimenta uma monarquia no Norte de Portugal); e materializa aspirações trans e pós-humanas. A ficção especulativa corporiza, assim, uma resposta política global da criatividade humana, procurando imaginar futuros possíveis num momento de profunda transformação rumo a uma experiência humana globalizada. Ao imaginar e construir esses futuros, as respostas oscilam entre a ansiedade e a esperança (Braidotti, 2011, 2019), mas o impulso para criar estas comunidades imaginadas especulativas revela-se irreprimível.",
    
    // Themes
    "themes.title": "Eixos Temáticos",
    "themes.intro": "O congresso acolhe propostas que abordem, entre outros, os seguintes eixos temáticos:",
    "themes.horror": "Horror e Weird Fiction: estéticas do estranho, do perturbante e do inominável",
    "themes.feminist": "Feminist Futures: futurismos feministas, queer e decoloniais",
    "themes.punk": "Punk Genres: steampunk, solarpunk, winepunk e outras estéticas retrofuturistas",
    "themes.digital": "Futurismos Digitais: ciberespaço, realidade virtual, metaverso",
    "themes.superheroes": "Super-heróis e Crise: narrativas de poder, vigilância e justiça",
    "themes.alternate": "Histórias Alternativas: ucronias e reimaginações do passado",
    "themes.animals": "Estudos Animais: não-humanos, zoomorfismo, ecologias especulativas",
    "themes.clifi": "Cli-fi e Justiça Social: ficção climática e futuros ecológicos",
    "themes.mobility": "Mobilidade Global: migrações, diásporas, fronteiras especulativas",
    "themes.postcapitalism": "Economias Pós-capitalistas: utopias económicas e distopias neoliberais",
    "themes.intersectionality": "Interseccionalidade: raça, género, classe nas narrativas especulativas",
    "themes.postapocalypse": "Pós-apocalipse e Distopia: colapso, sobrevivência, reconstrução",
    "themes.ai": "IA e Ansiedade Tecnológica: inteligência artificial, singularidade, obsolescência humana",
    "themes.posthuman": "Pós-humanismo e Ética do Futuro: cyborgs, transhumanismo, novos paradigmas éticos",
    
    // Keynotes
    "keynotes.title": "Keynote Speakers",
    "keynotes.bio1": "Ana da Silveira Moura é professora na Universidade de Vigo, onde investiga ficção especulativa, estudos de género e narrativas contemporâneas. A sua pesquisa explora as intersecções entre feminismo, futurismo e ficção científica.",
    "keynotes.bio2": "AMP Rodriguez é investigador na Universidade de Vigo, especializado em literatura comparada e estudos culturais. O seu trabalho centra-se nas representações do horror e do weird na cultura contemporânea.",
    "keynotes.bio3": "Camilla Grudova é autora de ficção especulativa e weird fiction. Os seus contos exploram universos estranhos e perturbantes, combinando elementos góticos com sensibilidades contemporâneas. É autora de 'The Doll's Alphabet' e 'Children of Paradise'.",
    "keynotes.bio4": "Michael Lundblad é professor na Universidade de Oslo, onde investiga estudos animais, ecocrítica e ficção especulativa. A sua pesquisa examina as representações de não-humanos na literatura e no cinema.",
    "keynotes.bio5": "Nelson Zagalo é professor na Universidade de Aveiro, especializado em narrativas interactivas, videojogos e media digitais. O seu trabalho explora as dimensões especulativas dos media contemporâneos.",
    
    // Call for Papers
    "call.title": "Call for Papers",
    "call.intro": "Convidamos à submissão de propostas de comunicações, painéis, posters e apresentações criativas que abordem os temas do congresso.",
    "call.format": "Formatos de Apresentação",
    "call.format1": "Comunicação individual (20 minutos + discussão)",
    "call.format2": "Painel organizado (3-4 comunicações sobre tema comum)",
    "call.format3": "Poster académico",
    "call.format4": "Apresentação criativa (performance, instalação, screening)",
    "call.submission": "Submissão",
    "call.submission.text": "As propostas devem incluir um resumo de aproximadamente 300 palavras em inglês e uma bionota de 150 palavras. Enviar para:",
    "call.deadline": "Prazo de submissão: 15 Abril 2026",
    "call.notification": "Notificação de aceitação: 30 Abril 2026",
    
    // Program
    "program.title": "Programa",
    "program.tba": "Programa em construção — será publicado em breve.",
    
    // Registration
    "registration.title": "Inscrição",
    "registration.info": " ",
    
    // Venue
    "venue.title": "Local",
    "venue.text": "O congresso realiza-se no Department of Languages and Cultures da University of Aveiro, Portugal. Aveiro é uma cidade universitária situada na região centro de Portugal, conhecida pelos seus canais, arquitetura Arte Nova e proximidade à costa atlântica.",
    
    // Contact
    "contact.title": "Contactos",
    "contact.organizers": "Organização",
  },
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
    "call.deadline": "Submission deadline: 15 April 2026",
    "call.notification": "Notification of acceptance: 30 April 2026",
    
    // Program
    "program.title": "Program",
    "program.tba": "Program under construction — will be published soon.",
    
    // Registration
    "registration.title": "Registration",
    "registration.info": "Information about registration and in-person participation will be published soon.",
    
    // Venue
    "venue.title": "Venue",
    "venue.text": "The conference takes place at the Department of Languages and Cultures of the University of Aveiro, Portugal. Aveiro is a university city located in the central region of Portugal, known for its canals, Art Nouveau architecture, and proximity to the Atlantic coast.",
    
    // Contact
    "contact.title": "Contact",
    "contact.organizers": "Organizers",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

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
