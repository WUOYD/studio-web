export let locations = [];
export var locationsRoutes = [];
import { unPinGLobe} from './gsap.js';
var loading = false;

var julian = false;
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
		let cleanLocation = sortOutDuplicateCitys(data);
		return cleanLocation;
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
				appendLocation(location);
				appendLocationText(location);
			},
			data: {
				action: 'traceIP',
				ip: ip,
				ajax: true
			},             
		}).always(function( data ) {
			if(data.includes("invalid domain")){
				setTimeout(function() {
					cleanIPInput();
					printErrorMessageHome();
				}, 1500);
			}
			loading = false;
			updateLoadingAnimation();
			//document.querySelector(".sidebar").innerHTML +="all done!</br>";
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
	}
}

function appendLocation(location){
	let marker = {};
	if( typeof location === 'object' && !Array.isArray(location) && location !== null){
		marker.type = 'Point';
		marker.coordinates = [location.lng,locations.lat];
		marker.title = 'Mapbox';
		marker.description = location.city
		locations.push(marker);
	}
}

function resetTrace(){
	locations = [];
	var sidebar = document.querySelector("header .sidebar .locations");
	sidebar.innerHTML = "";
}

var firstLocation = true;

function appendLocationText(location){
	if( typeof location === 'object' && !Array.isArray(location) && location !== null){
		if(firstLocation){
			firstLocation = false;
			repositionHeader();
		}
		var sidebar = document.querySelector("header .sidebar .locations");
		sidebar.innerHTML +='<div class="location">'+
		'<div class="org">'+location.isp+'</div>'+
		'<div class="loc">'+location.city+', '+location.country+'</div>'+
		'</div>';
		var lastAppend = document.querySelector("header .sidebar .location:last-of-type");
		lastAppend.classList.add("fadeIn");
	}
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
		unPinGLobe();
		document.querySelector("header .cta-wrapper").style.display = 'none';
		var traceSection = document.querySelector("header .trace-section")
		traceSection.style.display = 'block';
		$("header .trace-section").animate({opacity: "1"});
		/*document.querySelector("main").style.display = 'block';
		document.querySelector("footer").style.display = 'block';
		gsapSliders();*/
	}, 500);;
	//scrollToHash("#Trace-Domain");
}