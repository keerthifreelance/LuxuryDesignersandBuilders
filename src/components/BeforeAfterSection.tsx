import React, { useState, useRef } from 'react';

interface BAScene {
  title: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImg: string;
  afterImg: string;
  area: string;
  duration: string;
  style: string;
}

export const BeforeAfterSection: React.FC = () => {
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const scenes: BAScene[] = [
    {
      title: 'Living Room Transformation',
      beforeDesc: 'Dated room structure with raw walls, dim lighting, and incomplete partitions.',
      afterDesc: 'Premium custom-fluted lounge partition, indirect smart LED coves, and luxury seating.',
      beforeImg: '/images/pics/workpics/BA1.jpeg',
      afterImg: '/images/pics/workpics/BA2.jpeg',
      area: '1,800 Sq.Ft',
      duration: '4 Months',
      style: 'Minimalist Luxury'
    },
    {
      title: 'Master Bedroom Makeover',
      beforeDesc: 'Standard structural brick walls, concrete slab coves, and raw flooring layout.',
      afterDesc: 'Acoustically padded wooden headboard paneling, premium paint borders, and layout integration.',
      beforeImg: '/images/pics/workpics/BA3.jpeg',
      afterImg: '/images/pics/workpics/BA4.jpeg',
      area: '750 Sq.Ft',
      duration: '2.5 Months',
      style: 'Nordic Zen'
    },
    {
      title: 'Modular Kitchen Makeover',
      beforeDesc: 'Basic traditional brick platform with rough cement plaster finishing.',
      afterDesc: 'Ergonomic modular island layout with quartz countertops and ambient under-shelf profile lights.',
      beforeImg: '/images/pics/workpics/BA5.jpeg',
      afterImg: '/images/pics/workpics/BA6.jpeg',
      area: '450 Sq.Ft',
      duration: '2 Months',
      style: 'Contemporary Modular'
    },
    {
      title: 'Villa Facade Elevation',
      beforeDesc: 'Primary ground-level brickwork construction, column steel frames, and masonry layout.',
      afterDesc: 'Completed double-height modern facade with cantilever slabs, glazed balconies, and warm architectural lighting.',
      beforeImg: '/images/pics/workpics/BA7.jpeg',
      afterImg: '/images/pics/workpics/BA8.jpeg',
      area: '4,200 Sq.Ft',
      duration: '12 Months',
      style: 'Modern Contemporary'
    },
    {
      title: 'Executive Office Lounge',
      beforeDesc: 'Raw unfinished commercial slab floor, structural columns, and unplastered masonry partition.',
      afterDesc: 'Elite manager room partition styling containing custom executive desk paneling and high-back seating.',
      beforeImg: '/images/pics/workpics/BA9.jpeg',
      afterImg: '/images/pics/workpics/BA10.jpeg',
      area: '1,100 Sq.Ft',
      duration: '3 Months',
      style: 'Corporate Executive'
    }
  ];

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const currentScene = scenes[activeSceneIdx];

  return (
    <section id="before-after" className="py-28 md:py-36 bg-[#0E0E0E] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
            TRANSFORMATION SHOWCASE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white animate-fade-in">
            BEFORE & AFTER STORIES.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Slide and compare the journey from raw concrete layouts and construction sites to fully finished luxury realities.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Scene Navigator & Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block">
                SELECT A TRANSFORMATION
              </span>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-4 lg:space-x-0 lg:space-y-2 border-b lg:border-b-0 lg:border-l border-white/10 pb-4 lg:pb-0 scrollbar-none">
                {scenes.map((scene, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSceneIdx(idx);
                      setSliderPos(50);
                    }}
                    className={`px-4 lg:px-0 lg:pl-5 pb-3 lg:pb-0 py-1 lg:py-3 text-left transition-all duration-300 relative group border-b-2 lg:border-b-0 lg:border-l-2 -mb-[2px] lg:-mb-0 lg:-ml-[1.5px] whitespace-nowrap ${
                      activeSceneIdx === idx
                        ? 'border-[#C5A059] text-white font-medium bg-white/5 lg:bg-white/5'
                        : 'border-transparent text-white/50 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className="font-serif text-base lg:text-lg tracking-tight block">
                      {scene.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Transformation Info Card */}
            <div className="bg-[#121212] p-6 border border-white/10 space-y-5">
              <h4 className="font-serif text-xl font-medium text-white border-b border-white/10 pb-3">
                Transformation Details
              </h4>
              <div className="space-y-4 text-sm font-light text-white/70">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-[#C5A059] uppercase block">
                    Before Condition
                  </span>
                  <p className="leading-relaxed">{currentScene.beforeDesc}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-[#C5A059] uppercase block">
                    Completed Reality
                  </span>
                  <p className="leading-relaxed text-white/90">{currentScene.afterDesc}</p>
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Area</span>
                  <span className="text-xs font-semibold text-white">{currentScene.area}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Duration</span>
                  <span className="text-xs font-semibold text-white">{currentScene.duration}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-white/40 uppercase block">Style</span>
                  <span className="text-xs font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis block" title={currentScene.style}>
                    {currentScene.style}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Comparison Slider */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Slider Frame */}
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchStart={(e) => {
                isDragging.current = true;
                if (e.touches[0]) handleMove(e.touches[0].clientX);
              }}
              onTouchEnd={handleMouseUp}
              className="relative aspect-[4/3] w-full bg-[#121212] overflow-hidden border border-white/10 select-none cursor-ew-resize group shadow-2xl drag-el"
            >
              
              {/* BEFORE (Underlying Image) */}
              <img
                src={currentScene.beforeImg}
                alt="Before construction layout"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none filter grayscale"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/10 text-[#F5F5F5] px-3 py-1 text-[10px] font-mono tracking-widest uppercase z-10">
                BEFORE
              </div>

              {/* AFTER (Clipped Overlay Image) */}
              <div
                className="absolute inset-y-0 left-0 right-0 overflow-hidden pointer-events-none transition-all duration-75"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img
                  src={currentScene.afterImg}
                  alt="After renovation execution"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute top-4 right-4 bg-[#C5A059] border border-white/20 text-[#000] px-3 py-1 text-[10px] font-mono tracking-widest uppercase z-10 font-bold">
                  AFTER
                </div>
              </div>

              {/* SLIDER BAR / DRAG HANDLE */}
              <div
                className="absolute inset-y-0 w-[2px] bg-white/40 cursor-ew-resize pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-[#1C1C1E] border border-white/20 shadow-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-sm text-[#C5A059] select-none">
                    unfold_more
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Instructions */}
            <div className="flex justify-between items-center text-xs font-mono text-white/40 px-2">
              <span>◄ SLIDE TO REVEAL TRANSFORMATION</span>
              <span>100% QUALITY WORK ASSURED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
