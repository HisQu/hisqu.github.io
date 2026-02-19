// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SiteTitle = "HisQu";
export const SiteDescription = "e-Research Projekt";
export const GitHubLink = "https://github.com/HisQu";
export const MatrixLink =
  "https://matrix.to/#/!PcrBuOrnEqLlUmmMNv:uni-goettingen.de?via=uni-goettingen.de&via=uni-jena.de&via=matrix.org";
export const GitHubIssuesLink = "https://github.com/HisQu/Organisation/issues";
export const ContactPageEmailLink =
  "mailto:clemens.beck@uni-jena.de?subject=Interesse%20an%20einer%20Zusammenarbeit%20im%20Projekt%20HisQu&body=Sehr%20geehrter%20Herr%20Beck%2C%0D%0A%0D%0Awir%20haben%20Interesse%20an%20einer%20Zusammenarbeit%20an%20Ihrem%20Forschungsprojekt%20HisQu!%20Unser%20Arbeitsbereich%20ist%20...%20und%20wir%20k%C3%B6nnen%20an%20...%20beitragen.%0D%0A%0D%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen%0D%0A%3CName%3E";

import {
  dhiLogo,
  factGridLogo,
  dfgLogo,
  gsLogo,
  mephisto03,
  erstellung,
  ontologie,
  verarbeitung,
  analyse,
  archiv,
  nachvollziehbarkeit,
  gsLogo_rmvb,
  dhiLogo_rmvb,
  factGridLogo_rmvb,
} from "./assets";

export const steps: Step[] = [
  {
    title: "1. Erstellung",
    subtitle: "Digitalisierung historischer Ressourcen",
    description: `HisQu zielt darauf ab, die Digitalisierung gedruckter historischer Quellen mit anspruchsvollen Layouts – etwa Frakturschriften oder komplexen Spaltenstrukturen – deutlich zu verbessern. Dafür erweitern wir klassische OCR-Tools wie Tesseract durch den Einsatz von LLMs: Diese übernehmen die Vorverarbeitung der Quellen mithilfe von Bounding Boxes und ermöglichen zugleich eine nachträgliche Korrektur der Ergebnisse.`,
    image: {
      src: erstellung,
      alt: "Visualisierung der Digitalisierung historischer Quellen",
    },
    tools: [],
    angle: -90,
  },
  {
    title: "2. Modellierung",
    subtitle: "Zentrales Element: Die Ontologie",
    description: `Die konsequente Digitalisierung geschichtswissenschaftlicher Forschungsprozesse erfordert domänenspezifische Vokabulare. Nur so lassen sich Quellen und Forschungsaussagen semantisch erfassen und interoperabel machen. HisQu setzt hierfür auf Wissensgraphen, die sowohl die Ontologie als auch die damit formulierten inhaltlichen Aussagen gleichberechtigt abbilden. Dieses Modell schafft Flexibilität für die digitale Modellierung und die Weiterentwicklung fachlicher Expertise. Grundlage dafür ist die Arbeit mit Protégé.`,
    image: { src: ontologie, alt: "Darstellung einer Ontologie-Modellierung" },
    tools: [
      { name: "Protégé Online", href: "https://protege.stanford.edu/" },
      { name: "RG Guidelines", href: "/blog/annotation" },
    ],
    angle: -25,
  },
  {
    title: "3. Verarbeitung",
    subtitle: "Einbindung von Large Language Models",
    description: `Für die Datenverarbeitung entwickelt HisQu innovative Tools auf Basis von LLMs. Mit Paredros steht Historiker:innen eine Grammatikentwicklungsumgebung zur Verfügung, die bei der Formulierung von Grammatiken zur Auswertung von Quellen unterstützt. Ergänzend entsteht mit OPA (Ontology Parser Assistant) ein Python-basierter LLM-Client, mit dem Ontologie-Snippets erstellt und flexibel erweitert werden – eine Grundlage für die semantische Modellierung und Weiterentwicklung domänenspezifischen Wissens.`,
    image: { src: verarbeitung, alt: "Workflow mit LLM-basierten Tools" },
    tools: [
      { name: "Paredros", href: "/tools/paredros" },
      { name: "OPA", href: "/tools/opa" },
    ],
    angle: 25,
  },
  {
    title: "4. Analyse",
    subtitle: "KI-unterstütztes SPARQL-Endpoint",
    description: `Um den Zugang zu komplexen SPARQL-Abfragen zu erleichtern, entwickelt HisQu einen grafischen Query-Builder. Dieser ermöglicht es, Abfragen intuitiv zusammenzustellen und zugleich den generierten SPARQL-Code einzusehen. Perspektivisch wird zudem eine Anbindung an ein LLM integriert, um die Erstellung und Anpassung von Abfragen noch benutzerfreundlicher zu gestalten.`,
    image: { src: analyse, alt: "Beispiel einer grafischen SPARQL-Abfrage" },
    caption:
      "Beispiel einer Abfrage zu allen Klerikern mit Ortsbezug zur Diözese Mainz – oben erfolgt der Aufbau über die grafische Oberfläche, unten die Ausgabe des entsprechenden SPARQL-Codes.",
    tools: [{ name: "Query by Graph", href: "/tools/quebyg" }],
    angle: 90,
  },
  {
    title: "5. Archivierung",
    subtitle: "Linked Open Data mit FactGrid/Wikibase",
    description: `Für die Speicherung der Daten nutzt HisQu FactGrid, eine speziell auf die Bedürfnisse der Geschichtswissenschaft zugeschnittene Wikibase-Instanz. Sie ermöglicht kollaboratives und nachvollziehbares Arbeiten mit Klarnamen. Alle aktiven Mitwirkenden erhalten personalisierte Konten, die eindeutig über ORCID-IDs verknüpft sind. Auf diese Weise entstehen zitierfähige (Mikro-)Publikationen, die die Sichtbarkeit und Akzeptanz von HisQu in der wissenschaftlichen Community stärken.`,
    image: { src: archiv, alt: "FactGrid-Oberfläche" },
    tools: [{ name: "FactGrid Console", href: "/blog/factgrid" }],
    angle: 155,
  },
  {
    title: "6. Nachnutzung",
    subtitle: "Dokumentationsframework für den Forschungsprozess",
    description: `HisQu entwickelt ein interaktives Labortagebuch, das historische Forschungsprozesse transparent und reproduzierbar macht. Dafür werden abstrakte Dokumentationsbausteine wie Datenerhebung, -auswertung oder Visualisierung definiert und in einer graphischen Oberfläche zu konkreten Workflows zusammengesetzt.

Ein visueller Editor bildet die einzelnen Schritte samt Abhängigkeiten ab und ermöglicht ihre Verwaltung mit zeitgemäßen Werkzeugen wie Git-Integration und automatisch generiertem Wiki.`,
    image: { src: nachvollziehbarkeit, alt: "Visueller Workflow-Editor" },
    tools: [],
    angle: 205,
  },
];

