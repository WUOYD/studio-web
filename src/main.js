import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'mapbox-gl/dist/mapbox-gl.css';

const app = createApp(App)

app.mount('#app')

import { globe } from './globe/globe.js';
import { traceIP, getIPValue } from './trace.js';
import { doGSAP } from './gsap.js';
import { loadMapBox } from './mapbox.js';

window.onload = function(){
	doGSAP();
	loadMapBox();
	/*globe("#globe");*/

	document.querySelector("#ip").addEventListener("submit", async function(e){
		e.preventDefault()
		var ip = getIPValue();
		traceIP(ip);
		console.log("test2");
		scrollToHash("#Trace-Domain");
	});

	function scrollToHash(hash){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(hash).offset().top
		}, 600);
	}

	$("a, .button:not(.trace-btn)").on("click", function() {
		console.log("test1");
		var elem = $(this);
		scrollToHash(elem.attr('href'));
	});

	var hash = window.location.hash;
	if(hash && $(hash).length > 0){
		scrollToHash(hash);
	}
}
