<template>
  <div class="circles-container">
    <div
      v-for="(circle, index) in circles"
      :key="index"
      class="circle"
      :class="{ selected: selectedIndex === index }"
      :style="{
        backgroundColor:
          selectedIndex === index
            ? '#ff6347' // Distinct color for selected circle
            : circleColors[index % circleColors.length],
        left: `${circle.x - 12}px`,
        top: `${circle.y - 12}px`,
        transform: `scale(${circle.scale})`,
      }"
      @click="selectCircle(index)"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Original colors
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

const circles = ref([]);
const coords = ref({ x: 0, y: 0 });
const circleColors = ref(colors);
const selectedIndex = ref(null);
const isMobile = ref(false);

const initializeCircles = () => {
  circles.value = Array.from({ length: 20 }, (_, index) => ({
    x: 0,
    y: 0,
    scale: (20 - index) / 20,
  }));
};

const updateCoords = (e) => {
  coords.value.x = e.clientX;
  coords.value.y = e.clientY;
};

const animateCircles = () => {
  let x = coords.value.x;
  let y = coords.value.y;

  circles.value.forEach((circle, index) => {
    circle.x = x;
    circle.y = y;
    const nextCircle = circles.value[index + 1] || circles.value[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
};

const selectCircle = (index) => {
  selectedIndex.value = index;
};

const detectMobile = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  isMobile.value =
    /android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
};

onMounted(() => {
  detectMobile();
  if (!isMobile.value) {
    initializeCircles();
    window.addEventListener("mousemove", updateCoords);
    animateCircles();
  }
});

onBeforeUnmount(() => {
  if (!isMobile.value) {
    window.removeEventListener("mousemove", updateCoords);
  }
});
</script>

<style scoped>
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: white;
  height: 100vh;
  user-select: none; /* Prevent text selection affecting the view */
}

.circles-container {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999;
}

.circle {
  height: 24px;
  width: 24px;
  border-radius: 24px;
  position: absolute;
  transition: transform 0.1s, background-color 0.3s;
  cursor: pointer; /* Shows a pointer cursor when hovering over circles */
}

.circle.selected {
  border: 2px solid black; /* Optional: Add a border or any other style for the selected circle */
}
</style>
