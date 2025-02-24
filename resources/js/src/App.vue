<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import AppHeader from './components/AppHeader.vue'
import { useLanguage } from './composables/useLanguage'

const rail = ref(false)
const { dir } = useLanguage({})

function toggleRail() {
  rail.value = !rail.value
}
</script>

<template>
  <v-app :dir="dir">
    <Navigation :rail="rail" />
    <AppHeader @toggle-rail="toggleRail" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
/* Force RTL styles for specific languages */
[dir="rtl"] .v-navigation-drawer__content {
  direction: rtl;
}

[dir="rtl"] .v-list-item__prepend {
  margin-inline-start: 16px;
  margin-inline-end: 0;
}

[dir="rtl"] .v-list-item__append {
  margin-inline-start: 0;
  margin-inline-end: 16px;
}
</style>