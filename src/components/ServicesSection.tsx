import React from 'react';
import { SERVICES, SERVICE_CHARGES } from '../data/content';
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
    } else if (service.number === '09') { // Hall Design
      targetCategory = 'HALL';
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
    <section id="services" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 space-y-24">
        
        {/* Section Header */}
        <div>
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

          {/* 9 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.number}
                onClick={() => handleServiceClick(service)}
                className="relative bg-[#121212] p-8 sm:p-10 border border-white/10 flex flex-col justify-between h-[420px] overflow-hidden cursor-pointer interactive-el hover:border-[#C5A059]/40 transition-colors"
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
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="pt-4 flex items-center text-xs font-bold tracking-[0.15em] text-[#C5A059]">
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

        {/* OFFICIAL SERVICES & CHARGES PRICING TABLE */}
        <div id="charges" className="pt-8">
          <div className="max-w-6xl mx-auto bg-[#121212] border-2 border-[#C5A059]/50 p-6 sm:p-10 rounded-2xl shadow-[0_0_50px_rgba(197,160,89,0.15)] relative overflow-hidden space-y-8">
            
            {/* Header Badge */}
            <div className="text-center space-y-3">
              <div className="inline-block bg-black border border-[#C5A059] px-8 py-3 rounded-xl shadow-lg">
                <h3 className="font-serif text-xl sm:text-3xl font-bold tracking-wider text-[#DFBA67] uppercase">
                  OUR SERVICES & CHARGES
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/60 font-light">
                Transparent & Affordable Rate Card for Architectural, 3D Elevation & Interior Services
              </p>
            </div>

            {/* Charges List Items (2 Columns: Left 1-4, Right 5-8) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {SERVICE_CHARGES.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 sm:p-4 bg-[#181818] border border-white/10 hover:border-[#C5A059]/50 transition-all rounded-xl gap-3 group"
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    {/* Number Badge */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black border border-[#C5A059]/60 text-[#DFBA67] font-mono text-xs sm:text-sm font-bold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      {item.id}
                    </div>
                    {/* Service Name */}
                    <span className="font-serif text-xs sm:text-sm font-semibold text-white tracking-wide truncate">
                      {item.service}
                    </span>
                  </div>

                  {/* Rate Badge */}
                  <div className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black font-mono font-bold text-xs tracking-wider shadow-md whitespace-nowrap flex-shrink-0">
                    {item.rate}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note & Direct CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
              <span className="font-mono tracking-widest text-[#C5A059] uppercase">
                * TERMS & CONDITIONS APPLY
              </span>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-[#C5A059] transition-colors rounded-lg interactive-el"
              >
                REQUEST CUSTOM ESTIMATE
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
