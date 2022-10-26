import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.mount('#app')


import { globe } from './globe/globe.js';
import './trace.js';

window.onload = function(){
	globe("#globe");
}