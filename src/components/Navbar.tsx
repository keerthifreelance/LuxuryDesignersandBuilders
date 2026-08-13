import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BEFORE & AFTER', href: '#before-after' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'PROCESS', href: '#process' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 text-[#F5F5F5] py-4'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent text-[#F5F5F5] py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex justify-between items-center">
          
          {/* Top Left Area: Dashboard Icon + Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 -ml-2 hover:text-[#C5A059] text-white transition-colors duration-300 flex items-center justify-center interactive-el"
            >
              <span className="material-symbols-outlined text-2xl sm:text-3xl">
                menu
              </span>
            </button>

            <a
              href="#hero"
              className="flex items-center space-x-2 sm:space-x-3 group interactive-el"
            >
              <img
                src="/images/logo.png"
                alt="Luxury Designers & Builders Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col text-left">
                <span className="font-serif text-[10px] min-[375px]:text-xs min-[410px]:text-sm sm:text-lg md:text-xl font-semibold tracking-tight text-white transition-colors duration-300 leading-none block mb-1">
                  LUXURY DESIGNERS & BUILDERS
                </span>
                <span className="text-[6px] min-[375px]:text-[7px] min-[410px]:text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase text-white/60 transition-colors duration-300 leading-none block">
                  Aruppukkottai • Architecture & Interiors
                </span>
              </div>
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="inline-flex items-center text-xs font-semibold tracking-[0.1em] px-4 py-2.5 border border-white/20 text-white hover:bg-white/10 transition-all duration-300 interactive-el"
            >
              <span className="material-symbols-outlined text-sm mr-1.5">call</span>
              {BRAND_INFO.phoneDisplay}
            </a>

            <a
              href="#contact"
              className="text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 bg-white text-black hover:bg-white/90 transition-all duration-300 interactive-el"
            >
              START A PROJECT
            </a>
          </div>
        </div>
      </header>

      {/* Global Sidebar Drawer Navigation */}
      {/* Background Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[380px] bg-[#0A0A0A] border-r border-white/10 text-[#F5F2EC] flex flex-col justify-between p-8 sm:p-10 transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="space-y-8 flex flex-col items-start w-full">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between w-full border-b border-white/10 pb-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
              NAVIGATION
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 hover:text-[#C5A059] text-white transition-colors duration-300 flex items-center justify-center interactive-el"
            >
              <span className="material-symbols-outlined text-2xl">
                close
              </span>
            </button>
          </div>

          <nav className="flex flex-col space-y-4 w-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-xl sm:text-2xl font-medium tracking-tight hover:text-[#C5A059] transition-colors duration-300 block py-1 border-b border-transparent hover:border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <div className="text-[11px] text-white/50 space-y-1">
            <p className="font-semibold text-white">Luxury Designers & Builders</p>
            <p>{BRAND_INFO.address}</p>
            <p className="text-[#C5A059]">5.0 ★ (19 Google Reviews)</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="flex items-center justify-center text-xs font-bold tracking-wider uppercase py-3 border border-white/20 hover:bg-white/5 text-white transition-all rounded-none"
            >
              <span className="material-symbols-outlined text-sm mr-1">call</span>
              CALL US
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center text-xs font-bold tracking-wider uppercase py-3 bg-white text-[#1C1B1B] hover:bg-white/90 transition-all rounded-none"
            >
              START PROJECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
