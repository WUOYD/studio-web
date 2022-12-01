import mapboxgl from 'mapbox-gl';
import { locations, locationsRoutes } from "./trace.js"

export function loadMapBox(){
    var selector = document.querySelector("#globe");
    var token = 'pk.eyJ1Ijoib21hci1qdWxpYW4iLCJhIjoiY2xhYmtyb2g5MDFpajNvcmFtcnB4NGo2aiJ9.Hz8ypCa64WSOYogf7osAcg';
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
        container: selector,
        style: 'mapbox://styles/omar-julian/clamg84sk001i14ldyf2j9tgc',
        center: [20, 40],
        zoom: 2.1,
        projection: 'globe',
        /*cooperativeGestures: true,*/
    });

    map["scrollZoom"].disable();
    map["boxZoom"].disable();
    map["dragRotate"].disable();
    //map["dragPan"].disable();
    map["keyboard"].disable();
    map["doubleClickZoom"].disable();
    map["touchZoomRotate"].disable();
    
    /* Globe Spinning */
    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 600;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;
     
    let userInteracting = false;
    let spinEnabled = true;
     
    function spinGlobe() {
        const zoom = map.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
            let distancePerSecond = 360 / secondsPerRevolution;
            if (zoom > slowSpinZoom) {
                // Slow spinning at higher zooms
                const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
                distancePerSecond *= zoomDif;
            }
            const center = map.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls a 'moveend' event.
            map.easeTo({ center, duration: 1000, easing: (n) => n });
        }
    }
     
    // Pause spinning on interaction
    map.on('mousedown', () => {
    userInteracting = true;
    });
     
    // Restart spinning the globe when interaction is complete
    map.on('mouseup', () => {
    userInteracting = false;
    spinGlobe();
    });
     
    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
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
     
    // When animation is complete, start spinning if there is no ongoing interaction
    map.on('moveend', () => {
        spinGlobe();
    });





    // Create a GeoJSON source with an empty lineString.
    const geojson = {
        'type': 'FeatureCollection',
        'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'LineString',
                'coordinates': [[0, 0]]
            }
        }
        ]
    };

    const speedFactor = 30; // number of frames per longitude degree
    let animation; // to store and cancel the animation
    let startTime = 0;
    let progress = 0; // progress = timestamp - startTime
    let resetTime = false; // indicator of whether time reset is needed for the animation

    map.on('load', () => {

        map.addSource('line', {
            'type': 'geojson',
            'data': geojson
        });

        // add the line which will be modified in the animation
        map.addLayer({
            'id': 'line-animation',
            'type': 'line',
            'source': 'line',
            'layout': {
                'line-cap': 'round',
                'line-join': 'round'
            },
            'paint': {
                'line-color': '#43F2FF',
                'line-width': 5,
                'line-opacity': 0.8
            }
        });

        startTime = performance.now();

        animateLine();
         
        // reset startTime and progress once the tab loses or gains focus
        // requestAnimationFrame also pauses on hidden tabs by default
        document.addEventListener('visibilitychange', () => {
            resetTime = true;
        });
     
        // animated in a circle as a sine wave along the map.
        function animateLine(timestamp) {
            if (resetTime) {
                // resume previous progress
                startTime = performance.now() - progress;
                resetTime = false;
            } else {
                progress = timestamp - startTime;
            }
         
            // restart if it finishes a loop
            if (progress > speedFactor * 360) {
                startTime = timestamp;
                geojson.features[0].geometry.coordinates = [];
            } else {
                const x = progress / speedFactor;
                // draw a sine wave with some math.
                const y = Math.sin((x * Math.PI) / 90) * 40;
                // append new coordinates to the lineString
                //console.log(x,y)
                geojson.features[0].geometry.coordinates.push([x, y]);
                // then update the map
                map.getSource('line').setData(geojson);
            }
            // Request the next frame of the animation.
            animation = requestAnimationFrame(animateLine);
        }
    });

    function setMarkersAndArcs(){
        setInterval(() => {
            locations.forEach(element => {
                    // create a HTML element for each feature
                    const el = document.createElement('div');
                    el.className = 'marker';             
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el).setLngLat({lng: element.lng, lat: element.lat}).addTo(map);
                });
                
                /*
                //Line Version
                let i = 0;
                if(locationsRoutes.length > i){
                    let routeData = [[locationsRoutes[locationsRoutes.length-1].startLat, locationsRoutes[locationsRoutes.length-1].startLng], [locationsRoutes[locationsRoutes.length-1].endLat, locationsRoutes[locationsRoutes.length-1].endLng]]
                    data.geometry.coordinates[0].push(routeData)
                    map.getSource('route').setData(data).
                    map.panTo(routeData[routeData.length])
                    i++
                }
                else{}
                
                    /*
                // Arc Version
                let newArcLayerData
                newArcLayerData = {
                    start: [locationsRoutes[locationsRoutes.length-1].startLat, locationsRoutes[locationsRoutes.length-1].startLng],
                    end: [locationsRoutes[locationsRoutes.length-1].endLat, locationsRoutes[locationsRoutes.length-1].endLng]
                }
                let arcLayerData = [];
                arcLayerData.push(newArcLayerData)
                console.log(arcLayerData)
                arcLayer.setProps({ data: arcLayerData})
            }
            else{}
            */
        }, 500);
    }
    setMarkersAndArcs();
    spinGlobe();
}
