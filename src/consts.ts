// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SiteTitle = "HisQu";
export const SiteDescription = "e-Research Projekt";
export const GitHubLink = "https://github.com/HisQu";
export const MatrixLink =
  "https://matrix.to/#/!PcrBuOrnEqLlUmmMNv:uni-goettingen.de?via=uni-goettingen.de&via=uni-jena.de&via=matrix.org";
export const GitHubIssuesLink = "https://github.com/HisQu/Organisation/issues";
export const ContactPageEmailLink =
  "mailto:clemens.beck@uni-jena.de?subject=HisQu-Projekt";

import {
  dfgLogo,
  mephisto03,
  gsLogo_rmvb,
  dhiLogo_rmvb,
  factGridLogo_rmvb,
} from "./assets";

import type { ImageMetadata } from "astro";

// <Image> props for images repeated across card grids (max rendered width + responsive sizes).
export const ImageSizes = {
  // md:col-span-2 in the 1/2/3-column grid of max-w-7xl
  featuredCard: { width: 960, sizes: "(min-width: 1280px) 800px, (min-width: 1024px) 66vw, 100vw" },
  card: { width: 736, sizes: "(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" },
  // full width on mobile, sm:w-48 next to the text
  eventThumb: { width: 576, sizes: "(min-width: 640px) 192px, 100vw" },
};

type Img = string | ImageMetadata;

export type Partner = {
  key: string;
  name: string;
  unit?: string;
  institution?: string;
  alt?: string;
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
  href: "https://www.dfg.de/",
  numerical_position: 1
};
