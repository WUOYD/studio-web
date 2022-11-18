
import { EMPTY_ARR } from '@vue/shared';
import mapboxgl from 'mapbox-gl';
import { locations, locationsRoutes } from "./trace.js"
import {MapboxLayer} from '@deck.gl/mapbox';
import {ArcLayer} from '@deck.gl/layers';

export function loadMapBox(){
    var selector = document.querySelector("#globe");
    var token = 'pk.eyJ1Ijoid3VveWQiLCJhIjoiY2w4bXF5dTZzMGEwdzQwbzVsbHo3Z3Q4MyJ9.dx001yEPBrdCmSZWrvQ4Pw';
    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
        container: selector,
        style: 'mapbox://styles/wuoyd/clajk215g003514mrhxhoy98q', //das isch de link zu mim mapbox studio style
        center: [20, 40],
        zoom: 2,
        projection: 'globe'
    });
    
    const arcLayer = new MapboxLayer({
        id: 'arc-layer',
        type: ArcLayer,
        data: [],
        getSourcePosition: d => d.start,
        getTargetPosition:  d => d.end,
        getSourceColor: [67, 242, 255],
        getTargetColor: [67, 242, 255],
        getWidth: 1, 
    })
    
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

    map.on('load', () => {
        map.addLayer(arcLayer)
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
            if(locationsRoutes.length > 0){
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
        }, 500);
    }

    setMarkersAndArcs();
    spinGlobe();
}
