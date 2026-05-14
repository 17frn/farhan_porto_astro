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
  dotColor: string;
  rtl: boolean;
  mapEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
  moments: TimelineMoment[];
}

export const timelineItems: TimelineData[] = [
  {
    id: "pantai-widodaren",
    title: "Pantai Widodaren",
    location: "Gunungkidul - DI Yogyakarta",
    date: "Maret 2026",
    dotColor: "var(--accent-1)",
    rtl: true,
    mapEmbedUrl: "https://www.google.com/maps?q=Pantai+Widodaren+Gunungkidul&output=embed",
    latitude: -8.118,
    longitude: 110.518,
    moments: [
      {
        title: "Momen 1",
        description: "Papan Penunjuk Arah",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.45-1.jpeg",
        accentColor: "var(--accent-1)"
      },
      {
        title: "Momen 2",
        description: "Tebing Batu Pantai Widodaren.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.45.jpeg",
        accentColor: "var(--accent-2)"
      },
      {
        title: "Momen 3",
        description: "Jalur Lintas Selatan <br>Yogyakarta - Pracimantoro.",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.41-1.jpeg",
        accentColor: "var(--accent-3)"
      },
      {
        title: "Momen 4",
        description: "With Teman",
        image: "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.47.41.jpeg",
        accentColor: "var(--accent-4)"
      }
    ]
  },
  {
    id: "gramedia-matraman",
    title: "Gramedia Matraman",
    location: "Jakarta Timur",
    date: "April 2026",
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
      }
    ]
  }
];
