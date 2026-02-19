// src/components/Steps/steps.ts
import type { Step } from "../types";

export const steps: Step[] = [
  {
    id: "creation",
    title: "1. Erstellung",
    subtitle: "Digitalisierung historischer Ressourcen",
    icon: "lucide:database",
    color: "from-blue-400 to-cyan-400",
    description:
      "HisQu zielt darauf ab, die Digitalisierung gedruckter historischer Quellen mit anspruchsvollen Layouts – etwa Frakturschriften oder komplexen Spaltenstrukturen – deutlich zu verbessern.",
    details: [
      "Erweiterte OCR-Tools wie Tesseract durch LLMs",
      "Vorverarbeitung mit Bounding Boxes",
      "Nachträgliche Korrektur der Ergebnisse",
      "Unterstützung komplexer Layouts",
    ],
    tools: [],
  },
  {
    id: "modeling",
    title: "2. Modellierung",
    subtitle: "Zentrales Element: Die Ontologie",
    icon: "lucide:brain",
    color: "from-cyan-400 to-teal-400",
    description:
      "Die konsequente Digitalisierung geschichtswissenschaftlicher Forschungsprozesse erfordert domänenspezifische Vokabulare für semantische Erfassung und Interoperabilität.",
    details: [
      "Wissensgraphen für Ontologie und Inhalte",
      "Flexibilität für digitale Modellierung",
      "Weiterentwicklung fachlicher Expertise",
      "Arbeit mit Protégé als Grundlage",
    ],
    tools: [
      { name: "Protégé Online", href: "https://protege.stanford.edu/" },
      { name: "RG Guidelines", href: "/blog/annotation" },
    ],
  },
  {
    id: "processing",
    title: "3. Verarbeitung",
    subtitle: "Einbindung von Large Language Models",
    icon: "lucide:cog",
    color: "from-teal-400 to-green-400",
    description:
      "Für die Datenverarbeitung entwickelt HisQu innovative Tools auf Basis von LLMs für Grammatikentwicklung und semantische Modellierung.",
    details: [
      "Paredros: Grammatikentwicklungsumgebung",
      "OPA: Ontology Parser Assistant",
      "Python-basierte LLM-Clients",
      "Flexible Ontologie-Erweiterung",
    ],
    tools: [
      { name: "Paredros", href: "/tools/paredros" },
      { name: "OPA", href: "/tools/opa" },
    ],
  },
  {
    id: "analysis",
    title: "4. Analyse",
    subtitle: "KI-unterstütztes SPARQL-Endpoint",
    icon: "lucide:bar-chart",
    color: "from-green-400 to-yellow-400",
    description:
      "Um den Zugang zu komplexen SPARQL-Abfragen zu erleichtern, entwickelt HisQu einen grafischen Query-Builder mit integrierter LLM-Unterstützung.",
    details: [
      "Grafischer Query-Builder",
      "Intuitive Abfragenerstellung",
      "SPARQL-Code-Generierung",
      "LLM-Integration für Benutzerfreundlichkeit",
    ],
    tools: [{ name: "Query by Graph", href: "/tools/quebyg" }],
  },
  {
    id: "archiving",
    title: "5. Archivierung",
    subtitle: "Linked Open Data mit FactGrid/Wikibase",
    icon: "lucide:archive",
    color: "from-yellow-400 to-orange-400",
    description:
      "Für die Speicherung nutzt HisQu FactGrid, eine speziell auf die Geschichtswissenschaft zugeschnittene Wikibase-Instanz für kollaboratives Arbeiten.",
    details: [
      "Kollaboratives und nachvollziehbares Arbeiten",
      "Personalisierte Konten mit ORCID-IDs",
      "Zitierfähige (Mikro-)Publikationen",
      "Stärkung der wissenschaftlichen Community",
    ],
    tools: [{ name: "FactGrid Console", href: "/blog/factgrid" }],
  },
  {
    id: "reuse",
    title: "6. Nachnutzung",
    subtitle: "Dokumentationsframework für den Forschungsprozess",
    icon: "lucide:repeat",
    color: "from-orange-400 to-red-400",
    description:
      "HisQu entwickelt ein interaktives Labortagebuch, das historische Forschungsprozesse transparent und reproduzierbar macht.",
    details: [
      "Abstrakte Dokumentationsbausteine",
      "Grafische Workflow-Zusammenstellung",
      "Visueller Editor für Abhängigkeiten",
      "Git-Integration und automatisches Wiki",
    ],
    tools: [],
  },
];
