/**
 * Design: Surrealismo Onírico Académico
 * Programa do congresso — estrutura por dias, keynotes e sessões paralelas
 */

import { useLanguage } from "@/contexts/LanguageContext";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type PaperEntry = {
  author: string;
  title: string;
};

type Panel = {
  id: string;
  title: string;
  chair: string;
  room: string;
  papers: PaperEntry[];
};

type Keynote = {
  time: string;
  speaker: string;
  affiliation: string;
  title: string;
  chair: string;
  room: string;
};

type Break = {
  type: "break" | "lunch" | "dinner" | "wine" | "closing" | "opening";
  time: string;
  label: string;
};

type ParallelBlock = {
  type: "parallel";
  time: string;
  panels: Panel[];
};

type KeynoteBlock = {
  type: "keynote";
  time: string;
  keynote: Keynote;
};

type BreakBlock = {
  type: "break";
  data: Break;
};

type DayBlock = KeynoteBlock | ParallelBlock | BreakBlock;

type Day = {
  date: string;
  weekday: string;
  blocks: DayBlock[];
};

// ─── Dados do programa ────────────────────────────────────────────────────────

const PROGRAM: Day[] = [
  {
    date: "29th June",
    weekday: "Monday",
    blocks: [
      {
        type: "break",
        data: { type: "opening", time: "9:00 a.m.", label: "Registration" },
      },
      {
        type: "break",
        data: {
          type: "opening",
          time: "9:30 a.m.",
          label:
            "Opening remarks — Room 2.1.10\nProf. Maria Sofia Pimentel Biscaia & Prof. António Oliveira (organisers)\nProf. Carlos Santos, Pró-Reitor da Universidade de Aveiro\nProf. Ana Margarida Ramos, Director, Department of Languages and Cultures\nProf. Alexandre Almeida, Vice-Director, Centre of Languages, Literatures and Cultures",
        },
      },
      {
        type: "keynote",
        time: "10:00 a.m.",
        keynote: {
          time: "10:00 a.m.",
          speaker: "Michael Lundblad",
          affiliation: "University of Oslo, Norway",
          title:
            "Disanimality Down on the Factory Farm: When Disability, Illness, and Animality Meet in Don LePan's Animals",
          chair: "Maria Sofia Pimentel Biscaia",
          room: "Room 2.1.10",
        },
      },
      {
        type: "break",
        data: { type: "break", time: "11:00 a.m.", label: "Coffee break" },
      },
      {
        type: "parallel",
        time: "11:30 a.m. – 1:30 p.m.",
        panels: [
          {
            id: "P1",
            title: "Ecological Futures and the Anthropocene",
            chair: "Reinaldo Silva",
            room: "Room 2.4.14",
            papers: [
              {
                author: "Emrah Atasoy",
                title:
                  "Walls, the Others, and Possible Futures in John Lanchester's The Wall",
              },
              {
                author: "Mustafa Orhan Göztepe",
                title:
                  "The Beast That Never Arrives: Posthumanism, the Anthropocene, and Anticipated Catastrophe in Bonello's La Bête (2023)",
              },
              {
                author: "Nan Song",
                title:
                  "Fast Approaching Peak Oil? Literary Engagements with Future Waste and Energy Systems",
              },
              {
                author: "Tsun Chiu Lui",
                title:
                  "Leviathan and the Air: On the Atmospheric Politics of Liu Cixin's Ball Lightning",
              },
            ],
          },
          {
            id: "P2",
            title: "Robots, Cyborgs, and Constructed Selves",
            chair: "Ana Teresa Santos",
            room: "Room 2.4.15",
            papers: [
              {
                author: "David Callahan",
                title:
                  "The \"Mediocre Politics of Most Video Games\": Restaging Social Organization in the Far Future of Horizon: Forbidden West",
              },
              {
                author: "Georgie Kett",
                title:
                  "From BuffyBot to AnnieBot: The Evolving \"Gothic Artificial Other\" as a Reflection of Surging Societal Fears of Constructed Consciousness and Forced Submission",
              },
              {
                author: "Zeynep Koçer Göztepe",
                title:
                  "Assembling the Posthuman Feminine: Speculative Aesthetics and the Grotesque Body in Poor Things (Lanthimos, 2023)",
              },
              {
                author: "Patricia Muñoz Andrés",
                title:
                  "Between Magic and Meaning: Narrative Identification and Hybrid Identity in Speculative Children's Literature",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: { type: "lunch", time: "1:30 p.m.", label: "Lunch" },
      },
      {
        type: "parallel",
        time: "3:00 p.m. – 5:00 p.m.",
        panels: [
          {
            id: "P3",
            title: "AI, Algorithms, and Posthuman Anxiety",
            chair: "Reinaldo Silva",
            room: "Room 2.4.14",
            papers: [
              {
                author: "Monika Aswal",
                title:
                  "Yesterday's Tomorrow, Today's Fear: Retrofuturism and Technological Anxiety in Neuromancer",
              },
              {
                author: "Sara Machado",
                title:
                  "Narrating the Human Park: Surveillance, Dataism, and Technological Domestication in Westworld",
              },
              {
                author: "Amitié Lee",
                title:
                  "Monstrous Care: The Scales of 'Uncaring': AI Beyond Consensus Reality in Contemporary Speculative Film",
              },
              {
                author: "Tiago Ramos",
                title:
                  "The Ghost in the Early Machine: Speculative Ancestry and Technological Anxiety from Méliès to AI",
              },
            ],
          },
          {
            id: "P4",
            title: "Monsters, Disability and the Politics of Otherness",
            chair: "Maria Sofia Pimentel Biscaia",
            room: "Room 2.4.15",
            papers: [
              {
                author: "Carlos Molina Valero",
                title:
                  "\"The Thirteenth Virtue\": Holy Expediency and the Ethics of Monstrous Violence in Joe Abercrombie's The Devils",
              },
              {
                author: "Reed Richardson",
                title:
                  "Simplicity Demands Too Great a Sacrifice: Revisiting the Ideological Discourse of The Queen of the Damned for a Transfeminist Present",
              },
              {
                author: "Paola Bran",
                title:
                  "Robot Romance: Exploring Neuroqueer Relationships through the Robot Imaginary",
              },
              {
                author: "Hélia Saraiva",
                title:
                  "Disability, Salutogenesis, and (Post)human Futures: A Comparative Study of Philip K. Dick's Do Androids Dream of Electric Sheep? and Andromeda Romano-Lax's Plum Rains",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: {
          type: "wine",
          time: "5:00 p.m.",
          label: "Port wine and nibbles",
        },
      },
    ],
  },
  {
    date: "30th June",
    weekday: "Tuesday",
    blocks: [
      {
        type: "parallel",
        time: "9:00 a.m. – 11:00 a.m.",
        panels: [
          {
            id: "P5",
            title: "Feminist Futures from Margaret Atwood's Universe",
            chair: "Aline Ferreira",
            room: "Room 2.1.11",
            papers: [
              {
                author: "Carina Cerqueira",
                title:
                  "A Body That Remembers: Wonder, Horror, and Resistance in The Handmaid's Tale",
              },
              {
                author: "Orsolya Deji-Nagylaki",
                title:
                  "Radical Futures and Dys/Us/Utopian Thought in Margaret Atwood's Speculative Narratives",
              },
              {
                author: "Alba Quintairos-Soliño",
                title:
                  "Bordering in Margaret Atwood's The Handmaid's Tale: An Approach to the Text-Image Relationship through Speculative Boundaries",
              },
              {
                author: "Omar El Otmani",
                title:
                  "Wiring Fact and Fiction: Myth, Speculative Epistemology, and Posthuman Ethics in Margaret Atwood's MaddAddam Trilogy",
              },
            ],
          },
          {
            id: "P6",
            title: "Horror, the Weird, and Ontological Uncertainty",
            chair: "Margaret Gomes",
            room: "Room 2.2.14",
            papers: [
              {
                author: "Silvia Ammary",
                title:
                  "Sensory Collapse and Ontological Fear: Poe as Proto-Speculative Fiction",
              },
              {
                author: "Lorenza Papalia",
                title:
                  "Beyond the Human Sensorium: Extended Consciousness and the Weird in Algernon Blackwood",
              },
              {
                author: "Z. I. Mahmud",
                title:
                  "Opal Light, Phosphor Moor: Sensorial Thresholds from Colonial Wonder to Gothic Terror in The Moonstone and The Hound of the Baskervilles",
              },
              {
                author: "Kajetan Poniatyszyn",
                title:
                  "Fictional Places, Real Problems: Post-Industrial Ruins in Contemporary Polish and American Weird Fiction (Based on Short Stories by Jakub Bielawski and Thomas Ligotti)",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: { type: "break", time: "11:00 a.m.", label: "Coffee break" },
      },
      {
        type: "keynote",
        time: "11:30 a.m.",
        keynote: {
          time: "11:30 a.m.",
          speaker: "Ana da Silveira Moura",
          affiliation: "University of Porto, Portugal",
          title:
            "In Vino Veritas – The Winepunk Universe as Collaborative Creative Backbone for Sustaining Shared Cultural Heritage",
          chair: "António Oliveira",
          room: "Room 2.1.10",
        },
      },
      {
        type: "break",
        data: { type: "lunch", time: "12:30 p.m.", label: "Lunch" },
      },
      {
        type: "parallel",
        time: "2:30 p.m. – 4:30 p.m.",
        panels: [
          {
            id: "P7",
            title: "Surveillance, State Power, and Dystopian Governance",
            chair: "Margaret Gomes",
            room: "Room 2.1.11",
            papers: [
              {
                author: "Hong Chen",
                title:
                  "When Fiction Becomes Strategic Allegory: China, Cyber-Anxiety, and TechnoOrientalist Horror in Australia's Secret City Trilogy",
              },
              {
                author: "Michelle Meyers",
                title:
                  "Challenging Consensus Reality or Reaffirming the Status Quo? The Role of Carceral Futures in the Contemporary Imagination",
              },
              {
                author: "João Miranda",
                title:
                  "The Politics of Speculative Media Ecologies: Future-Oriented Science Fiction and the Political Economy of Communication",
              },
              {
                author: "Mohamed Lazrak",
                title:
                  "Dystopia and the Politics of Control in the MENA Region: Surveillance, Narrative Power, and the Reconfiguration of Authority",
              },
            ],
          },
          {
            id: "P8",
            title: "Speculative Media and Lynchian Visions",
            chair: "Anabela Simões",
            room: "Room 2.2.14",
            papers: [
              {
                author: "Mário Alves Ribeiro",
                title:
                  "Lynchian Hills: David Lynch's disquieting Horror and Influences in Silent Hill 2 (2001) and P.T: Silent Hills (2014)",
              },
              {
                author: "Luís Carlos S. Branco",
                title:
                  "David Lynch's Unorthodox Experiencing of Reality Shaped his Filmmaking",
              },
              {
                author: "Inês Taveira de Almeida",
                title:
                  "Configuring Horror as Speculative Narrative: Fandom, Lore Construction and Transmedia World-Building in Poppy Playtime",
              },
              {
                author: "Sara Pascoal & Rosa Mesquita",
                title:
                  "From Borges' Labyrinth to Benjamin's Ruin: Speculative Space in Tarkovsky's Stalker",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: { type: "break", time: "4:30 p.m.", label: "Coffee break" },
      },
      {
        type: "keynote",
        time: "5:00 p.m.",
        keynote: {
          time: "5:00 p.m.",
          speaker: "Nelson Zagalo",
          affiliation: "University of Aveiro, Portugal",
          title: "Speculative AI Worlds: From 'What If' to 'As If'",
          chair: "David Callahan",
          room: "Room 2.1.10",
        },
      },
      {
        type: "break",
        data: { type: "dinner", time: "8:00 p.m.", label: "Conference dinner" },
      },
    ],
  },
  {
    date: "1st July",
    weekday: "Wednesday",
    blocks: [
      {
        type: "parallel",
        time: "9:00 a.m. – 11:00 a.m.",
        panels: [
          {
            id: "P9",
            title: "More-than-Human Ecologies",
            chair: "Andreia Sarabando",
            room: "Room 2.4.14",
            papers: [
              {
                author: "Ana Bessa Carvalho",
                title:
                  "\"What if Birds Aren't Singing, They're Screaming\": When Animals Write Themselves",
              },
              {
                author: "Alessandra Martín González",
                title:
                  "Nature Rewriting the Body: Trans-Corporeality and Posthuman Ecosystems in Nnedi Okorafor's Lagoon",
              },
              {
                author: "Marisa da Silva Martins",
                title:
                  "Hunger for the Flesh: Fungi and Entomological Ecology in T. Kingfisher's Ecohorror Narratives",
              },
              {
                author: "Marta Saludes",
                title: "TBC",
              },
            ],
          },
          {
            id: "P10",
            title: "Decolonial and Indigenous Speculative Worlds",
            chair: "Sara Carvalho",
            room: "Room 2.4.15",
            papers: [
              {
                author: "Martina Muci",
                title:
                  "Reworlding Consensus Reality through Indigenous Speculative Fiction: Empire of Wild as a Decolonial Practice of Epistemic Sovereignty",
              },
              {
                author: "Carmen Pereyra",
                title:
                  "The Horror of the Ongoing: Indigenous Extinction, Colonial Time, and the Limits of Narrative Frame in Joca Reiners Terrón's A morte e o meteoro",
              },
              {
                author: "Aida Rosende Pérez",
                title:
                  "Breathing Underwater: Speculative Ontologies and the Black Aquatic in Rivers Solomon's The Deep",
              },
              {
                author: "Meheli Sen",
                title:
                  "Pop-Tantra as Political Critique: Horror Media in Contemporary India",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: { type: "break", time: "11:00 a.m.", label: "Coffee break" },
      },
      {
        type: "keynote",
        time: "11:30 a.m.",
        keynote: {
          time: "11:30 a.m.",
          speaker: "Camilla Grudova",
          affiliation: "Author",
          title:
            "The Last Novel in the World: M. John Harrison's The End of Everything and the Death of Literature",
          chair: "Andreia Sarabando",
          room: "Room 2.1.10",
        },
      },
      {
        type: "break",
        data: { type: "lunch", time: "12:30 p.m.", label: "Lunch" },
      },
      {
        type: "parallel",
        time: "2:00 p.m. – 4:00 p.m.",
        panels: [
          {
            id: "P11",
            title: "Other Communities, Care, and Relational Futures",
            chair: "Andreia Sarabando",
            room: "Room 2.4.14",
            papers: [
              {
                author: "Anita Purcell Sjölund & Zita Farkas",
                title:
                  "Becoming-With at the Edge of the Human: Sympoiesis, Posthuman Ethics, and Transhuman Identity in Speculative Fiction",
              },
              {
                author: "Zuzanna Zarebska",
                title:
                  "The Narratives of Care and Ageing in Charlotte Wood's The Weekend and Stone Yard Devotional: Of Women, Mice and Dogs",
              },
              {
                author: "Ana Tejero Marín",
                title:
                  "A Home Away from Home: The Afterlives of the Plantationocene in Rivers Solomon's An Unkindness of Ghosts",
              },
              {
                author: "Stefania Schnakovszky",
                title:
                  "Negotiating Jewish Identity Between Memory and Imagination: Post-Holocaust Narratives in Anglophone Literature",
              },
            ],
          },
          {
            id: "P12",
            title: "Speculative Motherhoods: New Narratives of Care and Power",
            chair: "Sara Carvalho",
            room: "Room 2.4.15",
            papers: [
              {
                author: "Aline Ferreira",
                title:
                  "Transformative Metamorphoses: Maternal Body Horror and Empowerment in Recent Fiction by Women",
              },
              {
                author: "María Rosa Valle Sánchez",
                title:
                  "Motherhood Beyond Consensus Reality and Rage's Transformative Power in Nightbitch (2021)",
              },
              {
                author: "Eyal Soffer",
                title:
                  "Machiavellian Matriarchs: Reimagining Virtù and Cooperative Power in Feminist Speculative Fiction",
              },
              {
                author: "Sohini Chakraborty",
                title:
                  "The Rasa of Ruin: Cyborg, Colony, and Control in Ray's Professor Shonku and Akbar's Leila",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: { type: "break", time: "4:00 p.m.", label: "Coffee break" },
      },
      {
        type: "parallel",
        time: "4:30 p.m. – 6:30 p.m.",
        panels: [
          {
            id: "P13",
            title: "Becoming Otherwise: Queer, Posthuman, and Geological Bodies",
            chair: "David Callahan",
            room: "Room 2.4.14",
            papers: [
              {
                author: "Melinda Dabis",
                title:
                  "Spectral Geographies and Geopolitical Agendas in the Arctic",
              },
              {
                author: "Sonji Shah",
                title: "Speculative Geologies: Gendered Becoming in 'Rock Jenny'",
              },
              {
                author: "Devi Lir Dougherty",
                title:
                  "Ecstasy on the Edge of Extraction: I.K.U. and the Pleasurable Spectatorial Override",
              },
              {
                author: "Andi Febriana Tamrin",
                title:
                  "Beyond the Alpha/Omega Binary: Subverting Gender and Power Dynamics in Speculative Fanfiction",
              },
            ],
          },
          {
            id: "P14",
            title: "From Authority to Agency: Contesting Power in Speculative Worlds",
            chair: "Sara Pascoal",
            room: "Room 2.4.15",
            papers: [
              {
                author: "Richard Marklew",
                title:
                  "A Counter-Conspiracy of Corpses: Reading Daniel Borzutzky and Rachael Allen Under (Late) Fascism",
              },
              {
                author: "Konstantinos Viennas",
                title:
                  "Through the eyes of Marco Polo: Space, Power and Law in Calvino's Invisible Cities",
              },
              {
                author: "Olufunmilayo Adejumobi",
                title:
                  "Globalisation and Mobility in Speculative Fiction: Imagined Borders, Displacement, and Transnational Identity",
              },
              {
                author: "Rodrigo Ramos-Stokes",
                title:
                  "Fëanor's Egotism and Alienation in J. R. R. Tolkien's The Silmarillion",
              },
            ],
          },
        ],
      },
      {
        type: "break",
        data: {
          type: "closing",
          time: "6:30 p.m.",
          label: "Closing remarks — Room 2.1.10",
        },
      },
    ],
  },
];

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function BreakRow({ data }: { data: Break }) {
  const icons: Record<string, string> = {
    break: "☕",
    lunch: "🍽",
    dinner: "🍷",
    wine: "🍷",
    opening: "🎓",
    closing: "🎓",
  };

  const isStructural = data.type === "opening" || data.type === "closing";
  const isSpecial = data.type === "wine" || data.type === "dinner";

  if (isStructural) {
    return (
      <div className="my-6 p-6 rounded-2xl border border-primary/30 bg-primary/5">
        <div className="flex items-start gap-4">
          <span className="text-xl mt-0.5">{icons[data.type]}</span>
          <div>
            <span className="text-xs font-semibold text-primary/80 uppercase tracking-widest block mb-1">
              {data.time}
            </span>
            {data.label.split("\n").map((line, i) => (
              <p
                key={i}
                className={`leading-relaxed ${i === 0 ? "font-semibold text-foreground" : "text-sm text-muted-foreground"}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`my-4 flex items-center gap-4 px-6 py-3 rounded-full border ${
        isSpecial
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-border/30 bg-muted/20 text-muted-foreground"
      }`}
    >
      <span>{icons[data.type]}</span>
      <span className="text-xs font-semibold uppercase tracking-widest">
        {data.time}
      </span>
      <span className="text-sm">{data.label}</span>
    </div>
  );
}

function KeynoteRow({ time, keynote }: { time: string; keynote: Keynote }) {
  return (
    <div className="my-6 p-6 rounded-2xl border border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            {time}
          </span>
          <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full border border-border/40 bg-background/30">
            Keynote
          </span>
          <span className="text-xs text-muted-foreground">{keynote.room}</span>
        </div>
        <h4 className="text-xl font-display font-bold text-foreground mb-1">
          {keynote.speaker}
        </h4>
        <p className="text-sm text-primary/80 mb-3">{keynote.affiliation}</p>
        <p className="text-base text-foreground/90 italic leading-relaxed mb-3">
          "{keynote.title}"
        </p>
        <p className="text-xs text-muted-foreground">
          Chair: {keynote.chair}
        </p>
      </div>
    </div>
  );
}

function PanelCard({ panel }: { panel: Panel }) {
  return (
    <div className="backdrop-blur-sm bg-card/40 rounded-2xl border border-border/30 hover:border-primary/30 transition-colors duration-300 overflow-hidden">
      <div className="px-5 py-4 border-b border-border/20 bg-secondary/10">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-xs font-mono font-bold text-primary/60">
            Panel {panel.id.replace("P", "")}
          </span>
          <span className="text-xs text-muted-foreground shrink-0">
            {panel.room}
          </span>
        </div>
        <h4 className="font-display font-bold text-foreground text-sm leading-snug">
          {panel.title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1">
          Chair: {panel.chair}
        </p>
      </div>
      <ul className="divide-y divide-border/10">
        {panel.papers.map((paper, i) => (
          <li key={i} className="px-5 py-3">
            <p className="text-xs font-semibold text-primary/80 mb-0.5">
              {paper.author}
            </p>
            <p className="text-xs text-foreground/75 leading-relaxed">
              {paper.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ParallelBlock({
  time,
  panels,
}: {
  time: string;
  panels: Panel[];
}) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          {time}
        </span>
        <div className="flex-1 h-px bg-border/30" />
        <span className="text-xs text-muted-foreground">
          Parallel sessions
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {panels.map((panel) => (
          <PanelCard key={panel.id} panel={panel} />
        ))}
      </div>
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

const DAY_COLORS = [
  "from-primary/20 to-secondary/10",
  "from-secondary/20 to-accent/10",
  "from-accent/20 to-primary/10",
];

export default function Program() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 text-center">
          {t("program.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-16 text-sm tracking-wide">
          University of Aveiro · 29–30 June &amp; 1 July 2026
        </p>

        <div className="space-y-16">
          {PROGRAM.map((day, dayIndex) => (
            <section key={day.date}>
              <div
                className={`rounded-3xl p-6 mb-8 bg-gradient-to-r ${DAY_COLORS[dayIndex]} border border-border/20`}
              >
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest mb-1">
                  {day.weekday}
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {day.date}
                </h2>
              </div>

              <div>
                {day.blocks.map((block, blockIndex) => {
                  if (block.type === "break") {
                    return <BreakRow key={blockIndex} data={block.data} />;
                  }
                  if (block.type === "keynote") {
                    return (
                      <KeynoteRow
                        key={blockIndex}
                        time={block.time}
                        keynote={block.keynote}
                      />
                    );
                  }
                  if (block.type === "parallel") {
                    return (
                      <ParallelBlock
                        key={blockIndex}
                        time={block.time}
                        panels={block.panels}
                      />
                    );
                  }
                  return null;
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
