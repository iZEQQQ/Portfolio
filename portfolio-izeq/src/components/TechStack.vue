<template>
  <v-container fluid>
    <v-card-title>Tech Stack</v-card-title>
    <v-divider></v-divider>
    <v-row class="tech-stack" no-gutters>
      <!-- Iterate through techTypes to create CardInfo components -->
      <v-col
        v-for="techType in techTypes"
        :key="techType.name"
        cols="12"
        md="6"
        lg="4"
        class="d-flex justify-center mb-4"
      >
        <CardInfo :name="techType.name">
          <v-row>
            <v-col
              cols="12"
              v-for="tech in techType.technologies"
              :key="tech.name"
              class="d-flex align-center"
            >
              <v-icon left>{{ tech.icon }}</v-icon>
              {{ tech.name }}
            </v-col>
          </v-row>
        </CardInfo>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardInfo from "./CardInfo.vue";

export default defineComponent({
  name: "TechStack",
  components: {
    CardInfo,
  },
  data() {
    return {
      techTypes: [
        {
          name: "Backend",
          technologies: [
            { name: "Java", icon: "mdi-language-java" },
            { name: "Spring Boot", icon: "mdi-leaf" },
            { name: "Hibernate", icon: "mdi-database" },
            { name: "Tomcat", icon: "mdi-server" },
            { name: "Netty", icon: "mdi-server" },
            { name: "PostgreSQL", icon: "mdi-database" },
            { name: "MySQL", icon: "mdi-database" },
            { name: "MongoDB", icon: "mdi-database" },
            { name: "Gradle", icon: "mdi-progress-wrench" },
            { name: "Maven", icon: "mdi-cube-outline" },
          ],
        },
        {
          name: "Frontend",
          technologies: [
            { name: "TypeScript", icon: "mdi-language-typescript" },
            { name: "Vue.js 3.0", icon: "mdi-vuejs" },
            { name: "Vuetify", icon: "mdi-vuejs" },
            { name: "HTML", icon: "mdi-language-html5" },
            { name: "CSS", icon: "mdi-language-css3" },
          ],
        },
        {
          name: "DevOps&Tools",
          technologies: [
            { name: "Git", icon: "mdi-git" },
            { name: "Docker", icon: "mdi-docker" },
            { name: "GitLab", icon: "mdi-gitlab" },
            { name: "Bitbucket", icon: "mdi-bitbucket" },
            { name: "GitHub", icon: "mdi-github" },
            { name: "Linux", icon: "mdi-linux" },
            { name: "Bash", icon: "mdi-console" },
            { name: "Datadog", icon: "mdi-dog" },
            { name: "DataGrip", icon: "mdi-database" },
            { name: "IntelliJ IDEA", icon: "mdi-code-braces" },
          ],
        },
        {
          name: "Hobby Tech",
          technologies: [
            { name: "Fleet App", icon: "mdi-rocket" },
            { name: "Kotlin", icon: "mdi-language-kotlin" },
          ],
        },
      ],
    };
  },
});
</script>

<style scoped>
.tech-stack {
  display: flex;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically if height is constrained */
  flex-wrap: wrap;
  gap: 16px; /* Space between cards */
}

.v-card {
  width: 100%; /* Ensure cards are responsive */
  max-width: 400px; /* Optional: Limit max-width of cards for better appearance */
}

.v-icon {
  margin-right: 10px;
}

/* Optional: Adjust the card layout for different screen sizes */
@media (max-width: 600px) {
  .tech-stack {
    flex-direction: column; /* Stack vertically on smaller screens */
  }
}
</style>
