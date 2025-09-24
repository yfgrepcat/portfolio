/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import i18n from './i18n'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  console.log('Registering vuetify...')
  app.use(vuetify)
  
  console.log('Registering router...')
  app.use(router)
  
  console.log('Registering i18n...')
  app.use(i18n)
  
  console.log('All plugins registered successfully')
}
