'use client';

export default function CytekiaProblemSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4">
                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Challenge & Target Solution</span>
            </div>

            <div className="space-y-16">

                {/* Row 1: Text Left, Image Right (The Problem) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Problem Bullet Points */}
                    <div className="lg:col-span-7">
                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">The Problem</div>
                        <ul className="space-y-5 text-lg md:text-xl font-light text-zinc-300 leading-relaxed">
                            <li className="flex items-start gap-4">
                                <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                                <span><strong className="text-white font-semibold">Resource Waste:</strong> Over-provisioning leads to high costs and inefficient cluster usage.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                                <span><strong className="text-white font-semibold">Reactive Tools:</strong> Existing monitors show issues only after outages or bottlenecks occur.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                                <span><strong className="text-white font-semibold">No Predictive Sizing:</strong> Legacy tools cannot trace complex patterns to suggest dynamic namespace limits.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Problem Image */}
                    <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl">
                        <img
                            src="/golden_gate/problem.webp"
                            alt="Infrastructure monitoring metrics showing unstable usage"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>
                </div>

                {/* Row 2: Image Left, Text Right (The Solution) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 border-t border-zinc-900">
                    {/* Solution Image First on Large Screens */}
                    <div className="w-full lg:col-span-5 order-last lg:order-first relative aspect-[4/3] overflow-hidden rounded-xl border border-emerald-500/20 bg-zinc-950 shadow-xl shadow-emerald-950/5">
                        <img
                            src="/golden_gate/solution.webp"
                            alt="Predictive resource scaling target model visual"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>

                    {/* Solution Bullet Points */}
                    <div className="lg:col-span-7">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">The Predictive Solution</div>
                        <ul className="space-y-5 text-lg md:text-xl font-light text-zinc-300 leading-relaxed">
                            <li className="flex items-start gap-4">
                                <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                                <span><strong className="text-white font-semibold">AI-Driven Sizing:</strong> Deploys time-series forecasting to automate resource planning with Transformers.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                                <span><strong className="text-white font-semibold">Proactive Safeguards:</strong> Suggests optimal namespace limits and requests .</span>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}