import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiaHp1ZWxsaWciLCJhIjoiY2w4bXJyOG04MG5udjN2cWppNG95ZXZ2ayJ9.lbao6tf-ZGUfhSGy9iVAsQ';

console.log("test3");
$( document ).ready(function() {
	console.log("test2");
	var element =  document.getElementById('map');
	if (typeof(element) != 'undefined' && element != null) {
		initMap();
	}
});


function initMap(){
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/light-v10',
		center: [8.2783812, 47.0699446], // starting position [lng, lat]
		zoom: 2, // starting zoom
		projection: 'globe', // display the map as a 3D globe
		bearing: -10,
		pitch: 60,
	});

	map.on('load', () => {

		map.setFog({
			'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
			'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
			'horizon-blend': 0.4 // Exaggerate atmosphere (default is .1)
		});

		/*map.addSource('mapbox-dem', {
			'type': 'raster-dem',
			'url': 'mapbox://mapbox.terrain-rgb'
		});

		map.setTerrain({
			'source': 'mapbox-dem',
			'exaggeration': 1.5
		});

		const layers = map.getStyle().layers;
		const labelLayerId = layers.find(
			(layer) => layer.type === 'symbol' && layer.layout['text-field']
			).id;

		map.addLayer({
			'id': 'add-3d-buildings',
			'source': 'composite',
			'source-layer': 'building',
			'filter': ['==', 'extrude', 'true'],
			'type': 'fill-extrusion',
			'minzoom': 15,
			'paint': {
				'fill-extrusion-color': '#aaa',
				'fill-extrusion-height': [
				'interpolate',
				['linear'],
				['zoom'],
				15,
				0,
				15.05,
				['get', 'height']
				],
				'fill-extrusion-base': [
				'interpolate',
				['linear'],
				['zoom'],
				15,
				0,
				15.05,
				['get', 'min_height']
				],
				'fill-extrusion-opacity': 0.6
			}
		},
		labelLayerId
		);*/
	});
}

function addMarker(data){
	const geojson = {
		type: 'FeatureCollection',
		features: data
	};

	// add markers to map
	for (const feature of geojson.features) {
  		// create a HTML element for each feature
  		const el = document.createElement('div');
  		el.className = 'marker';

  		// make a marker for each feature and add to the map
  		new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  	}
  }


  function updateClusterMarkers(data){
  	const geojson = {
		type: 'FeatureCollection',
		features: data
	};


	map.addSource('spaces', {
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: geojson,
		},
		cluster: true,
		clusterMaxZoom: 14,
		clusterRadius: 50,
	});
	map.addLayer({
		id: 'clusters',
		type: 'circle',
		source: 'spaces',
		filter: ['has', 'point_count'],
		paint: {
			'circle-color': '#f1f075',
			'circle-radius': 40,
		}
	});
}

/*
var geolocate = new mapboxgl.GeolocateControl();

map.addControl(geolocate);
				geolocate.on('geolocate', function(e) {
				      var lon = e.coords.longitude;
				      var lat = e.coords.latitude
				      var position = [lon, lat];
				      console.log(position);
				});*/