<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLanguage } from "../composables/useLanguage";
import { onMounted } from "vue";
import { useAppStore } from "../stores/useAppStore";

const emit = defineEmits(["toggle-rail"]);
const { t, locale } = useI18n();
const { initializeLanguage } = useLanguage({});

const { isRTL } = useAppStore();

const languages = [
  { code: "en", label: t("header.languages.en") },
  { code: "fa", label: t("header.languages.fa") },
  { code: "ps", label: t("header.languages.ps") },
];

const changeLanguage = (lang: string) => {
  window.localStorage.setItem("lang", lang);
  locale.value = lang;
};

onMounted(() => {
  initializeLanguage();
});
</script>

<template>
  <v-app-bar :class="{ 'flex-row-reverse': isRTL }">
    <!-- Navigation Icon -->
    <v-app-bar-nav-icon
      v-if="!isRTL"
      @click="emit('toggle-rail')"
    ></v-app-bar-nav-icon>

    <!-- Title -->
    <v-app-bar-title v-if="!isRTL">{{ t("header.title") }}</v-app-bar-title>

    <!-- Menu -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          {{ t(`header.languages.${locale}`) }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="lang in languages"
          :key="lang.code"
          :value="lang.code"
          @click="changeLanguage(lang.code)"
        >
          <v-list-item-title>{{ lang.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Navigation Icon for RTL -->
    <v-app-bar-title v-if="isRTL">{{ t("header.title") }}</v-app-bar-title>
    <v-app-bar-nav-icon
      v-if="isRTL"
      @click="emit('toggle-rail')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>
