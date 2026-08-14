import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const openModal = (project: ProjectItem) => {
    setActiveModalProject(project);
    if (project.videoUrl) {
      setActiveModalImage(project.videoUrl);
    } else {
      setActiveModalImage(project.image);
    }
  };

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

  const categories = ['ALL', 'VIDEOS', 'RESIDENTIAL', 'INTERIOR', 'HALL', 'CEILING', 'KITCHEN', 'BEDROOM', 'EXTERIOR', 'COMMERCIAL'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : activeCategory === 'VIDEOS'
      ? PROJECTS.filter((p) => p.category === 'VIDEOS' || !!p.videoUrl)
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
              FEATURED PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              CRAFTED WITH PRECISION
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light">
            Explore our architectural blueprints, luxury interiors, 3D renderings, and turnkey physical executions.
          </p>
        </div>

        {/* Category Pills Slider */}
        <div className="relative mb-12 flex items-center">
          <button
            onClick={() => scroll('left')}
            className="md:hidden z-15 p-2 mr-2 bg-[#181818] text-white border border-white/10 hover:border-[#C5A059] transition-colors rounded-full"
            aria-label="Scroll categories left"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>

          <div
            ref={scrollRef}
            className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-2 scroll-smooth px-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap interactive-el ${activeCategory === cat
                    ? 'bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black shadow-[0_0_15px_rgba(197,160,89,0.4)]'
                    : 'bg-[#181818] text-white/70 hover:text-white border border-white/10 hover:border-[#C5A059]/40'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="md:hidden z-15 p-2 ml-2 bg-[#181818] text-white border border-white/10 hover:border-[#C5A059] transition-colors rounded-full"
            aria-label="Scroll categories right"
          >
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group relative bg-[#121212] border border-white/10 overflow-hidden cursor-pointer explore-el hover:border-[#C5A059]/50 transition-all duration-500 shadow-xl"
            >
              {/* Image / Direct Video Container */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </>
                )}

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-bold px-3 py-1 uppercase tracking-widest pointer-events-none z-10">
                  {project.videoUrl ? 'WALKTHROUGH VIDEO' : project.category}
                </span>

                {/* Hover Badge */}
                {!project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-5 py-2.5 bg-[#C5A059] text-black text-xs font-bold tracking-widest uppercase">
                      VIEW PROJECT
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer Content */}
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between text-xs text-white/50 font-mono">
                  <span>{project.location}</span>
                  {project.details?.style && <span className="text-[#C5A059]">{project.details.style}</span>}
                </div>
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#C5A059] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2 font-light">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal with Side View Switcher */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="bg-[#121212] text-white max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 border border-[#C5A059]/40 relative shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-black text-white transition-all flex items-center justify-center interactive-el"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                {activeModalProject.category} • {activeModalProject.location}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Main Interactive View Window (Image or Video) */}
            <div className="relative w-full h-[340px] sm:h-[480px] overflow-hidden border border-white/20 bg-black flex items-center justify-center">
              {activeModalImage && activeModalImage.endsWith('.mp4') ? (
                <video
                  src={activeModalImage}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={activeModalImage || activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-contain transition-all duration-500"
                />
              )}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-[#C5A059]/50 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest flex items-center space-x-2 pointer-events-none z-10">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span>
                  {activeModalImage && activeModalImage.endsWith('.mp4')
                    ? 'WALKTHROUGH VIDEO'
                    : activeModalImage === activeModalProject.sideImage
                      ? 'SIDE ELEVATION VIEW'
                      : activeModalImage === activeModalProject.renderImage
                        ? 'INITIAL 3D RENDER'
                        : 'MAIN ELEVATION VIEW'}
                </span>
              </div>
            </div>

            {/* Video, Side Image, 3D Render & Gallery Thumbnails Selector */}
            {activeModalProject && (activeModalProject.videoUrl || activeModalProject.sideImage || activeModalProject.renderImage || (activeModalProject.galleryImages && activeModalProject.galleryImages.length > 0)) && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase block">
                  AVAILABLE VIEWS (CLICK TO SWITCH):
                </span>
                <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
                  {/* Main View Thumbnail */}
                  <button
                    onClick={() => setActiveModalImage(activeModalProject.image)}
                    className={`relative w-24 h-20 border-2 overflow-hidden transition-all flex-shrink-0 ${(activeModalImage || activeModalProject.image) === activeModalProject.image
                        ? 'border-[#C5A059] scale-105 shadow-[0_0_15px_rgba(197,160,89,0.5)]'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img src={activeModalProject.image} alt="Main View" className="w-full h-full object-cover" />
                    <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-bold text-center py-0.5 text-white uppercase">
                      MAIN VIEW
                    </span>
                  </button>

                  {/* Walkthrough Video Thumbnail */}
                  {activeModalProject.videoUrl && (
                    <button
                      onClick={() => setActiveModalImage(activeModalProject.videoUrl!)}
                      className={`relative w-24 h-20 border-2 overflow-hidden transition-all flex-shrink-0 bg-[#181818] flex flex-col items-center justify-center ${activeModalImage === activeModalProject.videoUrl
                          ? 'border-[#C5A059] scale-105 shadow-[0_0_15px_rgba(197,160,89,0.5)]'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                    >
                      <span className="material-symbols-outlined text-2xl text-[#C5A059]">play_circle</span>
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-bold text-center py-0.5 text-[#C5A059] uppercase">
                        PROJECT VIDEO
                      </span>
                    </button>
                  )}

                  {/* Dedicated Side Image View Thumbnail */}
                  {activeModalProject.sideImage && (
                    <button
                      onClick={() => setActiveModalImage(activeModalProject.sideImage!)}
                      className={`relative w-24 h-20 border-2 overflow-hidden transition-all flex-shrink-0 ${activeModalImage === activeModalProject.sideImage
                          ? 'border-[#C5A059] scale-105 shadow-[0_0_15px_rgba(197,160,89,0.5)]'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                    >
                      <img src={activeModalProject.sideImage} alt="Side View" className="w-full h-full object-cover" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-bold text-center py-0.5 text-[#C5A059] uppercase">
                        SIDE VIEW
                      </span>
                    </button>
                  )}

                  {/* 3D Render View Thumbnail */}
                  {activeModalProject.renderImage && (
                    <button
                      onClick={() => setActiveModalImage(activeModalProject.renderImage!)}
                      className={`relative w-24 h-20 border-2 overflow-hidden transition-all flex-shrink-0 ${activeModalImage === activeModalProject.renderImage
                          ? 'border-[#C5A059] scale-105 shadow-[0_0_15px_rgba(197,160,89,0.5)]'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                    >
                      <img src={activeModalProject.renderImage} alt="3D Render View" className="w-full h-full object-cover" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-bold text-center py-0.5 text-white uppercase">
                        3D RENDER
                      </span>
                    </button>
                  )}

                  {/* Gallery Images if present */}
                  {activeModalProject.galleryImages && activeModalProject.galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(imgUrl)}
                      className={`relative w-24 h-20 border-2 overflow-hidden transition-all flex-shrink-0 ${activeModalImage === imgUrl
                          ? 'border-[#C5A059] scale-105 shadow-[0_0_15px_rgba(197,160,89,0.5)]'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                    >
                      <img src={imgUrl} alt={`Gallery View ${idx + 1}`} className="w-full h-full object-cover" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-bold text-center py-0.5 text-white uppercase">
                        VIEW {idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              {activeModalProject.description}
            </p>

            {activeModalProject.details && (
              <div className="grid grid-cols-3 gap-4 p-4 bg-[#181818] border border-white/10 text-center">
                {activeModalProject.details.area && (
                  <div>
                    <span className="text-[10px] font-bold text-white/50 uppercase block">AREA</span>
                    <span className="font-serif text-base font-medium text-[#C5A059]">{activeModalProject.details.area}</span>
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
                className="px-6 py-3 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform"
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
