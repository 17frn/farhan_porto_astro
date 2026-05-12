export interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
}

export const projectItems: ProjectData[] = [
  {
    id: "wealth-tax-advisor",
    title: "Wealth Tax Advisor Company Profile + Learning Management System",
    category: "Web App",
    description: "Modernisasi dashboard admin untuk platform konsultasi pajak dengan desain yang responsif dan integrasi grafik data real-time. Tentu saja include website company profile client dengan desain yang responsif dan modern.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    ],
    techStack: ["Nuxt", "Vue", "MariaDB", "Tailwind CSS"]
  },
  {
    id: "calibre-document-converter",
    title: "Calibre Document Converter",
    category: "Desktop App",
    description: "Aplikasi desktop cross-platform untuk mengonversi berbagai format dokumen ke format yang diinginkan.",
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200"
    ],
    techStack: ["Rust", "Tauri", "Tabula Java"]
  }
];
