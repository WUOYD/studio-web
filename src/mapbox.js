
import { EMPTY_ARR } from '@vue/shared';
import mapboxgl from 'mapbox-gl';
import { locations } from "./trace.js"


export function loadMapBox(){
    var selector = document.querySelector("#globe");
    var token = 'pk.eyJ1Ijoib21hci1qdWxpYW4iLCJhIjoiY2xhYmtyb2g5MDFpajNvcmFtcnB4NGo2aiJ9.Hz8ypCa64WSOYogf7osAcg';
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
        container: selector,
        style: 'mapbox://styles/omar-julian/clamg84sk001i14ldyf2j9tgc',
        center: [20, 40],
        zoom: 2.3,
        projection: 'globe',
        /*cooperativeGestures: true,*/
    });

    map["scrollZoom"].disable();
    map["boxZoom"].disable();
    map["dragRotate"].disable();
    map["dragPan"].disable();
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

    function setMarkers(){
        setInterval(() => {
                locations.forEach(element => {
                    // create a HTML element for each feature
                    const el = document.createElement('div');
                    el.className = 'marker';
                    console.log(element);                
                    // make a marker for each feature and add to the map
                    new mapboxgl.Marker(el).setLngLat(element.coordinates).addTo(map);
                }); 
        }, 500);
      }

      //setMarkers();
      spinGlobe();
}

