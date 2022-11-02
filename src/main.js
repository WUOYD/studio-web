import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.mount('#app')


import { globe } from './globe/globe.js';
import { traceIP, getIPValue } from './trace.js';

window.onload = function(){
	globe("#globe");

	document.querySelector("#ip").addEventListener("submit", async function(e){
		e.preventDefault()
		var ip = getIPValue();
		traceIP(ip);
	});
}