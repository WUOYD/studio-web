import { loadMapBox } from './mapbox.js';

export let locations = [];
export var locationsRoutes = [];
import { unPinGLobe} from './gsap.js';
var loading = false;
var lastIP = "8.8.8.8";

var julian = true;
if(julian) {
	var ajaxPath = "http://localhost/studio-web/server/ajax.php"
}else{
	var ajaxPath = "http://localhost/stuWeb/server/ajax.php"
}

async function postData(url = '', data = {}) {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	try {
		const data = await response.json();
		return await data;
	} catch(err) {
		return false;
	}  		
}

async function checkIfIpInDB(ip){
	return await postData(ajaxPath,{
		action: 'checkIP',
		ip: ip
	});
}

async function getLocation(ip){
	return await postData('http://ip-api.com/json/'+ip);
}

function insertLocationInDB(location) {
	postData(ajaxPath,{
		action: 'insertDB',
		data: location
	});
}

let lastCity = "";

function sortOutDuplicateCitys(data){
	if(data){
		if(lastCity !== data.city){
			lastCity = data.city;
			return data;
		}
		lastCity = data.city;
	}
	return false;
}

async function prepareLocation(ip){
	let data = false;
	if(ValidateIPaddress(ip)){
		let ipInDB = await checkIfIpInDB(ip);
		if(!ipInDB){
			let location = await getLocation(ip);
			if(location.status != 'fail'){
				insertLocationInDB(location);
				data = location;
			}
		} else {
			data = ipInDB;
		}
		let cleanLocation = await sortOutDuplicateCitys(data);
		if( typeof cleanLocation === 'object' && !Array.isArray(cleanLocation) && cleanLocation !== null && typeof cleanLocation != undefined){
			return cleanLocation;
		}
	}
}

function ValidateIPaddress(ipaddress) {  
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
		return (true)  
	}
	return (false)  
}

function ajaxTracertPrefilter(){
	$.ajaxPrefilter(function( options, _, jqXHR ) {
		if ( options.onreadystatechange ) {
			let xhrFactory = options.xhr;
			options.xhr = function() {
				let xhr = xhrFactory.apply( this, arguments );
				function handler() {
					options.onreadystatechange( xhr, jqXHR );
				}
				if ( xhr.addEventListener ) {
					xhr.addEventListener( "readystatechange", handler, false );
				} else {
					setTimeout( function() {
						let internal = xhr.onreadystatechange;
						if ( internal ) {
							xhr.onreadystatechange = function() {
								handler();
								internal.apply( this, arguments ); 
							};
						}
					}, 0 );
				}
				return xhr;
			};
		}
	});
}

export function traceIP(ip){
	ajaxTracertPrefilter();
	if(!loading){
		resetTrace();
		loading = true;
		document.getElementById("status").style.visibility = "hidden";
		updateLoadingAnimation();
		var xhr = $.ajax({
			url: ajaxPath,
			method: "POST",
			cache: false,
			onreadystatechange: async function( xhr ) {
				if(xhr.responseText.includes("Maximum execution time of")){
					xhr.abort();
				}
				let cleanIP = cleanUpIP(xhr.responseText);
				let location = await prepareLocation(cleanIP);
				if( typeof location === 'object' && typeof location != undefined){
					appendLocation(location);
					lastIP = location.query;
					//console.log(lastIP);
				}
			},
			data: {
				action: 'traceIP',
				ip: ip,
				ajax: true
			},             
		}).always(function( data ) {
			if((Array.isArray(data) && data.includes("invalid domain")) || data === "invalid domain" /*|| data === ""*/){
				setTimeout(function() {
					cleanIPInput();
					printErrorMessageHome();
				}, 1500);
			}
			setTimeout(function() {
				setIPInDnsSection(lastIP);
			}, 500);
			loading = false;
			clearInterval(setInterval);
			updateLoadingAnimation();
		});
	}
}

