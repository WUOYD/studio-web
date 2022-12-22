import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'mapbox-gl/dist/mapbox-gl.css';

const app = createApp(App)

app.mount('#app')

import { doGSAP, gsapSliders} from './gsap.js';
import { traceIP, getIPValue,loadingTracertHome } from './trace.js';
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

	function scrollToHash(hash){
		var speed = 600;
		if(hash == "#track-domain"){
			speed = 2000
		}
		$([document.documentElement, document.body]).animate({
			scrollTop: $(hash).offset().top,
			//scrollLeft: $(hash).offset().left
		}, speed);
	}

	loadScrollToListener();

	function loadScrollToListener(){
		$("a, .button:not(.trace-btn)").on("click", function() {
			closeMenu(document.querySelector("body"));
			var elem = $(this);
			scrollToHash(elem.attr('href'));
		});
	}

	var hash = window.location.hash;
	if(hash && $(hash).length > 0){
		scrollToHash(hash);
	}

	var firstShowContent = true;

	document.querySelector("#explore-button").addEventListener("click", function(){
		if(firstShowContent){
			document.querySelector("main").style.paddingTop = getHeaderPadding() + "px";
			document.querySelector("main").style.display = 'block';
			document.querySelector(".hamburger").style.display = 'block';
			document.querySelector("footer").style.display = 'block';
			if(window.innerWidth > 991){
				gsapSliders();
			}
			loadScrollToListener();
			firstShowContent = false;
		}
		scrollToHash("#ip-section");
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

	function toggleMenu(){
		var body = document.querySelector("body");
		if($(body).hasClass("menu-open")){
			closeMenu(body);
		}else{
			openMenu(body);
		}
	}

	getSidebarWidth();
	getHeaderPadding();

    function getSidebarWidth() {
    	if(window.innerWidth < 576){
        	return "100vw";
        }else if(window.innerWidth < 992){
        	return "60vw";
        }else if(window.innerWidth < 1200){
        	return "45vw";
        }else{
        	return "30vw";
        }
    }

    function getHeaderPadding() {
    	if(window.innerWidth < 576){
        	return document.querySelector(".trace-section").offsetHeight
        }else if(window.innerWidth < 768){
        	return window.innerHeight / 100 * 110 +  document.querySelector(".trace-section").offsetHeight 
        }else if(window.innerWidth < 992){
        	return window.innerHeight / 100 * 150 +  document.querySelector(".trace-section").offsetHeight 
        }else{
        	return 0;
        }
    }


    window.addEventListener('resize', getHeaderPadding);

	function openMenu(body){
		if(!$(body).hasClass("menu-open")){
			$(body).addClass("menu-open");
			$("aside").animate({
				width: getSidebarWidth(),
			},200);
			setTimeout(function() {
				$("aside .sidebar").animate({
					opacity: "1"
				},300);
			},100);
		}
	}

	function closeMenu(body){
		if($(body).hasClass("menu-open")){
			$("aside .sidebar").animate({
				opacity: "0"
			},200);
			setTimeout(function() {
				$("aside").animate({
					width: "0"
				},300);
				$(body).removeClass("menu-open");
			},100);
		}
	}

	document.querySelector("#hamburger").addEventListener("click", function(){
		toggleMenu();
	});

}
