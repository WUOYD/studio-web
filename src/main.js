import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'mapbox-gl/dist/mapbox-gl.css';

const app = createApp(App)

app.mount('#app')

import { doGSAP, gsapSliders} from './gsap.js';
import { traceIP, getIPValue } from './trace.js';
import { loadMapBox } from './mapbox.js';

window.onload = function(){
	doGSAP();
	loadMapBox();

	let submitforms = document.querySelectorAll(".tracert-form");
	submitforms.forEach(function(submitform){
		submitform.addEventListener("submit", async function(e){
			e.preventDefault()
			var ip = getIPValue(submitform);
			//traceIP(ip);
			if(submitform.id == "header-form"){
				traceIP(ip);
				loadingTracertHome(ip);
			}
		});
	})

	function loadingTracertHome(ip){
		var elements = document.querySelectorAll("header .tracert-loading p.loading-dots");
		elements.forEach(function(ele, i){
			if(i === 2){
				ele.querySelector("span").innerHTML = ip;
			}

			setTimeout(function() {
				ele.classList.add("fadeIn");
			}, i * 250);
		});
	}

	function scrollToHash(hash){
		var speed = 600;
		if(hash == "#track-domain"){
			speed = 2000
		}
		$([document.documentElement, document.body]).animate({
			scrollTop: $(hash).offset().top
		}, speed);
	}

	$("a, .button:not(.trace-btn)").on("click", function() {
		var elem = $(this);
		scrollToHash(elem.attr('href'));
	});

	var hash = window.location.hash;
	if(hash && $(hash).length > 0){
		scrollToHash(hash);
	}

	var firstShowContent = true;

	document.querySelector("#explore-button").addEventListener("click", function(){
		if(firstShowContent){
			document.querySelector("main").style.display = 'block';
			document.querySelector("footer").style.display = 'block';
			gsapSliders();
			firstShowContent = false;
		}
		scrollToHash("#ip-address");
	});
}
