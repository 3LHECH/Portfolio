'use client';

export default function SmartTransferDetailsSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Core Architecture & Implementation</span>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">Predictive Pipeline & Team Assignment</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: System Details */}
                <div className="lg:col-span-7">
                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Comprehensive Data Of Players:</strong> Scraping fc website to get players data .
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">High Precision Performance Engine:</strong> Personal contribution centered on building a deep learning model targeting dense FC attribute metrics, predicting optimal performance ratings for every tactical position for a player with  <code className="text-emerald-400 font-mono bg-emerald-950/30 border border-emerald-800/50 px-1.5 py-0.5 rounded text-sm font-bold">91.99%</code> accuracy.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Combinatorial Graph Optimization:</strong> Fed predicted multi-position scores into a specialized Hungarian Graph Assignment algorithm to solve the assignment problem .
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Architecture Graphic Placeholder */}
                <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl flex items-center justify-center">
                    <img
                        src="/smart_transfer/smart.webp"
                        alt="Bipartite graph visualization displaying player nodes assigning to pitch positions using the Hungarian allocation matrix"
                        className="h-full w-full object-contain p-4"
                    />
                </div>
            </div>

        </div>
    );
}