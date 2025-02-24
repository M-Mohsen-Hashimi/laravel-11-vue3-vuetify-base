<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <v-container>
    <h1 class="text-h4 mb-4">{{ t("pages.dashboard.title") }}</h1>
    <v-card>
      <p class="text-red-500 bg-green-100">Hello</p>
      <v-card-text>
        {{ t("pages.dashboard.welcome") }}
      </v-card-text>
    </v-card>
  </v-container>
</template>
