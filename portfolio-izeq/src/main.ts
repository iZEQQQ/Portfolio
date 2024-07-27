import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";

// Import Vuetify
import { createVuetify } from "vuetify/dist/vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

// Create Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    sets: {
      mdi,
    },
  },
});

const app = createApp(App).use(vuetify).mount("#app");
