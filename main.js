import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const dims = {
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
};

const mouse = {
	x: 0,
	y: 0,
};

const scene = new THREE.Scene();

const earth = new THREE.Mesh(
	new THREE.SphereGeometry(3, 64, 64),
	new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load("./img/earth-map.jpg"),
	})
);

scene.add(earth);

const starGeometry = new THREE.BufferGeometry();

const starMaterial = new THREE.PointsMaterial({
	color: 0xfdf4dc,
});

const starPositions = [];

for (let i = 0; i < 5000; i++) {
	const x = (Math.random() - 0.5) * 1500;
	const y = (Math.random() - 0.5) * 1500;
	const z = (Math.random() - 0.5) * 1500 + 50;
	starPositions.push(x, y, z);
}

starGeometry.setAttribute(
	"position",
	new THREE.Float32BufferAttribute(starPositions, 3)
);

const stars = new THREE.Points(starGeometry, starMaterial);

scene.add(stars);

const camera = new THREE.PerspectiveCamera(45, dims.width / dims.height);
camera.position.z = 20;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(dims.width, dims.height);
renderer.setPixelRatio(3);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

window.addEventListener("resize", () => {
	dims.width = document.documentElement.clientWidth;
	dims.height = document.documentElement.clientHeight;
	camera.updateProjectionMatrix();
	camera.aspect = dims.width / dims.height;
	renderer.setSize(dims.width, dims.height);
});

addEventListener("mousemove", (event) => {
	mouse.x = (event.clientX / document.documentElement.clientWidth) * 2 - 1;
	mouse.y = -(event.clientY / document.documentElement.clientHeight) * 2 + 1;
});

screen.orientation.addEventListener("change", () => {
	window.location.reload();
});

const resizeLoop = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(resizeLoop);
};

resizeLoop();
