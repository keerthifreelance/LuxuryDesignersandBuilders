import React, { useState, useRef, useEffect } from 'react';

export const DesignVsReality: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'COMPARISON' | 'BLUEPRINT' | 'RENDER'>('COMPARISON');

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTab(customEvent.detail as any);
    };
    window.addEventListener('setDesignVsRealityTab', handleTabChange);
    return () => window.removeEventListener('setDesignVsRealityTab', handleTabChange);
  }, []);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const blueprintImages = [
    '/images/pics/workpics/2_20251106_102459_0001.png',
    '/images/pics/workpics/2Dimg1.png',
    '/images/pics/workpics/2Dimg2.png',
    '/images/pics/workpics/2Dimg3.png',
    '/images/pics/workpics/2Dimg4.png',
    '/images/pics/workpics/2Dimg5.png',
    '/images/pics/workpics/2Dimg6.jpeg',
    '/images/pics/workpics/2Dimg7.png',
    '/images/pics/workpics/2Dimg8.png'
  ];
  const [selectedBlueprint, setSelectedBlueprint] = useState<string>(blueprintImages[0]);

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

  return (
    <section id="design-reality" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
            PRECISION & FIDELITY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
            SEE IT BEFORE WE BUILD IT.
          </h2>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            WHAT YOU APPROVE IS WHAT WE AIM TO BUILD. Experience 100% architectural fidelity through our Vastu-compliant 2D plans and photorealistic 3D rendering engine before construction begins.
          </p>

          {/* Mode Tabs */}
          <div className="flex justify-center items-center space-x-3 pt-4">
            <button
              onClick={() => setActiveTab('COMPARISON')}
              className={`px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase border transition-all ${
                activeTab === 'COMPARISON'
                  ? 'bg-[#C5A059] text-black border-[#C5A059]'
                  : 'bg-transparent text-white/50 border-white/20 hover:border-[#C5A059]/50 hover:text-white'
              }`}
            >
              3D VS FINAL EXECUTION
            </button>
            <button
              onClick={() => setActiveTab('BLUEPRINT')}
              className={`px-5 py-2 text-xs font-bold tracking-[0.15em] uppercase border transition-all ${
                activeTab === 'BLUEPRINT'
                  ? 'bg-[#C5A059] text-black border-[#C5A059]'
                  : 'bg-transparent text-white/50 border-white/20 hover:border-[#C5A059]/50 hover:text-white'
              }`}
            >
              2D FLOOR PLAN
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Draggable Before / After Slider */}
        {activeTab === 'COMPARISON' && (
          <div className="space-y-4">
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchMove}
              onTouchMove={handleTouchMove}
              className="ba-slider relative bg-black shadow-2xl overflow-hidden cursor-col-resize drag-el border border-white/10"
            >
              {/* After / Final Result (Background Image) */}
              <img
                src="/images/pics/workpics/Picsart_26-08-06_10-02-46-294.jpg.jpeg"
                alt="Final Completed Villa Execution"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before / 3D Render (Clipped Top Image) */}
              <div
                className="absolute inset-0 h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/images/pics/workpics/Picsart_26-08-06_10-02-14-032.jpg.jpeg"
                  alt="Approved 3D Visualization Render"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: sliderRef.current?.clientWidth || '100%' }}
                />
              </div>

              {/* Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none shadow-2xl"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border-2 border-white rounded-full flex items-center justify-center text-white shadow-2xl">
                  <span className="material-symbols-outlined text-lg">unfold_more</span>
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-6 left-6 z-10 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.2em] px-4 py-2 uppercase border border-white/20 pointer-events-none">
                3D VISUALIZATION
              </div>
              <div className="absolute top-6 right-6 z-10 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.2em] px-4 py-2 uppercase border border-white/20 pointer-events-none">
                FINAL EXECUTION
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-white/50">
              <span>◄ SLIDE TO COMPARE 3D RENDER VS REALITY</span>
              <span>100% DESIGN EXECUTION ACCURACY</span>
            </div>
          </div>
        )}

        {/* Tab 2: 2D Floor Plan Showcase */}
        {activeTab === 'BLUEPRINT' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#121212] p-8 sm:p-12 border border-white/10">
            <div className="space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A059] uppercase">
                VASTU-COMPLIANT BLUEPRINTING
              </span>
              <h3 className="font-serif text-3xl font-medium text-white">
                PRECISION 2D ARCHITECTURAL DRAFTING
              </h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Every line is calculated for optimal room proportions, cross-ventilation, natural sunlight, electrical load distribution, and structural integrity.
              </p>
              <ul className="space-y-2 text-xs font-medium text-white/90">
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-sm text-[#C5A059] mr-2">check_circle</span>
                  Vastu Shastra compliant room placements
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-sm text-[#C5A059] mr-2">check_circle</span>
                  Municipal sanction approval drawings
                </li>
                <li className="flex items-center">
                  <span className="material-symbols-outlined text-sm text-[#C5A059] mr-2">check_circle</span>
                  Detailed electrical, plumbing & structural layouts
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-[300px] sm:h-[340px] bg-black p-4 border border-white/10 overflow-hidden shadow-inner flex items-center justify-center relative group">
                <img
                  src={selectedBlueprint}
                  alt="2D Architectural Blueprint"
                  className="max-w-full max-h-full object-contain filter grayscale opacity-90 transition-all duration-300 hover:scale-[1.02] hover:filter-none hover:opacity-100 cursor-pointer"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {blueprintImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBlueprint(img)}
                    className={`h-12 sm:h-14 bg-[#1A1A1A] p-0.5 border transition-all overflow-hidden ${
                      selectedBlueprint === img 
                        ? 'border-[#C5A059] opacity-100 scale-95' 
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Blueprint Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover filter grayscale hover:filter-none"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
