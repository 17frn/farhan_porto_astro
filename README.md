# 🗺️ frnpage — Portofolio Personal Farhan R

Website portofolio personal yang dibangun dengan **Astro JS** + **Vue.js**, menampilkan rekam jejak perjalanan (*timeline*), galeri momen, dan katalog proyek yang dikerjakan.

🌐 **Live:** [frnpage.my.id](https://frnpage.my.id)

---

## ✨ Fitur

- **Multi-halaman** dengan *dynamic routing* untuk detail perjalanan & proyek
- **Timeline selang-seling** — section genap berlatarkan putih, section ganjil berlatarkan ungu (`#624896`) dengan efek *glassmorphism* pada kartu foto
- **Dynamic Island Navigasi** — komponen navigasi melayang bergaya *pill* yang mendeteksi halaman aktif
- **Hero Section** dengan layout 2-kolom (sidebar info + profil), tombol interaktif, dan pop-up menu (`HeroMenu`)
- **Floating Icons** — ikon Font Awesome tersebar acak di latar belakang, adaptif terhadap warna section
- **Efek 2-layer** pada kartu Hero (layer putih utama + bayangan oranye di belakang)
- **Responsif** di semua ukuran layar
- **Animasi halus** — transisi CSS *cubic-bezier*, hover effects, rotasi ikon interaktif

---

## 🗂️ Struktur Direktori

```
src/
├── components/
│   ├── Hero.vue            # Section profil utama dengan sidebar info
│   ├── HeroMenu.vue        # Pop-up menu info singkat (fixed, glassmorphism)
│   ├── DynamicIsland.vue   # Navigasi melayang berbentuk pill
│   ├── FloatingIcons.vue   # Ikon latar belakang acak (FA icons)
│   ├── TimelineSection.vue # Section timeline (mendukung alternating bg)
│   ├── TimelineCard.vue    # Kartu foto momen perjalanan
│   ├── ProjectCard.vue     # Kartu thumbnail proyek
│   └── ComingSoonCard.vue  # Placeholder kartu belum tersedia
│
├── data/
│   ├── timeline.ts         # Data statis perjalanan & momen
│   └── proyek.ts           # Data statis katalog proyek
│
├── layouts/
│   └── Layout.astro        # Layout global (font, CSS variable, FloatingIcons)
│
└── pages/
    ├── index.astro              # Beranda (Hero + preview perjalanan & proyek)
    ├── perjalanan/
    │   ├── index.astro          # Daftar semua perjalanan (timeline)
    │   └── [id].astro           # Detail momen per perjalanan
    └── proyek/
        ├── index.astro          # Katalog semua proyek
        └── [id].astro           # Detail halaman proyek
```

---

## 🎨 Desain & Tema

| Elemen | Nilai |
|---|---|
| Palet warna | **Tech Slate & Indigo** |
| Warna section alternating | `#624896` (ungu) |
| Bayangan hero card | `#ff8243` (oranye) |
| Font | Inter (Google Fonts) |
| Aksen warna | Indigo `#6366f1`, Teal `#14b8a6` |

---

## 🛠️ Teknologi

| Teknologi | Versi | Fungsi |
|---|---|---|
| [Astro](https://astro.build) | v5 | Framework utama, SSG |
| [Vue.js](https://vuejs.org) | v3 | Komponen interaktif |
| [Font Awesome](https://fontawesome.com) | v6 (CDN) | Ikon UI |
| [Cloudinary](https://cloudinary.com) | — | CDN hosting gambar *(opsional)* |

---

## 🚀 Menjalankan Secara Lokal

Pastikan **Node.js v22+** sudah terinstall. Gunakan `nvm` jika perlu:

```bash
nvm use 22
```

```bash
# 1. Install dependensi
npm install

# 2. Jalankan dev server
npm run dev
# → Buka http://localhost:4321

# 3. Build untuk produksi
npm run build
# → Output di folder dist/
```

---

## 📝 Mengubah Konten

Semua data konten dipisahkan dari kode UI:

- **Perjalanan & momen** → edit `src/data/timeline.ts`
- **Proyek** → edit `src/data/proyek.ts`
- **Info profil (Hero)** → edit `src/components/Hero.vue`
- **Info pop-up menu** → edit `src/components/HeroMenu.vue`

---

## 🌐 Deploy

Proyek ini di-*deploy* secara otomatis ke **Vercel** setiap kali ada `git push` ke branch `main`.

```
git push origin main  →  Vercel auto-build  →  frnpage.my.id terupdate
```

---

*Dibuat dengan ☕ dan semangat eksplorasi.*
