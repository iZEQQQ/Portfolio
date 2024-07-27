<template>
  <v-container>
    <v-card class="main-card">
      <v-card-title>Education</v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12">
            <v-card class="card-tilt education-card">
              <v-card-title>
                <strong>10/2018 – 02/2022</strong>
              </v-card-title>
              <v-card-subtitle>
                Bachelor’s degree in Computer Science
              </v-card-subtitle>
              <v-card-text>
                <v-list dense>
                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-school-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      Polish-Japanese Institute of Information Technology
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-laptop-chromebook</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <strong>Specialization:</strong> Web Application
                      Development
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "EducationHistory",
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}

.main-card {
  padding: 20px;
}

.education-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
}

.list-item {
  margin-bottom: 10px; /* Adjust this value to increase or decrease spacing */
}
</style>
