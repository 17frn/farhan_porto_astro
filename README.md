<div align="center">
  <h1>🗺️ frnpage — Portofolio Personal Farhan R</h1>
  
  <p>Website portofolio personal interaktif yang menampilkan rekam jejak perjalanan (<em>timeline</em>), galeri momen, dan katalog proyek.</p>

<a href="https://frnpage.my.id"><strong>🌐 Kunjungi Website (Live)</strong></a>

<br /><br />

  <!-- Tech Stack Badges -->
  <img src="https://img.shields.io/badge/Astro-FF7E33?style=for-the-badge&logo=astro&logoColor=white" alt="Astro JS" />
  <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</div>

---

## ✨ Fitur Utama

- 🚀 **Performa Tinggi:** Dibangun dengan Astro JS yang mengutamakan kecepatan dan efisiensi pengiriman HTML statis.
- 🏝️ **Dynamic Island Navigation:** Navigasi melayang bergaya _pill_ yang adaptif dan interaktif, terinspirasi dari antarmuka modern.
- 🎨 **Desain Unik (Neo-Brutalism):** Menggabungkan estetika desain **Neo-Brutalism** (garis tegas & _solid drop shadow_) dengan efek 2-layer, transisi halus (_cubic-bezier_), dan _glassmorphism_. Tampilan optimal di Mobile, Tablet, dan Desktop.
- 📽️ **Smart Project Cards:** Interaksi _hover_ pada kartu portofolio yang dinamis menyesuaikan rasio gambar menjadi 16:9 secara otomatis di perangkat desktop.
- ️ **Timeline Interaktif:** Section perjalanan dengan latar belakang selang-seling dan _floating icons_ adaptif. Kini dilengkapi dengan **Year-based Filtering** dan navigasi **Touch Swipe** (Geser Layar) yang mulus untuk berpindah antar tahun.
- 🗺️ **Peta Perjalanan Interaktif:** Peta Indonesia interaktif murni SVG dengan ukuran pin adaptif, dukungan gestur sentuh mobile (_pan_, _pinch-to-zoom_), dan _smart popup_ lokasi anti-terpotong. Kini terintegrasi dengan filter tahun aktif.
- 📍 **Integrasi Minimap:** Ter-_generate_ minimap interaktif otomatis dari tautan embed Google Maps pada setiap detail lokasi perjalanan.
- 🔗 **Dynamic Routing:** Halaman detail untuk setiap perjalanan dan proyek dibangun dan dikelola secara dinamis.

---

## 🛠️ Teknologi & Stack

| Peran               | Teknologi      | Deskripsi                                               |
| ------------------- | -------------- | ------------------------------------------------------- |
| **Framework Utama** | Astro v5       | Pengelola _routing_ dan SSG (_Static Site Generation_)  |
| **Komponen UI**     | Vue.js v3      | Menangani interaktivitas (_Astro Islands architecture_) |
| **Ikonografi**      | Font Awesome 6 | Ikon vektor ringan untuk UI & latar belakang            |
| **Deployment**      | Vercel         | CI/CD otomatis untuk _hosting_ yang cepat dan andal     |

---

## 📂 Struktur Proyek Terpenting

<details>
<summary>Klik untuk melihat arsitektur direktori</summary>

```text
src/
├── components/        # Komponen UI interaktif (Vue & Astro)
│   ├── Hero.vue
│   ├── HeroMenu.vue
│   └── DynamicIsland.vue
├── data/              # Sumber data konten website
│   ├── timeline.ts    # Data perjalanan
│   └── proyek.ts      # Data portofolio proyek
├── layouts/           # Template kerangka utama halaman
│   └── Layout.astro
└── pages/             # File-based routing Astro
    ├── index.astro
    ├── perjalanan/
    └── proyek/
```

</details>

---

## 📝 Panduan Manajemen Konten

Arsitektur web ini memisahkan antara logika UI dan data konten untuk kemudahan perawatan (_maintenance_).

- 🖼️ **Portofolio Proyek:** Tambah/edit data di `src/data/proyek.ts`
- ✈️ **Riwayat Perjalanan:** Tambah/edit data di `src/data/timeline.ts`.
  - Wajib sertakan `latitude` & `longitude` agar _pin_ otomatis muncul di Peta Indonesia.
  - Sertakan `mapEmbedUrl` (Link Google Maps Embed) agar CTA dan komponen Minimap ter-_generate_ otomatis.
- 👨‍💻 **Profil & Hero Section:** Edit teks/gambar di `src/components/Hero.vue`

---

<div align="center">
  <p>Dibuat dengan ☕ dan semangat eksplorasi oleh <strong>Farhan R</strong>.</p>
</div>
