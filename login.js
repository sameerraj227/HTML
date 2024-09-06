import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('login-container'),
    antialias: true
});

const planeGeometry = new THREE.PlaneGeometry(2, 2);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

const textGeometry = new THREE.TextGeometry('Login', {
    font: 'Arial',
    size: 0.5,
    height: 0.1,
    curveSegments: 12
});
const textMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const text = new THREE.Mesh(textGeometry, textMaterial);
scene.add(text);

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById('login-container').addEventListener('click', () => {
});