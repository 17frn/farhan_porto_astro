# Portofolio Astro & Vue

Proyek ini adalah sebuah portofolio web sederhana berbentuk *timeline* (linimasa), yang dibangun menggunakan **Astro JS** dan dikombinasikan dengan **Vue.js** untuk komponen UI-nya.

## Fitur Utama

- **Astro JS (v5)**: Sebagai *framework* utama untuk render halaman yang sangat cepat.
- **Vue.js**: Digunakan untuk mengelola komponen antarmuka yang interaktif.
- **Desain Responsif**: Tampilan yang rapi di perangkat seluler maupun *desktop*.
- **Tema Pastel**: Warna yang lembut untuk kenyamanan visual.

## Struktur Direktori

- `src/pages/index.astro`: Halaman utama portofolio.
- `src/layouts/Layout.astro`: Tata letak dasar HTML.
- `src/components/`: Kumpulan komponen Vue (`Hero.vue`, `TimelineSection.vue`, `TimelineCard.vue`, `ComingSoonCard.vue`).

## Cara Menjalankan Proyek Secara Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) versi terbaru (direkomendasikan v22 ke atas).

1. Buka terminal di dalam direktori proyek.
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka tautan lokal yang tertera di terminal (biasanya `http://localhost:4321`) di *browser* Anda.

## Membuat Build untuk Produksi

Jika Anda ingin menghasilkan situs statis untuk di-host (misalnya di Vercel, Netlify, atau GitHub Pages), jalankan:

```bash
npm run build
```

Hasil kompilasi akan berada di dalam direktori `dist/`.

## Mengubah Konten

Untuk mengubah foto, teks, atau momen di dalam linimasa, Anda dapat membuka file `src/pages/index.astro` dan memodifikasi *props* yang dikirim ke setiap komponen Vue.
