import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const handleServiceClick = (service: ServiceItem) => {
    let targetSectionId = '#projects';
    let targetCategory = 'ALL';
    
    if (service.number === '01') { // Interior Design
      targetCategory = 'INTERIOR';
    } else if (service.number === '02') { // Architectural Design
      targetCategory = 'RESIDENTIAL';
    } else if (service.number === '03') { // 2D Floor Planning
      targetSectionId = '#design-reality';
      window.dispatchEvent(new CustomEvent('setDesignVsRealityTab', { detail: 'BLUEPRINT' }));
    } else if (service.number === '04') { // 3D Visualization
      targetSectionId = '#design-reality';
      window.dispatchEvent(new CustomEvent('setDesignVsRealityTab', { detail: 'COMPARISON' }));
    } else if (service.number === '05') { // Design & Build
      targetCategory = 'RESIDENTIAL';
    } else if (service.number === '06') { // Renovation
      targetSectionId = '#before-after';
    } else if (service.number === '07') { // Exterior Design
      targetCategory = 'EXTERIOR';
    } else if (service.number === '08') { // Ceiling Works
      targetCategory = 'CEILING';
    }

    if (targetSectionId === '#projects') {
      window.dispatchEvent(new CustomEvent('setPortfolioCategory', { detail: targetCategory }));
    }

    const targetElement = document.querySelector(targetSectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
              DISCIPLINES & CAPABILITIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
              OUR EXPERTISE
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            From preliminary Vastu 2D drafting to ground-up civil construction and turnkey interior styling, we offer end-to-end architectural perfection in Aruppukkottai.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              onClick={() => handleServiceClick(service)}
              className="relative bg-[#121212] p-8 sm:p-10 border border-white/10 flex flex-col justify-between h-[420px] overflow-hidden cursor-pointer interactive-el"
            >
              {/* Background Image - Shown directly with elegant opacity */}
              <div className="absolute inset-0 z-0 opacity-25">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Top Header */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-sm font-bold text-[#C5A059] tracking-widest">
                  {service.number}
                </span>
                <span className="material-symbols-outlined text-3xl text-white/80">
                  {service.iconName}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                <div className="pt-4 flex items-center text-xs font-bold tracking-[0.15em] text-white/90">
                  <span>LEARN MORE</span>
                  <span className="material-symbols-outlined text-sm ml-2">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
