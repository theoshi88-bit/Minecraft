import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';
import { createPlayer } from './player.js';

let scene, camera, renderer;
let player;
const keys = {};

init();
animate();

function init() {
  // Scene setup
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(2, 3, 5);

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
  renderer.setSize(window.innerWidth, window.innerHeight * 0.7);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 5, 3);
  scene.add(light);

  // Floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(30, 30),
    new THREE.MeshStandardMaterial({ color: 0x229933 })
  );
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Player
  player = createPlayer();
  player.position.set(0, 1, 0);
  scene.add(player);

  // Camera follow
  camera.lookAt(player.position);

  // Input handling
  window.addEventListener('keydown', e => keys[e.key.toLowerCase()] = true);
  window.addEventListener('keyup', e => keys[e.key.toLowerCase()] = false);
}

function animate() {
  requestAnimationFrame(animate);
  handleMovement();
  camera.position.x = player.position.x + 3;
  camera.position.z = player.position.z + 3;
  camera.lookAt(player.position);
  renderer.render(scene, camera);
}

function handleMovement() {
  const speed = 0.1;
  if (keys['w']) player.position.z -= speed;
  if (keys['s']) player.position.z += speed;
  if (keys['a']) player.position.x -= speed;
  if (keys['d']) player.position.x += speed;
}
