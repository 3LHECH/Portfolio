import React from 'react';

export default function IntroSlide() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-between pt-24 md:p-24 py-12 px-6 text-center select-none text-zinc-100 font-sans">

      {/* Main Core Center Display Stack */}
      <div className="max-w-5xl mx-auto space-y-4 my-auto flex flex-col items-center justify-center w-full">

        {/* Massive Dynamic Scale Typography */}
        <div className="w-full flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-[6.5rem] font-black tracking-tighter uppercase leading-[0.9] text-white">
            MOHAMED HECHMI
          </h1>

          {/* Hollow Outlined Text using clean SVG */}
          <svg
            viewBox="0 0 900 110"
            className="w-full max-w-3xl h-auto font-black tracking-tighter uppercase select-none mt-2"
          >
            <text
              x="50%"
              y="90"
              textAnchor="middle"
              fill="none"
              stroke="#0072EF"
              strokeWidth="2.5"
              className="text-6xl sm:text-7xl md:text-[6.5rem]"
              style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"' }}
            >
              BEN HADID
            </text>
          </svg>
        </div>

        {/* Structural Subtitle Focal Point */}
        <p className="text-lg md:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed mx-auto tracking-wide pt-4">
          AI &amp; Infrastructure Engineer specializing in predictive engines,
          cloud-native platforms, and distributed systems architecture.
        </p>

        {/* Download CV Action Button */}
        <div className="pt-6">
          <a
            href="/cv/mohamed hechmi ben hadid_cv.pdf"
            download="mohamed_hechmi_ben_hadid_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 font-medium text-sm transition-all duration-200 hover:bg-zinc-800 hover:border-[#0072EF] hover:text-white shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#0072EF]/50"
          >
            <svg
              className="w-4 h-4 text-[#0072EF] transition-transform duration-200 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      {/* Floating Interactive Deck Navigation Hint */}
      <div className="flex flex-col items-center gap-3 border-t border-zinc-800 pt-6 w-full max-w-sm text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
        <span className="flex flex-col sm:flex-row items-center gap-2">
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