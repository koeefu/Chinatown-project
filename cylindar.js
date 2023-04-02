import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//reference 
// const cylinder = new THREE.CylinderGeometry(
//     radiusTop, radiusBottom, height,
//     radialSegments, heightSegments,
//     openEnded,
//     thetaStart, thetaLength
//  )

const geometry = new THREE.CylinderGeometry(
    1, 1, 1,
    30, 1, 
    false, 
    0, 2 * Math.PI)
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cylinder.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();