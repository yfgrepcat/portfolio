import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

console.log('Starting app...')

try {
  const app = createApp(App)
  console.log('App created')
  
  registerPlugins(app)
  console.log('Plugins registered')
  
  app.mount('#app')
  console.log('App mounted')
} catch (error) {
  console.error('Error starting app:', error)
}