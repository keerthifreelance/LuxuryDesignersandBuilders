import React, { useState } from 'react';
import { TESTIMONIALS, BRAND_INFO } from '../data/content';

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeReview = TESTIMONIALS[activeIndex];

  return (
    <section id="reviews" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-1 text-[#C5A059]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-xl fill-1">
                star
              </span>
            ))}
          </div>

          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase">
            {BRAND_INFO.rating} • {BRAND_INFO.reviewsCount}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
            CLIENT TRUST & TESTIMONIALS
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light">
            Real feedback from homeowners and clients in Aruppukkottai and Tamil Nadu.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto bg-[#121212] backdrop-blur-md border border-white/10 p-8 sm:p-14 text-center space-y-8 relative shadow-2xl">
          <span className="material-symbols-outlined text-5xl text-[#C5A059]/40 block mx-auto">
            format_quote
          </span>

          <p className="font-serif text-xl sm:text-2xl md:text-3xl leading-snug font-light text-white">
            "{activeReview.quote}"
          </p>

          <div className="space-y-1">
            <p className="font-semibold text-sm tracking-wider uppercase text-white">
              {activeReview.author}
            </p>
            <p className="text-xs text-[#C5A059] font-mono">
              {activeReview.projectType} • {activeReview.location}
            </p>
          </div>

          {/* Controls */}
          <div className="pt-6 flex items-center justify-center space-x-4">
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="p-3 border border-white/20 hover:border-white text-white transition-colors interactive-el"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </button>

            <span className="text-xs font-mono text-white/60">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>

            <button
              onClick={nextReview}
              aria-label="Next review"
              className="p-3 border border-white/20 hover:border-white text-white transition-colors interactive-el"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'border-white bg-[#181818]'
                  : 'border-white/10 bg-[#121212] hover:border-white/30'
              }`}
            >
              <div className="flex text-[#C5A059] text-sm mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xs">star</span>
                ))}
              </div>
              <p className="text-xs text-white/90 line-clamp-3 leading-relaxed mb-4 font-light">
                "{review.quote}"
              </p>
              <p className="text-[11px] font-bold uppercase text-white/70">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
