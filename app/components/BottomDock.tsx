'use client';

import React, { useEffect, useRef } from 'react';

interface SlideItem {
  id: string;
  title: string;
  component: React.ComponentType<{ theme: 'dark' | 'light'; isPreview?: boolean }>;
}

interface BottomDockProps {
  slides: SlideItem[];
  currentSlide: number;
  theme: 'dark' | 'light';
  onSelectSlide: (index: number) => void;
}

export default function BottomDock({ slides, currentSlide, theme, onSelectSlide }: BottomDockProps) {
  const isLight = theme === 'light';
  const dockBg = isLight ? 'bg-white/85 border-zinc-200/80' : 'bg-zinc-950/85 border-zinc-900/80';

  // Reference to the scrollable frame
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll tracking to keep the active preview centered in the viewport view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeChild = scrollContainerRef.current.children[currentSlide] as HTMLElement;
      if (activeChild) {
        scrollContainerRef.current.scrollTo({
          left: activeChild.offsetLeft - scrollContainerRef.current.clientWidth / 2 + activeChild.clientWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [currentSlide]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-28 z-40 group">
      <div className={`absolute inset-0 backdrop-blur-md border-t px-8 py-4 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${dockBg}`}>

        {/* Fixed Viewport window supporting exactly 7 components across (7 * 160px + 6 * 16px gaps = 1216px) */}
        <div
          ref={scrollContainerRef}
          className="w-[1216px] flex items-center gap-4 overflow-x-auto no-scrollbar scroll-smooth py-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {slides.map((slide, index) => {
            const LivePreviewComponent = slide.component;
            const isActive = currentSlide === index;

            return (
              <button
                key={slide.id}
                onClick={() => onSelectSlide(index)}
                style={isActive && isLight ? { borderColor: '#0072EF', boxShadow: '0 4px 12px rgba(0,114,239,0.08)' } : undefined}
                className={`w-40 h-20 shrink-0 rounded-lg border text-left p-2 flex flex-col justify-between transition-all relative overflow-hidden bg-clip-border ${isActive
                    ? !isLight ? 'border-zinc-400 bg-zinc-900 shadow-lg' : 'bg-zinc-50'
                    : isLight ? 'border-zinc-200 bg-white hover:border-zinc-300' : 'border-zinc-900 bg-zinc-950 hover:border-zinc-800'
                  }`}
              >
                {/* 
                  Enhanced Mini-Preview Layout Engine:
                  Scales down clean layout components without clipping line items early 
                */}
                <div className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-45 transition-opacity overflow-hidden p-1.5 pb-7">
                  <div
                    className="origin-top-left w-[300%] h-[300%] transform scale-[0.33] leading-tight select-none antialiased break-words tracking-tight text-[10px]"
                    style={{ color: isLight ? '#27272a' : '#f4f4f5' }}
                  >
                    <LivePreviewComponent theme={theme} isPreview={true} />
                  </div>
                </div>

                {/* Elegant Protective Text Overlay Frame */}
                <div className="relative z-10 flex flex-col justify-end h-full w-full bg-gradient-to-t from-zinc-950/20 via-zinc-950/5 to-transparent dark:from-black/50 pointer-events-none pt-4">
                  <span className={`text-[8px] font-mono uppercase tracking-wider block mb-0.5 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Slide {index + 1}
                  </span>
                  <span className={`text-[11px] font-medium truncate w-full ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                    {slide.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Slide counter persistent index label */}
      <div className={`absolute bottom-4 right-8 font-mono text-xs group-hover:opacity-0 transition-opacity duration-200 ${isLight ? 'text-zinc-400' : 'text-zinc-500'}`}>
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}