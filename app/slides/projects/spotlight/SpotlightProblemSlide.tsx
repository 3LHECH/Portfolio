'use client';

export default function SpotlightProblemSlide() {
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
                                <span><strong className="text-white font-medium">Isolated Network Presence:</strong> The research collaboration lacked a public web presence, limiting its global reach, visibility, and impact.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Friction in Talent Acquisition:</strong> No structured, digital application funnel existed to efficiently onboard eager medical professionals and researchers.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Scattered Academic Data:</strong> Publications, clinical findings, and member profiles were disjointed across numerous web platforms and external journals.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Problem Image */}
                    <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl">
                        <img
                            src="/golden_gate/problem.webp"
                            alt="Visual metaphor of fragmented medical journals, disjointed data nodes, and disconnected research papers scattered across a dark background."
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
                            alt="Sleek user interface showcasing a unified medical collaboration network with aggregated doctor publication feeds and a streamlined onboarding system."
                            className="h-full w-full object-contain p-2"
                        />
                    </div>

                    {/* Solution Bullet Points */}
                    <div className="lg:col-span-7">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">The Centralized Solution</div>
                        <ul className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Unified Collaboration Platform:</strong> Deployed a dedicated web portal to anchor the network online and showcase breakthrough medical initiatives globally.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Integrated Recruitment Funnel:</strong> Implemented a seamless onboarding pipeline to easily capture and review applications from prospective members.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Automated Scraping Engine:</strong> Engineered an intelligent data aggregation pipeline that crawls web journals to pull member papers into a single, comprehensive depository.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}