<template>
  <div class="card">
    <div class="card-image-wrapper">
      <img :src="image" :alt="title" class="card-image">
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p v-html="description"></p>
    </div>
    <div class="card-accent" :style="{ borderBottomColor: accentColor }"></div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  accentColor: {
    type: String,
    default: '#e66a5c'
  }
});
</script>

<style scoped>
.card {
  direction: ltr;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.15);
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  position: relative;
}

.card-image-wrapper {
  aspect-ratio: 9 / 16;
  overflow: hidden;
  background-color: #f1f5f9;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 20px;
  background: #ffffff;
  flex-grow: 1;
}

h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: var(--text-main);
  font-weight: 600;
}

p {
  margin: 0;
  font-size: 0.9rem;
  color: #a39587;
  line-height: 1.5;
}

.card-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 35px solid;
  border-left: 35px solid transparent;
}
</style>
