'use client';

export default function GuideMeDetailsSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100 font-sans">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Core Architecture</span>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">Dual-Platform Forum Engine</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: System Details */}
                <div className="lg:col-span-7">
                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Cross-Platform Architecture:</strong> Built a travel agency application unifying a JavaFX desktop client with a Symfony web backend.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Interactive Community Hub:</strong> Engineered the user forum layer for sharing travel experiences, posting comments, and driving community interaction.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Data & UX Optimization:</strong> Structured database schemas and backend routes to deliver fast, categorized travel tip exchanges across web and desktop interfaces.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Architecture Graphic */}
                <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl flex items-center justify-center">
                    <img
                        src="/guideme/web.webp"
                        alt="Architecture diagram showing Symfony web and JavaFX desktop clients sharing a MySQL backend"
                        className="h-full w-full object-contain p-4"
                    />
                </div>
            </div>

        </div>
    );
}


