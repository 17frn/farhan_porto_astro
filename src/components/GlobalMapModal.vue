<template>
  <dialog ref="mapDialog" class="map-dialog" @click="onDialogClick" @close="onDialogClose">
    <div class="dialog-content">
      <button class="close-btn" @click="closeMap" aria-label="Tutup Peta">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div class="map-container-wrapper">
        <h2 class="map-title">Peta Perjalanan</h2>
        <p class="map-subtitle">Titik lokasi tempat yang pernah dikunjungi. Klik provinsi untuk fokus.</p>

        <div class="map-controls">
          <button @click="zoomIn" class="control-btn" aria-label="Zoom In"><i class="fa-solid fa-plus"></i></button>
          <button @click="zoomOut" class="control-btn" aria-label="Zoom Out"><i class="fa-solid fa-minus"></i></button>
          <button @click="resetView" class="control-btn" aria-label="Reset"><i class="fa-solid fa-rotate-left"></i></button>
        </div>

        <div
          class="svg-canvas"
          ref="svgCanvas"
          @wheel.prevent="onWheel"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mouseleave="onMouseUp"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <IndonesiaMapSVG
            :markers="markers"
            :view-scale="viewScale"
            :view-box="currentViewBox"
            @focus-province="handleFocusProvince"
            @marker-click="handleMarkerClick"
          />

          <!-- Marker Popup -->
          <Transition name="popup">
            <div v-if="activeMarker" class="marker-popup" :style="popupStyle" @mousedown.stop>
              <button class="popup-close" @click.stop="activeMarker = null" aria-label="Tutup">
                <i class="fa-solid fa-xmark"></i>
              </button>

              <!-- Header -->
              <div class="popup-header">
                <div class="popup-title-row">
                  <div class="popup-location-badge">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h3 class="popup-title">{{ activeMarker.title }}</h3>
                    <p class="popup-location">
                      <i class="fa-solid fa-map-pin"></i>
                      {{ activeMarker.location }}
                    </p>
                  </div>
                </div>
                <div class="popup-date-row">
                  <i class="fa-regular fa-calendar"></i>
                  {{ activeMarker.date }}
                </div>
              </div>

              <!-- Divider -->
              <div class="popup-divider"></div>

              <!-- Photos label -->
              <div class="popup-photos-label">
                <i class="fa-solid fa-images"></i> Momen
              </div>

              <!-- Photo Grid -->
              <div class="popup-photos" v-if="activeMarker.moments && activeMarker.moments.length">
                <div
                  v-for="(moment, idx) in activeMarker.moments.slice(0, 3)"
                  :key="idx"
                  class="popup-photo"
                >
                  <img :src="moment.image" :alt="moment.description" loading="lazy" />
                  <div class="popup-photo-caption">{{ moment.description }}</div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import IndonesiaMapSVG from './IndonesiaMapSVG.vue';

const props = defineProps({
  isOpen: { type: Boolean, default: false },
  markers: { type: Array, default: () => [] }
});

const emit = defineEmits(['close']);

const mapDialog = ref(null);
const svgCanvas = ref(null);

// ── Marker Popup ──────────────────────────────────────────────────────────────
const activeMarker = ref(null);
const popupClickPos = ref({ x: 0, y: 0 });

const popupStyle = computed(() => {
  return {
    left: popupClickPos.value.x + 'px',
    top: popupClickPos.value.y + 'px',
  };
});

function handleMarkerClick({ marker, event }) {
  activeMarker.value = marker;
  const canvas = svgCanvas.value;
  if (canvas) {
    const rect = canvas.getBoundingClientRect();
    
    const popupWidth = window.innerWidth <= 768 ? 280 : 420;
    const popupHeight = 350; // Estimasi batas maksimal tinggi popup

    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    let x = clickX + 16;
    let y = clickY + 16;

    if (x + popupWidth > rect.width) x = Math.max(12, clickX - popupWidth - 16);
    if (y + popupHeight > rect.height) y = Math.max(12, clickY - popupHeight - 16);

    popupClickPos.value = { x, y };
  }
}

// ── ViewBox state ─────────────────────────────────────────────────────────────
const FULL_VB = { x: 0, y: 0, w: 792.54596, h: 316.66394 };
const vb = ref({ ...FULL_VB });

const currentViewBox = computed(() =>
  `${vb.value.x} ${vb.value.y} ${vb.value.w} ${vb.value.h}`
);

// Scale relative to full view — used for inverse marker sizing
const viewScale = computed(() => FULL_VB.w / vb.value.w);

// ── Animation ─────────────────────────────────────────────────────────────────
let animFrame = null;

