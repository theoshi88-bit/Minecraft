import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';

export function createPlayer() {
  const material = new THREE.MeshStandardMaterial({ color: 0xcccccc });

  const lower = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material); // legs
  const upper = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material); // body

  upper.position.y = 1; // stack above lower

  const group = new THREE.Group();
  group.add(lower);
  group.add(upper);

  return group;
}
