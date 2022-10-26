import ThreeGlobe from "three-globe";
import { WebGLRenderer, Scene } from "three";
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
import countries from "./files/globe-data-min.json";
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
  animate();
}

// SECTION Initializing core ThreeJS elements
function init(elem) {
  var selector = document.querySelector(elem);
  // Initialize renderer
  renderer = new WebGLRenderer({ antialias: true });
  //renderer.setPixelRatio(window.devicePixelRatio);
  console.log(window.innerWidth);
  console.log(selector);
  console.log(selector.clientWidth);
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

  var dLight1 = new DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  var dLight2 = new PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  scene.add(camera);

  // Additional effects
  scene.fog = new Fog(0x535ef3, 400, 2000);

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
  controls.minDistance = 100;
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

//
// Original SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.2)
    .showAtmosphere(true)
    //Atmo Color 
    .atmosphereColor("#00008b")
    .atmosphereAltitude(0.2)
    .hexPolygonColor((e) => {
      if (
        ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
          e.properties.ISO_A3
        )
      ) {
        return "rgba(255,255,255, 1)";
      } else return "rgba(255,255,255, 0.7)";
    });
//

/*
// Hex + Outlines SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })

    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
    .polygonStrokeColor(() => '#111')
    .polygonCapColor(() => 'rgba(0, 0, 0, 0)')
    .polygonSideColor(() => 'rgba(0, 0, 0, 0)')
    .showAtmosphere(true)
    .atmosphereColor("#ffffff")
    .atmosphereAltitude(0.25)
    .hexPolygonColor((e) => {
      if (
        ["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(
          e.properties.ISO_A3
        )
      ) {
        return "rgba(255,255,255, 1)";
      } else return "rgba(255,255,255, 1)";
    });
*/



/*
// Country Border SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
  })
    .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
    .polygonStrokeColor(() => '#111')
    .polygonCapColor(() => 'rgba(0, 200, 0, 1.0)')
    .polygonSideColor(() => 'rgba(255, 255, 255, 0)')
    
    .showAtmosphere(true)
    //Atmo Color 
    .atmosphereColor("#3a228a")
    .atmosphereAltitude(0.25)
  */
  // NOTE Arc animations are followed after the globe enters the scene
  setTimeout(() => {
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
  }, 1000);

  Globe.rotateY(-Math.PI * (5 / 9));
  Globe.rotateZ(-Math.PI / 6);
  const globeMaterial = Globe.globeMaterial();

  globeMaterial.color = new Color(0x3a228a);
  globeMaterial.emissive = new Color(0x220038);

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

function animate() {
  /*
  camera.position.x +=
    Math.abs(mouseX) <= windowHalfX / 2
      ? (mouseX / 2 - camera.position.x) * 0.005
      : 0;
  camera.position.y += (-mouseY / 2 - camera.position.y) * 0.005;
  */
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
