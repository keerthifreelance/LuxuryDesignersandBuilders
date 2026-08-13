import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleCategoryChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveCategory(customEvent.detail);
    };
    window.addEventListener('setPortfolioCategory', handleCategoryChange);
    return () => window.removeEventListener('setPortfolioCategory', handleCategoryChange);
  }, []);

  const categories = ['ALL', 'RESIDENTIAL', 'INTERIOR', 'CEILING', 'KITCHEN', 'BEDROOM', 'EXTERIOR', 'COMMERCIAL'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : activeCategory === 'RESIDENTIAL'
      ? PROJECTS.filter((p) => p.category === 'RESIDENTIAL' || p.category === 'EXTERIOR')
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
              PORTFOLIO & ARCHIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
              OUR WORKS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            A curated selection of modern residential villas, luxury kitchens, bedrooms, and commercial structures across Aruppukkottai and Tamil Nadu.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-6 no-scrollbar mb-10 border-b border-white/10 scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap interactive-el ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group relative bg-[#121212] border border-white/10 overflow-hidden cursor-pointer shadow-sm hover:border-white/30 hover:shadow-2xl transition-all duration-500 explore-el"
            >
              {/* Image Container */}
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold tracking-[0.2em] px-3 py-1 uppercase">
                  {project.category}
                </span>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-5 py-2.5 bg-white text-black text-xs font-bold tracking-widest uppercase shadow-xl">
                    VIEW PROJECT
                  </span>
                </div>
              </div>

              {/* Bottom Card Meta */}
              <div className="p-6 space-y-2 bg-[#121212]">
                <div className="flex justify-between items-center text-xs font-mono text-white/50">
                  <span>{project.location}</span>
                  {project.details?.style && <span>{project.details.style}</span>}
                </div>
                <h3 className="font-serif text-2xl font-medium text-white group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="bg-[#121212] text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-white/20 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                {activeModalProject.category} • {activeModalProject.location}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                {activeModalProject.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[320px] sm:h-[400px]">
              <div className="relative h-full overflow-hidden border border-white/10">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-black/80 border border-white/10 text-white text-[10px] font-bold px-2 py-1 uppercase">
                  COMPLETED EXECUTION
                </span>
              </div>
              {activeModalProject.renderImage && (
                <div className="relative h-full overflow-hidden border border-white/10 hidden md:block">
                  <img
                    src={activeModalProject.renderImage}
                    alt={`${activeModalProject.title} 3D Render`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/80 border border-white/10 text-white text-[10px] font-bold px-2 py-1 uppercase">
                    INITIAL 3D RENDER
                  </span>
                </div>
              )}
            </div>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {activeModalProject.description}
            </p>

            {activeModalProject.details && (
              <div className="grid grid-cols-3 gap-4 p-4 bg-[#181818] border border-white/10 text-center">
                {activeModalProject.details.area && (
                  <div>
                    <span className="text-[10px] font-bold text-white/50 uppercase block">AREA</span>
                    <span className="font-serif text-base font-medium text-white">{activeModalProject.details.area}</span>
                  </div>
                )}
                {activeModalProject.details.duration && (
                  <div>
                    <span className="text-[10px] font-bold text-white/50 uppercase block">TIMELINE</span>
                    <span className="font-serif text-base font-medium text-white">{activeModalProject.details.duration}</span>
                  </div>
                )}
                {activeModalProject.details.style && (
                  <div>
                    <span className="text-[10px] font-bold text-white/50 uppercase block">STYLE</span>
                    <span className="font-serif text-base font-medium text-white">{activeModalProject.details.style}</span>
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 flex justify-between items-center border-t border-white/10">
              <span className="text-xs font-medium text-white/50">Luxury Designers & Builders</span>
              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-colors"
              >
                REQUEST SIMILAR PROJECT
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
