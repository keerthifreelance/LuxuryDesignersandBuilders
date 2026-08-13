import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_INFO, STORY_STAGES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

// Eagerly import all frames as asset URLs using Vite glob import
const frameModules = import.meta.glob('./scrollvideo/frames/frame_*.jpg', { eager: true });
const frameUrls = Object.keys(frameModules)
  .sort()
  .map((key) => (frameModules[key] as any).default);

const TOTAL_FRAMES = frameUrls.length;
const TOTAL_SCROLL_FRAMES = 300; // Total frames for scroll progression

export const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [activeStage, setActiveStage] = useState(STORY_STAGES[0]);
  const lastFrameRef = useRef(0);
  const loadedImagesRef = useRef<Map<number, HTMLImageElement>>(new Map());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawFrame = (frameNum: number) => {
      if (!canvas || !ctx) return;

      // Map the 300 scroll frames to the 282 video frames
      const videoFrameIdx = Math.min(
        Math.round((frameNum / TOTAL_SCROLL_FRAMES) * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      // Find the closest loaded frame to avoid black flickers during load
      let closestFrame = videoFrameIdx;
      while (closestFrame >= 0 && !loadedImagesRef.current.has(closestFrame)) {
        closestFrame--;
      }
      if (closestFrame < 0) {
        closestFrame = videoFrameIdx;
        while (closestFrame < TOTAL_FRAMES && !loadedImagesRef.current.has(closestFrame)) {
          closestFrame++;
        }
      }

      const activeImage = loadedImagesRef.current.get(closestFrame);
      if (!activeImage) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Draw frame image with object-fit: cover calculation
      const imgRatio = activeImage.width / activeImage.height;
      const canvasRatio = width / height;

      let renderWidth = width;
      let renderHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderHeight = width / imgRatio;
        offsetY = (height - renderHeight) / 2;
      } else {
        renderWidth = height * imgRatio;
        offsetX = (width - renderWidth) / 2;
      }

      // Apply a subtle dynamic zoom and pan for a cinematic touch
      const progress = frameNum / TOTAL_SCROLL_FRAMES;
      const zoom = 1 + progress * 0.04;
      const panY = (progress - 0.5) * 10;

      ctx.save();
      ctx.translate(width / 2, height / 2 + panY);
      ctx.scale(zoom, zoom);
      ctx.translate(-width / 2, -height / 2);

      ctx.drawImage(activeImage, offsetX, offsetY, renderWidth, renderHeight);
      ctx.restore();

      // Dark vignette overlay for text legibility
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.3,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0.25)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.75)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      ctx.restore();
    };

    // Preload all frames
    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedImagesRef.current.set(index, img);
        if (index === 0 && lastFrameRef.current === 0) {
          drawFrame(0);
        }
      };
    });

    if (prefersReducedMotion) {
      drawFrame(TOTAL_SCROLL_FRAMES);
      return;
    }

    // GSAP ScrollTrigger timeline across pinned hero container
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=700%', // 700vh scroll sequence
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const frame = Math.round(self.progress * TOTAL_SCROLL_FRAMES);
        lastFrameRef.current = frame;
        setCurrentFrameIndex(frame);

        // Map the current frame index scale to the 900 frame stages in content.ts
        const lookupFrame = Math.round((frame / TOTAL_SCROLL_FRAMES) * 900);
        const matchingStage = STORY_STAGES.find(
          (stage) => lookupFrame >= stage.frameStart && lookupFrame <= stage.frameEnd
        );
        if (matchingStage) {
          setActiveStage(matchingStage);
        }

        requestAnimationFrame(() => drawFrame(frame));
      }
    });

    const handleResize = () => {
      drawFrame(lastFrameRef.current);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showOverlay = currentFrameIndex >= 295;

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden text-white">
      <h1 className="sr-only">Luxury Designers & Builders — Interior Design & Architecture in Aruppukkottai</h1>

      {/* Sticky Canvas Viewport */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Floating Header Branding - Slides and fades in at frame 295 */}
      <div className={`absolute top-28 left-6 sm:left-12 md:left-16 z-20 pointer-events-none transition-all duration-700 ease-out hidden sm:block ${
        showOverlay ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1">
          Aruppukkottai, Tamil Nadu
        </span>
        <span className="font-serif text-sm sm:text-base text-white/80 font-medium tracking-wide">
          Architecture • Interiors • 3D Visualization • Build
        </span>
      </div>

      {/* Story Text Overlay Container - Slides and fades in at frame 295 */}
      <div className={`absolute inset-0 z-10 flex flex-col justify-center items-center px-6 text-center transition-all duration-700 ease-out ${
        showOverlay ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] drop-shadow-lg">
            {activeStage.headline}
          </h2>

          <p className="text-sm sm:text-lg md:text-xl font-normal text-white/90 max-w-2xl mx-auto font-sans tracking-wide drop-shadow">
            {activeStage.subhead}
          </p>

          {/* Action CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-2xl interactive-el"
            >
              START YOUR PROJECT
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-black/50 backdrop-blur-md text-white border border-white/30 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 interactive-el"
            >
              EXPLORE OUR WORK
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Prompt - Centered and visible only before scrolling is complete */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-500 ${
        currentFrameIndex < 290 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="flex items-center space-x-2 text-white/80 animate-bounce">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
            SCROLL TO EXPERIENCE
          </span>
          <span className="material-symbols-outlined text-lg">arrow_downward</span>
        </div>
      </div>
    </section>
  );
};
