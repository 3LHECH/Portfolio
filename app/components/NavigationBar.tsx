'use client';

interface NavigationBarProps {
  theme: 'dark' | 'light';
  onOpenContact: () => void;
}

export default function NavigationBar({ theme, onOpenContact }: NavigationBarProps) {
  const isLight = theme === 'light';
  const navBg = isLight ? 'bg-white/80 border-zinc-200/60' : 'bg-zinc-950/80 border-zinc-900/60';

  const contactBtnStyle = isLight 
    ? { backgroundColor: '#0072EF', color: '#ffffff' } 
    : undefined;

  return (
    <div className="fixed top-0 left-0 right-0 h-16 z-50 group">
      <nav className={`absolute inset-0 flex justify-between items-center px-12 backdrop-blur-md border-b transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out ${navBg}`}>
        <div className={`font-semibold text-sm tracking-widest uppercase opacity-90 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
          Mohamed Hechmi Ben Hadid
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenContact}
            style={contactBtnStyle}
            className={`px-5 py-2 text-[10px] font-mono uppercase tracking-widest rounded-full font-medium transition-all ${
              !isLight 
                ? 'bg-zinc-100 text-zinc-950 hover:bg-white' 
                : 'hover:opacity-90 shadow-sm shadow-blue-500/10'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>
      
      {/* Subtle indicator bar showing user where to hover */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-b group-hover:opacity-0 transition-opacity duration-200 ${isLight ? 'bg-zinc-200' : 'bg-zinc-800'}`} />
    </div>
  );
}