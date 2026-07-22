'use client';

export default function GoldenGateMetricsSlide() {
    return (
        <div className="w-full max-w-6xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-10 border-l-2 border-emerald-500 pl-4">
                <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Empirical Validation</span>
                <h2 className="mt-1 text-3xl font-black tracking-tight text-white">MODEL BENCHMARKS & IMPACT</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Side: Impact & Architecture Bullet Points (5 Columns) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">// Business & Technical Impact</div>

                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1.5 text-sm shrink-0">◆</span>
                            <span><strong className="text-white font-semibold">Multi-Model Benchmarking:</strong> Evaluated multiple advanced architectures, explicitly comparing Meta's Prophet against Amazon's Chronos.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1.5 text-sm shrink-0">◆</span>
                            <span><strong className="text-white font-semibold">30% Efficiency Gain:</strong> Directly reduced cluster resource waste by optimizing dynamic memory and CPU threshold targets.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1.5 text-sm shrink-0">◆</span>
                            <span><strong className="text-white font-semibold">Zero OOM Crashes:</strong> Eliminated severe Out-Of-Memory (OOM) cluster failures by predicting dynamic load spikes.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1.5 text-sm shrink-0">◆</span>
                            <span><strong className="text-white font-semibold">Golden Gate Platform:</strong> Built a production management layer fueled by a high-performance stack using Python,Angular, .NET, and PostgreSQL.</span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Enhanced Benchmark Table (7 Columns) */}
                <div className="lg:col-span-7 space-y-4 w-full">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">// Statistical Performance Metrics</div>

                    <div className="overflow-x-auto border border-zinc-800 bg-zinc-950 rounded-xl shadow-xl">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead>
                                <tr className="border-b border-zinc-800 bg-zinc-900/40 text-zinc-400 font-mono">
                                    <th className="p-3">Target</th>
                                    <th className="p-3">Model</th>
                                    <th className="p-3 text-right">Coverage</th>
                                    <th className="p-3 text-right">Coverage CI</th>
                                    <th className="p-3 text-right">Pinball Q50</th>
                                    <th className="p-3 text-right">Pinball Q95</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-900 text-zinc-300 font-light">
                                {/* Memory Blocks */}
                                <tr className="hover:bg-zinc-900/20 transition-colors">
                                    <td className="p-3 font-semibold text-white" rowSpan={2}>Memory</td>
                                    <td className="p-3 font-mono text-zinc-400">Prophet</td>
                                    <td className="p-3 text-right font-mono">86.50%</td>
                                    <td className="p-3 text-right font-mono text-zinc-500">[73.0% - 100.0%]</td>
                                    <td className="p-3 text-right font-mono">0.60%</td>
                                    <td className="p-3 text-right font-mono">0.56%</td>
                                </tr>
                                <tr className="bg-emerald-950/10 hover:bg-emerald-950/20 transition-colors">
                                    <td className="p-3 font-mono text-emerald-400 font-medium">Chronos</td>
                                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">94.90%</td>
                                    <td className="p-3 text-right font-mono text-emerald-500">[84.4% - 100.0%]</td>
                                    <td className="p-3 text-right font-mono text-emerald-400">0.46%</td>
                                    <td className="p-3 text-right font-mono text-emerald-400">1.24%</td>
                                </tr>
                                {/* CPU Blocks */}
                                <tr className="hover:bg-zinc-900/20 transition-colors">
                                    <td className="p-3 font-semibold text-white" rowSpan={2}>CPU</td>
                                    <td className="p-3 font-mono text-zinc-400">Prophet</td>
                                    <td className="p-3 text-right font-mono">80.00%</td>
                                    <td className="p-3 text-right font-mono text-zinc-500">[65.7% - 94.3%]</td>
                                    <td className="p-3 text-right font-mono">20.40%</td>
                                    <td className="p-3 text-right font-mono">9.46%</td>
                                </tr>
                                <tr className="bg-emerald-950/10 hover:bg-emerald-950/20 transition-colors">
                                    <td className="p-3 font-mono text-emerald-400 font-medium">Chronos</td>
                                    <td className="p-3 text-right font-mono text-emerald-400 font-bold">93.33%</td>
                                    <td className="p-3 text-right font-mono text-emerald-500">[84.4% - 100.0%]</td>
                                    <td className="p-3 text-right font-mono text-emerald-400">16.08%</td>
                                    <td className="p-3 text-right font-mono text-emerald-400">11.46%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
}