import type { ImageMetadata } from "astro";

type Img = string | ImageMetadata;

export type Partner = {
  key: string;
  name: string;
  unit?: string;
  institution?: string;
  alt?: string;
  width?: number;
  height?: number;
  srcLight: Img; // ← fix
  srcDark?: Img; // ← fix
  className?: string;
  href?: string;
  leads?: { name: string; title: string }[];
  numerical_position: number;
  summary?: string;
};

export const partners: Partner[] = [
  {
    numerical_position: 1,
    key: "fsu-jena",
    name: "Friedrich-Schiller-Universität Jena",
    unit: "MEPHisto",
    institution: "FSU Jena",
    href: "https://mephisto.uni-jena.de",
    srcLight: mephisto03,
    srcDark: mephisto03,
    width: 158,
    height: 48,
    leads: [
      { name: "Clemens Beckstein", title: "Prof. Dr." },
      { name: "Robert Gramsch-Stehfest", title: "Apl. Prof. Dr." },
    ],
    summary:
      "Methodische Führung in Modellierung, Erklärung und Prozessen historischer Wissenschaften – von semantischer Erschließung bis orchestrierter Workflow-Integration.",
  },
  {
    numerical_position: 2,
    key: "germania-sacra",
    name: "Akademie der Wissenschaften zu Göttingen",
    unit: "Germania Sacra",
    institution: "germania-sacra",
    href: "https://adw-goe.de/germania-sacra/",
    srcLight: gsLogo_rmvb,
    srcDark: gsLogo_rmvb,
    width: 158,
    height: 48,
    leads: [
      { name: "Hedwig Röckelein", title: "Prof. Dr." },
      { name: "Bärbel Kröger", title: "M.A." },
      { name: "Christian Popp", title: "Dr." },
    ],
    summary:
      "Fachliche Kuratierung, Editions-Expertise und Qualitätsstandards für historische Quellenkorpora.",
  },
  {
    numerical_position: 3,
    key: "dhi-rom",
    name: "Deutsches Historisches Institut in Rom",
    unit: "Digital Humanities",
    href: "https://dhi-roma.it/",
    srcLight: dhiLogo_rmvb,
    srcDark: dhiLogo_rmvb,
    width: 158,
    height: 48,
    leads: [
      { name: "Martin Baumeister", title: "Prof. Dr." },
      { name: "Jörg Hörnschemeyer", title: "Dr." },
    ],
    summary:
      "Leitender Anwendungsfall »Repertorium Germanicum«: praxisnahe Validierung und Zugang zu zentralen Quellen der spätmittelalterlichen Kirchengeschichte.",
  },
  {
    numerical_position: 4,
    key: "factgrid",
    name: "Forschungszentrum Gotha der Universität Erfurt",
    unit: "FactGrid",
    href: "https://factgrid.de/",
    srcLight: factGridLogo_rmvb,
    srcDark: factGridLogo_rmvb,
    width: 158,
    height: 48,
    leads: [
      { name: "Martin Mulsow", title: "Prof. Dr." },
      { name: "Olaf Simons", title: "Dr." },
    ],
    summary:
      "Betrieb und Weiterentwicklung von FactGrid/Wikibase als domänenspezifischer Datenspeicher für kollaborative Erschließung und Abfrage.",
  },
];

export interface Step {
  title: string;
  subtitle: string;
  description: string;
  image: { src: Img; alt?: string };
  caption?: string;
  tools: { name: string; href: string; image?: { src: Img; alt?: string } }[];
  angle: number;
}

type RgPoint = { title: string; text: string };

export interface Props {
  title?: string;
  description?: string;
  eyebrow?: string;
  steps: Step[];
  gradientFrom?: string;
  gradientTo?: string;
  class?: string;

  /* New: RG explanation props */
  rgTitle?: string;
  rgDescription?: string;
  rgImage?: { src: string; alt?: string };
  rgPoints?: RgPoint[];
}

export const dfg: Partner = {
  key: "dfg",
  name: "Deutsche Forschungsgemeinschaft",
  srcLight: dfgLogo,
  srcDark: dfgLogo, // gleiches Asset in Dark erlaubt
  width: 158,
  height: 48,
  href: "https://www.dfg.de/",
};
