<template>
  <div class="coffee-view-wrapper">
    <div class="dev-marker-container">
      <div class="dev-marker">
        <i class="fa-solid fa-person-digging"></i>
        <span>Halaman ini masih dalam tahap pengembangan<br>dan Menggunakan Data Dummy</span>
      </div>
    </div>
    <div v-if="items.length > 0" class="coffee-grid">
      <div 
        v-for="(kopi, index) in items" 
        :key="kopi.id" 
        class="coffee-card" 
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="coffee-image-container" @click="openGallery(kopi)">
          <img :src="kopi.images[0]" :alt="kopi.name" class="coffee-image" loading="lazy" />
          <div class="gallery-overlay">
            <i class="fa-solid fa-images"></i>
            <span>Lihat Galeri ({{ kopi.images.length }})</span>
          </div>
          <div class="glass-badge rating-badge">
            <i class="fa-solid fa-star"></i> {{ kopi.rating }}
          </div>
        </div>
        <div class="coffee-content">
          <div class="coffee-header">
            <h3 class="coffee-name">{{ kopi.name }}</h3>
            <p class="coffee-date">{{ kopi.date }}</p>
          </div>
          <p class="coffee-location">
            <i class="fa-solid fa-location-dot"></i> {{ kopi.location }}
          </p>
          <div class="badges-row">
            <div class="glass-badge type-badge">
              <i class="fa-solid fa-tag"></i> {{ kopi.type }}
            </div>
            <div class="glass-badge menu-badge">
              <i class="fa-solid fa-mug-hot"></i> {{ kopi.favoriteMenu }}
            </div>
          </div>
          <p class="coffee-review">"{{ kopi.review }}"</p>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
      <div class="empty-icon"><i class="fa-solid fa-mug-saucer"></i></div>
      <h3>Tidak ada kopi yang cocok</h3>
      <p>Coba ubah filter jenis kopi atau toko lainnya :)</p>
    </div>

    <!-- Gallery Modal -->
    <Transition name="modal-fade">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div class="modal-header">
            <h2 class="modal-title">{{ selectedCoffee?.name }}</h2>
            <p class="modal-subtitle">{{ selectedCoffee?.location }}</p>
          </div>
          <div class="modal-grid-gallery">
            <div 
              v-for="(img, i) in selectedCoffee?.images" 
              :key="i" 
              class="modal-image-wrapper"
            >
              <img :src="img" class="modal-image" alt="Coffee Photo" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true
  }
});

const showModal = ref(false);
const selectedCoffee = ref(null);

const openGallery = (kopi) => {
  selectedCoffee.value = kopi;
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  selectedCoffee.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.coffee-view-wrapper {
  padding-top: 10px;
}

.dev-marker-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.dev-marker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #fef08a; /* Warna kuning peringatan (amber/yellow) */
  color: var(--text-main, #0f172a);
  border: 2px dashed var(--border-light, #0f172a);
  padding: 10px 20px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 4px 4px 0px rgba(15, 23, 42, 1);
}

.coffee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.coffee-card {
  background-color: var(--bg-color, #ffffff);
  border: 3px solid var(--border-light, #0f172a);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 6px 6px 0px rgba(15, 23, 42, 1);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards;
  display: flex;
  flex-direction: column;
  position: relative;
}

.coffee-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0px rgba(15, 23, 42, 1);
}

.coffee-image-container {
  position: relative;
  height: 220px;
  border-bottom: 3px solid var(--border-light, #0f172a);
  cursor: pointer;
  overflow: hidden;
}

.coffee-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.coffee-card:hover .coffee-image {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.coffee-image-container:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay i {
  font-size: 1.5rem;
}

.gallery-overlay span {
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.glass-badge {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 2px solid var(--border-light, #0f172a);
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-main, #0f172a);
  box-shadow: 2px 2px 0px rgba(15, 23, 42, 1);
}

.rating-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
}

.rating-badge i {
  color: #fbbf24;
}

.coffee-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex-grow: 1;
}

.coffee-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.coffee-name {
  font-size: 1.35rem;
  font-weight: 800;
  margin: 0;
  color: var(--accent-3, #e11d48);
}

.coffee-date {
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
  margin: 0;
  white-space: nowrap;
  font-weight: 600;
}

.coffee-location {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.type-badge {
  background: var(--accent-2, #8b5cf6);
  color: white;
}

.menu-badge {
  background: var(--accent-1, #3b82f6);
  color: white;
}

.coffee-review {
  font-size: 1rem;
  font-style: italic;
  color: var(--text-main, #0f172a);
  margin: 0;
  line-height: 1.6;
  padding-top: 12px;
  border-top: 2px dashed #cbd5e1;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  border: 3px dashed var(--border-light);
  max-width: 500px;
  margin: 40px auto;
}

.empty-icon {
  font-size: 3rem;
  color: var(--text-muted);
  margin-bottom: 16px;
  opacity: 0.6;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  background: white;
  border: 4px solid var(--border-light);
  border-radius: 24px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  position: relative;
  overflow-y: auto;
  padding: 40px;
  box-shadow: 12px 12px 0px rgba(15, 23, 42, 1);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--accent-3);
  color: white;
  border: 2px solid var(--border-light);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 4px 4px 0px rgba(15, 23, 42, 1);
  transition: all 0.2s ease;
}

.modal-close:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px rgba(15, 23, 42, 1);
}

.modal-header {
  margin-bottom: 30px;
  border-bottom: 3px solid var(--border-light);
  padding-bottom: 20px;
}

.modal-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent-3);
  margin: 0 0 4px 0;
}

.modal-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  font-weight: 600;
  margin: 0;
}

.modal-grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.modal-image-wrapper {
  border: 3px solid var(--border-light);
  border-radius: 12px;
  overflow: hidden;
  height: 200px;
  box-shadow: 4px 4px 0px rgba(15, 23, 42, 1);
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
