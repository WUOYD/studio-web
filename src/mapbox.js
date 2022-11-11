
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

export function loadMapBox(){
    var selector = document.querySelector("#globe");
    var token = 'pk.eyJ1Ijoib21hci1qdWxpYW4iLCJhIjoiY2xhYmtyb2g5MDFpajNvcmFtcnB4NGo2aiJ9.Hz8ypCa64WSOYogf7osAcg';
    mapboxgl.accessToken = token;
    const geojson = {
        'type': 'FeatureCollection',
        'features': [
        {
            'type': 'Feature',
            'properties': {
                'name': 'Everest',
                'height': 8849
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [86.925278, 27.988056]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Denali',
                'height': 6194
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-151.0074, 63.0695]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Aconcagua',
                'height': 6961
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-70.0112, -32.653197]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Vinson Massif',
                'height': 4892
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-85.617147, -78.525483]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Kilimanjaro',
                'height': 5895
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [37.353333, -3.075833]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Elbrus',
                'height': 5642
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [42.439167, 43.355]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Puncak Jaya',
                'height': 4884
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [137.158333, -4.078889]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'name': 'Mauna Kea',
                'height': 4205
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-155.468056, 19.820667]
            }
        }
        ]
    };

    const map = new mapboxgl.Map({
        container: selector,
        style: 'mapbox://styles/omar-julian/claborqty003l14phg5x5ar8s', //das isch de link zu mim mapbox studio style
        center: [20, 40],
        zoom: 2,
        projection: 'globe'
    });

    /* Globe Spinning */
    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 120;
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

    spinGlobe();

    /* Markes */
    for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        el.className = 'marker';
        const size = marker.properties.height / 100;
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        // Add a popup displayed on click for each marker
        const popup = new mapboxgl.Popup({ offset: 25 });
        popup.setHTML(
            `<h2>${marker.properties.name}</h2>${marker.properties.height}m<br/>`
            );

        // Add markers to the map.
        new mapboxgl.Marker({
            element: el,
        // Point markers toward the nearest horizon
        rotationAlignment: 'horizon',
        offset: [0, -size / 2]
        })
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
    }
}