import React from 'react';
import { Cpu, Brain, Sparkles } from 'lucide-react';

export default function WhoIsMohamedSlide() {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5 text-white" />,
      title: "Coding & Systems Foundation",
      subtitle: "FST Bachelor's Degree",
      desc: "Built a strong foundation in computer science, low-level programming, clean architecture, and building fast, reliable server systems."
    },
    {
      icon: <Brain className="w-5 h-5 text-white" />,
      title: "AI & Data Science Expertise",
      subtitle: "ESPRIT Engineering Degree",
      desc: "Learned to build smart predictive models, deep learning setups, natural language processing (NLP), and handle huge flows of live data."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: "Why This Matters for Your Team",
      subtitle: "The Recruiter Bottom Line",
      desc: "Having both degrees means I don't just write AI algorithms—I also build the backend and cloud infrastructure needed to run them at scale."
    }
  ];

  return (
    <div className="w-full  max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center px-4 md:px-8 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans">

      {/* Obvious Presentation Header */}
      <div className="text-left border-b border-slate-200 dark:border-slate-800 pb-4 mb-6 md:mb-10">
        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-none">
          01 Who Is Mohamed Hechmi Ben Hadid
        </h2>
        <p className="text-[10px] md:text-sm font-mono tracking-wider text-slate-500 dark:text-slate-400 mt-2">
          Combining Strong Software Engineering with Advanced AI Systems
        </p>
      </div>

      {/* Main Responsive Dashboard Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

        {/* Left Column: Visual Identity & Pitch */}
        <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col gap-6 items-center lg:items-start bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 p-6 rounded-2xl">

          {/* Professional Image Slot */}
          <div className="w-32 h-32 md:w-40 md:h-40 lg:w-full lg:h-64 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 border border-slate-300 dark:border-slate-700 relative group shadow-md">
            <img
              src="/who_ami_ii.jpg"
              alt="Mohamed Hechmi Ben Hadid"
              className="w-full h-full object-cover grayscale contrast-115 transition-all duration-500 group-hover:grayscale-0"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center font-mono text-xs text-slate-400">
              [ headshot_placeholder ]
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 transition-colors duration-300 rounded-xl pointer-events-none" />
          </div>

          {/* Value Pitch Text */}
          <div className="space-y-3 text-left">
            <div className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded" style={{ backgroundColor: 'rgba(0, 114, 239, 0.1)', color: '#0072EF' }}>
              Dual-Degree Engineer
            </div>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">
              Ready to Build &amp; Scale
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              By bringing together systems development and data science, I bridge the gap between heavy software architecture and intelligent automation.
            </p>
          </div>
        </div>

        {/* Right Column: High-Impact Pathway Line Items */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 md:gap-8 pl-2 border-l border-slate-200 dark:border-slate-800/80 lg:border-l-0 lg:pl-0">
          {highlights.map((item, i) => {
            const isLast = i === highlights.length - 1;
            return (
              <div
                key={i}
                className="flex gap-4 md:gap-6 text-left relative animate-slide-up"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Timeline Connector Line */}
                {!isLast && (
                  <div className="absolute top-10 left-5 bottom-[-32px] w-[1px] bg-slate-200 dark:bg-slate-800 hidden md:block" />
                )}

                {/* Rounded Icon Node Container */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                  style={{ backgroundColor: '#0072EF' }}
                >
                  {item.icon}
                </div>

                {/* Narrative Details Block */}
                <div className="space-y-1 pt-0.5">
                  <span className="block text-[9px] font-mono font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                    {item.subtitle}
                  </span>
                  <h4 className="text-base md:text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}