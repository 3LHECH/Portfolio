'use client';

export default function CytekiaDetailsSlide() {
    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100">

            {/* Header */}
            <div className="mb-12 border-l-2 border-emerald-500 pl-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <span className="text-sm font-mono text-emerald-400 uppercase tracking-wider">ETL Processing & NoSQL Mapping</span>
                    <h2 className="mt-1 text-2xl font-black tracking-tight text-white uppercase">Pipeline Mechanics & Transformation</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left Side: Pipeline Infrastructure Core Details */}
                <div className="lg:col-span-7">
                    <ul className="space-y-5 text-base md:text-lg font-light text-zinc-300 leading-relaxed">
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Multi-Format Excel Processing:</strong> Programmed multi-tenant ingestion parsers capable of consuming 5 distinct structures of security audit sheets, instantly extracting raw logs into uniform data streams.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">High-Fidelity Transformations:</strong> Utilized Python and Pandas vector operations to wipe empty nodes, unify datetime signatures, and clean complex corporate incident matrix schemas.
                            </span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-emerald-500 mt-2 text-sm shrink-0">◆</span>
                            <span>
                                <strong className="text-white font-semibold">Flexible NoSQL Schema Layout:</strong> Mapped varying relational datasets seamlessly into highly dynamic BSON/JSON structures inside MongoDB for rapid data lookups.
                            </span>
                        </li>
                    </ul>
                </div>


            </div>

        </div>
    );
}