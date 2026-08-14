import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/content';

export const CinematicHero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      goToNextSlide();
    } else if (isSwipeRight) {
      goToPrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="sr-only">
        Luxury Designers & Builders — Interior Design & Architecture in Aruppukkottai
      </h1>

      {/* Top Slides Sliding Container */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out w-full h-full z-0"
        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full h-full flex-shrink-0 relative overflow-hidden"
          >
            {/* Background Image with Ken Burns Subtle Scale */}
            <img
              src={slide.image}
              alt={`${slide.headlineMain} ${slide.headlineGold}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                index === currentSlideIndex ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Balanced Vignette Overlay for High Image Clarity + Perfect Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/45 to-black/30 z-10" />
          </div>
        ))}
      </div>

      {/* Floating Top Left Location Badge */}
      <div className="absolute top-28 left-6 sm:left-12 md:left-16 z-20 hidden sm:block">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A059] uppercase block mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {HERO_SLIDES[currentSlideIndex].tagline}
        </span>
        <span className="font-serif text-sm sm:text-base text-white/90 font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Architecture • Interiors • 3D Visualization • Build
        </span>
      </div>

      {/* Active Slide Story Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-5 animate-fade-in p-6 sm:p-8 rounded-none">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase shadow-lg">
            {HERO_SLIDES[currentSlideIndex].badge}
          </span>

          {/* Headline with Gold Accent Contrast */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] [text-shadow:_0_4px_20px_rgba(0,0,0,0.95)]">
            {HERO_SLIDES[currentSlideIndex].headlineMain}{' '}
            <span className="text-[#C5A059] font-normal block sm:inline">
              {HERO_SLIDES[currentSlideIndex].headlineGold}
            </span>
          </h2>

          {/* Subhead with High Legibility Contrast Shadow */}
          <p className="text-sm sm:text-lg md:text-xl font-normal text-white/95 max-w-2xl mx-auto font-sans tracking-wide [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
            {HERO_SLIDES[currentSlideIndex].subhead}
          </p>

          {/* Luxury Gold CTAs */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105 transition-all duration-300 shadow-2xl interactive-el"
            >
              START YOUR PROJECT
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-black/60 backdrop-blur-md text-[#C5A059] border border-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059] hover:text-black transition-all duration-300 interactive-el"
            >
              EXPLORE OUR WORK
            </a>
          </div>
        </div>
      </div>

      {/* Manual Slide Controls — Left / Right Arrow Buttons */}
      <button
        onClick={goToPrevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 flex items-center justify-center interactive-el rounded-none"
      >
        <span className="material-symbols-outlined text-xl">arrow_back</span>
      </button>

      <button
        onClick={goToNextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 flex items-center justify-center interactive-el rounded-none"
      >
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </button>

      {/* Bottom Bar: Slide Counter & Indicators */}
      <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-30 flex justify-between items-center border-t border-white/10 pt-4">
        {/* Slide Counter */}
        <div className="text-xs font-mono font-bold tracking-widest text-[#C5A059]">
          0{currentSlideIndex + 1} <span className="text-white/40">/ 0{totalSlides}</span>
        </div>

        {/* Slide Dots / Bars */}
        <div className="flex space-x-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 interactive-el ${
                idx === currentSlideIndex
                  ? 'w-10 bg-[#C5A059] shadow-[0_0_10px_#C5A059]'
                  : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Pause / Play Indicator */}
        <span className="text-[10px] font-mono tracking-widest text-white/50 hidden sm:block uppercase">
          {isPaused ? 'PAUSED' : 'AUTO SLIDING'}
        </span>
      </div>
    </section>
  );
};
