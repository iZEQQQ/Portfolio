<template>
  <StickyLamp class="slide-in" />
  <v-app class="slide-in-right">
    <v-container fluid>
      <HelloWorld />
      <v-row no-gutters>
        <!-- Left Panel (Non-scrollable) -->
        <v-col cols="12" md="8" class="left-panel">
          <v-card class="card-tilet mb-4">
            <v-card-text>
              <WorkExp />
              <EducationHistory />
              <v-icon size="larger">mdi-bike-pedal-mountain</v-icon>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Right Panel (Sticky) -->
        <v-col cols="12" md="4" class="right-panel">
          <v-card class="card-tilet mb-4">
            <v-card-text>
              <TechStack />
              <v-icon size="larger">mdi-ski</v-icon>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <MouseFollowCircle />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import WorkExp from "./components/WorkExp.vue";
import EducationHistory from "./components/EducationHistory.vue";
import TechStack from "./components/TechStack.vue";
import MouseFollowCircle from "./components/MouseFollowCircle.vue";
import StickyLamp from "./components/StickyLamp.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    WorkExp,
    EducationHistory,
    TechStack,
    MouseFollowCircle,
    StickyLamp,
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

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.7s ease-out;
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slideInFromRight 0.7s ease-out;
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
