'use client';

export default function GuestLogisticsProblemSlide() {
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
                                <span><strong className="text-white font-medium">Overwhelming Guest Volumes:</strong> Large guest lists make manual coordination, tracking, and management highly inefficient.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Unpredictable Attendance:</strong> Lack of real-time visibility into RSVPs makes it difficult to forecast accurate headcount.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Security Risks & Intrusion:</strong> Uninvited entries drive up catering and venue costs, creating logistical complications.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Problem Image */}
                    <div className="w-full lg:col-span-5 relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-xl">
                        <img
                            src="/golden_gate/problem.webp"
                            alt="Illustration of chaotic manual guest management bottlenecks"
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
                            alt="Dashboard preview displaying seamless digital check-in system"
                            className="h-full w-full object-contain p-2"
                        />
                    </div>

                    {/* Solution Bullet Points */}
                    <div className="lg:col-span-7">
                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">The Management Solution</div>
                        <p className="text-xs text-zinc-500 mb-4 italic">Core platform utilities</p>

                        <ul className="space-y-4 text-sm md:text-base text-zinc-400 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">CSV to Profile Conversion:</strong> Upload your CSV list to instantly generate detailed guest profiles and unique check in QR codes and send it via email.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Custom RSVP Tokens:</strong> Distribute secure digital tokens enabling guests to easily see their invitation card.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500 mt-1.5 text-xs shrink-0">◆</span>
                                <span><strong className="text-white font-medium">Real-Time Tracker Dashboard:</strong> Track live invitations, monitor who accepted or declined, and instantly resend invites in emails.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}