import React, { useState } from 'react';

interface BAImageItem {
  id: string;
  title: string;
  categoryTag: 'BEFORE WORK' | 'COMPLETED EXECUTION';
  image: string;
  description: string;
}

export const BeforeAfterSection: React.FC = () => {
  const baImages: BAImageItem[] = [
    {
      id: 'ba-1',
      title: 'Elevation Site Work',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA1.jpeg',
      description: 'Initial site condition featuring raw masonry walls, dim ambient light, and structural layout prep.'
    },
    {
      id: 'ba-2',
      title: 'Elevation Fluted Lounge',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA2.jpeg',
      description: 'Handcrafted fluted wooden partition paneling with indirect warm LED coving and luxury seating.'
    },
    {
      id: 'ba-4',
      title: '2D View Plan Layout',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/BA4.jpeg',
      description: 'Vastu-compliant 2D architectural blueprint layout and structural floor plan design.'
    },
    {
      id: '2d-plan-1',
      title: '2D Architectural Floor Plan 1',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg1.png',
      description: 'Precision Vastu-compliant 2D architectural blueprint layout and room dimensioning.'
    },
    {
      id: '2d-plan-2',
      title: '2D Architectural Floor Plan 2',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg2.png',
      description: 'Detailed civil floor layout schematic featuring column positions and wall alignments.'
    },
    {
      id: '2d-plan-3',
      title: '2D Architectural Floor Plan 3',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg3.png',
      description: 'Residential villa spatial distribution blueprint with electrical & plumbing routing.'
    },
    {
      id: '2d-plan-4',
      title: '2D Architectural Floor Plan 4',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg4.png',
      description: 'Turnkey residential floor plan draft designed according to structural Vastu principles.'
    },
    {
      id: '2d-plan-5',
      title: '2D Architectural Floor Plan 5',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg5.png',
      description: 'Ground floor conceptual plan featuring portico, living hall, kitchen, and stairwell details.'
    },
    {
      id: '2d-plan-6',
      title: '2D Architectural Floor Plan 6',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg6.jpeg',
      description: 'Multi-story residential structural blueprint layout with dimensional setback markings.'
    },
    {
      id: '2d-plan-7',
      title: '2D Architectural Floor Plan 7',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg7.png',
      description: 'Modern duplex bungalow floor plan layout detailing room clearance and doorway placements.'
    },
    {
      id: '2d-plan-8',
      title: '2D Architectural Floor Plan 8',
      categoryTag: 'BEFORE WORK',
      image: '/images/pics/workpics/2Dimg8.png',
      description: 'Comprehensive civil construction 2D drawing ready for municipal approval.'
    },
    {
      id: 'ba-5',
      title: 'Drawing to final output',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA5.jpeg',
      description: 'Traditional brick platform layout and unplastered masonry partition phase.'
    },
    {
      id: 'ba-6',
      title: 'Ergonomic Modular Exterior',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA6.jpeg',
      description: 'Completed modular island kitchen with quartz countertops and under-shelf profile lights.'
    },
    {
      id: 'ba-7',
      title: 'Villa Facade Structural Framing',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA7.jpeg',
      description: 'Ground-level civil construction phase highlighting steel column rebar and brickwork.'
    },
    {
      id: 'ba-8',
      title: 'Completed Villa Facade Elevation',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA8.jpeg',
      description: 'Double-height modern elevation featuring cantilever slabs, glass balustrades, and architectural sconces.'
    },
    {
      id: 'ba-10',
      title: 'Executive Manager Suite',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA10.jpeg',
      description: 'Corporate office lounge featuring custom manager desk paneling and high-back seating.'
    },
    {
      id: 'ba-11',
      title: 'Luxury Suite Blockwork Phase',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA11.jpeg',
      description: 'Raw concrete block partition layout prior to interior paneling and ceiling coving.'
    },
    {
      id: 'ba-12',
      title: 'Luxury Suite Building  Handover',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA12.jpeg',
      description: 'Completed master suite with warm cove strip lights, padded walling, and modular wardrobes.'
    },
    {
      id: 'ba-13',
      title: 'Commercial Storefront Masonry Work',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA13.jpeg',
      description: 'Unfinished civil storefront layout prior to toughened glass glazing and metal trim.'
    },
    {
      id: 'ba-14',
      title: 'Modern Glass Commercial Storefront',
      categoryTag: 'COMPLETED EXECUTION',
      image: '/images/pics/workpics/BA14.jpeg',
      description: 'Finished retail commercial storefront with frameless glass facades and architectural lighting.'
    }
  ];

  const [activeTab, setActiveTab] = useState<'ALL' | 'BEFORE WORK' | 'COMPLETED EXECUTION'>('ALL');
  const [selectedModalImage, setSelectedModalImage] = useState<BAImageItem | null>(null);

  const filteredImages = activeTab === 'ALL'
    ? baImages
    : baImages.filter(item => item.categoryTag === activeTab);

  return (
    <section id="before-after" className="py-28 md:py-36 bg-[#0E0E0E] text-[#F5F5F5] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
            WORK IN PROGRESS & COMPLETED EXECUTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
            BEFORE & AFTER GALLERY
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Explore our site photos showcasing raw structural construction phases and completed luxury handovers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center space-x-3 mb-12">
          {(['ALL', 'BEFORE WORK', 'COMPLETED EXECUTION'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 interactive-el ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black shadow-[0_0_15px_rgba(197,160,89,0.4)]'
                  : 'bg-[#181818] text-white/70 hover:text-white border border-white/10 hover:border-[#C5A059]/40'
              }`}
            >
              {tab === 'ALL' ? `ALL PHOTOS (${baImages.length})` : tab}
            </button>
          ))}
        </div>

        {/* BA Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModalImage(item)}
              className="group relative bg-[#121212] border border-white/10 overflow-hidden cursor-pointer explore-el hover:border-[#C5A059]/50 transition-all duration-500 shadow-xl"
            >
              {/* Photo Frame */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 left-4 text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest ${
                    item.categoryTag === 'BEFORE WORK'
                      ? 'bg-black/80 text-white border border-white/20'
                      : 'bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black font-bold shadow-lg'
                  }`}
                >
                  {item.categoryTag}
                </span>

                {/* Hover Click Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 bg-[#C5A059] text-black text-xs font-bold tracking-widest uppercase">
                    VIEW PHOTO
                  </span>
                </div>
              </div>

              {/* Photo Info Content */}
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Lightbox Modal with Full Photo Scroll View & Navigation */}
      {selectedModalImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="bg-[#121212] text-white max-w-5xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 border border-[#C5A059]/40 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedModalImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-black text-white transition-all flex items-center justify-center interactive-el z-20"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                {selectedModalImage.categoryTag}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                {selectedModalImage.title}
              </h3>
            </div>

            {/* Full Photo Scroll View Window */}
            <div className="relative w-full overflow-hidden border border-white/20 bg-black flex items-center justify-center min-h-[300px] max-h-[75vh]">
              <img
                src={selectedModalImage.image}
                alt={selectedModalImage.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-[#C5A059]/50 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">
                FULL PHOTO VIEW
              </span>

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={() => {
                  const currentIdx = filteredImages.findIndex(i => i.id === selectedModalImage.id);
                  const prevIdx = (currentIdx - 1 + filteredImages.length) % filteredImages.length;
                  setSelectedModalImage(filteredImages[prevIdx]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#C5A059] hover:text-black transition-colors flex items-center justify-center interactive-el"
                aria-label="Previous photo"
              >
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>

              <button
                onClick={() => {
                  const currentIdx = filteredImages.findIndex(i => i.id === selectedModalImage.id);
                  const nextIdx = (currentIdx + 1) % filteredImages.length;
                  setSelectedModalImage(filteredImages[nextIdx]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#C5A059] hover:text-black transition-colors flex items-center justify-center interactive-el"
                aria-label="Next photo"
              >
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              {selectedModalImage.description}
            </p>

            <div className="pt-4 flex justify-between items-center border-t border-white/10">
              <span className="text-xs font-medium text-white/50">Luxury Designers & Builders</span>
              <button
                onClick={() => setSelectedModalImage(null)}
                className="px-6 py-3 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black text-xs font-bold tracking-widest uppercase hover:scale-105 transition-transform"
              >
                CLOSE PHOTO VIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
