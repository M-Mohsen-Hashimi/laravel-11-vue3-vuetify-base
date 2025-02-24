import { createI18n } from "vue-i18n";
import en from "./locales/en";
import fa from "./locales/dr";
import ps from "./locales/pa";

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fa,
    ps,
  },
});
