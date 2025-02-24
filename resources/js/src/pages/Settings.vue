<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <v-container>
    <h1 class="text-h4 mb-4">{{ t('pages.settings.title') }}</h1>
    <v-card>
      <v-card-text>
        {{ t('pages.settings.description') }}
      </v-card-text>
    </v-card>
  </v-container>
</template>