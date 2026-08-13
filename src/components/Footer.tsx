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
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A059] block">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-light text-white/70">
              <li><a href="#hero" className="hover:text-white transition-colors">HOME</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">ABOUT FIRM</a></li>
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
