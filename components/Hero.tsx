import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import anime from 'animejs';
import avatarImage from './assets/0_1.png';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let scene: any, camera: any, renderer: any, particles: any, mouseX = 0, mouseY = 0;

    const init = () => {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
      camera.position.z = 300;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mount.appendChild(renderer.domElement);

      // Particles
      const particleCount = 10000;
      const positions = new Float32Array(particleCount * 10);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 1500;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        size: 1.5,
        color: 0x63e6be,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.7

      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.0001;

      particles.rotation.x = time * 0.25;
      particles.rotation.y = time * 0.5;

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - mount.clientWidth / 2);
      mouseY = (event.clientY - mount.clientHeight / 2);
    }

    init();
    animate();

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animate text and avatar
    if (nameRef.current) {
      const textWrapper = nameRef.current;
      textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: false })
        .add({
          targets: '.hero-content .letter',
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el: HTMLElement, i: number) => 30 * i
        });
    }

    if (avatarRef.current) {
      anime({
        targets: avatarRef.current,
        translateY: ['-5%', '5%'],
        direction: 'alternate',
        loop: true,
        duration: 4000,
        easing: 'easeInOutSine',
      });
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (renderer) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section id="hero" className="h-screen w-full relative flex items-center justify-center">
      <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="hero-content text-center z-10 p-4">
        <div ref={avatarRef} className="mb-8 w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-dark-accent shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] dark:hover:shadow-[0_0_30px_rgba(99,230,190,0.6)]">
          {/* AI generated avatar here */}
          <img src={avatarImage} alt="Digital Avatar" className="w-full h-full object-cover" />
        </div>
        <h1 ref={nameRef} className="text-5xl md:text-7xl font-bold text-white mb-4 font-jp tracking-wider" style={{ letterSpacing: '0.1em' }}>
          Saksham Sharma
        </h1>
        <p className="text-xl md:text-2xl text-dark-text animate-fade-in-up" style={{ animationDelay: '1s' }}>
          AI/ML Engineer
        </p>
        <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          Aspiring AI/ML Engineer with hands-on experience in building end-to-end machine learning solutions, including data pipelines, NLP applications, and recommender systems.
        </p>
      </div>
    </section>
  );
};

export default Hero;
