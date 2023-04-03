import * as THREE from 'three';

//camera
const camera = new THREE.PerspectiveCamera(
    75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//renderer
const renderer = new THREE.WebGL1Renderer({ antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//scene
const scene = new THREE.Scene();

//light
scene.add(new THREE.AmbientLight(0x666666));
scene.add(new THREE.DirectionalLight(0xaaaaaa));

//floor
const geo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshStandardMaterial({ color:
    0xffffff,});
const mesh = new THREE.Mesh(geo, mat);

scene.add(mesh);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();


