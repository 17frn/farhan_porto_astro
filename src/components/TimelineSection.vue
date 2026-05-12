<template>
  <div class="timeline-section" :class="{ 'is-alternate': isAlternate }" :style="{ marginTop: marginTop }">
    <FloatingIcons v-if="isAlternate" :isDarkTheme="true" :count="14" :sizeModifier="2.0" />
    <div class="section-inner">
      <div class="section-timeline-line"></div>
      <div class="timeline-dot" :style="{ backgroundColor: dotColor }"></div>
      
      <div class="timeline-header">
        <div class="header-text">
          <h2 v-html="title"></h2>
          <div v-if="location" class="location">
            <i class="fa-solid fa-location-dot"></i> {{ location }}
          </div>
          <div class="date">{{ date }}</div>
        </div>
        <a v-if="link" :href="link" class="link-all">Lihat Semua Tempat &gt;</a>
      </div>

      <!-- Grid Foto -->
      <div class="timeline-grid" :style="{ direction: rtl ? 'rtl' : 'ltr' }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import FloatingIcons from './FloatingIcons.vue';

defineProps({
  title: String,
  date: String,
  location: String,
  dotColor: {
    type: String,
    default: '#e66a5c'
  },
  marginTop: {
    type: String,
    default: '0px'
  },
  link: {
    type: String,
    default: ''
  },
  rtl: {
    type: Boolean,
    default: false
  },
  isAlternate: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.timeline-section {
  position: relative;
  z-index: 1;
  padding: 40px 0; /* Vertical padding to give space to the full-bleed background */
  margin-bottom: 80px;
}

/* Full bleed alternate background */
.timeline-section.is-alternate {
  background-color: #624896;
  width: 100vw;
  margin-left: calc(50% - 50vw);
}

.section-inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* The dotted line inside the section */
.section-timeline-line {
  position: absolute;
  top: -40px; /* span the padding */
  bottom: -120px; /* span to the next section */
  left: 50%;
  width: 2px;
  background-image: linear-gradient(to bottom, #cbd5e1 50%, transparent 50%);
  background-size: 2px 14px;
  background-repeat: repeat-y;
  transform: translateX(-50%);
  z-index: 0;
}

/* Alternate dotted line color */
.timeline-section.is-alternate .section-timeline-line {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 50%, transparent 50%);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  border: 3px solid var(--bg-color);
  border-radius: 50%;
  z-index: 2;
  transition: border-color 0.3s;
}

.timeline-section.is-alternate .timeline-dot {
  border-color: #624896;
}

.timeline-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
  padding-top: 20px;
  position: relative;
  padding-bottom: 10px;
  z-index: 2;
}

.header-text {
  background-color: var(--bg-color);
  padding: 10px 20px 10px 0;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.timeline-section.is-alternate .header-text {
  background-color: transparent;
}

h2 {
  font-size: 2.2rem;
  color: var(--text-main);
  margin: 0 0 5px 0;
  font-weight: 700;
  line-height: 1.2;
  transition: color 0.3s;
}

.timeline-section.is-alternate h2 {
  color: #ffffff;
}

.date {
  font-size: 1rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  transition: color 0.3s;
}

.location {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s;
}

.location i {
  font-size: 0.85rem;
}

.timeline-section.is-alternate .location {
  color: rgba(255, 255, 255, 0.75);
}

.timeline-section.is-alternate .date {
  color: rgba(255, 255, 255, 0.7);
}

.link-all {
  color: var(--accent-1);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  background-color: var(--bg-color);
  padding: 8px 20px;
  border-radius: 20px;
  transition: all 0.3s;
}

.timeline-section.is-alternate .link-all {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(8px);
}

.timeline-section.is-alternate .link-all:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(150px, 33.333% - 20px, 350px), 1fr));
  gap: 30px;
  padding: 0;
}

/* Glassmorphism for cards in alternate section */
:deep(.card) {
  transition: all 0.3s ease;
}

.timeline-section.is-alternate :deep(.card) {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
}

.timeline-section.is-alternate :deep(.card h3) {
  color: #ffffff !important;
}

.timeline-section.is-alternate :deep(.card p) {
  color: rgba(255, 255, 255, 0.8) !important;
}

.timeline-section.is-alternate :deep(.card .card-content) {
  background: transparent !important;
}

.timeline-section.is-alternate :deep(.coming-soon) {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.timeline-section.is-alternate :deep(.coming-soon span),
.timeline-section.is-alternate :deep(.more-indicator span) {
  color: rgba(255, 255, 255, 0.6) !important;
}

.timeline-section.is-alternate :deep(.more-indicator) {
  background: rgba(255, 255, 255, 0.05) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}
</style>
