// Cena
const scene = new THREE.Scene();

// Câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Plano
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({ color: 0xcccccc, side: THREE.DoubleSide })
);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Cubo
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube.position.set(-3, 0.5, 0);
cube.scale.set(1, 2, 1);
scene.add(cube);

// Esfera
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.75, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
sphere.position.set(0, 0.75, 2);
sphere.scale.set(1.5, 1, 1);
scene.add(sphere);

// Cone
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 2, 32),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cone.position.set(3, 1, -2);
cone.rotation.z = Math.PI / 6;
scene.add(cone);

// Animação
function animate() {
  requestAnimationFrame(animate);

  // Rotaciona os objetos
  cube.rotation.y += 0.01;
  sphere.rotation.y += 0.01;
  cone.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

// Responsivo
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
