import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "../stores/useAppStore";

// List of RTL languages
const RTL_LANGUAGES = ["fa", "ps"];

export const useLanguage = (vuetifyInstance: any) => {
  const appStore = useAppStore();
  const { isRTL } = appStore;
  const { locale } = useI18n();
  const dir = ref("ltr");

  const initializeLanguage = () => {
    // Set initial RTL/LTR based on the current locale
    dir.value = RTL_LANGUAGES.includes(locale.value) ? "rtl" : "ltr";
    document.dir = dir.value;
    document.documentElement.lang = locale.value;
    vuetifyInstance.rtl = RTL_LANGUAGES.includes(locale.value);

    // Watch for locale changes
    watch(
      () => locale.value,
      (newLocale) => {
        isRTL.value = RTL_LANGUAGES.includes(newLocale);
        dir.value = isRTL.value ? "rtl" : "ltr";

        document.dir = dir.value;
        document.documentElement.lang = newLocale;
        vuetifyInstance.rtl = isRTL.value;
      }
    );
  };

  return { initializeLanguage, dir };
};
