import React from 'react';

const coreLearnings = [
  {
    title: "Advanced Data Analysis",
    description: "Processing massive datasets using Apache Spark to extract strategic insights, engineering feature stores, and modeling complex real-time telemetry streams."
  },
  {
    title: "MLOps & DevOps Pipelines",
    description: "Architecting automated production pipelines using Docker, Kubernetes clustering, robust CI/CD logic, and active model registry tracking."
  },
  {
    title: "Deep Learning & Generative AI",
    description: "Designing complex neural architectures like Transformers and custom Encoder-Decoder networks, plus fine-tuning LLMs inside RAG pipelines."
  }
];

export default function AcademicMilestonesEspritSlide() {
  return (
    <div className="w-full max-w-6xl mx-auto min-h-[80vh] flex flex-col justify-center px-6 text-slate-900 dark:text-slate-50 font-sans selection:bg-purple-500/30">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-8 mb-16">
        <div className="space-y-1">
          <span className="text-sm font-mono font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Engineering Degree
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">
            Data Science
          </h2>
        </div>

        {/* Date Badge */}
        <div className="flex flex-wrap gap-3 font-mono text-xs mt-2 sm:mt-0">
          <div className="px-4 py-2 bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 rounded-full shadow-sm">
            <span className="text-purple-500 dark:text-purple-400/70 mr-2">ESPRIT:</span>
            <span className="font-bold text-purple-600 dark:text-purple-400">2023 — PRESENT</span>
          </div>
        </div>
      </div>

      {/* Content Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Side: Context + Small Image */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6 flex flex-col items-start">
          <div className="h-1.5 w-16 bg-purple-600 dark:bg-purple-500 rounded-full" />
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-slate-800 dark:text-slate-100 leading-tight">
            Applied Intelligence
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-normal">
            Transitioning complex theoretical models into high-availability production environments, robust distributed systems, and real-time inference layers.
          </p>

          {/* Sized-Down Image Integration */}
          <div className="pt-4 w-full flex justify-start">
            <img
              src="ai.webp"
              alt="Data Science Foundations visualization"
              className="w-full max-w-xs max-h-48 object-cover rounded-xl shadow-md border-2 border-white dark:border-slate-800"
            />
          </div>
        </div>

        {/* Right Side: Timeline-Linked Focus Cards */}
        <div className="lg:col-span-8 relative border-l-2 border-slate-200 dark:border-slate-800/80 pl-8 md:pl-10 ml-2 space-y-8">
          {coreLearnings.map((item, i) => (
            <div
              key={i}
              className="relative group p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-sm hover:shadow-xl hover:border-purple-300/60 dark:hover:border-purple-700/50 hover:-translate-y-1 transition-all duration-300 ease-in-out backdrop-blur-sm animate-slide-up"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Timeline Anchor node */}
              <div className="absolute -left-[41px] md:-left-[51px] top-9 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-900 border-4 border-white dark:border-slate-950 shadow-md group-hover:border-purple-600 dark:group-hover:border-purple-500 transition-colors duration-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-purple-600 dark:group-hover:bg-purple-500 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="md:w-1/3 shrink-0">
                <h4 className="text-base font-extrabold uppercase tracking-wide text-purple-700 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h4>
              </div>

              <p className="text-base text-slate-700 dark:text-slate-300 font-normal leading-relaxed md:w-2/3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}