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
}

export const coffeeItems: CoffeeData[] = [
  {
    id: "kopi-tuku-cipete",
    name: "Toko Kopi Tuku",
    location: "Cipete, Jakarta Selatan",
    rating: 5,
    favoriteMenu: "Kopi Susu Tetangga",
    type: "Es Kopi Susu",
    images: [
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
    ],
    date: "10 Agustus 2023",
    review: "Pelopor es kopi susu gula aren kesukaan umat. Rasanya konsisten dan creamy."
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
    review: "Tempat pewe buat WFC, kopinya enak dan banyak pilihan pastry."
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
    review: "The place for serious coffee drinkers. Their manual brew selection is always top-notch."
  }
];