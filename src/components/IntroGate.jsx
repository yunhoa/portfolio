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

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.15, 6.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const world = new THREE.Group();
    scene.add(world);

    const dark = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.36,
      roughness: 0.28,
      emissive: 0x020617,
    });
    const glass = new THREE.MeshStandardMaterial({
      color: 0x155e75,
      metalness: 0.18,
      roughness: 0.16,
      transparent: true,
      opacity: 0.34,
      emissive: 0x083344,
      emissiveIntensity: 0.7,
    });
    const glow = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      metalness: 0.12,
      roughness: 0.12,
      emissive: 0x0891b2,
      emissiveIntensity: 1.2,
    });
    const steel = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.62,
      roughness: 0.22,
      emissive: 0x0f172a,
    });

    const desk = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.16, 2.2), steel);
    desk.position.set(0, -1.18, 0);
    world.add(desk);

    const monitor = new THREE.Group();
    const screen = new THREE.Mesh(new THREE.BoxGeometry(2.9, 1.55, 0.12), dark);
    const screenGlow = new THREE.Mesh(new THREE.PlaneGeometry(2.65, 1.25), glass);
    screenGlow.position.z = 0.07;
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.75, 0.14), steel);
    stand.position.y = -1.04;
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.55), steel);
    base.position.y = -1.42;
    monitor.add(screen, screenGlow, stand, base);
    monitor.position.set(0, 0.18, 0.04);
    world.add(monitor);

    const cursor = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.52, 0.04), glow);
    cursor.position.set(-1.1, 0.22, 0.15);
    monitor.add(cursor);

    const codeLines = [];
    for (let i = 0; i < 7; i += 1) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.55 + (i % 3) * 0.28, 0.035, 0.035), glow);
      line.position.set(-0.84 + (i % 2) * 0.12, 0.5 - i * 0.16, 0.16);
      line.material = glow;
      codeLines.push(line);
      monitor.add(line);
    }

    const keyboard = new THREE.Group();
    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.12), dark);
        key.position.set(-0.78 + col * 0.18 + row * 0.04, -1.1, 0.82 + row * 0.15);
        keyboard.add(key);
      }
    }
    world.add(keyboard);

    const server = new THREE.Group();
    for (let i = 0; i < 4; i += 1) {
      const rack = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.22, 0.62), steel);
      rack.position.y = -0.82 + i * 0.28;
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.03), glow);
      led.position.set(0.28, rack.position.y, 0.33);
      server.add(rack, led);
    }
    server.position.set(-2.05, 0.1, -0.12);
    world.add(server);

    const panels = [
      ['3D', -1.85, 0.92, -0.15],
      ['API', 1.85, 0.78, -0.05],
      ['RAG', 1.58, -0.42, 0.16],
    ].map(([label, x, y, z]) => {
      const panel = new THREE.Group();
      const card = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.42, 0.035), glass);
      const bar = new THREE.Mesh(new THREE.BoxGeometry(label.length === 3 ? 0.34 : 0.24, 0.04, 0.035), glow);
      bar.position.set(-0.18, 0.02, 0.04);
      panel.add(card, bar);
      panel.position.set(x, y, z);
      world.add(panel);
      return panel;
    });

    const orbitNodes = [];
    const orbit = new THREE.Group();
    for (let i = 0; i < 10; i += 1) {
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), glow);
      const angle = (i / 10) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 1.55, Math.sin(angle) * 0.58, 0.35 + Math.sin(angle) * 0.2);
      orbitNodes.push(node);
      orbit.add(node);
    }
    orbit.position.set(0, 0.04, 0.28);
    world.add(orbit);

    const grid = new THREE.GridHelper(6.5, 26, 0x67e8f9, 0x155e75);
    grid.position.y = -1.28;
    grid.position.z = -0.2;
    grid.material.transparent = true;
    grid.material.opacity = 0.18;
    scene.add(grid);

    scene.add(new THREE.AmbientLight(0xffffff, 0.72));
    const keyLight = new THREE.DirectionalLight(0xa5f3fc, 2.6);
    keyLight.position.set(2.6, 4, 4);
    scene.add(keyLight);
    const sideLight = new THREE.PointLight(0x38bdf8, 1.8, 8);
    sideLight.position.set(-2.2, 0.6, 2.1);
    scene.add(sideLight);

    const clock = new THREE.Clock();
    let animationFrame = 0;
    const responsive = { baseY: 0, scale: 1 };

    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      if (width < 640) {
        camera.position.set(0, 1.2, 7.5);
        responsive.baseY = -0.35;
        responsive.scale = 0.78;
      } else {
        camera.position.set(0, 1.15, 6.4);
        responsive.baseY = 0.05;
        responsive.scale = 0.98;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const opening = mount.dataset.opening === 'true';
      const target = opening ? 1 : 0;
      const current = Number(mount.dataset.progress || 0);
      const next = current + (target - current) * 0.075;
      mount.dataset.progress = String(next);

      world.rotation.y = Math.sin(elapsed * 0.28) * 0.09 + next * 0.45;
      world.position.z = -next * 1.6;
      world.position.y = responsive.baseY + next * 0.16;
      world.scale.setScalar(responsive.scale);
      monitor.scale.setScalar(1 + next * 0.18);
      screenGlow.scale.set(1 + Math.sin(elapsed * 1.4) * 0.012, 1, 1);
      cursor.material.opacity = 0.35 + Math.sin(elapsed * 7) * 0.35;
      cursor.visible = Math.sin(elapsed * 7) > -0.35;
      orbit.rotation.z = elapsed * 0.25;
      orbit.rotation.y = elapsed * 0.16;

      codeLines.forEach((line, index) => {
        line.scale.x = 0.72 + Math.sin(elapsed * 1.6 + index) * 0.12;
      });
      panels.forEach((panel, index) => {
        panel.position.y += Math.sin(elapsed * 0.9 + index) * 0.0018;
        panel.rotation.y = Math.sin(elapsed * 0.5 + index) * 0.08;
      });

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
      [
        desk,
        screen,
        screenGlow,
        stand,
        base,
        cursor,
        ...codeLines,
        ...keyboard.children,
        ...server.children,
        ...panels.flatMap((panel) => panel.children),
        ...orbitNodes,
        grid,
      ].forEach((mesh) => mesh.geometry.dispose());
      [dark, glass, glow, steel, grid.material].forEach((material) => material.dispose());
      renderer.dispose();
      document.body.style.overflow = originalOverflow;
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
    window.setTimeout(onEnter, 850);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-slate-950 text-white transition-opacity duration-700 ${
        isOpening ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_32rem),linear-gradient(180deg,rgba(2,6,23,0.16),rgba(2,6,23,0.9))]" />
      <div ref={mountRef} className="absolute inset-0" data-opening="false" data-progress="0" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-start px-5 pt-16 text-left sm:px-8 sm:pt-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 sm:text-sm">
            Yoonho Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
            작업한 것들을
            <br />
            한 곳에 모았습니다.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
            3D 화면, 백엔드 API, RAG 검색, 업무 자동화를 직접 만들면서 배운 내용을 정리했습니다.
          </p>
        </div>
        <button
          type="button"
          onClick={enterPortfolio}
          className="mt-7 rounded-md border border-cyan-200/40 bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          작업물 보기
        </button>
      </div>
    </div>
  );
}

export default IntroGate;
