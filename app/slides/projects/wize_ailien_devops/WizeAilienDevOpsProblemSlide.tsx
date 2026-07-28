'use client';

export default function WizeAlienDevOpsProblemSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Challenge & Target Solution</span>
            </div>

            <div className="space-y-12">

                {/* Row 1: The Problem */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Problem Bullet Points */}
                    <div className="lg:col-span-7">
                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">The Problem</div>
                        <ul className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">No Web Presence:</strong> The company lacked an official website, making it difficult to showcase services or establish market credibility.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Slow Deployment Cycles:</strong> As a growing company, frequent updates were required, but manual deployment processes stalled rapid iterations.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Strict Security Requirements:</strong> Handling sensitive, highly confidential projects meant public cloud repositories posed an unacceptable compliance risk.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Problem Image */}
                    <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl">
                        <img
                            src="/golden_gate/problem.webp"
                            alt="Conceptual graphic showing disconnected servers, manual code deployment locks, and a blank web browser placeholder representing lack of presence."
                            className="h-full w-full object-contain p-2"
                        />
                    </div>
                </div>

                {/* Row 2: The Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 border-t border-zinc-900">

                    {/* Solution Image First on Large Screens */}
                    <div className="w-full lg:col-span-5 order-last lg:order-first relative aspect-[4/3] overflow-hidden rounded-xl border border-emerald-500/20 bg-zinc-950 shadow-xl shadow-emerald-950/5">
                        <img
                            src="/golden_gate/solution.webp"
                            alt="Visual of an automated CI/CD build pipeline schema transitioning into a secure, self-hosted on-premises GitLab server network."
                            className="h-full w-full object-contain p-2"
                        />
                    </div>

                    {/* Solution Bullet Points */}
                    <div className="lg:col-span-7">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">The Solution</div>
                        <ul className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Next.js Corporate Website:</strong> Developed and engineered a high-performance modern web application to represent the company digital presence.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Automated CI/CD Pipelines:</strong> Implemented robust integration and delivery tracking to test, build, and deploy new updates seamlessly.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">On-Premises GitLab CE Infrastructure:</strong> Deployed a self-hosted GitLab Community Edition instance directly onto private servers, guaranteeing absolute source code ownership.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}