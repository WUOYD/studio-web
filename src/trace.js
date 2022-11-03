export let locations = [];
export var locationsRoutes = [];
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

async function checkIfIpInDB(){
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
		let ipInDB = await checkIfIpInDB();
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
		$.ajax({
			url: ajaxPath,
			method: "POST",
			cache: false,
			onreadystatechange: async function( xhr ) {
				let cleanIP = cleanUpIP(xhr.responseText);
				let location = await prepareLocation(cleanIP);
				appendLocation(location);
			},
			data: {
				action: 'traceIP',
				ip: ip,
				ajax: true
			},             
		}).done(function( data ) {
			loading = false;
			updateLoadingAnimation();
			//document.querySelector(".sidebar").innerHTML +="all done!</br>";
		});
	}
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
		}, 1000);;
	}
}

function appendLocation(location){
	if( typeof location === 'object' && !Array.isArray(location) && location !== null){
		location.lng = location.lon;
		location.text = location.countryCode;
		location.size = 1.0;
		locations.push(location);
		let locationsRoute = [];
		if (locations.length >= 2){
			locationsRoute.startLat = locations[locations.length-2].lat;
			locationsRoute.startLng = locations[locations.length-2].lng;
			locationsRoute.endLat = locations[locations.length-1].lat;
			locationsRoute.endLng = locations[locations.length-1].lng;
			locationsRoute.arcAlt = 0.05;
			locationsRoute.status = true;
			locationsRoutes.push(locationsRoute);
		}
		appendLocationText(location);
	}
}

function resetTrace(){
	locationsRoutes = [];
	locations = [];
	var sidebar = document.querySelector("section.tracert-section .sidebar .locations");
	sidebar.innerHTML = "";
}

function appendLocationText(location){
	var sidebar = document.querySelector("section.tracert-section .sidebar .locations");
	sidebar.innerHTML +='<div class="location">'+
	'<div class="org">'+location.isp+'</div>'+
	'<div class="loc">'+location.city+', '+location.country+'</div>'+
	'</div>';
	var lastAppend = document.querySelector("section.tracert-section .sidebar .location:last-of-type");
	lastAppend.classList.add("fadeIn");
}

function cleanUpIP(ip){
	let traceIP = ip.split("#");
	return /[^/]*$/.exec(traceIP[traceIP.length-1])[0];
}

export function getIPValue(){
	return document.querySelector("#ip input").value;
}