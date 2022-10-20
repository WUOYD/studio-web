import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'mapbox-gl/dist/mapbox-gl.css';
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import './mapbox/mapbox.js';
import './trace.js';