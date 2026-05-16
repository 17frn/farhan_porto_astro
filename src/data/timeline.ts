export interface TimelineMoment {
  title: string;
  description: string;
  image: string;
  accentColor: string;
}

export interface TimelineData {
  id: string;
  title: string;
  location: string;
  date: string;
  year: number;
  dotColor: string;
  rtl: boolean;
  mapEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
  moments: TimelineMoment[];
}

export const timelineItems: TimelineData[] = [
  //--------------- TIMELINE 2025 -----------------------------
  {
    id: "gereja-katedral-paroki-santa-perawan-maria",
    title: "Gereja Katedral Paroki Santa Perawan Maria",
    location: "Jakarta Pusat",
    date: "29 Desember 2025",
    year: 2025,
    dotColor: "var(--accent-1)",
    rtl: false,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.712503596153!2d106.83080087570909!3d-6.169238293818061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cef86e21ad%3A0x3ecfda74692fc79!2sGereja%20Katedral%20Jakarta%2C%20Paroki%20Santa%20Perawan%20Maria%20Diangkat%20ke%20Surga!5e0!3m2!1sid!2sid!4v1778913810103!5m2!1sid!2sid",
    latitude: -6.169024959713769,
    longitude: 106.8333757963551,
    moments: [
      {
        title: "Momen 1",
        description: "Gatau gue lagi liat foto ini ngapain.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-13.21.15.jpeg",
        accentColor: "var(--accent-4)"
      },
      {
        title: "Momen 2",
        description: "Ruang Gereja.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-13.21.151.jpeg",
        accentColor: "var(--accent-6)"
      },
      {
        title: "Momen 3",
        description: "Foto",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-13.21.16.jpeg",
        accentColor: "var(--accent-1)"
      },
      {
        title: "Momen 4",
        description: "Kucing Tidur",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-13.21.161.jpeg",
        accentColor: "var(--accent-2)"
      }
    ]
  },
  //--------------- TIMELINE 2026 -----------------------------
  {
    id: "pantai-widodaren",
    title: "Pantai Widodaren",
    location: "Gunungkidul - DI Yogyakarta",
    date: "24 Maret 2026",
    year: 2026,
    dotColor: "var(--accent-1)",
    rtl: true,
    mapEmbedUrl: "https://www.google.com/maps?q=Pantai+Widodaren+Gunungkidul&output=embed",
    latitude: -8.118,
    longitude: 110.518,
    moments: [
      {
        title: "Momen 1",
        description: "Papan Penunjuk Arah - JLS Pracimantoro",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.45-1.jpeg",
        accentColor: "var(--accent-1)"
      },
      {
        title: "Momen 2",
        description: "Tebing Batu Pantai Widodaren",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.45.jpeg",
        accentColor: "var(--accent-2)"
      },
      {
        title: "Momen 3",
        description: "Jalur Lintas Selatan (JLS) <br>Yogyakarta - Pracimantoro.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.41-1.jpeg",
        accentColor: "var(--accent-3)"
      },
      {
        title: "Momen 4",
        description: "With Teman",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.41.jpeg",
        accentColor: "var(--accent-4)"
      },
      {
        title: "Momen 5",
        description: "Ayunan Pohon",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.11.59.jpeg",
        accentColor: "var(--accent-5)"
      },
      {
        title: "Momen 6",
        description: "Perjalanan Pulang (POV dari Dia)",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.11.58.jpeg",
        accentColor: "var(--accent-2)"
      },
      {
        title: "Momen 7",
        description: "Perjalanan Pulang (POV dari Aku)",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.11.581.jpeg",
        accentColor: "var(--accent-1)"
      },
      {
        title: "Momen 8",
        description: "Makan Siang Gasihh?",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.31.17.jpeg",
        accentColor: "var(--accent-4)"
      },
      {
        title: "Momen 9",
        description: "View Laut dari Gazebo",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.11.591.jpeg",
        accentColor: "var(--accent-5)"
      },
      {
        title: "Momen 10",
        description: "View Laut dari Tebing Batu",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.12.00.jpeg",
        accentColor: "var(--accent-6)"
      },
      {
        title: "Momen 11",
        description: "Papan Penunjuk Arah",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.12.001.jpeg",
        accentColor: "var(--accent-4)"
      },
      {
        title: "Momen 12",
        description: "Bundaran Planjan - JLS Gunungkidul",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.12.01.jpeg",
        accentColor: "var(--accent-1)"
      },
      {
        title: "Momen 13",
        description: "View JLS Pracimantoro dari Rumah Makan",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.11.57.jpeg",
        accentColor: "var(--accent-3)"
      }
    ]
  },
  {
    id: "gramedia-matraman",
    title: "Gramedia Matraman",
    location: "Jakarta Timur",
    date: "04 April 2026",
    year: 2026,
    dotColor: "var(--accent-1)",
    rtl: false,
    mapEmbedUrl: "https://www.google.com/maps?q=Gramedia+Matraman+Jakarta&output=embed",
    latitude: -6.200,
    longitude: 106.858,
    moments: [
      {
        title: "Momen 1",
        description: "Preview Buku Novel Fantasi.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.46.58.jpeg",
        accentColor: "var(--accent-5)"
      },
      {
        title: "Momen 2",
        description: "Saya gak diendors loh ya!.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.46.57.jpeg",
        accentColor: "var(--accent-6)"
      },
      {
        title: "Momen 3",
        description: "Anak PUNGUT :v",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.46.58-1.jpeg",
        accentColor: "var(--accent-1)"
      },
      {
        title: "Momen 4",
        description: "POV Kota Jakarta dari St Matraman",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-16-at-17.51.53.jpeg",
        accentColor: "var(--accent-6)"
      }
    ]
  },
];

// Helper untuk mengurutkan timeline berdasarkan tanggal terbaru ke terlama secara kronologis.
// Fungsi ini digunakan oleh Halaman Utama (index.astro) agar tidak berpatokan pada urutan array.
export const getSortedTimeline = (): TimelineData[] => {
  const monthMap: Record<string, number> = {
    "Januari": 0, "Februari": 1, "Maret": 2, "April": 3, "Mei": 4, "Juni": 5,
    "Juli": 6, "Agustus": 7, "September": 8, "Oktober": 9, "November": 10, "Desember": 11
  };

  return [...timelineItems].sort((a, b) => {
    const parseDate = (dateStr: string, fallbackYear: number) => {
      const parts = dateStr.split(" ");
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = monthMap[parts[1]] || 0;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day).getTime();
      }
      return new Date(fallbackYear, 0, 1).getTime();
    };

    return parseDate(b.date, b.year) - parseDate(a.date, a.year);
  });
};
