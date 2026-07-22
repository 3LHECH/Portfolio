'use client';

export default function GuestLogisticsDetailsSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Engineering & Contributions</span>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">System Overview & Implementation</h2>
                </div>

                {/* GitHub Repository Target Link */}

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: System Details & Features */}
                <div className="lg:col-span-7">
                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Automated Data Ingestion:</strong> Built high-performance Excel parsing pipelines to ingest, sanitize, and validate heavy nested lists of event invitation targets.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Dynamic Tokenization:</strong> Configured a unique tracking system that instantly generates personalized, secure QR codes mapped to guest credentials.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Asynchronous Queue Management:</strong> Deployed Celery paired with a Redis message broker to handle non-blocking, multi-threaded mass emailing tasks seamlessly under heavy spike loads.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Right Side: Mock Asset Showcase Graphic placeholder */}
                <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl">
                    <img
                        src="/guest/guest_home.webp"
                        alt="Visual overview of the Guest Logistics architecture map showing Celery workers executing email tasks"
                        className="h-full w-full object-contain p-4"
                    />
                </div>
            </div>

        </div>
    );
}