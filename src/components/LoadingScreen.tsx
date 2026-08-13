import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  progressOverride?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, progressOverride }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Accelerate progress smoothly
      const target = progressOverride !== undefined ? Math.max(progressOverride, current) : 100;
      const step = Math.max(1, Math.floor((target - current) * 0.15));
      current += step;

      if (current >= 99) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // Start fade out sequence
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsHidden(true);
            if (onComplete) onComplete();
          }, 700);
        }, 300);
      } else {
        setProgress(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [progressOverride, onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0A0A0A] text-[#F5F5F5] flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center px-6">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">
          Aruppukkottai, Tamil Nadu
        </span>
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight mb-3 font-light text-white">
          LUXURY DESIGNERS & BUILDERS
        </h1>
        <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/50 uppercase mb-10">
          BUILDING YOUR EXPERIENCE
        </p>

        {/* Thin elegant progress bar */}
        <div className="w-64 sm:w-80 h-[2px] bg-white/10 mx-auto relative overflow-hidden rounded-full mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-white transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center w-64 sm:w-80 mx-auto text-[11px] font-mono text-white/50">
          <span>FROM VISION TO REALITY</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
