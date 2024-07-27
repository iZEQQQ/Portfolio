<template>
  <v-app>
    <v-container fluid>
      <HelloWorld />
      <v-row no-gutters>
        <!-- Left Panel (Non-scrollable) -->
        <v-col cols="12" md="8" class="left-panel">
          <v-card class="mb-4">
            <v-card-text>
              <WorkExp />
              <EducationHistory />
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Right Panel (Sticky) -->
        <v-col cols="12" md="4" class="right-panel">
          <v-card class="mb-4">
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
import { defineComponent } from "vue";
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
