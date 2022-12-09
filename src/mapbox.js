import mapboxgl from 'mapbox-gl';

let locations = [];
let currentMarkers = [];
let map;

const geojson = {
    'type': 'FeatureCollection',
    'features': [
    {
        'type': 'Feature',
        'geometry': {
            'type': 'LineString',
            'coordinates': [],
        }
    }
    ]
};

export function loadMapBox(){
    var selector = document.querySelector("#globe");
    var token = 'pk.eyJ1Ijoib21hci1qdWxpYW4iLCJhIjoiY2xhYmtyb2g5MDFpajNvcmFtcnB4NGo2aiJ9.Hz8ypCa64WSOYogf7osAcg';
    mapboxgl.accessToken = token;

    map = new mapboxgl.Map({
        container: selector,
        style: 'mapbox://styles/omar-julian/clamg84sk001i14ldyf2j9tgc',
        center: [20, 40],
        zoom: 2.1,
        projection: 'globe',
    });

    function checkMediaQuery() {
        if (window.innerWidth < 991.98) {
            console.log("test");
            map.setZoom(1.5);
        }else{
        }
    }
    window.addEventListener('resize', checkMediaQuery);

    //Map Settings    
    map["scrollZoom"].disable();
    map["boxZoom"].disable();
    map["dragRotate"].disable();
    map["keyboard"].disable();
    map["doubleClickZoom"].disable();
    map["touchZoomRotate"].disable();
    
    const secondsPerRevolution = 600;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
     
    let userInteracting = false;
    let spinEnabled = true;
     

    //Interactions
    map.on('mousedown', () => {
    userInteracting = true;
    });
     
    map.on('mouseup', () => {
    userInteracting = false;
    spinGlobe();
    });
     
    map.on('dragend', () => {
        userInteracting = false;
        spinGlobe();
    });
    map.on('pitchend', () => {
        userInteracting = false;
        spinGlobe();
    });
    map.on('rotateend', () => {
        userInteracting = false;
        spinGlobe();
    });
     
    map.on('moveend', () => {
        spinGlobe();
    });

    map.on('load', () => {
        map.addSource('line', {
            'type': 'geojson',
            'data': geojson
        });

        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'line',
            'layout': {
                'line-cap': 'round',
                'line-join': 'round'
            },
            'paint': {
                'line-color': '#43f2ff',
                'line-width': 2,
                'line-opacity': 1
            }
        });
    });

    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
            const center = map.getCenter();
            center.lng -= distancePerSecond;
            map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }
    spinGlobe();
}

function drawMarkers(){
    locations.forEach(element => {
            const el = document.createElement('div');
            el.className = 'marker';
            let marker = {};
            marker.lat = element[0];
            marker.lng = element[1];     
            let currentMarker = new mapboxgl.Marker(el).setLngLat({lng: marker.lng, lat: marker.lat}).addTo(map);
            currentMarkers.push(currentMarker);
    })
    map.flyTo({center: [locations[locations.length-1][1],locations[locations.length-1][0]], speed: 0.2,})
}

function drawLines(){
    if(locations.length == 0){
        
    }
    else if(locations.length >= 1){
        let location = [locations[locations.length-1][1],locations[locations.length-1][0]];
        geojson.features[0].geometry.coordinates.push(location);
        map.getSource('line').setData(geojson);
    }
    else{}
}

export function drawData(location){
    locations.push(location);
    drawMarkers();
    drawLines();
}

export function resetData(){
    currentMarkers.forEach((marker) => marker.remove())
    currentMarkers = [];
    geojson.features[0].geometry.coordinates = []
    map.getSource('line').setData(geojson);
    locations = [];
}
    
    