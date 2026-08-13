import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BRAND_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  const threeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = threeContainerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize subtle wireframe architectural 3D background with Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create a series of nested architectural structural wireframe boxes
    const group = new THREE.Group();

    const boxGeo = new THREE.BoxGeometry(10, 8, 10, 2, 2, 2);
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 });
    const wireBox = new THREE.LineSegments(edgesGeo, lineMat);
    group.add(wireBox);

    const innerGeo = new THREE.BoxGeometry(6, 5, 6);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({ color: 0xc5a059, transparent: true, opacity: 0.35 });
    const innerWire = new THREE.LineSegments(innerEdges, innerMat);
    group.add(innerWire);

    scene.add(group);

    let animationFrameId: number;

    const animate = () => {
      if (!prefersReducedMotion) {
        group.rotation.y += 0.0015;
        group.rotation.x += 0.0008;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">
      {/* Three.js Background Canvas */}
      <div
        ref={threeContainerRef}
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Architectural Image Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[480px] sm:h-[580px] overflow-hidden shadow-2xl border border-white/10 group explore-el">
            <img
              src="/images/pics/workpics/Night view.jpg.jpeg"
              alt="Luxury Designers & Builders Architecture"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
                Aruppukkottai Landmark
              </span>
              <p className="font-serif text-xl sm:text-2xl font-medium leading-tight">
                Crafted with Material Honesty & Structural Rigor
              </p>
            </div>
          </div>

          {/* Accent Box Frame */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-white/20 -z-10 hidden sm:block" />
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2 border-b border-white/30 pb-1">
            <span className="material-symbols-outlined text-sm text-[#C5A059]">verified</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
              OUR PHILOSOPHY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-white">
            WE DON'T JUST DESIGN SPACES.<br />
            <span className="italic text-white/60">WE DESIGN HOW YOU LIVE.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl font-light">
            Based in Aruppukkottai, Tamil Nadu, <strong className="text-white font-medium">Luxury Designers & Builders</strong> transforms empty plots into living works of art. From initial Vastu-compliant 2D plans and photorealistic 3D visualization to precision turn-key construction and bespoke interior styling, we engineer every space around human comfort and timeless aesthetic harmony.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-light text-white block">
                {BRAND_INFO.rating}
              </span>
              <span className="text-xs font-medium tracking-wider text-white/50 uppercase">
                {BRAND_INFO.reviewsCount}
              </span>
            </div>
            <div>
              <span className="font-serif text-3xl sm:text-4xl font-light text-white block">
                100%
              </span>
              <span className="text-xs font-medium tracking-wider text-white/50 uppercase">
                Design Realization
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="font-serif text-3xl sm:text-4xl font-light text-white block">
                Turn-key
              </span>
              <span className="text-xs font-medium tracking-wider text-white/50 uppercase">
                Design & Build
              </span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 interactive-el"
            >
              DISCOVER OUR FIRM
            </a>
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="px-8 py-4 border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-300 interactive-el"
            >
              TALK TO DESIGNER
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
