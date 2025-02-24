import "./bootstrap";
import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router";
import { i18n } from "./src/i18n/";
import { createPinia } from 'pinia'

const pinia = createPinia()

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      variant: "text",
    },
  },
  theme: {
    defaultTheme: "light",
  },
});

const app = createApp(App);
app.use(router).use(pinia).use(vuetify).use(i18n).mount("#app");
