<template>
  <a :href="link" class="project-card">
    <div class="project-thumbnail">
      <img :src="thumbnail" :alt="title">
    </div>
    <div class="project-content">
      <div class="category">{{ category }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  title: String,
  category: String,
  description: String,
  thumbnail: String,
  link: String
});
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
  border: 1px solid var(--border-light);
  text-decoration: none;
  color: var(--text-main);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.15);
}

.project-thumbnail {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: #f1f5f9;
}

.project-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-thumbnail img {
  transform: scale(1.05);
}

.project-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.category {
  font-size: 0.85rem;
  color: var(--accent-1);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 8px;
}

h3 {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-main);
}

p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
