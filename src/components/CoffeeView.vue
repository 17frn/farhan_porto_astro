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
          <div 
            v-if="kopi.mapEmbedUrl" 
            @click.stop="openMap(kopi)" 
            class="coffee-location clickable"
            title="Lihat Peta Lokasi"
          >
            <i class="fa-solid fa-location-dot location-icon"></i>
            <span>{{ kopi.location }}</span>
          </div>
          <p v-else class="coffee-location">
            <i class="fa-solid fa-location-dot"></i> {{ kopi.location }}
          </p>
          <div class="badges-row">
            <!-- Tipe Toko Badges (Max 2) -->
            <template v-for="(t, idx) in kopi.type.split(',').map(item => item.trim()).slice(0, 2)" :key="'type-' + idx">
              <div class="glass-badge type-badge">
                <i class="fa-solid fa-tag"></i> {{ t }}
              </div>
            </template>
            <div v-if="kopi.type.split(',').length > 2" class="glass-badge type-badge more-badge" title="Tipe lainnya">
              +{{ kopi.type.split(',').length - 2 }}
            </div>

            <!-- Menu Favorit Badges (Max 2) -->
            <div class="glass-badge fav-label-badge">
              <i class="fa-solid fa-star"></i> Rekomendasi:
            </div>
            <template v-for="(m, idx) in kopi.favoriteMenu.split(',').map(item => item.trim()).slice(0, 2)" :key="'menu-' + idx">
              <div class="glass-badge menu-badge">
                <i class="fa-solid fa-mug-hot"></i> {{ m }}
              </div>
            </template>
            <div v-if="kopi.favoriteMenu.split(',').length > 2" class="glass-badge menu-badge more-badge" title="Menu favorit lainnya">
              +{{ kopi.favoriteMenu.split(',').length - 2 }}
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
      <p>Coba ubah filter menu favorit atau toko lainnya :)</p>
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
            <div class="modal-badges-row" v-if="selectedCoffee">
              <!-- Render semua Tipe -->
              <div 
                v-for="t in selectedCoffee.type.split(',').map(item => item.trim())" 
                :key="'modal-type-' + t"
                class="glass-badge type-badge"
              >
                <i class="fa-solid fa-tag"></i> {{ t }}
              </div>
              
              <!-- Label Menu Favorit -->
              <div class="glass-badge fav-label-badge modal-label">
                <i class="fa-solid fa-star"></i> Rekomendasi:
              </div>
              
              <!-- Render semua Menu Favorit -->
              <div 
                v-for="m in selectedCoffee.favoriteMenu.split(',').map(item => item.trim())" 
                :key="'modal-menu-' + m"
                class="glass-badge menu-badge"
              >
                <i class="fa-solid fa-mug-hot"></i> {{ m }}
              </div>
            </div>
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

    <!-- Map Dialog Modal -->
    <dialog ref="mapDialog" class="map-dialog" @click="onDialogClick" @close="onDialogClose">
      <div class="dialog-content">
        <button class="close-btn" @click="closeMap" aria-label="Tutup Peta">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="iframe-container">
          <iframe 
            v-if="activeMapUrl"
            :src="activeMapUrl" 
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="false" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </dialog>
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

const mapDialog = ref(null);
const activeMapUrl = ref('');

const openMap = (kopi) => {
  activeMapUrl.value = kopi.mapEmbedUrl;
  if (mapDialog.value) {
    mapDialog.value.showModal();
    document.documentElement.classList.add('modal-open');
  }
};

const closeMap = () => {
  if (mapDialog.value) {
    mapDialog.value.close();
    activeMapUrl.value = '';
  }
};

const onDialogClick = (e) => {
  if (e.target === mapDialog.value) closeMap();
};

const onDialogClose = () => {
  document.documentElement.classList.remove('modal-open');
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
  grid-template-columns: repeat(auto-fill, minmax(var(--coffee-grid-min-width, 320px), 1fr));
  gap: var(--coffee-grid-gap, 24px);
}

.coffee-card {
  background-color: var(--coffee-card-bg, var(--bg-color, #ffffff));
  border: var(--coffee-card-border, 3px solid var(--border-light, #0f172a));
  border-radius: var(--coffee-card-radius, 16px);
  overflow: hidden;
  box-shadow: var(--coffee-card-shadow, 6px 6px 0px rgba(15, 23, 42, 1));
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) backwards;
  display: flex;
  flex-direction: column;
  position: relative;
}

.coffee-card:hover {
  transform: var(--coffee-card-hover-transform, translate(-4px, -4px));
  box-shadow: var(--coffee-card-hover-shadow, 10px 10px 0px rgba(15, 23, 42, 1));
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

.coffee-location.clickable {
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.coffee-location.clickable:hover {
  color: var(--accent-1, #3b82f6);
}

.coffee-location.clickable .location-icon {
  transition: all 0.2s ease;
}

.coffee-location.clickable:hover .location-icon {
  transform: scale(1.2) translateY(-1px);
  color: var(--accent-3, #e11d48);
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.type-badge {
  background: var(--accent-7, #8b5cf6);
  color: white;
}

.menu-badge {
  background: var(--accent-8, #3b82f6);
  color: white;
}

.fav-label-badge {
  background: var(--bg-color, #ffffff) !important;
  color: var(--text-main, #0f172a) !important;
  border-style: dashed !important;
  font-weight: 700;
  box-shadow: none !important;
  transform: none !important;
  user-select: none;
}

.more-badge {
  font-weight: 800;
  opacity: 0.85;
}

.modal-badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.modal-label {
  margin-left: 8px;
}

@media (max-width: 480px) {
  .modal-label {
    margin-left: 0;
  }
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



/* --- Map Dialog Styles --- */
.map-dialog {
  border: none;
  border-radius: 20px;
  padding: 0;
  background: transparent;
  max-width: 90vw;
  width: 800px;
  max-height: 90vh;
  overflow: hidden;
}

.map-dialog::backdrop {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
}

.dialog-content {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
}

.close-btn {
  position: absolute;
  top: -14px;
  right: -14px;
  background: #f43f5e;
  color: white;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(244, 63, 94, 0.4);
  transition: all 0.2s ease;
  z-index: 10;
}

.close-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(244, 63, 94, 0.55);
}

.iframe-container {
  width: 100%;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
}
</style>
