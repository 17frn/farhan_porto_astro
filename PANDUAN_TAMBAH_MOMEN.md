# Panduan Menambahkan Momen Perjalanan Baru

Ikuti langkah-langkah di bawah ini untuk menambahkan destinasi atau momen perjalanan baru ke dalam halaman portofolio kamu.

## File Utama yang Diedit
Semua data perjalanan disimpan dalam satu file:
`src/data/timeline.ts`

---

## Langkah-langkah Menambahkan Data

### 1. Buka File Data
Buka file `src/data/timeline.ts` di editor kode kamu.

### 2. Tambahkan Objek Baru ke dalam `timelineItems`
Cari array `export const timelineItems: TimelineData[] = [...]`. Tambahkan satu blok objek `{ ... }` baru di dalam array tersebut. 

> [!TIP]
> Agar momen terbaru muncul paling atas di halaman perjalanan, tambahkan objek baru ini di baris paling awal dalam array.

### 3. Isi Properti Utama
Berikut adalah struktur properti yang harus kamu isi:

```typescript
{
  id: "id-unik-bebas", // Digunakan untuk URL (contoh: "trip-bali-2026")
  title: "Judul Destinasi", // Contoh: "Tanah Lot"
  location: "Nama Kota/Daerah", // Contoh: "Tabanan, Bali"
  date: "Bulan Tahun", // Contoh: "Mei 2026"
  year: 2026, // PENTING: Gunakan angka (2026). Ini untuk filter tahun & swap logic.
  dotColor: "var(--accent-1)", // Warna titik timeline (pilih: --accent-1 sampai --accent-6)
  rtl: false, // Gunakan 'true' jika ingin gambar di kanan (layout selang-seling)
  mapEmbedUrl: "URL_EMBED_GOOGLE_MAPS", // Link embed dari Google Maps
  latitude: -8.621, // Koordinat untuk pin di Peta Indonesia
  longitude: 115.084, // Koordinat untuk pin di Peta Indonesia
  moments: [
    // Isi dengan foto-foto (lihat langkah 4)
  ]
},
```

### 4. Tambahkan Foto-foto (Moments)
Di dalam array `moments: []`, tambahkan objek untuk setiap foto yang ingin ditampilkan:

```typescript
moments: [
  {
    title: "Momen 1",
    description: "Keterangan foto kamu di sini.",
    image: "https://link-foto-kamu.com/gambar.jpg",
    accentColor: "var(--accent-1)" // Warna aksen kartu
  },
  // Tambahkan lebih banyak jika perlu
]
```

### 5. Cara Mendapatkan Koordinat Peta
Untuk fitur **Peta Indonesia**, kamu butuh `latitude` dan `longitude`:
1. Buka Google Maps.
2. Klik kanan pada lokasi yang diinginkan.
3. Angka pertama adalah `latitude`, angka kedua adalah `longitude`. Salin angka tersebut ke `timeline.ts`.

---

## Ketentuan Otomatis
- **Tahun Baru**: Jika kamu memasukkan `year` yang belum ada (misal: 2027), maka dropdown tahun di halaman perjalanan akan otomatis memunculkan pilihan tahun tersebut.
- **Scroll Down**: Jika dalam satu tahun ada banyak destinasi, halaman akan otomatis memanjang ke bawah (scroll vertical).
- **Swap Year**: Untuk berpindah antar tahun yang berbeda, kamu bisa menggunakan dropdown di header atau swipe kiri/kanan di HP.

---

**Selesai!** Setelah file disimpan, jalankan `npm run dev` untuk melihat perubahan secara langsung.
