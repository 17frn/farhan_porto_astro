export interface ProjectData {
  id: string;
  title: string;
  category: string;
  status: string;
  description: string;
  thumbnail: string;
  images: {
    url: string;
    description: string;
  }[];
  techStack: string[];
}

export const projectItems: ProjectData[] = [
  {
    id: "wealth-tax-advisor",
    title: "WTA Company Profile + Learning Management System",
    category: "Web App",
    status: "Almost Done",
    description: "Modernisasi dashboard admin untuk platform konsultasi pajak dengan desain yang responsif dan integrasi grafik data real-time. Tentu saja include website company profile client Wealth Tax Advisor dengan desain yang responsif dan modern.",
    thumbnail: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_01-35.png",
    images: [
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_01-36.png",
        description: "Halaman Landing Page / Beranda"
      },
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_02-00.png",
        description: "Halaman Jasa Layanan"
      },
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_02-00_1.png",
        description: "Halaman Testimoni Peserta & Klien"
      },
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_02-01.png",
        description: "Menu Login"
      },
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_02-01_1.png",
        description: "Menu Daftar"
      },
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_02-02.png",
        description: "Modul LMS Dashboard Admin"
      },
      {
        url: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/2026-05-13_02-02_1.png",
        description: "Modul LMS Dashboard Peserta"
      }
    ],
    techStack: ["Nuxt", "Vue", "MariaDB", "Tailwind CSS"]
  },
  {
    id: "calibre-document-converter",
    title: "Calibre Document Converter",
    category: "Desktop App",
    status: "On going",
    description: "Aplikasi desktop cross-platform untuk mengonversi berbagai format dokumen ke format yang diinginkan.",
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
        description: "Tampilan Antarmuka Konversi Dokumen"
      }
    ],
    techStack: ["Rust", "Tauri", "Tabula Java"]
  },
  {
    id: "mla-database-system",
    title: "MLA DATABASE SYSTEM",
    category: "Desktop App",
    status: "On going",
    description: "Sistem manajemen basis data offline berbasis aplikasi desktop multi-platform. Dibangun menggunakan Python untuk memastikan kinerja yang stabil di berbagai sistem operasi, memungkinkan pengguna untuk mengelola, mencari, dan menyimpan data secara lokal dengan aman tanpa ketergantungan pada koneksi internet.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
        description: "Tampilan Dashboard Database Offline"
      }
    ],
    techStack: ["Python", "SQLite", "Multi-platform"]
  }
];
