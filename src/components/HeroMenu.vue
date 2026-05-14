<template>
  <!-- Backdrop transparan - menutup saat klik di luar panel -->
  <div 
    v-if="isOpen" 
    class="menu-backdrop" 
    @click="$emit('close')"
  ></div>

  <!-- Panel Popup - fixed ke viewport, tidak mempengaruhi layout -->
  <div class="island-panel" :class="{ 'is-open': isOpen }">
    <div class="panel-header">
      <span class="panel-title">Info Singkat</span>
      <span class="panel-divider"></span>
      <button class="panel-close" @click="$emit('close')" aria-label="Tutup menu">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="panel-body">
      <div class="panel-item">
        <i class="fa-solid fa-code panel-icon"></i>
        <div>
          <span class="panel-label">Status</span>
          <span class="panel-value">Open to Freelance Project</span>
        </div>
      </div>
      <div class="panel-item">
        <i class="fa-solid fa-clock panel-icon"></i>
        <div>
          <span class="panel-label">Ketersediaan</span>
          <span class="panel-value">Part-time / Remote</span>
        </div>
      </div>
      <div class="panel-item">
        <i class="fa-solid fa-layer-group panel-icon"></i>
        <div>
          <span class="panel-label">Stack Utama</span>
          <span class="panel-value">Vue, Astro, Nuxt</span>
        </div>
      </div>
      <div class="panel-item">
        <i class="fa-solid fa-envelope panel-icon"></i>
        <div>
          <span class="panel-label">Kontak</span>
          <span class="panel-value">17frn03@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  anchorTop: {
    type: String,
    default: '80px'
  },
  anchorRight: {
    type: String,
    default: '20px'
  }
});

defineEmits(['close']);
</script>

<style scoped>
/* Backdrop: transparan, hanya untuk mendeteksi klik luar.
   Tidak menghalangi scroll atau tampilan elemen di bawahnya. */
.menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: transparent;
  pointer-events: all;
}

/* Panel: fixed ke viewport, tidak pernah menyentuh document flow */
.island-panel {
  position: fixed;
  top: v-bind(anchorTop);
  right: v-bind(anchorRight);
  width: 260px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 16px;
  box-shadow:
    0 16px 48px rgba(15, 23, 42, 0.14),
    0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  padding: 16px;
  z-index: 999;

  /* State awal: tersembunyi ke kanan, di luar layar */
  opacity: 0;
  transform: translateX(16px) scale(0.96);
  pointer-events: none;
  transition:
    opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* State aktif: swipe masuk dari kanan */
.island-panel.is-open {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: all;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.panel-title {
  font-size: 0.72rem;
  font-weight: 700;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  white-space: nowrap;
}

.panel-divider {
  display: block;
  flex: 1;
  height: 1px;
  background: rgba(99, 102, 241, 0.2);
}

.panel-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 0.85rem;
  padding: 2px 4px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
  line-height: 1;
}

.panel-close:hover {
  color: var(--text-main);
  background: rgba(0, 0, 0, 0.05);
}

.panel-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.panel-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.panel-icon {
  color: #6366f1;
  font-size: 0.9rem;
  width: 18px;
  margin-top: 3px;
  flex-shrink: 0;
}

.panel-label {
  display: block;
  font-size: 0.68rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 700;
  margin-bottom: 2px;
}

.panel-value {
  display: block;
  font-size: 0.9rem;
  color: var(--text-main);
  font-weight: 600;
  line-height: 1.3;
}
</style>
