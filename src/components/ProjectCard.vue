<template>
  <a :href="link" class="project-card" :style="{ height: height }" :aria-label="`Lihat detail ${title}`">
    <!-- Top Badges — always visible -->
    <div class="card-badges">
      <div v-if="status" class="badge status-tag">{{ status }}</div>
      <div class="badge category-tag">{{ category }}</div>
    </div>

    <!-- Full-bleed thumbnail -->
    <img :src="thumbnail" :alt="title" class="card-image" loading="lazy" decoding="async" />

    <!-- Footer — slides up on hover -->
    <div class="card-footer">
      <div class="card-footer-left">
        <span class="card-title">{{ title }}</span>
      </div>
      <div class="card-action-btn" aria-hidden="true">
        <i class="fa-solid fa-arrow-up-right"></i>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  category: String,
  status: String,
  description: String,
  thumbnail: String,
  link: String,
  height: {
    type: String,
    default: '380px',
  },
});
</script>

<style scoped>
/* ─── Card Shell ─── */
.project-card {
  position: relative;
  display: block;
  height: 380px;
  border: 4px solid #000000;
  border-radius: 28px;
  overflow: hidden;
  background-color: #111111;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 8px 8px 0px 0px #000000;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translate(-2px, -4px);
  box-shadow: 10px 12px 0px 0px #000000;
}

/* ─── Full-bleed Image ─── */
.card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.55s ease, filter 0.55s ease;
  will-change: transform;
}

.project-card:hover .card-image {
  transform: scale(1.07);
  filter: brightness(0.65);
}

/* ─── Top Badges ─── */
.card-badges {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 8px;
  z-index: 2;
}

.badge {
  background-color: #ffffff;
  border: 3px solid #000000;
  border-radius: 9999px;
  padding: 6px 20px;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #000000;
  box-shadow: 3px 3px 0px 0px #000000;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover .badge {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px 0px #000000;
}

.project-card:hover .category-tag {
  background-color: #00e5ff;
}

.project-card:hover .status-tag {
  background-color: #ffde59; /* Warna kuning untuk status */
}

/* ─── Slide-up Footer ─── */
.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #ffffff;
  border-top: 4px solid #000000;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  transform: translateY(100%);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.project-card:hover .card-footer {
  transform: translateY(0);
}

.card-footer-left {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  padding-right: 16px;
}

.card-title {
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  color: #000000;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ─── Action Button ─── */
.card-action-btn {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border: 4px solid #000000;
  border-radius: 50%;
  background-color: #00e5ff;
  box-shadow: 4px 4px 0px 0px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-action-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px #000000;
}

.card-action-btn i {
  font-size: 1.25rem;
  color: #000000;
}

/* ─── Responsive ─── */
@media (max-width: 480px) {
  .project-card {
    height: 300px;
    border-radius: 20px;
    box-shadow: 6px 6px 0px 0px #000000;
  }

  .card-footer {
    height: 76px;
    padding: 0 20px;
  }

  .card-title {
    font-size: 0.95rem;
  }

  .card-action-btn {
    width: 44px;
    height: 44px;
  }
}
</style>
