var lastCity = "";
var marker = [];

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

async function machStuff(ip){
	var data = false;
	if(ValidateIPaddress(ip)){
		var respIP = await postData("http://localhost/stuWeb/server/ajax.php",{
			action: 'checkIP',
			ip: ip
		});
		if(!respIP){
			var location = await postData('http://ip-api.com/json/'+ip);
			if(location.status != 'fail'){
				var insert = await postData("http://localhost/stuWeb/server/ajax.php",{
					action: 'insertDB',
					data: location
				});
				data = location;
			}
		} else {
			data = respIP
		}
		if(data){
			if(lastCity !== data.city){
				lastCity = data.city;
				return data;
			}
			lastCity = data.city;
		}
		return false;
	}
}

function ValidateIPaddress(ipaddress) {  
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
		return (true)  
	}
	return (false)  
}

window.onload = function(){

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

	document.querySelector("#ip").addEventListener("submit", async function(e){
		e.preventDefault();
		var ips = [];
		var data = [];
		var respIP = [];
		var val = document.querySelector("#ip input").value;

		$.ajax({
			url: "http://localhost/stuWeb/server/ajax.php",
			method: "POST",
			cache: false,
			onreadystatechange: async function( xhr ) {
				ip = xhr.responseText.split("#");
				var data = await machStuff(/[^/]*$/.exec(ip[ip.length-1])[0]);
				if( typeof data === 'object' && !Array.isArray(data) && data !== null){
					document.querySelector('main form').innerHTML += '<div><p>AS: '+data.as+'</p><p>ISP: '+data.isp+'</p><p>Country: '+data.country+'</p><p>City: '+data.city+'</p></div>';
					/*marker.push({
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: [data.lon, data.lat]
						},
						properties: {
							title: data.city,
							description: data.isp
						}
					});
					console.log(marker);
					addMarker(marker);*/
				}
			},
			data: {
	       	    action: 'traceIP',
            	ip: val,
            	ajax: true
	        },             
		}).done(function( data ) {
			$("main form").innerHTML +="all done!</br>";
		}); 
	});
};