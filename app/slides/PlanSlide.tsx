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
    <div className="w-full pt-24 md:p-24 max-w-5xl mx-auto flex flex-col justify-between min-h-[70vh] py-12 px-6 text-zinc-100 font-sans select-none">

      {/* Top Section Header Context */}
      <div className="w-full text-center sm:text-left space-y-2 border-b border-zinc-800 pb-6">
        <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase bg-blue-950/40 px-4 py-1.5 rounded-full border border-blue-900/50 shadow-[0_0_20px_rgba(0,114,239,0.15)] inline-block text-blue-400">
          Overview
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mt-2 text-white">
          Presentation Plan
        </h2>
      </div>

      {/* Balanced 2-Column Grid Split */}
      <div className="my-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        {points.map((point, index) => (
          <div
            key={point.num}
            className="group relative flex items-center gap-6 p-5 bg-zinc-900/40 border border-zinc-800/60 rounded-xl transition-all duration-300 hover:bg-zinc-900/90 hover:border-blue-500/50 shadow-xl overflow-hidden animate-slide-up"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationFillMode: 'both'
            }}
          >
            {/* High-Fidelity Radial Electric Blue Glow Effect */}
            <span className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* The Index Number Accent Indicator */}
            <div className="text-xl md:text-2xl font-black font-mono tracking-tight transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,114,239,0.3)] z-10 text-blue-400">
              {point.num}
            </div>

            {/* Divider Dot Element */}
            <div className="w-1.5 h-1.5 rounded-full opacity-60 bg-blue-500 shadow-[0_0_5px_#0072EF] z-10" />

            {/* Section Line Title */}
            <h3 className="text-base md:text-xl font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors duration-200 z-10">
              {point.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Floating Interactive Deck Navigation Hint */}
      <div className="flex flex-col items-center gap-3 pt-6 w-full text-zinc-500 font-mono text-[10px] tracking-widest uppercase mx-auto text-center">
        <span className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
          <span>Keyboard Slide Controls</span>
          <div className="flex items-center gap-1 font-sans normal-case tracking-normal">
            <kbd className="h-5 px-1.5 flex items-center bg-zinc-900 border border-zinc-800 text-zinc-300 rounded font-bold text-[10px] shadow-sm">
              &larr;
            </kbd>
            <kbd className="h-5 px-1.5 flex items-center bg-zinc-900 border border-zinc-800 text-zinc-300 rounded font-bold text-[10px] shadow-sm">
              &rarr;
            </kbd>
          </div>
        </span>
      </div>

    </div>
  );
}