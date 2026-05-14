import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function SceneBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.3, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const grid = new THREE.GridHelper(8, 28, 0x38bdf8, 0x2563eb);
    grid.position.y = -1.2;
    grid.material.opacity = 0.25;
    grid.material.transparent = true;
    group.add(grid);

    const points = [];
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < 120; i += 1) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 3.6;
      const z = (Math.random() - 0.5) * 5;
      points.push({ x, y, z, speed: 0.35 + Math.random() * 0.45 });
      positions.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.035,
      transparent: true,
      opacity: 0.85,
    });
    const pointCloud = new THREE.Points(geometry, material);
    group.add(pointCloud);

    const torus = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.78, 0.18, 130, 14),
      new THREE.MeshStandardMaterial({
        color: 0x0ea5e9,
        metalness: 0.52,
        roughness: 0.28,
        emissive: 0x082f49,
      }),
    );
    torus.position.set(1.15, 0.2, 0.4);
    group.add(torus);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const keyLight = new THREE.DirectionalLight(0x7dd3fc, 2.1);
    keyLight.position.set(2.5, 4, 5);
    scene.add(keyLight);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const positionAttribute = geometry.getAttribute('position');

      points.forEach((point, index) => {
        positionAttribute.setY(index, point.y + Math.sin(elapsed * point.speed + point.x) * 0.22);
      });
      positionAttribute.needsUpdate = true;

      group.rotation.y = Math.sin(elapsed * 0.16) * 0.14;
      torus.rotation.x = elapsed * 0.24;
      torus.rotation.y = elapsed * 0.32;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      torus.geometry.dispose();
      torus.material.dispose();
      grid.geometry.dispose();
      grid.material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export default SceneBackground;
