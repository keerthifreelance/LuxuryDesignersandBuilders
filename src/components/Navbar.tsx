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
    { name: 'FOUNDER PROFILE', href: '#profile' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SERVICES & CHARGES', href: '#charges' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
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
                  <span className="text-[#C5A059]">LUXURY DESIGNERS</span> & BUILDERS
                </span>
                <span className="text-[6px] min-[375px]:text-[7px] min-[410px]:text-[8px] sm:text-[9px] font-semibold tracking-[0.2em] uppercase text-white/60 transition-colors duration-300 leading-none block">
                  Aruppukkottai • Architecture & Interiors
                </span>
              </div>
            </a>
          </div>

          {/* Desktop CTA Buttons & Social Navigation */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="p-2 border border-white/20 text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/15 transition-all duration-300 flex items-center justify-center interactive-el"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 border border-white/20 text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/15 transition-all duration-300 flex items-center justify-center interactive-el"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="inline-flex items-center text-xs font-semibold tracking-[0.1em] px-4 py-2.5 border border-[#C5A059]/60 text-[#C5A059] hover:bg-[#C5A059]/15 transition-all duration-300 interactive-el"
            >
              <span className="material-symbols-outlined text-sm mr-1.5">call</span>
              {BRAND_INFO.phoneDisplay}
            </a>

            <a
              href="#contact"
              className="text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] hover:scale-105 transition-all duration-300 interactive-el"
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
        className={`fixed inset-y-0 left-0 z-50 w-full sm:w-[380px] bg-[#0A0A0A] border-r border-white/10 text-[#F5F2EC] flex flex-col justify-between p-8 sm:p-10 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
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

          {/* Social Links inside drawer */}
          <div className="flex items-center space-x-2 pt-1">
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-1.5 text-[11px] font-bold tracking-wider uppercase py-2 border border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059]/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>FACEBOOK</span>
            </a>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-1.5 text-[11px] font-bold tracking-wider uppercase py-2 border border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059]/10 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>INSTAGRAM</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="flex items-center justify-center text-xs font-bold tracking-wider uppercase py-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 transition-all rounded-none"
            >
              <span className="material-symbols-outlined text-sm mr-1">call</span>
              CALL US
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center text-xs font-bold tracking-wider uppercase py-3 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black transition-all rounded-none"
            >
              START PROJECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
