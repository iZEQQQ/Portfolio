<template>
  <div class="sticky">
    <v-icon
      v-bind:class="['large-icon', { glow: isLightOn }]"
      @click="toggleLight"
    >
      {{ icon }}
    </v-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "CeilingLight",
  setup() {
    const isLightOn = ref(false);

    const toggleLight = () => {
      isLightOn.value = !isLightOn.value;
    };

    const icon = computed(() =>
      isLightOn.value
        ? "mdi-lightbulb-variant-outline"
        : "mdi-lightbulb-variant"
    );

    return { isLightOn, toggleLight, icon };
  },
});
</script>

<style scoped>
.sticky {
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  top: 0;
  padding: 10px;
  z-index: 1000;
  text-align: center;
}

.glow {
  color: orange;
  animation: glow-animation 1s infinite alternate;
}

.large-icon {
  font-size: 64px; /* Adjust the size as needed */
}

@keyframes glow-animation {
  from {
    text-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 30px orange,
      0 0 40px orange, 0 0 50px orange, 0 0 60px orange, 0 0 70px orange;
  }
  to {
    text-shadow: 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow,
      0 0 50px yellow, 0 0 60px yellow, 0 0 70px yellow, 0 0 80px yellow;
  }
}
</style>
