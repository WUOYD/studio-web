import { createApp } from 'vue'
import About from './About.vue'

import './assets/about.css'

const about = createApp(About)

about.mount('#about')