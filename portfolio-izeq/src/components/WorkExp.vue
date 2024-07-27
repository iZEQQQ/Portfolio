<template>
  <v-container>
    <v-card class="mb-4 main-card">
      <v-card-title>Professional Experience</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <!-- Hilti AG Experience -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="mb-4 job-card">
              <v-card-title>
                <strong>09/2023 – 08/2024</strong>
              </v-card-title>
              <v-card-subtitle>
                Software Developer, Hilti AG, Buchs SG, Switzerland
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <strong>Brief description of the position:</strong>
                </p>
                <v-list dense>
                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-briefcase-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      At Hilti, which specializes in innovative construction
                      tools globally, my primary role involves developing a
                      software tool for processing sales data.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-cog-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      My responsibilities include monitoring, testing, and
                      maintaining software within a project, participating in
                      meetings, and contributing ideas for improvements and
                      implementations.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-code-tags</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      Daily, I develop software with Java and Spring Boot,
                      monitor performance via Datadog, and actively contribute
                      to project meetings, suggesting and implementing
                      improvements.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-check-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      My work resulted in reduced time for buying requests, and
                      decreased error rates in checkout and order creation
                      processes.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-tools</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <strong>Main stack:</strong> Java, Spring Boot, Git,
                      DataDog
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Yumasoft Sp. z o. o Experience -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="mb-4 job-card">
              <v-card-title>
                <strong>07/2021 – 08/2023</strong>
              </v-card-title>
              <v-card-subtitle>
                Full-stack Developer, Yumasoft Sp. z o. o, Wrocław, Poland
              </v-card-subtitle>
              <v-card-text>
                <p>
                  <strong>Brief description of the position:</strong>
                </p>
                <v-list dense>
                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-briefcase-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      At Yumasoft, a software development company, I worked as a
                      full-stack developer on projects aimed at digitizing and
                      streamlining audit processes to minimize the use of Excel
                      sheets and enhance efficiency.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-cog-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      My main responsibilities included developing software
                      solutions for clients to digitalize audit processes, as
                      well as maintaining WordPress advertising sites for
                      companies to ensure their online presence and
                      functionality.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-code-tags</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      I engaged in full-stack development, designing and
                      implementing user interfaces, and back-end services. For
                      WordPress sites, I performed routine maintenance, updates,
                      and ensured optimal performance and security against
                      potential downtime.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-check-circle-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      Successfully digitalized client audit software, reducing
                      their reliance on manual Excel sheet entries, and
                      maintained fully functional company WordPress sites with
                      zero downtime in production environments.
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item class="list-item">
                    <v-list-item-icon>
                      <v-icon left>mdi-tools</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <strong>Main stack:</strong> Java, Spring Boot, WordPress,
                      Git, Linux
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
  name: "WorkExp",
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}

.main-card {
  padding: 20px;
}

.job-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
}

.list-item {
  margin-bottom: 10px; /* Adjust this value to increase or decrease spacing */
}
</style>
