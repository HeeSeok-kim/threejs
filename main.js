import "./style.css"
import * as THREE from 'three';

/**
 * Perspective : 원근법이 적용되는 3D 화면에서 주로 사용됩니다
 * Orthographic : 직각 투영으로 원근법이 없는 2D 화면에서 주로 사용됩니다
 * */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth/window.innerHeight,
    0.1,
    100
);
camera.position.z = 5;
camera.position.y = 1;

const geometry =  new THREE.BoxGeometry(1,1,1,)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.render(scene,camera);
})
renderer.render(scene,camera);