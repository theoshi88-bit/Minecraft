import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';
import { createPlayer } from './player.js';

let scene, camera, renderer;
init();

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
  renderer.setSize(window.innerWidth, window.innerHeight * 0.7);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 2, 3);
  scene.add(light);

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: 0x229933 })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const player = createPlayer();
  scene.add(player);
  player.position.y = 1; // stand on the ground

  camera.position.set(2, 2, 5);
  camera.lookAt(0, 1, 0);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
