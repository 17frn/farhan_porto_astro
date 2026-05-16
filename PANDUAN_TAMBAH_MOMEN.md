# 🗺️ Panduan Menambah Jejak Langkah (Timeline)

Halo Farhan! Ini adalah panduan untuk menambah catatan perjalanan atau momen baru ke halaman "Perjalanan".

---

### 📂 Lokasi File
File yang harus kamu edit:  
`src/data/timeline.ts`

---

### 🛠️ Langkah-langkah Menambah Perjalanan Baru

1.  **Buka File**: Buka `src/data/timeline.ts`.
2.  **Cari Array `timelineItems`**: Tambahkan objek baru di dalam array tersebut.
3.  **Gunakan Template**: Salin kode di bawah ini.

### 📝 Template Siap Pakai

```typescript
  {
    id: "nama-lokasi-unik", // Tanpa spasi, contoh: "pantai-parangtritis"
    title: "Nama Tempat",
    location: "Kota/Provinsi",
    date: "15 Mei 2026", // Format: Tanggal Bulan Tahun
    year: 2026, // Pastikan tahunnya benar untuk filter
    dotColor: "var(--accent-1)", // Pilih accent-1 sampai accent-6
    rtl: false, // Ubah ke true jika ingin posisi kartu di kiri (untuk variasi)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=...", // Link embed dari Google Maps
    latitude: -6.1234, // Koordinat untuk pin di peta
    longitude: 106.1234,
    moments: [
      {
        title: "Judul Momen 1",
        description: "Cerita singkat di foto ini.",
        image: "https://link-foto-1.jpg",
        accentColor: "var(--accent-2)"
      },
      // Bisa tambah banyak momen di sini...
    ]
  },
```

---

### 💡 Penjelasan Field Penting

*   **`latitude` & `longitude`**: Wajib diisi agar "Pin" lokasi kamu muncul otomatis di Peta Indonesia yang ada di web.
*   **`mapEmbedUrl`**: Ambil dari Google Maps -> Share -> Embed a map -> Salin isi `src="..."`. Ini digunakan untuk menampilkan Minimap di halaman detail.
*   **`rtl`**: Jika `false`, konten ada di kanan garis. Jika `true`, konten ada di kiri. Sebaiknya diselang-seling agar rapi.
*   **`accentColor`**: Gunakan variabel warna yang sudah ada (`var(--accent-1)` sampai `var(--accent-6)`) agar desain tetap konsisten.

---

### ✨ Tips
- **Urutan**: Kamu tidak perlu pusing soal urutan di file ini, karena sistem sudah otomatis mengurutkan berdasarkan tanggal terbaru di halaman utama.
- **Gambar**: Gunakan link gambar yang stabil (seperti WordPress atau layanan hosting gambar lainnya).

Selamat mencatat perjalananmu! ✈️🌍
