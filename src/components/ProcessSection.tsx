import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
              METHODOLOGY & WORKFLOW
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
              OUR PROCESS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            A seamless six-stage journey ensuring complete transparency, zero financial surprises, and exceptional architectural completion.
          </p>
        </div>

        {/* Process Steps Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="group bg-[#121212] p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl space-y-4 relative overflow-hidden"
            >
              {/* Top Step Number */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-mono text-2xl font-bold text-[#C5A059]">
                  {step.number}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                  STAGE {step.number}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-2xl font-medium text-white group-hover:text-white transition-colors">
                {step.title}
              </h3>

              <p className="text-sm font-medium text-white/90">
                {step.description}
              </p>

              <p className="text-xs text-white/60 leading-relaxed font-light">
                {step.detail}
              </p>

              {/* Accent Bottom Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
