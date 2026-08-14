import React from 'react';
import { BRAND_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F5F5] pt-20 pb-24 sm:pb-16 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-white">
              LUXURY DESIGNERS & BUILDERS
            </h2>
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] text-[#C5A059] uppercase">
              {BRAND_INFO.secondaryTagline}
            </p>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed font-light">
              Leading interior design, architectural planning, 2D/3D visualization, renovation and turnkey construction company in Aruppukkottai, Tamil Nadu.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              <span className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase block mr-1">FOLLOW US:</span>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-full border border-white/20 text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/15 transition-all duration-300 flex items-center justify-center interactive-el"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-full border border-white/20 text-[#C5A059] hover:border-[#C5A059] hover:bg-[#C5A059]/15 transition-all duration-300 flex items-center justify-center interactive-el"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A059] block">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-light text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">HOME</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">ABOUT FIRM</a></li>
              <li><a href="#profile" className="hover:text-white transition-colors text-[#C5A059]">FOUNDER PROFILE</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">OUR SERVICES</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">PORTFOLIO</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">WHY US</a></li>
              <li><a href="#design-reality" className="hover:text-white transition-colors">2D/3D TO REALITY</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">METHODOLOGY</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">REVIEWS</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A059] block">
              CONTACT & LOCATION
            </span>
            <div className="space-y-2 text-xs text-white/70 font-light">
              <p className="font-medium text-white">{BRAND_INFO.name}</p>
              <p>{BRAND_INFO.address}</p>
              <p>
                Phone:{' '}
                <a href={`tel:${BRAND_INFO.phoneRaw}`} className="text-white font-medium hover:underline">
                  {BRAND_INFO.phoneDisplay}
                </a>
              </p>
              <p>Rating: <span className="text-[#C5A059]">{BRAND_INFO.rating}</span> ({BRAND_INFO.reviewsCount})</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-white/40 gap-4">
          <p>© 2026 Luxury Designers & Builders. All Rights Reserved.</p>
          <p>Aruppukkottai, Tamil Nadu • Architecture & Interior Design</p>
        </div>
      </div>
    </footer>
  );
};
