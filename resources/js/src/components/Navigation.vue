<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "../stores/useAppStore";

defineProps<{
  rail: boolean;
}>();

const { t } = useI18n();
const { isRTL } = useAppStore();

const drawer = ref(true);
const activeTooltip = ref<string | null>(null);

const items = [
  {
    title: () => t("navigation.dashboard"),
    icon: "mdi-view-dashboard",
    to: "/",
    tooltip: () => t("tooltips.viewDashboard"),
  },
  {
    title: () => t("navigation.profile"),
    icon: "mdi-account",
    to: "/profile",
    tooltip: () => t("tooltips.viewProfile"),
  },
  {
    title: () => t("navigation.settings"),
    icon: "mdi-cog",
    to: "/settings",
    tooltip: () => t("tooltips.manageSettings"),
  },
];
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    :location="isRTL ? 'right' : 'left'"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      :title="'John Doe'"
      :subtitle="t('user.role')"
      nav
    >
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact">
      <v-list-item
        v-for="item in items"
        :key="item.title()"
        :to="item.to"
        :title="item.title()"
        link
      >
        <!-- Prepend icon if not RTL -->
        <template #prepend>
          <v-icon :class="{ 'flex justify-end pl-4': isRTL && rail }">{{
            item.icon
          }}</v-icon>
        </template>
        <v-tooltip
          v-if="rail"
          :text="item.tooltip()"
          activator="parent"
          persistent
          :model-value="activeTooltip === item.title()"
          :arrow="true"
        >
        </v-tooltip>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
