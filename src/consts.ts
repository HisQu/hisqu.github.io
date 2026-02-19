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
  dfgLogo,
  mephisto03,
  gsLogo_rmvb,
  dhiLogo_rmvb,
  factGridLogo_rmvb,
} from "./assets";

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
  numerical_position: 1
};
