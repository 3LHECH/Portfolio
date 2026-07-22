'use client';

import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface ContactInfo {
    label: string;
    value: string;
    href?: string;
    actionType: 'copy' | 'link';
    // Custom SVG renderer function to bypass package export issues completely
    renderIcon: (className: string) => React.ReactNode;
}

export default function ContactSlide() {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const contactData: Record<'email' | 'phone' | 'linkedin', ContactInfo> = {
        email: {
            label: 'Engineering Inquiries',
            value: 'medhechmi.benhadid@gmail.com',
            href: 'mailto:mohamedhechmi.benhadid@gmail.com',
            actionType: 'link',
            renderIcon: (className) => (
                <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            )
        },
        phone: {
            label: 'Direct Contact',
            value: '+216 52 063 262',
            actionType: 'copy',
            renderIcon: (className) => (
                <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            )
        },
        linkedin: {
            label: 'Professional Network',
            value: 'https://www.linkedin.com/in/mohamed-hechmi-ben-hadid-11b545259/',
            href: 'https://www.linkedin.com/in/mohamed-hechmi-ben-hadid-11b545259/',
            actionType: 'link',
            renderIcon: (className) => (
                <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            )
        }
    };

    const handleAction = async (key: string, item: ContactInfo): Promise<void> => {
        if (item.actionType === 'copy') {
            try {
                await navigator.clipboard.writeText(item.value);
                setCopiedField(key);
                setTimeout(() => setCopiedField(null), 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        } else if (item.href) {
            window.open(item.href, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="w-full max-w-5xl px-6 py-16 text-zinc-100 font-sans flex flex-col justify-between min-h-[60vh]">

            {/* Header Section */}
            <div className="border-l-2 border-sky-500 pl-4 mb-12">
                <span className="text-sm font-mono text-sky-400 uppercase tracking-wider">06 / Contact</span>
                <h2 className="mt-1 text-3xl font-black tracking-tight text-white uppercase">
                    Initiate Connection
                </h2>
            </div>

            {/* Contact Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
                {(Object.keys(contactData) as Array<keyof typeof contactData>).map((key) => {
                    const item = contactData[key];
                    const isCopied = copiedField === key;

                    return (
                        <div
                            key={key}
                            onClick={() => handleAction(key, item)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleAction(key, item);
                                }
                            }}
                            className="group relative flex flex-col justify-between text-left p-6 rounded-xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40 shadow-xl overflow-hidden focus:outline-none focus:ring-1 focus:ring-sky-500 cursor-pointer"
                        >
                            {/* Subtle light effect on card hover */}
                            <span className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 w-full flex flex-col items-center text-center">
                                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-6">
                                    {item.label}
                                </span>

                                {/* Centered Main Icon Area */}
                                <div className="p-4 rounded-full bg-zinc-900/50 border border-zinc-800/80 group-hover:border-sky-500/30 group-hover:bg-sky-500/5 transition-all duration-300 mb-6 flex items-center justify-center">
                                    {item.renderIcon("w-8 h-8 text-zinc-400 group-hover:text-sky-400 transition-colors duration-300")}
                                </div>

                                <p className="text-sm font-normal text-zinc-300 group-hover:text-white transition-colors duration-200 break-all px-2 w-full line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                                    {item.value}
                                </p>
                            </div>

                            <div className="relative z-10 w-full mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-400">
                                <span>Action Target</span>
                                <span className="text-sky-500 underline decoration-sky-500/30 group-hover:decoration-sky-500 transition-all flex items-center gap-1.5">
                                    {item.actionType === 'copy' ? (
                                        isCopied ? (
                                            <>Copied <Check className="w-3.5 h-3.5 stroke-[2.5]" /></>
                                        ) : (
                                            <>Click to Copy <Copy className="w-3.5 h-3.5" /></>
                                        )
                                    ) : (
                                        <>Open Link <ExternalLink className="w-3.5 h-3.5" /></>
                                    )}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Location Tag */}
            <div className="mt-16 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0072EF]" />
                    <span>Tunis, TN • Active State</span>
                </div>
            </div>

        </div>
    );
}