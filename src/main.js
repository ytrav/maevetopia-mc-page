import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/style.scss'
import App from './App.vue'
import router from './router'
import VWave from 'v-wave'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VWave, {})
app.mount('#app')
