import React from 'react';
import { FOUNDER_INFO, BRAND_INFO } from '../data/content';

export const ProfileSection: React.FC = () => {
  return (
    <section id="profile" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-2">
              LEADERSHIP & ARCHITECTURAL VISION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
              MEET OUR FOUNDER
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            Behind Luxury Designers & Builders is an uncompromising commitment to structural integrity, Vastu perfection, and 8+ years of engineering leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Profile Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-none overflow-hidden border border-[#C5A059]/40 bg-[#121212] shadow-2xl group explore-el">
              {/* Profile Photo */}
              <div className="relative h-[480px] sm:h-[580px] overflow-hidden">
                <img
                  src={FOUNDER_INFO.image}
                  alt={FOUNDER_INFO.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              </div>

              {/* Floating Profile Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0A0A0A]/90 backdrop-blur-md p-5 border border-[#C5A059]/50 space-y-1 shadow-2xl">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block">
                  CHIEF ENGINEER & FOUNDER
                </span>
                <h3 className="font-serif text-2xl font-medium text-white">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-xs text-white/70 font-mono">
                  {FOUNDER_INFO.title} • <span className="text-[#C5A059] font-bold">{FOUNDER_INFO.experience} Exp</span>
                </p>
              </div>

              {/* Decorative Corner Gold Accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C5A059] pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C5A059] pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C5A059] pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C5A059] pointer-events-none" />
            </div>

            {/* Background Offset Framing */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-white/10 -z-10 hidden sm:block pointer-events-none" />
          </div>

          {/* Right Column: Detailed Build-up & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 border-b border-[#C5A059]/40 pb-1">
                <span className="material-symbols-outlined text-sm text-[#C5A059]">workspace_premium</span>
                <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">
                  FOUNDER'S PROFILE
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
                {FOUNDER_INFO.name}
              </h3>
              <p className="text-base font-semibold text-[#C5A059] font-mono tracking-wide">
                {FOUNDER_INFO.title} ({FOUNDER_INFO.experience} Experience)
              </p>
            </div>

            {/* Narrative Bio */}
            <div className="space-y-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
              <p>{FOUNDER_INFO.bio}</p>
              <p>{FOUNDER_INFO.fullBio}</p>
            </div>

            {/* Founder Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#121212] border border-white/10 shadow-xl">
              {FOUNDER_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1 text-center sm:text-left">
                  <span className="font-serif text-2xl sm:text-3xl font-medium text-[#C5A059] block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Technical Expertise Checklist */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 block">
                ENGINEERING & DESIGN SPECIALIZATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-white/90">
                {FOUNDER_INFO.specialties.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="material-symbols-outlined text-sm text-[#C5A059]">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Quote Card */}
            <div className="bg-[#121212] p-6 border-l-2 border-[#C5A059] space-y-3 relative shadow-xl">
              <span className="material-symbols-outlined text-3xl text-[#C5A059]/40 absolute top-4 right-4">
                format_quote
              </span>
              <p className="font-serif italic text-sm sm:text-base text-white/90 leading-relaxed">
                "{FOUNDER_INFO.quote}"
              </p>
              <p className="text-xs font-bold tracking-widest text-[#C5A059] uppercase font-mono">
                — {FOUNDER_INFO.name}
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(197,160,89,0.5)] hover:scale-105 transition-all duration-300 interactive-el"
              >
                CONSULT WITH {FOUNDER_INFO.name.toUpperCase()}
              </a>
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="px-8 py-4 border border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#C5A059]/15 transition-all duration-300 interactive-el"
              >
                CALL DIRECTLY: {BRAND_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
