// src/components/Steps/types.ts
export interface Step {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // lucide icon name, e.g. "lucide:database"
  color: string; // Tailwind gradient class, e.g. "from-blue-400 to-cyan-400"
  description: string;
  details: string[];
  tools: {
    name: string;
    href: string;
  }[];
}

export interface Partner {
  name: string;
  subtitle: string;
  description: string;
  team: string;
  location: string;
  color: string; // Tailwind gradient class, e.g. "from-blue-400 to-cyan-400"
  image: string; // URL to the partner's image
}