function animateViewBox(target, duration = 350) {
  activeMarker.value = null; // Tutup popup ketika map bernavigasi otomatis
  const start = { ...vb.value };
  const t0 = performance.now();
  cancelAnimationFrame(animFrame);

  function step(t) {
    const p = Math.min((t - t0) / duration, 1);
    const ease = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
    vb.value = {
      x: start.x + (target.x - start.x) * ease,
      y: start.y + (target.y - start.y) * ease,
      w: start.w + (target.w - start.w) * ease,
      h: start.h + (target.h - start.h) * ease,
    };
    if (p < 1) animFrame = requestAnimationFrame(step);
  }
  animFrame = requestAnimationFrame(step);
}

// ── Click to focus province ───────────────────────────────────────────────────
function handleFocusProvince(pathEl) {
  const bbox = pathEl.getBBox();
  if (!bbox || bbox.width === 0) return;

  const padX = bbox.width * 0.2;
  const padY = bbox.height * 0.2;

  const canvas = svgCanvas.value;
  const canvasAspect = canvas ? canvas.clientWidth / canvas.clientHeight : FULL_VB.w / FULL_VB.h;

  let tw = bbox.width + padX * 2;
  let th = bbox.height + padY * 2;

  // Adjust to maintain canvas aspect ratio
  if (tw / th > canvasAspect) {
    th = tw / canvasAspect;
  } else {
    tw = th * canvasAspect;
  }

  const cx = bbox.x + bbox.width / 2;
  const cy = bbox.y + bbox.height / 2;

  animateViewBox({ x: cx - tw / 2, y: cy - th / 2, w: tw, h: th });
}

// ── Zoom controls ─────────────────────────────────────────────────────────────
function scaleViewBox(factor) {
  const cx = vb.value.x + vb.value.w / 2;
  const cy = vb.value.y + vb.value.h / 2;
  const aspect = FULL_VB.w / FULL_VB.h;
  const newW = Math.min(Math.max(vb.value.w * factor, 15), FULL_VB.w);
  const newH = newW / aspect;
  animateViewBox({ x: cx - newW / 2, y: cy - newH / 2, w: newW, h: newH });
}

const zoomIn  = () => scaleViewBox(0.65);
const zoomOut = () => scaleViewBox(1 / 0.65);
const resetView = () => animateViewBox({ ...FULL_VB });

// ── Wheel zoom (cursor as focal point) ───────────────────────────────────────
function onWheel(e) {
  activeMarker.value = null; // Tutup popup ketika user melakukan scroll zoom
  const factor = e.deltaY > 0 ? 1.12 : 0.88;
  const canvas = svgCanvas.value;
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();

  // Mouse position in SVG coordinate space
  const mx = vb.value.x + ((e.clientX - rect.left) / rect.width) * vb.value.w;
  const my = vb.value.y + ((e.clientY - rect.top) / rect.height) * vb.value.h;

  const aspect = FULL_VB.w / FULL_VB.h;
  const newW = Math.min(Math.max(vb.value.w * factor, 15), FULL_VB.w * 1.05);
  const newH = newW / aspect;

  // Keep the point under the cursor fixed
  const newX = mx - (mx - vb.value.x) * (newW / vb.value.w);
  const newY = my - (my - vb.value.y) * (newH / vb.value.h);

  cancelAnimationFrame(animFrame);
  vb.value = { x: newX, y: newY, w: newW, h: newH };
}

// ── Drag to pan ───────────────────────────────────────────────────────────────
let isDragging = false;
let dragStart = { mx: 0, my: 0, vbx: 0, vby: 0 };

function onMouseDown(e) {
  if (e.button !== 0) return;
  activeMarker.value = null; // Tutup popup ketika map ditarik/pan
  isDragging = true;
  cancelAnimationFrame(animFrame);
  dragStart = { mx: e.clientX, my: e.clientY, vbx: vb.value.x, vby: vb.value.y };
}

function onMouseMove(e) {
  if (!isDragging) return;
  const canvas = svgCanvas.value;
  const rect = canvas.getBoundingClientRect();
  const sx = vb.value.w / rect.width;
  const sy = vb.value.h / rect.height;
  vb.value = {
    ...vb.value,
    x: dragStart.vbx - (e.clientX - dragStart.mx) * sx,
    y: dragStart.vby - (e.clientY - dragStart.my) * sy,
  };
}

function onMouseUp() { isDragging = false; }

// ── Drag to pan (Layar Sentuh / Mobile) ───────────────────────────────────────
function onTouchStart(e) {
  if (e.touches.length !== 1) return; // Hanya pan jika 1 jari
  activeMarker.value = null; // Tutup popup ketika map ditarik/pan
  isDragging = true;
  cancelAnimationFrame(animFrame);
  dragStart = { mx: e.touches[0].clientX, my: e.touches[0].clientY, vbx: vb.value.x, vby: vb.value.y };
}

function onTouchMove(e) {
  if (!isDragging || e.touches.length !== 1) return;
  e.preventDefault(); // Penting: Mencegah layar ikut scroll/pull-to-refresh
  const canvas = svgCanvas.value;
  const rect = canvas.getBoundingClientRect();
  const sx = vb.value.w / rect.width;
  const sy = vb.value.h / rect.height;
  vb.value = {
    ...vb.value,
    x: dragStart.vbx - (e.touches[0].clientX - dragStart.mx) * sx,
    y: dragStart.vby - (e.touches[0].clientY - dragStart.my) * sy,
  };
}

