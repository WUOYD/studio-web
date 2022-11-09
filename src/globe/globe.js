import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene } from "three";
import { locations } from "../trace.js"
import { locationsRoutes } from "../trace.js"

import {
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
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

function init(elem) {
  var selector = document.querySelector(elem);
  renderer = new WebGLRenderer({ antialias: true });
  renderer.setSize(selector.offsetWidth, selector.offsetHeight);
  selector.appendChild(renderer.domElement);

  scene = new Scene();
  scene.add(new AmbientLight(0xFFFFFF, 0.3));
  scene.background = new Color(0x000000);

  camera = new PerspectiveCamera();
  camera.aspect = selector.offsetWidth / selector.offsetHeight;
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

  camera.position.z = 262;
  camera.position.x = 21;
  camera.position.y = 63;

  scene.add(camera);
  //scene.backgroundImageUrl('./files/night-sky.png')

  scene.fog = new Fog(0xafafaf, 400, 2000);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.rotateSpeed = 0.5;
  controls.zoomSpeed = 1;
  controls.enableZoom = false;
  controls.enableRotate = true;
  //controls.autoRotate = true;
  //controls.autoRotateSpeed = 0.2
  controls.minPolarAngle = 1.25;
  controls.maxPolarAngle = 2.5;

  window.addEventListener("resize", onWindowResize(elem), false);
}

export function initGlobe() {
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
    .polygonStrokeColor(() => '#FFFFFF')
    .polygonCapColor(() => 'rgba(0, 0, 0, 0)')
    .polygonSideColor(() => 'rgba(255, 255, 255, 0)')
    .polygonAltitude(0.001)
    
    .showAtmosphere(true)
    .atmosphereColor("#ffffff")
    .atmosphereAltitude(0.15)
    

  Globe.rotateX(Math.PI / 6);
  const globeMaterial = Globe.globeMaterial();

  globeMaterial.color = new Color(0x000000);
  globeMaterial.emissive = new Color(0xffffff);

  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 0.7;

  scene.add(Globe);
}

function onWindowResize(elem) {
  var selector = document.querySelector(elem);
  camera.aspect = selector.offsetWidth / selector.offsetHeight;
  camera.updateProjectionMatrix();
  windowHalfX = selector.offsetWidth / 1.5;
  windowHalfY = selector.off / 1.5;
  renderer.setSize(selector.offsetWidth, selector.offsetHeight);
}

function drawTrace(){
  setInterval(() => {
    Globe.arcsData(locationsRoutes)
      .arcColor((e) => {
        return "#43f2ff";
      })
      .arcAltitude((e) => {
        return e.arcAlt;
      })
      .arcStroke((e) => {
        return e.status ? 0.5 : 0.3;
      })
      .arcDashLength(0.7)
      .arcDashGap(4)
      .arcDashAnimateTime(1000)
      .arcsTransitionDuration(1000)
      .arcDashInitialGap((e) => e.order * 1)
      .labelsData(locations)
      .labelColor(() => "#43f2ff")
      .labelDotRadius(0.2)
      .labelSize((e) => e.size)
      .labelText("city")
      .labelResolution(6)
      .labelAltitude(0.03)
      .labelRotation(0)
      .pointsData(locations)
      .pointColor(() => "#43f2ff")
      .pointsMerge(true)
      .pointAltitude(0.03)
      .pointRadius(0.5);
  }, 500);
}

function animate() {
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  console.log(camera.position.z , " " , camera.position.x , " " , camera.position.y)
  requestAnimationFrame(animate);
}
