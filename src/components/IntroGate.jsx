import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function IntroGate({ onEnter }) {
  const mountRef = useRef(null);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.6, 6.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const gate = new THREE.Group();
    scene.add(gate);

    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x164e63,
      metalness: 0.55,
      roughness: 0.24,
      emissive: 0x062f3a,
    });
    const panelMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.42,
      roughness: 0.28,
      emissive: 0x06111f,
    });
    const cyanMaterial = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      metalness: 0.2,
      roughness: 0.18,
      emissive: 0x155e75,
      emissiveIntensity: 0.9,
    });

    const topFrame = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.18, 0.22), frameMaterial);
    topFrame.position.set(0, 1.55, 0);
    gate.add(topFrame);

    const leftFrame = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3.1, 0.22), frameMaterial);
    leftFrame.position.set(-1.9, 0, 0);
    gate.add(leftFrame);

    const rightFrame = leftFrame.clone();
    rightFrame.position.x = 1.9;
    gate.add(rightFrame);

    const leftDoor = new THREE.Group();
    const rightDoor = new THREE.Group();
    const leftPanel = new THREE.Mesh(new THREE.BoxGeometry(1.72, 2.85, 0.12), panelMaterial);
    const rightPanel = leftPanel.clone();
    const leftLine = new THREE.Mesh(new THREE.BoxGeometry(0.04, 2.25, 0.04), cyanMaterial);
    const rightLine = leftLine.clone();

    leftPanel.position.x = -0.86;
    rightPanel.position.x = 0.86;
    leftLine.position.set(-0.22, 0, 0.09);
    rightLine.position.set(0.22, 0, 0.09);

    leftDoor.position.x = 0;
    rightDoor.position.x = 0;
    leftDoor.add(leftPanel, leftLine);
    rightDoor.add(rightPanel, rightLine);
    gate.add(leftDoor, rightDoor);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.28, 0.015, 12, 120), cyanMaterial);
    ring.position.z = 0.13;
    gate.add(ring);

    const grid = new THREE.GridHelper(6, 22, 0x67e8f9, 0x155e75);
    grid.position.y = -1.54;
    grid.material.transparent = true;
    grid.material.opacity = 0.2;
    scene.add(grid);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const keyLight = new THREE.DirectionalLight(0xa5f3fc, 2.4);
    keyLight.position.set(2, 4, 5);
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
      const opening = mount.dataset.opening === 'true';
      const target = opening ? 1 : 0;
      const current = Number(mount.dataset.progress || 0);
      const next = current + (target - current) * 0.08;
      mount.dataset.progress = String(next);

      leftDoor.rotation.y = -next * 1.35;
      rightDoor.rotation.y = next * 1.35;
      gate.position.z = -next * 1.4;
      gate.rotation.y = Math.sin(elapsed * 0.45) * 0.05;
      ring.rotation.z = elapsed * 0.18;
      ring.scale.setScalar(1 + Math.sin(elapsed * 1.2) * 0.025);

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      [topFrame, leftFrame, rightFrame, leftPanel, rightPanel, leftLine, rightLine, ring, grid].forEach((mesh) => {
        mesh.geometry.dispose();
      });
      [frameMaterial, panelMaterial, cyanMaterial, grid.material].forEach((material) => material.dispose());
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const enterPortfolio = () => {
    if (isOpening) {
      return;
    }
    setIsOpening(true);
    if (mountRef.current) {
      mountRef.current.dataset.opening = 'true';
    }
    window.setTimeout(onEnter, 950);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-slate-950 text-white transition-opacity duration-700 ${
        isOpening ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_34rem)]" />
      <div ref={mountRef} className="absolute inset-0" data-opening="false" data-progress="0" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Portfolio Access</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-6xl">조윤호</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
          3D 웹 화면, 백엔드 API, RAG 검색 실험을 정리한 포트폴리오입니다.
        </p>
        <button
          type="button"
          onClick={enterPortfolio}
          className="mt-8 rounded-md border border-cyan-200/40 bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          포트폴리오 열기
        </button>
        <button
          type="button"
          onClick={onEnter}
          className="mt-4 text-sm font-medium text-slate-400 transition hover:text-slate-200"
        >
          바로 보기
        </button>
      </div>
    </div>
  );
}

export default IntroGate;
