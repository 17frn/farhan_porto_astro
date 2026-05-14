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
  features?: {
    title: string;
    description: string;
  }[];
  technologies?: {
    title: string;
    description: string;
  }[];
}

export const projectItems: ProjectData[] = [
  {
    id: "wealth-tax-advisor",
    title: "WTA Company Profile + Learning Management System",
    category: "Web App",
    status: "Almost Done",
    description: "Modernisasi dashboard admin untuk platform konsultasi pajak dengan desain yang responsif dan integrasi grafik data real-time. Tentu saja include website company profile client Wealth Tax Advisor dengan desain yang responsif dan modern.",
    thumbnail: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/website-mockup-thumbnail.png",
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
    techStack: ["Nuxt", "Vue", "MySQL", "Tailwind CSS"],
    features: [
      {
        title: "Sistem Manajemen Pembelajaran (LMS)",
        description: "Modul komprehensif untuk mengelola jadwal pelatihan, materi, dan tugas peserta secara terstruktur dengan integrasi link ruang kelas virtual (Zoom)."
      },
      {
        title: "Portal Konsultasi & Pertukaran Dokumen",
        description: "Ruang kerja khusus untuk klien melacak status pengerjaan proyek konsultasi pajak, serta bertukar dokumen secara aman dengan konsultan."
      },
      {
        title: "Katalog & Transaksi Layanan",
        description: "Katalog produk dan pelatihan interaktif dengan sistem tagging, kategori, dan pengaturan level keahlian (dasar, menengah, lanjutan)."
      },
      {
        title: "Manajemen Akses & Role",
        description: "Sistem manajemen hak akses pengguna yang memisahkan fitur dan wewenang antara Admin dan Peserta/Klien, termasuk pengelolaan persetujuan akses produk."
      },
      {
        title: "Pengumpulan Tugas & Penilaian",
        description: "Fitur untuk peserta mengunggah dokumen tugas, sementara admin dapat memberikan evaluasi berupa nilai dan catatan feedback secara langsung."
      }
    ]
  },
  {
    id: "calibre-document-converter",
    title: "Calibre Document Converter",
    category: "Desktop App",
    status: "On going",
    description: "Aplikasi desktop modern lintas platform (cross-platform) untuk mengonversi berbagai format dokumen secara instan. Dibangun menggunakan Tauri dan Rust, aplikasi ini menawarkan performa super cepat, ukuran yang ringan, dan antarmuka yang intuitif.",
    thumbnail: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/calibre-laptop-showcase-thumbnail-1.png",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
        description: "Tampilan Antarmuka Konversi Dokumen"
      }
    ],
    techStack: ["Rust", "Tauri", "TypeScript"],
    features: [
      {
        title: "Konversi Multi-Format",
        description: "Mendukung konversi antar berbagai format dokumen populer seperti PDF, DOCX, Markdown, dan HTML secara instan tanpa mengubah tata letak dokumen asli."
      },
      {
        title: "Pemrosesan Lokal & Privasi Penuh",
        description: "Seluruh proses manipulasi dokumen dilakukan sepenuhnya secara offline di dalam perangkat pengguna, menjamin keamanan data yang sifatnya rahasia (confidential)."
      },
      {
        title: "Batch Processing (Mendatang)",
        description: "Fitur untuk memproses antrean puluhan atau ratusan file dokumen sekaligus menggunakan arsitektur multithreading Rust guna memaksimalkan produktivitas."
      },
      {
        title: "Advanced PDF Tooling (Mendatang)",
        description: "Peralatan tambahan yang terintegrasi langsung untuk mengelola PDF seperti menggabungkan beberapa file (merge), mengekstrak halaman (split), dan kompresi ukuran."
      },
      {
        title: "Integrasi OCR Engine (Mendatang)",
        description: "Modul Optical Character Recognition untuk membaca, mendeteksi, dan menyalin teks dari file dokumen berbasis gambar atau hasil pemindaian (scan)."
      }
    ],
    technologies: [
      {
        title: "Calibre Core Engine",
        description: "Menggunakan CLI dan engine konversi bawaan dari ekosistem Calibre untuk memproses konversi ratusan jenis dokumen dengan struktur yang sangat kompleks (PDF, EPUB, MOBI, AZW3, dll)."
      },
      {
        title: "Rust Core (Backend)",
        description: "Semua logika sistem file, manajemen proses (child process untuk memanggil engine Calibre), dan multithreading dikendalikan secara native menggunakan Rust untuk menjamin performa tanpa bottleneck."
      },
      {
        title: "Tauri Framework",
        description: "Berperan sebagai jembatan yang menghubungkan backend Rust dengan UI berbasis web. Menghasilkan ukuran file aplikasi yang sangat kecil (kurang dari 10MB) dibanding menggunakan framework Chromium seperti Electron."
      }
    ]
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
