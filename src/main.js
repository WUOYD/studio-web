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
			traceIP(ip);
			if(submitform.id == "header-form"){
				loadingTracertHome(ip);
			}
			setDomainInDNSSection(ip);
		});
	})

	function loadingTracertHome(domain){
		var elements = document.querySelectorAll("header .tracert-loading p.loading-dots");
		elements.forEach(function(ele, i){
			if(i === 2){
				ele.querySelector("span").innerHTML = domain;
			}
			setTimeout(function() {
				ele.classList.add("fadeIn");
				setTimeout(function() {
					ele.classList.add("fadeOut");
				}, 2500);
			}, i * 4000);
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

	function setDomainInDNSSection(ip){
		var ip2 = ip.replace(/(^\w+:|^)\/\//, '');
		if(!ip2.startsWith("www.")){
			ip2 = "www." + ip2;
		}
		var urlParts = ip2.split(".");
		document.querySelector(".dns-section .section6 .d").innerHTML = urlParts[0]+"."+urlParts[urlParts.length - 2]+"."+urlParts[urlParts.length - 1];
		document.querySelectorAll(".dns-section .setDomain").forEach(function(ele){
			ele.querySelectorAll("span.d").forEach(function(d,i){
				if(i == 0){
					d.innerHTML = urlParts[0];
				}else if(i == 1){
					d.innerHTML = urlParts[urlParts.length - 2];
				}else{
					d.innerHTML = urlParts[urlParts.length - 1];
				}
			});
		});
	}

	document.querySelector("#hamburger").addEventListener("click", function(){
		var body = document.querySelector("body");
		if($(body).hasClass("menu-open")){
			$("aside .sidebar").animate({
				opacity: "0"
			},200);
			setTimeout(function() {
				$("aside").animate({
					width: "0"
				},300);
				$(body).toggleClass("menu-open");
			},100);
		}else{
			$(body).toggleClass("menu-open");
			$("aside").animate({
				width: "30vw",
			},200);
			setTimeout(function() {
				$("aside .sidebar").animate({
					opacity: "1"
				},300);
			},100);
		}
	});
}
