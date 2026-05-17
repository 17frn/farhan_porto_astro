export interface CoffeeData {
  id: string;
  name: string;
  location: string;
  rating: number; // 1-5
  favoriteMenu: string;
  images: string[];
  type: string;
  date: string;
  review: string;
  mapEmbedUrl?: string;
}

export const coffeeItems: CoffeeData[] = [
  {
    id: "family-mart-cinangka-pamulang",
    name: "Family Mart Cinangka Pamulang",
    location: "Pamulang, Tangerang Selatan",
    rating: 4.5,
    favoriteMenu: "Ice Americano, Coffe Latte",
    type: "Kopi, Non Coffee, Minimarket",
    images: [
      "https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-17-at-09.29.31.jpeg",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
    ],
    date: "19 April 2026",
    review: "First impression biasa saja. Menu variatif tapi cuma 2 yang jadi favoritku. Sayang, kasir tidak menawarkan opsi dine-in/take-away. Poin plusnya: dekat rumah, bisa buat nongkrong & opsi pembayaran yang beragam. Poin minusnya ada tukang parkir doang sih",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.28406619249955!2d106.74756339417307!3d-6.360422368351794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef0016341cfb%3A0x1f56121eaefe24f0!2sFamilyMart%20Cinangka%20Pamulang!5e0!3m2!1sid!2sid!4v1778986865408!5m2!1sid!2sid"
  },
  {
    id: "dua-coffee-cipete",
    name: "Dua Coffee",
    location: "Cipete, Jakarta Selatan",
    rating: 4.5,
    favoriteMenu: "Cappuccino",
    type: "Classic Coffee",
    images: [
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800"
    ],
    date: "15 September 2023",
    review: "Tempat pewe buat WFC, kopinya enak dan banyak pilihan pastry.",
    mapEmbedUrl: "https://www.google.com/maps?q=Dua+Coffee+Cipete&output=embed"
  },
  {
    id: "common-grounds-scbd",
    name: "Common Grounds",
    location: "SCBD, Jakarta Selatan",
    rating: 4.7,
    favoriteMenu: "V60 Ethiopian",
    type: "Manual Brew",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800"
    ],
    date: "20 Oktober 2023",
    review: "The place for serious coffee drinkers. Their manual brew selection is always top-notch.",
    mapEmbedUrl: "https://www.google.com/maps?q=Common+Grounds+SCBD&output=embed"
  }
];