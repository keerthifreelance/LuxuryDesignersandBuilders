import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CinematicHero } from './components/CinematicHero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { DesignVsReality } from './components/DesignVsReality';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !prefersReducedMotion,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Global cursor hover triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('.interactive-el, a, button, input, select, textarea')) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }

      if (target.closest('.explore-el')) {
        document.body.classList.add('cursor-explore');
      } else {
        document.body.classList.remove('cursor-explore');
      }

      if (target.closest('.drag-el')) {
        document.body.classList.add('cursor-drag');
      } else {
        document.body.classList.remove('cursor-drag');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      lenis.destroy();
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] relative font-sans selection:bg-white selection:text-black">
      <CustomCursor />
      <LoadingScreen />
      <Navbar />

      <main>
        <CinematicHero />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <DesignVsReality />
        <BeforeAfterSection />
        <WhyUsSection />
        <ProcessSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
