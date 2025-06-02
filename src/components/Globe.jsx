import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const NeuralNetwork = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1E293B);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    const container = mountRef.current;
    const { clientWidth: width, clientHeight: height } = container;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create nodes
    const nodes = [];
    const nodeCount = 20;
    const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color: 0x0066FF,
      emissive: 0x0044AA,
      shininess: 100
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      node.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        )
      };
      nodes.push(node);
      scene.add(node);
    }

    // Create connections
    const connections = [];
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0066FF,
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) continue;
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position,
          nodes[j].position
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        connections.push({ line, from: i, to: j });
        scene.add(line);
      }
    }

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0066FF, 3);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = false;

    // Add post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.0,
      0.4,
      0.85
    );
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update node positions
      nodes.forEach(node => {
        node.position.add(node.userData.velocity);

        // Bounce off boundaries
        ['x', 'y', 'z'].forEach(axis => {
          if (Math.abs(node.position[axis]) > 3) {
            node.userData.velocity[axis] *= -1;
          }
        });
      });

      // Update connections
      connections.forEach(({ line, from, to }) => {
        line.geometry.setFromPoints([nodes[from].position, nodes[to].position]);
        line.geometry.verticesNeedUpdate = true;
      });

      controls.update();
      composer.render();
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
    />
  );
};

export default NeuralNetwork;