function printErrorMessageHome(){
	var elements = document.querySelectorAll("header .tracert-loading p.loading-dots");
	for (let index = elements.length - 1; index >= 0; index--) {
		setTimeout(function() {
			elements[index].classList.remove("fadeIn");
			elements[index].classList.add("fadeOut");
		}, index * 250);
		setTimeout(function() {
			elements[index].classList.remove("fadeOut");
		}, (index + 1) * 500);
	}
	setTimeout(function() {
		document.querySelector("header .tracert-loading p.error").classList.add("fadeIn");
		setTimeout(function() {
			document.querySelector("header .tracert-loading p.error").classList.remove("fadeIn");
			document.querySelector("header .tracert-loading p.error").classList.add("fadeOut");
			setTimeout(function() {
				document.querySelector("header .tracert-loading p.error").classList.remove("fadeOut");
			}, 1500);
		}, 1500);
	}, 2000);
}

function cleanIPInput(){
	document.querySelectorAll(".tracert-form input").forEach(function(ele){
		ele.value = "";
	});
}

function updateLoadingAnimation(){
	var loadingAni = document.querySelector(".loading");
	if(loading){
		loadingAni.classList.add("show-loading");
		loadingAni.classList.add("fadeIn");
	}else{
		loadingAni.classList.add("fadeOut");
		setTimeout(function() {
			loadingAni.classList.remove("show-loading");
			loadingAni.classList.remove("fadeIn");
			loadingAni.classList.remove("fadeOut");
		}, 1000);
		document.getElementById("explore-button").style.visibility = "visible";
		document.getElementById("status").style.visibility = "visible";
	}
}

function appendLocation(location){
	let marker = {};
	let locationsRoute = {};
	marker.type = 'Point';
	marker.lng= location.lon;
	marker.lat = location.lat;
	marker.title = 'Mapbox';
	marker.description = location.city
	locations.push(marker);
	appendLocationText(location);
	if (locations.length >= 2){
		locationsRoute.startLat = locations[locations.length-2].lat;
		locationsRoute.startLng = locations[locations.length-2].lng;
		locationsRoute.endLat = locations[locations.length-1].lat;
		locationsRoute.endLng = locations[locations.length-1].lng;
		locationsRoutes.push(locationsRoute);
	}
}

function resetTrace(){
	locations = [];
	var sidebar = document.querySelector("header .sidebar .locations");
	sidebar.innerHTML = "";
}

var firstLocation = true;

function appendLocationText(location){
	//console.log(location);
	if(firstLocation){
		repositionHeader();
	}
	var sidebar = document.querySelector("header .sidebar .locations");
	sidebar.innerHTML +='<li class="location">'+
	'<div class="org">'+location.isp+'<span>99ms</span></div>'+
	'<div class="loc">'+location.city+', '+location.country+'</div>'+
	'</li>';
	var lastAppend = document.querySelector("header .sidebar .location:last-of-type");
	lastAppend.classList.add("fadeIn");
	if(!firstLocation){
		setTimeout(function() {
			document.querySelector("header .sidebar .locations li:nth-last-child(-n+2)").classList.add("anime");
		}, 500);
	}
	firstLocation = false;
}

function cleanUpIP(ip){
	let traceIP = ip.split("#");
	return /[^/]*$/.exec(traceIP[traceIP.length-1])[0];
}

export function getIPValue(submitform){
	return submitform.querySelector("input").value;
}

function repositionHeader() {
	$("header .cta-wrapper").animate({opacity: "0"},500);
	$("#globe").animate({left: "20vw"},500);
	setTimeout(function() {
		document.querySelector("#globe-wrapper").classList.add("globeTop");
		setTimeout(function() {
			document.querySelector("#globe-wrapper").parentElement.style.zIndex = "1";
		}, 1000);	
		unPinGLobe();
		document.querySelector("header .cta-wrapper").style.display = 'none';
		var traceSection = document.querySelector("header .trace-section")
		traceSection.style.display = 'block';
		$("header .trace-section").animate({opacity: "1"});
	}, 500);
}

function setIPInDnsSection(domainIP){
	var splitIP = domainIP.split(".");
	document.querySelectorAll("#ip-adress span.i").forEach(function(ele, i){
		ele.innerHTML = splitIP[i];
	});
	document.querySelectorAll(".ip-locate").forEach(function(ele, i){
		ele.querySelectorAll("span.i").forEach(function(el, i){
			el.innerHTML = splitIP[i];
		});
	});
}