<template>
  <div 
    class="timeline-view-wrapper"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- Page Header (Moved from index.astro) -->
    <div class="page-header">
      <h1 class="page-title">Galeri & Jejak Langkah</h1>
      
      <div class="header-actions-container">
        <!-- Year Selector Dropdown -->
        <div class="year-selector-wrapper">
          <select v-model="activeYear" class="year-dropdown" aria-label="Pilih Tahun">
            <option v-for="y in availableYears" :key="y" :value="y">Tahun {{ y }}</option>
          </select>
          <i class="fa-solid fa-chevron-down dropdown-icon"></i>
        </div>

        <!-- Global Map Trigger -->
        <button id="global-map-trigger" class="btn-global-map" @click="openGlobalMap">
          <i class="fa-solid fa-map-location-dot"></i> Lihat Peta Indonesia
        </button>
      </div>
    </div>

    <!-- Timeline Content with slide transition -->
    <div class="timeline-content-wrapper">
      <Transition :name="transitionName" mode="out-in">
        <div :key="activeYear" class="timeline-container">
          <!-- Render timeline sections if items exist -->
          <template v-if="filteredItems.length > 0">
            <TimelineSection
              v-for="(item, index) in filteredItems"
              :key="item.id"
              :title="item.title + '<br>' + item.location"
              :date="item.date"
              :dotColor="item.dotColor"
              :link="'/perjalanan/' + item.id"
              :rtl="item.rtl"
              :isAlternate="index % 2 !== 0"
              :marginTop="index > 0 ? '150px' : '0px'"
              :mapEmbedUrl="item.mapEmbedUrl || ''"
            >
              <TimelineCard
                v-for="momen in item.moments.slice(0, 4)"
                :key="momen.title"
                :image="momen.image"
                :title="momen.title"
                :description="momen.description"
                :accentColor="momen.accentColor"
              />
              <div v-if="item.moments.length > 4" class="more-indicator">
                <span>+{{ item.moments.length - 4 }} Foto Lainnya</span>
              </div>
            </TimelineSection>
          </template>
          
          <!-- Empty State -->
          <div v-else class="empty-state">
            <div class="empty-icon"><i class="ph-duotone ph-airplane-tilt"></i></div>
            <h3>Belum ada perjalanan di tahun {{ activeYear }}</h3>
            <p>Mungkin masih dalam perencanaan atau belum diupdate.</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import TimelineSection from './TimelineSection.vue';
import TimelineCard from './TimelineCard.vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

// Calculate available years (Ensuring 2025, 2026, 2027 are available for logic testing)
// Mengambil tahun yang tersedia berdasarkan data, diurutkan dari terbaru ke terlama
const availableYears = computed(() => {
  const years = new Set(props.items.map(item => item.year));
  // Add hardcoded years for demonstration of swipe/swap logic
  years.add(2027);
  years.add(2026);
  years.add(2025);
  years.add(2024);
  years.add(2023);
  years.add(2022);
  return Array.from(years).sort((a, b) => b - a); // Sort descending (newest first)
});

// State
const initialYear = props.items.length > 0 ? Math.max(...props.items.map(item => item.year)) : new Date().getFullYear();
const activeYear = ref(initialYear);
const transitionName = ref('slide-left');
let touchStartX = 0;

// Filtered items based on active year
const filteredItems = computed(() => {
  return props.items.filter(item => item.year === activeYear.value);
});

// Watch dropdown changes to determine slide direction
watch(activeYear, (newVal, oldVal) => {
  const newIndex = availableYears.value.indexOf(newVal);
  const oldIndex = availableYears.value.indexOf(oldVal);
  if (newIndex > oldIndex) {
    transitionName.value = 'slide-left'; // Moving to older year (further down the list)
  } else if (newIndex < oldIndex) {
    transitionName.value = 'slide-right'; // Moving to newer year
  }
});

// Swipe Logic
const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const onTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const diffX = touchEndX - touchStartX;
  
  if (Math.abs(diffX) > 60) {
    const currentIndex = availableYears.value.indexOf(activeYear.value);
    if (diffX > 0) {
      // Swipe Right -> Go to previous index (Newer year)
      if (currentIndex > 0) {
        activeYear.value = availableYears.value[currentIndex - 1];
      }
    } else {
      // Swipe Left -> Go to next index (Older year)
      if (currentIndex < availableYears.value.length - 1) {
        activeYear.value = availableYears.value[currentIndex + 1];
      }
    }
  }
};

// Open Global Map
const openGlobalMap = () => {
  window.dispatchEvent(new Event('open-global-map'));
};
</script>

<style scoped>
.timeline-view-wrapper {
  width: 100%;
}

/* Page Header Styles (Copied from index.astro) */
.page-header {
  text-align: center;
  margin-bottom: 50px;
  margin-top: 40px;
  position: relative;
  z-index: 2;
  background-color: var(--bg-color);
  padding: 20px 0;
}

.page-title {
  font-size: 2.5rem;
  color: var(--accent-3);
  margin: 0 0 10px 0;
  font-weight: 700;
}

.page-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.header-actions-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Year Selector Styles */
.year-selector-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.year-dropdown {
  appearance: none;
  background-color: #ffffff;
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 10px 44px 10px 20px;
  border: 2px solid var(--border-light);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 4px 4px 0px rgba(15, 23, 42, 0.05);
  transition: all 0.2s ease;
  outline: none;
}

.year-dropdown:focus {
  border-color: var(--accent-1);
}

.dropdown-icon {
  position: absolute;
  right: 16px;
  pointer-events: none;
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Global Map Button Styles */
.btn-global-map {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--accent-1);
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: 10px 24px;
  border: 2px solid var(--border-light);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 4px 4px 0px rgba(15, 23, 42, 1);
  transition: all 0.2s ease;
  font-family: 'Inter', sans-serif;
}

.btn-global-map:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px rgba(15, 23, 42, 1);
  background-color: var(--accent-3);
}

.btn-global-map:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px rgba(15, 23, 42, 1);
}

/* Timeline Container */
.timeline-content-wrapper {
  position: relative;
  min-height: 500px;
}

.timeline-container {
  position: relative;
  padding-top: 10px;
}

.more-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  height: 280px;
  align-self: start;
}

.more-indicator span {
  color: #c9c1b5;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  border: 2px dashed var(--border-light);
  margin: 0 auto;
  max-width: 600px;
}

.empty-icon {
  font-size: 3rem;
  color: var(--text-muted);
  opacity: 0.5;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 10px;
}

.empty-state p {
  color: var(--text-muted);
}

/* --- Slide Transitions --- */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Move Left (Going to older year) */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}

/* Move Right (Going to newer year) */
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

@media (max-width: 480px) {
  .header-actions-container {
    flex-direction: column;
    gap: 12px;
  }
  .btn-global-map, .year-selector-wrapper {
    width: 100%;
  }
  .year-dropdown {
    width: 100%;
  }
}
</style>
