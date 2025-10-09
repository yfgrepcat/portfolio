import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

// Get saved language or default to 'en'
const savedLanguage = localStorage.getItem('preferred-language') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

export default i18n