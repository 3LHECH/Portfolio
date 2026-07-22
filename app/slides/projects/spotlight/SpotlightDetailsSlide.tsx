'use client';

export default function SpotlightDetailsSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Product Architecture & Security</span>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">Platform Engineering & System Blocks</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: System Details */}
                <div className="lg:col-span-7">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">// System Engineering Impact</div>
                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Decoupled Architecture:</strong> Developed a highly interactive UI dashboard in React consuming customized, secure REST endpoints served from a scalable Django backend layer.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Granular Authorization & RBAC:</strong> Built robust user sign-on layers incorporating strict Role-Based Access Control (RBAC) scopes to partition researcher, editor, and administrator states securely.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Data Harvest & Transaction Engines:</strong> Authored background web-scraping pipelines to assemble structured academic material alongside transactional payment processors for seamless platform monetization.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Architecture Graphic Placeholder */}
                <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl flex items-center justify-center">
                    <img
                        src="/spotlight/platform_architecture.webp"
                        alt="Fullstack architecture flow chart mapping the React client interacting with Django REST views protected by RBAC middleware, flanked by scraper systems and transaction ledgers"
                        className="h-full w-full object-contain p-4"
                    />
                </div>
            </div>

        </div>
    );
}