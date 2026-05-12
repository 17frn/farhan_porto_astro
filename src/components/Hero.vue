<template>
  <div class="hero">

    <!-- Tombol Trigger Kanan Atas -->
    <div class="island-wrapper">
      <button
        ref="btnRef"
        class="island-btn"
        :class="{ 'is-active': isMenuOpen }"
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Tutup menu' : 'Buka menu'"
      >
        <i class="fa-solid fa-play island-icon"></i>
      </button>
    </div>

    <!-- Menu Popup (komponen terpisah, diteleport ke body) -->
    <HeroMenu
      :isOpen="isMenuOpen"
      :anchorTop="menuTop"
      :anchorRight="menuRight"
      @close="isMenuOpen = false"
    />

    <!-- Sidebar Kiri: Info Cepat -->
    <div class="hero-sidebar">
      <div class="info-list">
        <div class="info-item-simple">
          <span class="label">Domisili</span>
          <span class="value">Tangerang Selatan, Banten</span>
        </div>
        <div class="info-item-simple">
          <span class="label">Hal yang Disukai</span>
          <div class="tags-container">
            <span class="tag">Kopi</span>
            <span class="tag">Nonton Anime</span>
            <span class="tag">Prototyping Web/Desktop Apps</span>
            <span class="tag">Pergi Tempat Baru</span>
            <span class="tag">Main Game</span>
            <span class="tag">Solo Touring</span>
          </div>
        </div>
        <div class="info-item-simple">
          <span class="label">Riwayat Pendidikan</span>
          <div class="edu-item">
            <span class="value">S1 Sistem Informasi</span>
            <span class="sub-value">Universitas Pamulang (2022 - Sekarang)</span>
          </div>
          <div class="edu-item">
            <span class="value">IPS</span>
            <span class="sub-value">SMA Negeri 1 Wuryantoro (2018 - 2021)</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bagian Utama: Foto dan Teks -->
    <div class="hero-main">
      <div class="hero-image-wrapper">
        <img 
          src="https://farhandoang.wordpress.com/wp-content/uploads/2026/05/whatsapp-image-2026-05-11-at-21.51.47.jpeg" 
          alt="Foto Profil" 
          class="hero-image"
        >
      </div>
      <div class="hero-text">
        <h1>Farhan R</h1>
        <p class="description">
          Selamat datang di ruang digital saya! Website ini didedikasikan sebagai etalase karya untuk melihat <strong>preview proyek</strong> (yang sedang berjalan maupun telah selesai) serta rekam jejak <strong>timeline perjalanan</strong> dari tempat-tempat yang pernah saya kunjungi.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroMenu from './HeroMenu.vue';

const isMenuOpen = ref(false);
const btnRef = ref(null);
const menuTop = ref('80px');
const menuRight = ref('20px');

const toggleMenu = () => {
  if (btnRef.value) {
    const rect = btnRef.value.getBoundingClientRect();
    menuTop.value = (rect.bottom + 8) + 'px';
    menuRight.value = (window.innerWidth - rect.right) + 'px';
  }
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 40px;
  padding: 40px;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}

/* === TABLET (481px - 1024px) === */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 220px 1fr;
    gap: 28px;
    padding: 28px;
  }
}

/* === MOBILE (≤ 480px) === */
@media (max-width: 480px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 16px;
    margin-bottom: 32px;
  }
}

.hero::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  width: 100%;
  height: 100%;
  background-color: #ff8243;
  border-radius: 16px;
  border: 1px solid var(--border-light);
  z-index: -2;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.1);
  border: 1px solid var(--border-light);
  z-index: -1;
}

@media (max-width: 800px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

/* ========================
   ISLAND WRAPPER & BUTTON
   ======================== */
.island-wrapper {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 100;
}

.island-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}

.island-btn:hover {
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.5);
  transform: scale(1.05);
}

.island-btn:active {
  transform: scale(0.96);
}

.island-icon {
  color: #ffffff;
  font-size: 0.9rem;
  /* fa-play default = ▶ (lancip kanan)
     Idle: putar 180° supaya lancip ke kiri ◀ */
  transform: rotate(180deg);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: block;
}

/* Klik: lancip ke bawah ▼ (putar -90° dari posisi idle) */
.island-btn.is-active .island-icon {
  transform: rotate(90deg);
}


/* ========================
   SIDEBAR KIRI
   ======================== */
.hero-sidebar {
  border-right: 2px dashed var(--border-light);
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* === TABLET === */
@media (max-width: 1024px) {
  .hero-sidebar {
    padding-right: 28px;
  }
}

/* === MOBILE === */
@media (max-width: 480px) {
  .hero-sidebar {
    border-right: none;
    border-bottom: 2px dashed var(--border-light);
    padding-right: 0;
    padding-bottom: 20px;
  }
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item-simple {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 4px;
}

.value {
  font-size: 0.95rem;
  color: var(--text-main);
  font-weight: 700;
  line-height: 1.4;
}

.sub-value {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.edu-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding-left: 12px;
  border-left: 2px solid var(--accent-1);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background-color: var(--bg-color);
  color: var(--text-main);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--border-light);
}

/* ========================
   HERO MAIN
   ======================== */
.hero-main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
}

.hero-image-wrapper {
  flex-shrink: 0;
  width: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.2);
  border: 6px solid #ffffff;
  background-color: #ffffff;
  aspect-ratio: 3/4;
  position: relative;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.hero-text {
  flex: 1;
  min-width: 200px;
  text-align: left;
}

/* === TABLET === */
@media (max-width: 1024px) {
  .hero-main {
    gap: 24px;
  }
  .hero-image-wrapper {
    width: 160px;
  }
}

/* === MOBILE === */
@media (max-width: 480px) {
  .hero-main {
    flex-direction: column;
    align-items: center;
  }
  .hero-image-wrapper {
    width: 140px;
  }
  .hero-text {
    text-align: center;
    min-width: unset;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
  }
  .description {
    font-size: 0.95rem;
  }
}

h1 {
  font-size: 2.8rem;
  color: var(--text-main);
  margin: 0 0 15px 0;
  font-weight: 700;
}

.description {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
}

.description strong {
  color: var(--text-main);
  font-weight: 700;
}
</style>
