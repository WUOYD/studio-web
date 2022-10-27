import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene } from "three";
import { locations } from "../trace.js"

/*
var locationsJSON
locationsJSON = JSON.stringify(locations);
*/

import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  // AxesHelper,
  // DirectionalLightHelper,
  // CameraHelper,
  PointLight,
  SphereGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import countries from "./files/globe-data.json";
import travelHistory from "./files/my-flights.json";
import airportHistory from "./files/my-airports.json";
var renderer, camera, scene, controls;
let mouseX = 0;
let mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe;

export function globe(selector){
  init(selector);
  initGlobe();
  onWindowResize(selector);
  drawTrace();
  animate();
}

// SECTION Initializing core ThreeJS elements
function init(elem) {
  var selector = document.querySelector(elem);
  // Initialize renderer
  renderer = new WebGLRenderer({ antialias: true });
  //renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(selector.clientWidth, selector.clientHeight);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  selector.appendChild(renderer.domElement);

  // Initialize scene, light
  scene = new Scene();
  scene.add(new AmbientLight(0xFFFFFF, 0.3));
  scene.background = new Color(0x000000);

  // Initialize camera, light
  camera = new PerspectiveCamera();
  camera.aspect = selector.clientWidth / selector.clientHeight;
  camera.updateProjectionMatrix();

  var dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  var dLight1 = new DirectionalLight(0xffffff, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new PointLight(0x232323, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);

  // Additional effects
  scene.fog = new Fog(0xafafaf, 400, 2000);

  // Helpers
  // const axesHelper = new AxesHelper(800);
  // scene.add(axesHelper);
  // var helper = new DirectionalLightHelper(dLight);
  // scene.add(helper);
  // var helperCamera = new CameraHelper(dLight.shadow.camera);
  // scene.add(helperCamera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 150;
  controls.maxDistance = 300;
  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.2


  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;

  window.addEventListener("resize", onWindowResize(elem), false);
  document.addEventListener("mousemove", onMouseMove);
}


// Original SECTION Globe
export function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
    .polygonStrokeColor(() => '#FFFFFF')
    .polygonCapColor(() => 'rgba(0, 0, 0, 0)')
    .polygonSideColor(() => 'rgba(255, 255, 255, 0)')
    
    .showAtmosphere(true)
    //Atmo Color 
    .atmosphereColor("#ffffff")
    .atmosphereAltitude(0.15)

  Globe.rotateY(-Math.PI * (2 / 9));
  Globe.rotateZ(-Math.PI / 7);
  const globeMaterial = Globe.globeMaterial();

  globeMaterial.color = new Color(0x000000);
  globeMaterial.emissive = new Color(0xffffff);

  //globeMaterial.color = new Color(0x505050);
  //globeMaterial.emissive = new Color(0x505050);

  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;

  // NOTE Cool stuff
  // globeMaterial.wireframe = true;

  scene.add(Globe);
}

function onMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
  // console.log("x: " + mouseX + " y: " + mouseY);
}

function onWindowResize(elem) {
  var selector = document.querySelector(elem);
  camera.aspect = selector.clientWidth / selector.clientHeight;
  camera.updateProjectionMatrix();
  windowHalfX = selector.clientWidth / 1.5;
  windowHalfY = selector.clientHeight / 1.5;
  renderer.setSize(selector.clientWidth, selector.clientHeight);
}

function drawTrace(){
  // NOTE Arc animations are followed after the globe enters the scene
  setInterval(() => {
    Globe.arcsData(travelHistory.flights)
      .arcColor((e) => {
        //arc Color
        return "#FFFFFF";
      })
      .arcAltitude((e) => {
        return e.arcAlt;
      })
      .arcStroke((e) => {
        return e.status ? 0.5 : 0.3;
      })
      .arcDashLength(0.9)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e) => e.order * 1)
      .labelsData(airportHistory.airports)
      .labelColor(() => "#ffffff")
      .labelDotOrientation((e) => {
        return e.text === "ALA" ? "top" : "right";
      })
      .labelDotRadius(0.3)
      .labelSize((e) => e.size)
      .labelText("city")
      .labelResolution(6)
      .labelAltitude(0.01)
      .pointsData(airportHistory.airports)
      .pointColor(() => "#ffffff")
      .pointsMerge(true)
      .pointAltitude(0.07)
      .pointRadius(0.05);
  }, 500);
}

function animate() {
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
