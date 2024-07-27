<template>
  <v-app>
    <v-container fluid>
      <HelloWorld />
      <v-row no-gutters>
        <!-- Left Panel (Non-scrollable) -->
        <v-col cols="12" md="8" class="left-panel">
          <v-card class="card-tilet mb-4">
            <v-card-text>
              <WorkExp />
              <EducationHistory />
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Right Panel (Sticky) -->
        <v-col cols="12" md="4" class="right-panel">
          <v-card class="card-tilet mb-4">
            <v-card-text>
              <TechStack />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import WorkExp from "./components/WorkExp.vue";
import EducationHistory from "./components/EducationHistory.vue";
import TechStack from "./components/TechStack.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    WorkExp,
    EducationHistory,
    TechStack,
  },
  setup() {
    const myCard = ref<HTMLElement | null>(null);
    const myCard2 = ref<HTMLElement | null>(null);

    const handleMouseMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const xPercent = (x / width) * 100;
      const yPercent = (y / height) * 100;
      card.style.transform = `rotateX(${(yPercent - 50) * 0.2}deg) rotateY(${
        (xPercent - 50) * 0.2
      }deg)`;
    };

    const handleMouseEnter = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
      card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
    };

    const handleMouseLeave = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    };

    onMounted(() => {
      if (myCard.value) {
        myCard.value.addEventListener("mousemove", handleMouseMove);
        myCard.value.addEventListener("mouseenter", handleMouseEnter);
        myCard.value.addEventListener("mouseleave", handleMouseLeave);
      }
      if (myCard2.value) {
        myCard2.value.addEventListener("mousemove", handleMouseMove);
        myCard2.value.addEventListener("mouseenter", handleMouseEnter);
        myCard2.value.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    onUnmounted(() => {
      if (myCard.value) {
        myCard.value.removeEventListener("mousemove", handleMouseMove);
        myCard.value.removeEventListener("mouseenter", handleMouseEnter);
        myCard.value.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (myCard2.value) {
        myCard2.value.removeEventListener("mousemove", handleMouseMove);
        myCard2.value.removeEventListener("mouseenter", handleMouseEnter);
        myCard2.value.removeEventListener("mouseleave", handleMouseLeave);
      }
    });

    return { myCard, myCard2 };
  },
});
</script>

<style scoped>
.left-panel {
  height: calc(100vh - 64px); /* Adjust according to your app bar height */
  padding-right: 16px; /* Add padding to avoid content being hidden behind scrollbar */
}

.right-panel {
  position: sticky;
  margin-left: 16px;
  margin-top: 1%;
  height: calc(100vh - 64px); /* Adjust according to your app bar height */
  display: flex;
  align-items: flex-start;
}

.v-row {
  display: flex;
  margin-top: 1%;
}

.v-col {
  padding: 0;
}

/* Mobile Styles */
@media (max-width: 767px) {
  .v-row {
    flex-direction: column; /* Stack columns vertically */
    align-items: center; /* Center horizontally */
  }

  .left-panel,
  .right-panel {
    height: auto; /* Remove height restriction for mobile */
    margin: 0; /* Remove margin for mobile */
    padding: 0; /* Remove padding for mobile */
    width: 100%; /* Make panels full width */
  }

  .right-panel {
    display: flex;
    justify-content: center !important; /* Center horizontally */
    align-items: center !important; /* Center vertically within the viewport */
    margin: 16px 0;
    width: 100%; /* Ensure the right panel takes full width on mobile */
  }
}
</style>
