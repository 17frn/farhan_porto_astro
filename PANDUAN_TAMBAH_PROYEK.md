# 🚀 Panduan Menambah Proyek Baru

Halo Farhan! Ini adalah panduan sederhana untuk menambah proyek baru ke dalam portofolio kamu. Kamu hanya perlu mengedit satu file saja.

---

### 📂 Lokasi File
File yang harus kamu edit ada di:  
`src/data/proyek.ts`

---

### 🛠️ Langkah-langkah Menambah Proyek

1.  **Buka File**: Buka file `src/data/proyek.ts` di VS Code atau editor pilihanmu.
2.  **Cari Bagian Akhir**: Scroll sampai ke bagian paling bawah file, sebelum tanda `];`.
3.  **Copy-Paste Template**: Salin kode di bawah ini dan tempelkan di sana.

### 📝 Template Siap Pakai
Salin kode ini dan isi sesuai data proyekmu:

```typescript
  {
    id: "nama-proyek-kamu", 
    title: "Judul Proyek Besar",
    category: "Web App", // Bisa Web App, Desktop App, atau Mobile App
    status: "Done", // Status: Done, On going, atau Almost Done
    description: "Tulis penjelasan singkat tapi keren tentang proyek ini di sini.",
    thumbnail: "https://link-ke-gambar-kecil.jpg",
    images: [
      {
        url: "https://link-ke-gambar-besar-1.jpg",
        description: "Tampilan Halaman Utama"
      },
      {
        url: "https://link-ke-gambar-besar-2.jpg",
        description: "Fitur Dashboard"
      }
    ],
    techStack: ["React", "Node.js", "PostgreSQL"], // Daftar teknologi yang dipake
  },
```

---

### 💡 Penjelasan Isi (Biar Gak Bingung)

| Bagian | Kegunaan |
| :--- | :--- |
| **id** | Nama unik proyek (buat URL). Gunakan huruf kecil dan sambung pakai tanda minus `-`. |
| **title** | Nama asli proyek yang bakal tampil gede di layar. |
| **category** | Jenis proyeknya apa. |
| **status** | Proyeknya sudah selesai atau masih dikerjakan. |
| **description** | Ceritakan proyek ini tentang apa dan kenapa kamu buat. |
| **thumbnail** | Gambar cover yang muncul di kartu proyek depan. |
| **images** | Foto-foto screenshot proyekmu biar orang bisa lihat isinya. |
| **techStack** | List teknologi yang kamu pakai (Astro, Vue, Tailwind, dll). |

---

### ✨ Tips Tambahan
- **Gambar**: Pastikan link gambar kamu bisa diakses publik (misal dari WordPress, Cloudinary, atau Unsplash).
- **Koma**: Jangan lupa pastikan ada tanda koma `,` di akhir setiap blok proyek supaya tidak error.
- **Simpan**: Setelah selesai, tinggal **Save** file-nya. Jika kamu pakai mode dev (`npm run dev`), hasilnya akan langsung muncul di browser!

Selamat menambah karya baru! 🎨🔥
