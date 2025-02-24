import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const isRTL = ref<boolean>(false);

  return {
    isRTL: computed(() => isRTL),
  };
});
