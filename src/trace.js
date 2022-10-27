export var locations = [];

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
	return await postData("http://localhost/studio-web/server/ajax.php",{
		action: 'checkIP',
		ip: ip
	});
}

async function getLocation(ip){
	return await postData('http://ip-api.com/json/'+ip);
}

function insertLocationInDB(location) {
	postData("http://localhost/studio-web/server/ajax.php",{
		action: 'insertDB',
		data: location
	});
}

var lastCity = "";

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
	var data = false;
	if(ValidateIPaddress(ip)){
		var ipInDB = await checkIfIpInDB();
		if(!ipInDB){
			var location = await getLocation(ip);
			if(location.status != 'fail'){
				insertLocationInDB(location);
				data = location;
			}
		} else {
			data = ipInDB;
		}
		var cleanLocation = sortOutDuplicateCitys(data);
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
			var xhrFactory = options.xhr;
			options.xhr = function() {
				var xhr = xhrFactory.apply( this, arguments );
				function handler() {
					options.onreadystatechange( xhr, jqXHR );
				}
				if ( xhr.addEventListener ) {
					xhr.addEventListener( "readystatechange", handler, false );
				} else {
					setTimeout( function() {
						var internal = xhr.onreadystatechange;
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
	$.ajax({
		url: "http://localhost/studio-web/server/ajax.php",
		method: "POST",
		cache: false,
		onreadystatechange: async function( xhr ) {
			var cleanIP = cleanUpIP(xhr.responseText);
			var location = await prepareLocation(cleanIP);
			appendLocation(location);
			//initGlobe(); //das gaht ned so, aber so chönsch e funktion usem andere file importiere
		},
		data: {
			action: 'traceIP',
			ip: ip,
			ajax: true
		},             
	}).done(function( data ) {
		//TODO
		document.querySelector("main form").innerHTML +="all done!</br>";
	}); 
}

function appendLocation(location){
	//TODO
	if( typeof location === 'object' && !Array.isArray(location) && location !== null){
		//document.querySelector('main form').innerHTML += '<div><p>AS: '+location.as+'</p><p>ISP: '+location.isp+'</p><p>Country: '+location.country+'</p><p>City: '+location.city+'</p></div>';
		locations.push(location);
		console.log(locations)
	}
}

function cleanUpIP(ip){
	var traceIP = ip.split("#");
	return /[^/]*$/.exec(traceIP[traceIP.length-1])[0];
}

export function getIPValue(){
	return document.querySelector("#ip input").value;
}