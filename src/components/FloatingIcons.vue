<template>
  <div class="floating-icons-container">
    <i 
      v-for="(icon, index) in generatedIcons" 
      :key="index"
      :class="['fa-solid', icon.name, 'floating-icon']"
      :style="{
        top: icon.top + '%',
        left: icon.isLeft ? icon.x + '%' : 'auto',
        right: !icon.isLeft ? icon.x + '%' : 'auto',
        color: icon.color,
        transform: `rotate(${icon.rotation}deg) scale(${icon.scale})`,
        opacity: icon.opacity
      }"
    ></i>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  isDarkTheme: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 20 // Default jumlah dikurangi agar tidak terlalu ramai
  },
  sizeModifier: {
    type: Number,
    default: 1.0 // Ukuran kembali ke standar
  }
});

// Daftar icon dari Font Awesome yang sesuai tema web (Travel, Tech, Personal)
const iconList = [
  'fa-fingerprint', // Mirip thumbprint
  'fa-camera', 
  'fa-compass', 
  'fa-code', 
  'fa-laptop-code',
  'fa-map-location-dot',
  'fa-plane',
  'fa-mug-hot',
  'fa-gamepad'
];

// Warna-warna yang sesuai dengan tema Tech Slate & Indigo
const lightColors = [
  '#6366f1', // Indigo
  '#14b8a6', // Teal
  '#0ea5e9', // Sky
  '#8b5cf6', // Violet
  '#64748b', // Slate
];

const darkColors = [
  '#ffffff', // Putih untuk section gelap
  '#f8fafc',
  '#e2e8f0'
];

const generatedIcons = ref([]);

onMounted(() => {
  const icons = [];
  const themeColors = props.isDarkTheme ? darkColors : lightColors;
  
  // Membagi kuota icon ke sisi kiri dan kanan secara adil
  const halfCount = Math.floor(props.count / 2);
  
  // Menghitung jarak tinggi tiap segmen agar icon tidak bertumpuk
  const segmentHeight = 100 / halfCount;
  
  // Generate Icon Sisi Kiri
  for (let i = 0; i < halfCount; i++) {
    // Posisi X digeser mendekati konten (antara 8% sampai 15% dari pinggir layar)
    const x = 8 + Math.random() * 7;
    
    // Posisi Y dijamin berada di dalam rentang segmennya (0-10%, 10-20%, dst)
    // Ditambah sedikit random offset agar posisinya organik
    const top = (i * segmentHeight) + (Math.random() * (segmentHeight * 0.7));
    
    icons.push({
      name: iconList[Math.floor(Math.random() * iconList.length)],
      isLeft: true,
      x,
      top,
      color: themeColors[Math.floor(Math.random() * themeColors.length)],
      rotation: Math.random() * 360,
      scale: (0.9 + Math.random() * 0.6) * props.sizeModifier, // Ukuran pas, tidak raksasa
      opacity: props.isDarkTheme ? (0.08 + Math.random() * 0.1) : (0.08 + Math.random() * 0.12) 
    });
  }

  // Generate Icon Sisi Kanan
  for (let i = 0; i < halfCount; i++) {
    const x = 8 + Math.random() * 7;
    const top = (i * segmentHeight) + (Math.random() * (segmentHeight * 0.7));
    
    icons.push({
      name: iconList[Math.floor(Math.random() * iconList.length)],
      isLeft: false,
      x,
      top,
      color: themeColors[Math.floor(Math.random() * themeColors.length)],
      rotation: Math.random() * 360,
      scale: (0.9 + Math.random() * 0.6) * props.sizeModifier,
      opacity: props.isDarkTheme ? (0.08 + Math.random() * 0.1) : (0.08 + Math.random() * 0.12) 
    });
  }
  
  generatedIcons.value = icons;
});
</script>

<style scoped>
.floating-icons-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0; /* Di bawah konten utama */
}

.floating-icon {
  position: absolute;
  transition: opacity 0.5s ease-in;
}
</style>
