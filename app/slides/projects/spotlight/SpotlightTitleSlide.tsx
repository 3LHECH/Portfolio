'use client';

export default function SpotlightTitleSlide() {
    const techStack = [
        "React", "Django", "Python", "RBAC Security",
        "Web Scraping", "Payment Integration", "PostgreSQL", "REST APIs"
    ];

    return (
        <div className="w-full max-w-5xl flex flex-col items-center justify-between min-h-[50vh] py-12 px-6 font-sans">

            {/* Context Top Tag */}
            <div className="text-center mb-6">
                <span className="text-emerald-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    Spotlight Internship • Feb 2023 - Jun 2023
                </span>
            </div>

            {/* Main Core Typography */}
            <div className="text-center my-auto max-w-4xl">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">Enterprise Software Architecture</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent uppercase">
                    Research <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">Collaboration</span>
                </h1>

                <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                    Engineered an end-to-end multi-tenant environment pairing complex data gathering with secure{' '}
                    <strong className="text-white font-semibold underline decoration-emerald-500 decoration-2 underline-offset-4">
                        Role-Based Access Control
                    </strong>.
                </p>

                {/* Highlighted Target Focus Tags */}
                <div className="flex gap-4 justify-center items-center mt-6 text-xs font-mono tracking-wider">
                    <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded text-zinc-300 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Decoupled Django & React
                    </span>
                    <span className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded text-zinc-300 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" /> Scrape & Monetization Pipelines
                    </span>
                </div>
            </div>

            {/* Structured Core Tech Architecture Badges */}
            <div className="w-full mt-12 max-w-3xl border-t border-zinc-900 pt-8">
                <div className="text-zinc-500 font-mono text-[10px] tracking-widest text-center uppercase mb-4">
                    Full-Stack Application Layers & Integration APIs
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-zinc-100 font-mono text-xs bg-zinc-900/60 border border-zinc-800/80 px-3 py-1 rounded transition-colors duration-300 hover:border-zinc-700 text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}