function onTouchEnd() { isDragging = false; }

// ── Dialog ────────────────────────────────────────────────────────────────────
const openMap = () => {
  if (mapDialog.value && !mapDialog.value.open) {
    mapDialog.value.showModal();
    document.documentElement.classList.add('modal-open');
    vb.value = { ...FULL_VB };
    activeMarker.value = null;
  }
};

const closeMap = () => {
  if (mapDialog.value && mapDialog.value.open) mapDialog.value.close();
};

const onDialogClick = (e) => { if (e.target === mapDialog.value) closeMap(); };
const onDialogClose = () => {
  document.documentElement.classList.remove('modal-open');
  emit('close');
};

onMounted(() => {
  window.addEventListener('open-global-map', openMap);
});

onBeforeUnmount(() => {
  window.removeEventListener('open-global-map', openMap);
  cancelAnimationFrame(animFrame);
});

defineExpose({ openMap });
</script>

<style scoped>
.map-dialog {
  border: none;
  border-radius: 20px;
  padding: 0;
  background: transparent;
  max-width: 95vw;
  width: 1000px;
  max-height: 95vh;
  overflow: hidden;
}

.map-dialog::backdrop {
  background: rgba(30, 20, 60, 0.6);
  backdrop-filter: blur(6px);
}

.dialog-content {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
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

.close-btn:hover { transform: scale(1.1); }

.map-container-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(90vh - 48px);
  min-height: 500px;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.map-title {
  margin: 20px 20px 5px 20px;
  font-size: 1.5rem;
  color: var(--text-main);
}

.map-subtitle {
  margin: 0 20px 10px 20px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.map-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 5;
}

.control-btn {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid var(--border-light);
  color: var(--text-main);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.control-btn:hover {
  background-color: var(--bg-color);
  transform: scale(1.05);
}

.svg-canvas {
  position: relative;
  flex: 1;
  width: 100%;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  touch-action: none; /* Mencegah bentrok dengan scroll/refresh default browser di HP */
}

.svg-canvas:active { cursor: grabbing; }

/* ── Marker Popup  (Neo-Brutalism, matching Hero) ──────────────────── */
.marker-popup {
  position: absolute;
  z-index: 20;
  width: 420px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid var(--border-light, #e2e8f0);
  box-shadow:
    8px 8px 0 0 #ff8243,       /* orange offset — same as Hero */
    0 4px 20px rgba(15,23,42,.12);
  pointer-events: all;
  overflow: hidden;
}

.popup-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--bg-color, #f1f5f9);
  border: 1px solid var(--border-light, #e2e8f0);
  color: var(--text-main, #0f172a);
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: background 0.2s, color 0.2s;
}
.popup-close:hover {
  background: #ff8243;
  color: #fff;
  border-color: #ff8243;
}

/* -- Header -- */
.popup-header {
  padding: 20px 20px 0;
}

.popup-title-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 12px;
}

.popup-location-badge {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #fff3ec;
  border: 1.5px solid #ff8243;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #ff8243;
  flex-shrink: 0;
  margin-top: 2px;
}

.popup-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--text-main, #0f172a);
  margin: 0 0 4px;
  line-height: 1.3;
  padding-right: 36px;
}

.popup-location {
  font-size: 0.82rem;
  color: var(--text-muted, #64748b);
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
}
.popup-location i { color: #ff8243; }

.popup-date-row {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted, #64748b);
  background: var(--bg-color, #f1f5f9);
  border: 1px solid var(--border-light, #e2e8f0);
  border-radius: 20px;
  padding: 4px 12px;
  margin-bottom: 16px;
}

/* -- Divider -- */
.popup-divider {
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--border-light, #e2e8f0) 0,
    var(--border-light, #e2e8f0) 6px,
    transparent 6px,
    transparent 12px
  );
  margin: 0 20px 12px;
}

/* -- Photos section -- */
.popup-photos-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted, #64748b);
  padding: 0 20px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.popup-photos {
  display: flex;
  gap: 8px;
  padding: 0 20px 20px;
}

.popup-photo {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  border: 1.5px solid var(--border-light, #e2e8f0);
  position: relative;
  aspect-ratio: 4/5;
}

.popup-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.popup-photo:hover img { transform: scale(1.07); }

.popup-photo-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: #fff;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 14px 6px 6px;
  text-align: center;
  line-height: 1.3;
}

/* ── Popup Transition ─────────────────────────────────────────────── */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(8px);
}

@media (max-width: 768px) {
  .map-container-wrapper {
    height: 400px;
    min-height: auto;
  }
  .marker-popup { width: 280px; }
}
</style>
