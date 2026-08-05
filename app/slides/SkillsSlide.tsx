'use client';

import React from 'react';

interface TechItem {
    name: string;
    isCore?: boolean;
}

interface StackCategory {
    title: string;
    items: TechItem[];
    icon: React.ReactNode;
}

export default function SkillsSlide() {
    const stackData: StackCategory[] = [
        {
            title: "Web Development",
            items: [
                { name: "Django" }, { name: ".NET" }, { name: "Spring Boot" },
                { name: "FastAPI" }, { name: "Next.js" },
                { name: "React" }, { name: "REST" }, { name: "GraphQL" }
            ],
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
            )
        },
        {
            title: "Data & Databases",
            items: [
                { name: "Pandas" }, { name: "Web Scraping" }, { name: "Oracle PL/SQL" },
                { name: "PostgreSQL" }, { name: "MySQL" }, { name: "SQLite" }, { name: "MongoDB" }
            ],
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75" />
                </svg>
            )
        },
        {
            title: "Big Data Systems",
            items: [
                { name: "Spark" }, { name: "Hive" }, { name: "HBase" }, { name: "Neo4j" }
            ],
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            )
        },
        {
            title: "AI / NLP Engine",
            items: [
                { name: "Machine Learning" }, { name: "Deep Learning" },
                { name: "LLMs", }, { name: "RAG" },
                { name: "Embeddings" }, { name: "Semantic Search" }, { name: "Generative Ai" }
                
            ],
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v3m0 0h.01m-.01 0H12m0-16v3m0 0h.01m-.01 0H12m0 5a3 3 0 100 6 3 3 0 000-6zm7.757-3.243l-2.122 2.122m0 0h.01m-.01 0h-.01m6.364-6.364l-2.122 2.122m0 0h.01m-.01 0h-.01M4.243 19.757l2.122-2.122m0 0h.01m-.01 0h-.01M2.121 21.879l2.122-2.122m0 0h.01m-.01 0h-.01M19.757 19.757l-2.122-2.122m0 0h.01m-.01 0h-.01m6.364 2.122l-2.122-2.122m0 0h.01m-.01 0h-.01M4.243 4.243l2.122 2.122m0 0h.01m-.01 0h-.01" />
                </svg>
            )
        },
        {
            title: "DevOps / MLOps",
            items: [
                { name: "Docker" }, { name: "Jenkins" }, { name: "Kubernetes" }, { name: "Openshift" },
                { name: "MLflow" }, { name: "GitLab" }, { name: "Nginx" },
                { name: "ElasticSearch" }, { name: "Kibana" }
            ],
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.827m11.49-8.238l1.148-.826M8.54 20.31l.66-.929m5.6-.79l.66.93M12 21v-1.5M4.5 12l-.001-.031" />
                </svg>
            )
        },
        {
            title: "Languages",
            items: [
                { name: "Python" }, { name: "Java" }, { name: "C" },
                { name: "C#" }, { name: "Go" }, { name: "JavaScript" }, { name: "Bash" }
            ],
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            )
        }
    ];

    return (
        <div className="w-full max-w-5xl px-6 py-12 text-zinc-100 font-sans flex flex-col justify-between min-h-[75vh]">

            {/* Header Section */}
            <div className="border-l-2 border-sky-500 pl-4 mb-10">
                <span className="text-sm font-mono text-sky-400 uppercase tracking-wider">05 / Skills</span>
                <h2 className="mt-1 text-3xl font-black tracking-tight text-white uppercase">
                    Technical Architecture Matrix
                </h2>
            </div>

            {/* Dashboard Architecture Grid Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-auto">
                {stackData.map((category, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col bg-zinc-950/40 backdrop-blur-sm border border-zinc-900 rounded-xl p-5 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/30 shadow-xl overflow-hidden"
                    >
                        {/* Interactive light mask overlay */}
                        <span className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.02] via-transparent to-transparent pointer-events-none" />

                        {/* Centered Category Heading Bar */}
                        <div className="flex flex-col items-center text-center pb-4 mb-4 border-b border-zinc-900/80">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-500 group-hover:text-sky-400 group-hover:border-sky-500/20 group-hover:bg-sky-500/5 transition-all duration-300 mb-2">
                                {category.icon}
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors duration-200">
                                {category.title}
                            </h3>
                        </div>

                        {/* Grid Distribution Layout of Tags */}
                        <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                            {category.items.map((item, itemIdx) => (
                                <span
                                    key={itemIdx}
                                    className={`text-[11px] font-mono px-2.5 py-1 rounded-md transition-all duration-200 border ${item.isCore
                                        ? 'bg-sky-500/10 border-sky-500/30 text-sky-400 font-semibold shadow-[0_0_8px_rgba(0,114,239,0.15)]'
                                        : 'bg-zinc-900/50 border-zinc-800/80 text-zinc-400 group-hover:border-zinc-700/80 group-hover:text-zinc-300'
                                        }`}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Profile Metrics */}
            <div className="mt-12 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0072EF]" />
                    <span>Active Deployment Mapping</span>
                </div>
            </div>

        </div>
    );
}