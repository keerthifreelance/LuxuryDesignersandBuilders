import React from 'react';

export const WhyUsSection: React.FC = () => {
  const benefits = [
    {
      icon: 'architecture',
      title: 'Vastu-Compliant Planning',
      desc: 'All 2D floor plans are meticulously designed to align with Vastu Shastra directions, ensuring harmony, ventilation, and prosperity.'
    },
    {
      icon: 'design_services',
      title: '3D Render to Reality Fidelity',
      desc: 'We guarantee high-precision construction execution matching the exact photorealistic 3D renders you approved. What you see is what we build.'
    },
    {
      icon: 'handyman',
      title: 'Turnkey Design & Build',
      desc: 'From excavation to final interior styling, we manage materials procurement, engineering checks, and site safety under a single unified roof.'
    },
    {
      icon: 'workspace_premium',
      title: 'Premium Local Craftsmanship',
      desc: 'Based locally in Aruppukkottai, our architects, engineers, and carpentry specialists maintain the highest quality standards in Tamil Nadu.'
    }
  ];

  return (
    <section id="why-us" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
              WHY CHOOSE OUR FIRM
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
              UNCOMPROMISING LUXURY & PRECISION
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            We combine premium material selection, rigorous civil engineering, and bespoke custom interior architecture to deliver timeless spaces across Aruppukkottai.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-[#121212] border border-white/10 space-y-4 hover:border-[#C5A059]/40 transition-colors duration-300"
            >
              <span className="material-symbols-outlined text-4xl text-[#C5A059]">
                {benefit.icon}
              </span>
              <h3 className="font-serif text-xl font-medium text-white">
                {benefit.title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
