/**
 * Design: Surrealismo Onírico Académico
 * Programa do congresso — estrutura por dias, keynotes e sessões paralelas
 * Book of Abstracts integrado com accordion expansível por comunicação
 */

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Download } from "lucide-react";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type PaperEntry = {
  author: string;
  title: string;
  abstract?: string;
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
  abstract: string;
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
          abstract:
            "Comparisons between factory-farm animals, people with disabilities, and people killed in the Holocaust are a major site for what Lundblad has identified as disanimality, a feeling of discomfort that comes from overly simplistic comparisons between disabled people and animals. The suggestion that the suffering of animals in factory farms is comparable to the suffering of dehumanized or animalized people with disabilities is one that many disability advocates find abhorrent. It has also been used to animate dystopian texts that reverse the analogy, with disabled people raised and slaughtered as food in nightmarish near-future worlds, such as Don LePan's speculative fiction in his novel Animals. This talk takes LePan's novel as a primary site for exploring disanimality, questioning the implicit premise that all forms of meat-eating are necessarily ableist. Instead, the talk takes a posthumanist approach, focusing on biopolitical hierarchies in which certain forms of life in certain situated contexts become disposable, without necessarily needing to equate those various forms of life. The talk also provides an overview of Lundblad's new book, Disanimality: When Disability, Illness, and Animality Meet (Oxford University Press, 2026).",
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
                abstract:
                  "This presentation explores the politics of control in John Lanchester's The Wall (2019) through the novel's engagement with the Others, who are compelled to choose between being euthanised, becoming Help, or being put back to sea, as well as its illustration of ecological crisis and mobility. It focuses on how intersecting forces shape dynamics of inclusion and exclusion and contribute to the emergence of potentially totalitarian presents and futures. Drawing on the experiences of the protagonist, Joseph Kavanagh, the analysis addresses structures of state control embodied in the Wall, officially known as the National Coastal Defence Structure, and environmentally driven displacement, while highlighting moments of partial resistance and the search for alternative horizons amid uncertainty, ambivalence, and loss.",
              },
              {
                author: "Mustafa Orhan Göztepe",
                title:
                  "The Beast That Never Arrives: Posthumanism, the Anthropocene, and Anticipated Catastrophe in Bonello's La Bête (2023)",
                abstract:
                  "This paper examines Bertrand Bonello's 2023 film The Beast (La Bête), a loose adaptation of Henry James's 1903 novella The Beast in the Jungle. The film constructs its narrative across three distinct temporal stages: 1910, 2014, and 2044. This paper argues that The Beast presents anticipated catastrophe not as a discrete event occurring within linear time, but as a permanent affective structure — the defining condition of the Anthropocene.",
              },
              {
                author: "Nan Song",
                title:
                  "Fast Approaching Peak Oil? Literary Engagements with Future Waste and Energy Systems",
                abstract:
                  "This paper situates future energy and waste systems in Margaret Atwood's The MaddAddam Trilogy. It argues that examining waste reuse and energy use in post-oil scenarios can be a productive method to represent, respond to, and challenge contemporary energy frameworks of sustainability and local resilience building. Focusing on the post-apocalyptic multi-species community, this paper argues that envisioning a just energy transition involves learning from more-than-human waste-to-energy practices.",
              },
              {
                author: "Tsun Chiu Lui",
                title:
                  "Leviathan and the Air: On the Atmospheric Politics of Liu Cixin's Ball Lightning",
                abstract:
                  "Drawing on Peter Sloterdijk's concept of 'atmoterrorism' and recent scholarly discourse on 'atmospheric politics', this study offers a critical analysis of Liu Cixin's 2004 novel Ball Lightning. The author argues that the novel reconstructs the atmospheric environment of contemporary China into a volumetric space saturated with technological objects, natural elements, and physical forces, which contests the two-dimensional, planar territorial imagination upon which modern nation-states are based.",
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
                abstract:
                  "Science Fiction commonly operates through thought experiments projected into the future, and video games certainly participate in this parlaying of the present's concerns via the imaginative visual and long-form narrative resources of the medium. The objectives of this paper are to determine how the most recent of the two games assesses or valorizes the differing forms of political organization that Aloy encounters, interacts with and comments on, and to consider whether there is a form of non-mediocre political organization that Aloy herself (and through her, the game) enacts or supports.",
              },
              {
                author: "Georgie Kett",
                title:
                  "From BuffyBot to AnnieBot: The Evolving \"Gothic Artificial Other\" as a Reflection of Surging Societal Fears of Constructed Consciousness and Forced Submission",
                abstract:
                  "This study aims to address the evolution of artificial intelligence as a recurring plot device in speculative contemporary media to symbolize imbalances of power within romantic relationships. By examining BuffyBot in Joss Whedon's Buffy the Vampire Slayer (2000) and Annie in Sierra Greer's AnnieBot (2025), this paper aims to analyse the evolution of the 'robot girlfriend' trope to critique how a societal retreat into 'toxic nostalgia' can be a damaging experience for both the insecure constructor and the artificially constructed.",
              },
              {
                author: "Zeynep Koçer Göztepe",
                title:
                  "Assembling the Posthuman Feminine: Speculative Aesthetics and the Grotesque Body in Poor Things (Lanthimos, 2023)",
                abstract:
                  "Poor Things (Yorgos Lanthimos, 2023) is a speculative narrative that locates itself within what Oziewicz calls the 'meta-generic fuzzy set supercategory' of speculative fiction by refusing mimetic reality at every level of its construction. Central to this argument is the figure of Bella Baxter (Emma Stone), whose reanimated, assembled, and ceaselessly evolving body is the film's primary site for negotiating the ethics and aesthetics of posthuman femininity.",
              },
              {
                author: "Patricia Muñoz Andrés",
                title:
                  "Between Magic and Meaning: Narrative Identification and Hybrid Identity in Speculative Children's Literature",
                abstract:
                  "This paper explores the role of speculative children's literature in shaping how young readers engage with identity, belonging, and language in early English as a Foreign Language contexts. Focusing on the narrative worlds of Isadora Moon and Mirabelle, it proposes a theoretical framework in which hybrid fictional identities create a space where the boundaries between reality and imagination are productively blurred.",
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
                abstract:
                  "Published in 1984, Neuromancer imagined a cybernetic future shaped by artificial intelligence, digital networks, corporate power, and technologically mediated identities. This paper argues that the retrofuturist quality of Neuromancer intensifies its representation of technological anxiety by revealing how fears surrounding cybernetic systems persist even when the imagined future becomes obsolete. By rereading Neuromancer through the lens of retrofuturism, this paper demonstrates how speculative fiction preserves and reactivates historical technological anxieties across different temporal moments.",
              },
              {
                author: "Sara Machado",
                title:
                  "Narrating the Human Park: Surveillance, Dataism, and Technological Domestication in Westworld",
                abstract:
                  "This paper examines how concerns about surveillance and technological domestication are dramatized in the third and fourth seasons of Westworld. Drawing on Sloterdijk's concept of the 'Human Park' and Byung-Chul Han's notion of 'dataism' (2022), this paper explores how Westworld reflects contemporary anxieties surrounding algorithmic governance and the reduction of human subjectivity to data patterns.",
              },
              {
                author: "Amitié Lee",
                title:
                  "Monstrous Care: The Scales of 'Uncaring': AI Beyond Consensus Reality in Contemporary Speculative Film",
                abstract:
                  "This paper analyses three speculative films — M3GAN (dir. Johnstone, 2022), La Bête (dir. Bonello, 2023), and Atlas (dir. Peyton, 2024) — through the concept of posthuman care, examining how artificial intelligence (AI) unsettles humanist assumptions about care. The paper argues that these films challenge 'consensus reality' by exposing what may be called consensus humanity: the assumption that 'the human' must remain securely at the centre of value, agency, and futurity.",
              },
              {
                author: "Tiago Ramos",
                title:
                  "The Ghost in the Early Machine: Speculative Ancestry and Technological Anxiety from Méliès to AI",
                abstract:
                  "At the center of this discussion is Gugusse et l'Automate (1897), a film by George Méliès rediscovered in 2025. In this trick film, the clown Gugusse constructs an automaton that turns against its creator. This narrative can be read as an early cinematic reflection on mechanical life, agency, and the unstable boundary between human and technological actors. Reframing this film through the lenses of speculative fiction demonstrates how cinema functioned, from its inception, as a medium for imagining technological futures and interrogating the limits of reality, media, and the human.",
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
                abstract:
                  "This paper examines Joe Abercrombie's The Devils as a grimdark speculative fantasy about moral exception, institutional violence, and the monstrous afterlife of religious virtue. The paper focuses on the Chapel of the Holy Expediency — the hidden 'thirteenth' chapel within the Celestial Palace — as the novel's central ethical and symbolic device, arguing that Abercrombie's monstrous violence functions as a speculative test of institutional morality.",
              },
              {
                author: "Reed Richardson",
                title:
                  "Simplicity Demands Too Great a Sacrifice: Revisiting the Ideological Discourse of The Queen of the Damned for a Transfeminist Present",
                abstract:
                  "This paper examines and defines the ideology of The Queen of the Damned, with an eye toward its contemporary feminist discourse and reception, as well as the current state of gender essentialist rhetoric. Taking a transfeminist approach to ask what Rice's dialogues can tell us about navigating an obviously violent and patriarchal world without being recruited into advancing a conservative agenda.",
              },
              {
                author: "Paola Bran",
                title:
                  "Robot Romance: Exploring Neuroqueer Relationships through the Robot Imaginary",
                abstract:
                  "This presentation will explore the ways in which the fictional robot framework can and has been used to explore concepts of queer theory, crip theory, and neurodivergence. The framework focuses specifically on the nature of romance in order to discuss topics such as the embodiment of fluidity, forms of relationships, and the concept of erotica. The main goal is to share the fascinatingly diverse nature of the robot, and how these forms of storytelling can help introduce other forms of being and existing that don't always align with heteronormative ideology.",
              },
              {
                author: "Hélia Saraiva",
                title:
                  "Disability, Salutogenesis, and (Post)human Futures: A Comparative Study of Philip K. Dick's Do Androids Dream of Electric Sheep? and Andromeda Romano-Lax's Plum Rains",
                abstract:
                  "This study comparatively analyzes representations of disability and salutogenic processes in Philip K. Dick's Do Androids Dream of Electric Sheep? (1968) and Andromeda Romano Lax's Plum Rains (2018). Drawing on critical disability studies, posthumanism, and salutogenesis theory, it examines how some aspects of both novels reconfigure notions of (post)humanity amid technological acceleration, ecological crisis, and shifting bodily norms.",
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
                abstract:
                  "This paper approaches Atwood's narrative as a sensory journey from wonder to horror, where what first appears ordered and purposeful gradually reveals itself as a system of profound dehumanization. Feminist philosophy provides a critical framework to interpret this journey: Simone de Beauvoir's notion of woman as 'Other', Judith Butler's theory of performativity, Hannah Arendt's reflections on totalitarianism, and Simone Weil's concept of attention.",
              },
              {
                author: "Orsolya Deji-Nagylaki",
                title:
                  "Radical Futures and Dys/Us/Utopian Thought in Margaret Atwood's Speculative Narratives",
                abstract:
                  "In this paper, the author explores the meaning of radical futures in the literary works of Margaret Atwood, namely The Handmaid's Tale (1985) and the MaddAddam trilogy. Using the theoretical opposition of utopia and dystopia, this paper will show how Margaret Atwood subverts this dichotomy by depicting societies that allegedly seek a greater good while simultaneously generating exclusion, violence, and control.",
              },
              {
                author: "Alba Quintairos-Soliño",
                title:
                  "Bordering in Margaret Atwood's The Handmaid's Tale: An Approach to the Text-Image Relationship through Speculative Boundaries",
                abstract:
                  "In this context, it can be argued that Margaret Atwood's The Handmaid's Tale (1985) is first and foremost a novel about bordering. This research aims at exploring the inexorable relationship between text and (mental) images through the analysis of physical and symbolic bordering within Margaret Atwood's The Handmaid's Tale.",
              },
              {
                author: "Omar El Otmani",
                title:
                  "Wiring Fact and Fiction: Myth, Speculative Epistemology, and Posthuman Ethics in Margaret Atwood's MaddAddam Trilogy",
                abstract:
                  "This paper argues that the trilogy operates as a speculative epistemological apparatus that 'wires' fact with fiction, mobilizing myth as a dynamic system for articulating patterns of relation within complex, adaptive worlds. The central claim is that this narrative 'rewiring' produces the conditions for a posthuman ethics of care grounded in interdependence, vulnerability, and coexistence across species and forms of life.",
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
                abstract:
                  "This paper examines the fiction of Edgar Allan Poe as a foundational precursor to contemporary speculative narratives that challenge consensus reality through sensory disruption, epistemological instability, and affective extremity. Drawing on theories of speculative fiction from Oziewicz and Atwood, this paper argues that Poe's fiction anticipates later developments in weird fiction and slipstream by destabilizing the very conditions of reality through heightened sensory experience.",
              },
              {
                author: "Lorenza Papalia",
                title:
                  "Beyond the Human Sensorium: Extended Consciousness and the Weird in Algernon Blackwood",
                abstract:
                  "This paper examines how weird fiction functions as a speculative mode that destabilizes 'consensus reality' by reimagining consciousness as extending beyond the human. Focusing on the work of Algernon Blackwood (1869-1951), the paper argues that his narratives anticipate key concerns of contemporary speculative fiction and posthumanist theory by presenting consciousness as distributed across human and nonhuman domains.",
              },
              {
                author: "Z. I. Mahmud",
                title:
                  "Opal Light, Phosphor Moor: Sensorial Thresholds from Colonial Wonder to Gothic Terror in The Moonstone and The Hound of the Baskervilles",
                abstract:
                  "Wilkie Collins' The Moonstone (1868) and Arthur Conan Doyle's The Hound of the Baskervilles (1902) offer fertile ground for re-reading Victorian detective fiction through the lens of speculative narrative. This paper argues that both texts stage sensory instability — of sight, sound, smell, and intuition — as narrative technologies that destabilize 'consensus reality', moving readers from epistemological wonder toward embodied horror.",
              },
              {
                author: "Kajetan Poniatyszyn",
                title:
                  "Fictional Places, Real Problems: Post-Industrial Ruins in Contemporary Polish and American Weird Fiction (Based on Short Stories by Jakub Bielawski and Thomas Ligotti)",
                abstract:
                  "The aim of this presentation is to analyze how descriptions of post-industrial ruins enable authors of weird fiction (Jakub Bielawski and Thomas Ligotti) to address issues relating to socio-political realities. A comparison of selected texts by Bielawski and Ligotti will demonstrate similarities between Polish and American weird fiction and highlight the socially engaged character of both the genre and its spatial imaginarium.",
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
          abstract:
            "When addressing the past we need to reconcile with, we usually associate this with the memories and experiences of minorities left outside the collective mainstream memory. But what if the forgotten past was national, affected majorities and minorities alike, and its origins are also left out of the collective mainstream memory? The Kingdom of Portugal ceased to be a kingdom in 1910, a nonconsensual decision. On 19 January 1919, an insurrection broke out in the city of Porto, which declared the restoration of the monarchical regime, and launched a military offensive towards the capital of the Republic, Lisbon, in the south. This civil war lasted three weeks, was filled with peculiar episodes, and at present, almost no Portuguese is aware that it happened. In 2013, this historical episode provided the divergence point for the development of an alternative history universe, the Winepunk Universe. In the last decade, through a variety of creative and cultural outlets, the Winepunk Universe has allowed for the recovering of forgotten historical figures and episodes of several countries, working as a de facto collaborative creative backbone from literature to museology.",
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
                abstract:
                  "This paper examines Steve Lewis and Chris Uhlmann's Australian political thriller trilogy as a speculative narrative of strategic anxiety that moves between political realism, cyber-fear, and techno-orientalist horror. Drawing on Edward Said's theory of Orientalism and recent work on techno-orientalism, this paper argues that the trilogy updates older 'Yellow Peril' anxieties for the digital age.",
              },
              {
                author: "Michelle Meyers",
                title:
                  "Challenging Consensus Reality or Reaffirming the Status Quo? The Role of Carceral Futures in the Contemporary Imagination",
                abstract:
                  "This paper explores tensions in the field of literary criticism about the potential impact of dystopian carceral representations as they relate to our contemporary world, particularly in the United States. Does Suvin's cognitive estrangement indeed enable a space for critical reflection in which potential activists are inspired by fictional cultural production, or, in their stubborn insistence on dystopian carceral futures, are these novels actually counterproductive to the ideals of prison reform and abolition movements?",
              },
              {
                author: "João Miranda",
                title:
                  "The Politics of Speculative Media Ecologies: Future-Oriented Science Fiction and the Political Economy of Communication",
                abstract:
                  "This paper revisits a prior study of representations of media ecologies and sociotechnical configurations of communication in a corpus of 86 literary, film, and television narratives of futuristic science fiction. It asks whether and how that typology holds when reread through the analytical lens of the Political Economy of Media and extends the analysis through comparison with a purposively selected set of works produced after the turn of the twenty-first century.",
              },
              {
                author: "Mohamed Lazrak",
                title:
                  "Dystopia and the Politics of Control in the MENA Region: Surveillance, Narrative Power, and the Reconfiguration of Authority",
                abstract:
                  "This paper examines the relevance of dystopian frameworks for understanding contemporary forms of governance and control in the Middle East and North Africa (MENA) region. It adopts an interdisciplinary approach that draws on media studies, political theory, and cultural analysis to explore how mechanisms commonly associated with dystopian narratives — surveillance, control of information, ideological conditioning — manifest in both state and digital environments.",
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
                abstract:
                  "In this paper, Mário Alves Ribeiro will analyze how Lynch's surrealistic influence and unsettling horror can be seen throughout the Silent Hill franchise, regarding more attention to Silent Hill 2 (2001), as well as the experimental Playable Teaser (P.T.): Silent Hills (2014) launched by Kojima Productions. The paper demonstrates how Lynch's filmography and influence broke away from the cinematographic realm and was adapted into other narratives in visual medias.",
              },
              {
                author: "Luís Carlos S. Branco",
                title:
                  "David Lynch's Unorthodox Experiencing of Reality Shaped his Filmmaking",
                abstract:
                  "David Lynch's filmography is constructed on the basis of endless strange, awkward elements that, from the author's point of view, shouldn't be addressed to surrealism or to the pure realms of fiction, because that strangeness is closely linked to his own experiencing of reality. The aim is to map out and understand better the role of those biographic paradoxical events in shaping his films, using hermeneutic tools and concepts from Amit Goswami's theories on human consciousness.",
              },
              {
                author: "Inês Taveira de Almeida",
                title:
                  "Configuring Horror as Speculative Narrative: Fandom, Lore Construction and Transmedia World-Building in Poppy Playtime",
                abstract:
                  "This paper examines Poppy Playtime as a speculative horror narrative whose world is assembled through fragmented clues, fan interpretation, and cross-platform discourse. The study argues that the game functions as a dynamic node in a broader network of convergent media texts where horror is collaboratively configured, circulated, negotiated, and contested across platforms.",
              },
              {
                author: "Sara Pascoal & Rosa Mesquita",
                title:
                  "From Borges' Labyrinth to Benjamin's Ruin: Speculative Space in Tarkovsky's Stalker",
                abstract:
                  "This paper examines Andrei Tarkovsky's film Stalker (1979) as a paradigmatical work of speculative cinema that deconstructs 'consensus reality' through the interconnected figures of the labyrinth and the ruin. Drawing on Jorge Luis Borges's concept of the labyrinth and Walter Benjamin's philosophy of history, the paper argues that Stalker expresses a speculative ethics based on care, attention, and the rejection of instrumental reason.",
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
          abstract:
            "Speculative fiction has always allowed us to imagine possible worlds, transforming hypothetical premises into narrative, sensory, and ethical experiences. Generative AI introduces a different condition: possible worlds can now be queried, negotiated, revised, and made responsive. The speculative gesture therefore moves from the authored 'what if?' to a conversational 'as if', where imagination becomes an iterative space for testing consequences, meanings, and forms of human experience. This keynote examines how generative AI may be changing not only the production of speculative narratives, but the cultural practice of speculation itself. By moving from 'what if?' to 'as if', generative AI invites us to rethink speculative fiction as a conversational practice: not simply the creation of alternative realities, but the temporary inhabitation of possible worlds through which we examine the assumptions, desires, fears, and limits of our own consensus reality.",
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
                abstract:
                  "This paper examines a series of contemporary texts to argue that language is fundamentally more-than-human. Contemporary literature increasingly challenges dominant modes of consuming, representing, and perceiving animals by attributing to them linguistic capacity, agency, and even artistic production. Through these narratives, the paper opens a space for dialogue between queer studies and animal studies, drawing on Eva Hoffman's concept of zoopoetics.",
              },
              {
                author: "Alessandra Martín González",
                title:
                  "Nature Rewriting the Body: Trans-Corporeality and Posthuman Ecosystems in Nnedi Okorafor's Lagoon",
                abstract:
                  "Taking advantage of the narrative devices of speculative fiction, in Nnedi Okorafor's Lagoon bodies and nature inhabit each other in a dialogic manner, thus building a posthuman continuum. Drawing on critical posthumanism (Braidotti, Ferrando) and material feminist embodiment (Alaimo), this contribution will examine how Okorafor's prose challenges the nature-culture binarism, ultimately arguing that Okorafor's narration weaves nature and fiction into a spiderweb that dethrones the anthropos and places it at the same level as nonhuman subjectivities.",
              },
              {
                author: "Marisa da Silva Martins",
                title:
                  "Hunger for the Flesh: Fungi and Entomological Ecology in T. Kingfisher's Ecohorror Narratives",
                abstract:
                  "This presentation close-reads fungal, parasitic and entomological modes of invasion in two ecohorror narratives, T. Kingfisher's What Moves the Dead (2022) and Wolf Worm (2026), through the frameworks of transcorporeality and ecologies of entanglement. The presentation identifies three overlapping modes of invasion (diffusive, extractive and manipulative) through which fungal and parasitic organisms unsettle bodily integrity.",
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
                abstract:
                  "This paper aims to problematise the epistemological foundations of consensus reality from a decolonial perspective. This argument is explored through Empire of Wild by award-winning Métis author Cherie Dimaline (2019) as a paradigmatic case of Indigenous speculative fiction. The novel reworks the Rougarou myth within contemporary settler-colonial formations, subverting Western genre categories such as horror and the monstrous.",
              },
              {
                author: "Carmen Pereyra",
                title:
                  "The Horror of the Ongoing: Indigenous Extinction, Colonial Time, and the Limits of Narrative Frame in Joca Reiners Terrón's A morte e o meteoro",
                abstract:
                  "This paper analyses how horror in Joca Reiners Terrón's novel A morte e o meteoro appears not only a generic and stylistic marker but as a temporal and structural condition. The paper argues that the novel offers a chronotope of permanent colonial crisis: a narrative organisation in which the destruction of the Amazon, the genocide of indigenous peoples, and the original violence of the conquest do not appear as sequential historical events but as dimensions of a continuous present.",
              },
              {
                author: "Aida Rosende Pérez",
                title:
                  "Breathing Underwater: Speculative Ontologies and the Black Aquatic in Rivers Solomon's The Deep",
                abstract:
                  "This paper examines Rivers Solomon's novella The Deep (2019) through the lens of Rinaldo Walcott's conceptualization of the 'Black Aquatic'. In this paper, the water-breathing creatures are read as embodiment, and perhaps 'resolution' and 'reinvention', of the ontological tensions and overlapping temporalities of the Black Aquatic — their very existence interrupting the expected outcome of drowning and suffocation of the Black (female) body.",
              },
              {
                author: "Meheli Sen",
                title:
                  "Pop-Tantra as Political Critique: Horror Media in Contemporary India",
                abstract:
                  "This paper looks at the horror genre in India as an emergent site of political contestations. Since 2014, culture and media industries have undergone massive transformations driven by the rise of Hindu nationalism. Sen argues that regional horror texts provide an especially salubrious terrain for the expression of resistance, dissent, and dissidence against the hegemonic, totalitarian Hindu nation, with a new investment in 'pop Tantra' and 'weird' deities.",
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
          abstract:
            "Camilla Grudova will discuss M. John Harrison's latest novel, in which humans in a crumbling future Britain beachcomb for artefacts possibly belonging to an alien civilisation as a metaphor for how AI erodes meaning, humanity and art. As an author involved in the legal case against Anthropic for stealing the work of thousands of authors, Grudova will bring in her personal experience and how she reads The End of Everything as a goodbye to literature, or a warning of a goodbye.",
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
                abstract:
                  "Within the ideological context of transhumanism, speculative fiction deals with 'What if?' by pushing current global trends and developments into realms defying empirical materialism. A comparative analysis of Ai Jiang's I am AI and Noah Medlock's A Botanical Daughter shows their exploration of the entanglement of myriad temporalities and spatialities and myriad intra-active entities-inassemblages — including the more-than-human, other-than-human, inhuman, and human-ashumus.",
              },
              {
                author: "Zuzanna Zarebska",
                title:
                  "The Narratives of Care and Ageing in Charlotte Wood's The Weekend and Stone Yard Devotional: Of Women, Mice and Dogs",
                abstract:
                  "This paper will examine the ethos of care that The Weekend and Stone Yard Devotional inspired by the work of Emmanuel Lévinas and Judith Butler. It will look at the genre of Reifungsroman and the philosophical concepts of responsibility towards oneself and others, of experience of grief, reverence and self-care and how these are negotiated through relational frameworks.",
              },
              {
                author: "Ana Tejero Marín",
                title:
                  "A Home Away from Home: The Afterlives of the Plantationocene in Rivers Solomon's An Unkindness of Ghosts",
                abstract:
                  "This presentation will explore how generation ship stories replicate the ideologies of the Anthropocene in a new context. As a case study, An Unkindness of Ghosts is analysed as a story set in a vessel that replicates the structure of a plantation, showing how, without a radical rethinking of social hierarchies, humans are bound to reproduce the same damaging ideologies that made them leave Earth in the first place.",
              },
              {
                author: "Stefania Schnakovszky",
                title:
                  "Negotiating Jewish Identity Between Memory and Imagination: Post-Holocaust Narratives in Anglophone Literature",
                abstract:
                  "This paper explores the construction of Jewish identity in Anglophone post-Holocaust literature through the lens of memory, trauma, and speculative imagination. The paper argues that these texts operate within a broader framework of speculative thinking, where memory is not only recalled but reimagined, opening up alternative ways of understanding Jewish identity in the Anglophone world.",
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
                abstract:
                  "This paper concentrates on Megan Hunter's The Harpy (2020) and Rachel Yoder's Nightbitch (2021) as illustrative examples of a thematic concern with the difficult experience of new mothers. These narratives lead their female protagonists to channel their rage into an enhancement of their animal-like characteristics, leading to their metamorphosing into hybrid, mythical creatures, defiant of those who wish to control them.",
              },
              {
                author: "María Rosa Valle Sánchez",
                title:
                  "Motherhood Beyond Consensus Reality and Rage's Transformative Power in Nightbitch (2021)",
                abstract:
                  "This paper examines Nightbitch (2021) by Rachel Yoder as a work of feminist speculative fiction that destabilises consensus reality through the monstrous maternal body. Drawing on Julia Kristeva's concept of abjection, Barbara Creed's formulation of the monstrous-feminine, and Adrienne Rich's distinction between motherhood as institution and experience, the paper argues that Nightbitch mobilises speculative horror to expose the suffocating cultural programming surrounding contemporary motherhood.",
              },
              {
                author: "Eyal Soffer",
                title:
                  "Machiavellian Matriarchs: Reimagining Virtù and Cooperative Power in Feminist Speculative Fiction",
                abstract:
                  "This presentation argues that modern SFF by feminist authors reimagines Machiavellian principles to prioritize cooperative power and challenge gendered hierarchies. Comparing the male-centered politics of Isaac Asimov and Frank Herbert to the feminist perspectives of Lois McMaster Bujold and Kameron Hurley, the paper shows how feminist SFF challenges the lone, ruthless prince archetype.",
              },
              {
                author: "Sohini Chakraborty",
                title:
                  "The Rasa of Ruin: Cyborg, Colony, and Control in Ray's Professor Shonku and Akbar's Leila",
                abstract:
                  "This study interrogates the figure of the cyborg within Bengali and Indian speculative fiction through the critical lens of postcolonial technoscience. Through close analysis of Satyajit Ray's Professor Shonku stories (1965 onwards) and Prayaag Akbar's Leila (2017), the study identifies the structural divergence between these imaginaries and its theoretical consequences for postcolonial posthumanism.",
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
                abstract:
                  "The paper examines Owen D. Pomery's graphic novel British Ice through the interconnected frameworks of Arctic spatiality, colonial imagination, and the supernatural. The paper demonstrates how Pomery's British Ice reimagines the Arctic not as a blank frontier but as a contested and uncanny space shaped by histories of colonial agendas and the desire of human dominance.",
              },
              {
                author: "Sonji Shah",
                title: "Speculative Geologies: Gendered Becoming in 'Rock Jenny'",
                abstract:
                  "This paper explores how the story 'Rock Jenny' in Callum Angus' short story collection A Natural History of Transition (2021) uses geology as metaphor for gendered becoming. Through expanding the boundaries of the story beyond consensus reality, the protagonist navigates the pressures and expectations of being a young mixed-race trans person by turning into rock.",
              },
              {
                author: "Devi Lir Dougherty",
                title:
                  "Ecstasy on the Edge of Extraction: I.K.U. and the Pleasurable Spectatorial Override",
                abstract:
                  "Using an autoethnographic methodology of queer phenomenology, this paper seeks to locate moments of encounter with screen art objects that communicate potentially damaging acts of sexuality in an ecstatically life-affirming way. Using the 2000 film I.K.U. as a prism, the guiding question is whether it is possible to find potentialities for the queer spectator to process suffering, actualize their identity, feel group belonging, and re-frame how one communicates the boundaries of their own queer body in the world.",
              },
              {
                author: "Andi Febriana Tamrin",
                title:
                  "Beyond the Alpha/Omega Binary: Subverting Gender and Power Dynamics in Speculative Fanfiction",
                abstract:
                  "Focusing on the Omegaverse fanfiction work of the Heated Rivalry fandom, Breaking the Ice, the study aims to analyze how biological worldbuilding is used as a tool of speculative fiction to subvert and challenge toxic hierarchical power dynamics. Drawing on Judith Butler's analysis of Gender Performativity, this study examines the subversion of gender boundaries through two main characters.",
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
                abstract:
                  "Daniel Borzutzky and Rachael Allen illuminate social conditions by drawing on speculative aesthetics (body horror, gothic, surrealism). Their poetry plays a sense of the reality of violence and oppression against a secrecy inherent in how these violences are perpetrated and used to maintain social forms. The paper claims that their works act as a counterconspiracy against our current conditions by punching holes through this secrecy, allowing horrors of excess and indeterminacy to burst through.",
              },
              {
                author: "Konstantinos Viennas",
                title:
                  "Through the eyes of Marco Polo: Space, Power and Law in Calvino's Invisible Cities",
                abstract:
                  "The present abstract entertains the premise that Italo Calvino's Invisible Cities is in fact a work of speculative fiction, not only because it contains fragments of existing cities in its imaginary ones, but also by posing ideas on the nature and the evolution of the city as a whole. Issues such as migration, citizens' cooperation, gentrification, and the rise of political propaganda are all present in the narration of Marco Polo.",
              },
              {
                author: "Olufunmilayo Adejumobi",
                title:
                  "Globalisation and Mobility in Speculative Fiction: Imagined Borders, Displacement, and Transnational Identity",
                abstract:
                  "This paper explores how speculative narratives represent migration and transnational movement through imagined worlds that reconfigure space, identity, and belonging. The paper argues that speculative fiction operates as a critical lens through which globalisation and mobility can be reimagined, allowing for the exploration of statelessness, exclusion, and hybrid identities without direct mimetic representation.",
              },
              {
                author: "Rodrigo Ramos-Stokes",
                title:
                  "Fëanor's Egotism and Alienation in J. R. R. Tolkien's The Silmarillion",
                abstract:
                  "This paper analyses Fëanor's egotism and alienation in The Silmarillion through discourses of masculinity, arguing that his character exemplifies a destructive and hypermasculine model of power. The paper argues that Tolkien differentiates between ethically legitimate and distorted masculinities, complicating inherited heroic ideals rather than simply reproducing them.",
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
  const [open, setOpen] = useState(false);

  return (
    <div className="my-6 rounded-2xl border border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10 p-6">
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
        <p className="text-base text-foreground/90 italic leading-relaxed mb-4">
          "{keynote.title}"
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Chair: {keynote.chair}
          </p>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors"
          >
            Abstract
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {open && (
          <div className="mt-4 pt-4 border-t border-primary/20">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {keynote.abstract}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function PaperItem({ paper }: { paper: PaperEntry }) {
  const [open, setOpen] = useState(false);
  const hasAbstract = Boolean(paper.abstract && paper.abstract !== "TBC");

  return (
    <li className="px-5 py-3">
      <p className="text-xs font-semibold text-primary/80 mb-0.5">
        {paper.author}
      </p>
      <p className="text-xs text-foreground/75 leading-relaxed mb-1">
        {paper.title}
      </p>
      {hasAbstract && (
        <>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors mt-1"
          >
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
            {open ? "Hide abstract" : "Read abstract"}
          </button>
          {open && (
            <p className="mt-2 text-xs text-foreground/65 leading-relaxed border-l-2 border-primary/20 pl-3 italic">
              {paper.abstract}
            </p>
          )}
        </>
      )}
    </li>
  );
}

function PanelCard({ panel }: { panel: Panel }) {
  return (
    <div className="backdrop-blur-sm bg-card/40 rounded-2xl border border-border/30 hover:border-primary/30 transition-colors duration-300 overflow-hidden">
      {/* Header */}
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
      {/* Papers */}
      <ul className="divide-y divide-border/10">
        {panel.papers.map((paper, i) => (
          <PaperItem key={i} paper={paper} />
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
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 text-center">
          {t("program.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-8 text-sm tracking-wide">
          University of Aveiro · 29–30 June &amp; 1 July 2026
        </p>

        {/* Botão de download */}
        <div className="flex justify-center mb-16">
          <a
            href="/book-of-abstracts-2026.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors duration-300"
          >
            <Download className="w-4 h-4" />
            Download Book of Abstracts (PDF)
          </a>
        </div>

        {/* Dias */}
        <div className="space-y-16">
          {PROGRAM.map((day, dayIndex) => (
            <section key={day.date}>
              {/* Cabeçalho do dia */}
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

              {/* Blocos do dia */}
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
