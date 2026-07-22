// slides/ProjectsSlide.tsx
export default function ProjectsSlide() {
  const projects = [
    {
      title: 'Predictive Resource Allocation Engine',
      stack: 'Python / Chronos / Thanos',
      desc: 'Engineered a time-series forecasting solution within OpenShift to predict node constraints, mapping infrastructure metrics directly to automated load distribution strategies.'
    },
    {
      title: 'Enterprise Distributed Platforms',
      stack: 'Next.js / Django / Go',
      desc: 'Architected domain workflows and scalable automation structures utilizing clean data patterns, ranging from localized SaaS applications to multi-tenant platform backends.'
    }
  ];

  return (
    <div className="w-full max-w-5xl space-y-10">
      <div className="space-y-2">
        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">Implementations</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-6 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div className="flex items-center">
              <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-mono text-zinc-400 whitespace-nowrap">
                {project.stack}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}