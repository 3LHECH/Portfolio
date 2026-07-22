'use client';

export default function WizeAilienDevOpsDetailsSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">Added Value</span>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">Added Value</h2>
                </div>

                {/* Live Platform Link (No Image/Icon) */}
                <a
                    href="https://www.wize-ailien.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 px-4 py-2.5 rounded-lg transition-all duration-200 tracking-wider hover:border-zinc-700"
                >
                    www.wize-ailien.com
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: Infrastructure Core Details */}
                <div className="lg:col-span-7">
                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Production Web Deployments:</strong> Architected optimized application runtimes leveraging Node.js and Next.js, fronted by Nginx reverse proxies for robust SSL termination and static caching.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Continuous Delivery Automation:</strong> Authored declarative Jenkins pipelines to build, test, and containerize changes immediately on branch check-ins, slashing hotfix deployment friction.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Secure Version Control Topology:</strong> Maintained and managed an on-premise GitLab CE server cluster, ensuring safe code backup paths, user permission access groups, and secure webhooks.
                            </span>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    );
}