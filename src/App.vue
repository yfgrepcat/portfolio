<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// Load saved language preference on app start
const savedLanguage = localStorage.getItem('preferred-language')
if (savedLanguage) {
  locale.value = savedLanguage
}
</script>
