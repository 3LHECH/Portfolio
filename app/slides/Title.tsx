import React from 'react';

export interface TitleProps {
    title: string;
    subtitle: string;
    subtitle2?: string;
    slideNumber?: string;
}

export default function Title({ title, subtitle, slideNumber, subtitle2 }: TitleProps) {
    return (
        <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-between text-center select-none font-sans text-zinc-100 overflow-hidden">

            {/* Structural Tech Grid Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Top Section Anchor: Reserved for spacing/breadcrumbs */}
            <div className="h-6 z-10" />

            {/* Main Core Center Display Stack */}
            <div className="relative z-10 max-w-5xl mx-auto space-y-6 my-auto flex flex-col items-center justify-center w-full group">

                {/* Slide Number / Label Flag */}
                {slideNumber && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md font-mono text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-950/30 border border-blue-900/40 opacity-80 backdrop-blur-sm">
                        Section {slideNumber}
                    </div>
                )}

                {/* Massive Dynamic Scale Typography */}
                <div className="w-full flex flex-col items-center space-y-2">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white">
                        {title}
                    </h1>

                    {/* Liquid Hollow Outlined Responsive Typography Layer */}
                    <div className="w-full max-w-4xl px-4 overflow-visible">
                        <svg
                            /* Dynamically expands the viewBox height if subtitle2 exists */
                            viewBox={subtitle2 ? "0 0 1000 230" : "0 0 1000 120"}
                            className="w-full h-auto font-black tracking-tighter uppercase select-none overflow-visible"
                        >
                            <text
                                x="50%"
                                y="95"
                                textAnchor="middle"
                                fill="none"
                                stroke="#0072EF"
                                strokeWidth="3"
                                style={{
                                    fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                                    letterSpacing: '-0.04em',
                                    fontSize: '95px' // Explicit coordinate font size for seamless SVG scaling
                                }}
                            >
                                {subtitle}
                            </text>

                            {subtitle2 && (
                                <text
                                    x="50%"
                                    y="200"
                                    textAnchor="middle"
                                    fill="none"
                                    stroke="#0072EF"
                                    strokeWidth="3"
                                    style={{
                                        fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
                                        letterSpacing: '-0.04em',
                                        fontSize: '95px'
                                    }}
                                >
                                    {subtitle2}
                                </text>
                            )}
                        </svg>
                    </div>
                </div>

                {/* Minimal Subtle Accent Divider */}
                <div className="h-1 w-12 bg-[#0072EF] rounded-full opacity-60 group-hover:w-20 transition-all duration-300 ease-out" />
            </div>

            {/* Floating Interactive Deck Navigation Hint */}
            <div className="relative z-10 flex flex-col items-center gap-3 border-t border-zinc-800/80 pt-6 w-full max-w-sm text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
                <span className="flex flex-col sm:flex-row items-center gap-2">
                    <span>Keyboard Slide Controls</span>
                    <div className="flex items-center gap-1 font-sans normal-case tracking-normal">
                        <kbd className="h-5 px-1.5 flex items-center bg-zinc-900 border border-zinc-800 text-zinc-300 rounded font-bold text-[10px] shadow-sm">
                            &larr;
                        </kbd>
                        <kbd className="h-5 px-1.5 flex items-center bg-zinc-900 border border-zinc-800 text-zinc-300 rounded font-bold text-[10px] shadow-sm">
                            &rarr;
                        </kbd>
                    </div>
                </span>
            </div>

        </div>
    );
}