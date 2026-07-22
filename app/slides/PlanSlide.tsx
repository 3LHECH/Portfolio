'use client';

import React from 'react';

export default function PlanSlide() {
  const points = [
    { num: '01', title: 'Who Is Mohamed Hechmi Ben Hadid' },
    { num: '02', title: 'Academic Career' },
    { num: '03', title: 'Professional Experience' },
    { num: '04', title: 'University Projects' },
    { num: '05', title: 'Skills' },
    { num: '06', title: 'Contact Me' },
  ];

  return (
    <div className="w-full pt-24 md:p-24 max-w-5xl mx-auto flex flex-col justify-between min-h-[70vh] py-12 px-6 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans select-none">

      {/* Top Section Header Context */}
      <div className="w-full text-center sm:text-left space-y-2 border-b border-slate-200 dark:border-slate-800 pb-6">
        <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase bg-[#0072EF]/10 px-4 py-1.5 rounded-full border border-[#0072EF]/30 shadow-[0_0_20px_rgba(0,114,239,0.2)] inline-block" style={{ color: '#0072EF' }}>
          Overview
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mt-2">
          Presentation Plan
        </h2>
      </div>

      {/* Balanced 2-Column Grid Split (3 Left, 3 Right) */}
      <div className="my-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        {points.map((point, index) => (
          <div
            key={point.num}
            className="group relative flex items-center gap-6 p-5 bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-xl transition-all duration-300 hover:bg-slate-200/50 dark:hover:bg-slate-900/90 hover:border-[#0072EF]/50 dark:hover:border-[#0072EF]/50 shadow-xl overflow-hidden animate-slide-up"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationFillMode: 'both'
            }}
          >
            {/* High-Fidelity Radial Electric Blue Glow Effect */}
            <span className="absolute inset-0 bg-gradient-to-br from-[#0072EF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* The Index Number Accent Indicator */}
            <div
              className="text-xl md:text-2xl font-black font-mono tracking-tight transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,114,239,0.3)] z-10"
              style={{ color: '#0072EF' }}
            >
              {point.num}
            </div>

            {/* Divider Dot Element */}
            <div className="w-1.5 h-1.5 rounded-full opacity-40 bg-[#0072EF] shadow-[0_0_5px_#0072EF] z-10" />

            {/* Section Line Title */}
            <h3 className="text-base md:text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200 group-hover:text-white transition-colors duration-200 z-10">
              {point.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Floating Interactive Deck Navigation Hint */}
      <div className="flex flex-col items-center gap-3 pt-6 w-full text-slate-400 dark:text-slate-500 font-mono text-[10px] tracking-widest uppercase mx-auto text-center">
        <span className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
          <span>Keyboard Slide Controls</span>
          <div className="flex items-center gap-1 font-sans normal-case tracking-normal">
            <kbd className="h-5 px-1.5 flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded font-bold text-[10px] shadow-sm">
              &larr;
            </kbd>
            <kbd className="h-5 px-1.5 flex items-center bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded font-bold text-[10px] shadow-sm">
              &rarr;
            </kbd>
          </div>
        </span>
      </div>

    </div>
  );
}