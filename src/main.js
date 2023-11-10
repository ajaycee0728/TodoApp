/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './storage'
const app = createApp(App)

registerPlugins(app)

app.use(store)
app.mount('#app')