// components/ContactModal.tsx
'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the box
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg"
        >
          ✕
        </button>

        <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
        
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-mono">EMAIL</span>
            <a href="mailto:your.email@example.com" className="text-zinc-200 hover:text-blue-400 transition-colors">
              your.email@example.com
            </a>
          </div>
          
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-mono">PHONE</span>
            <span className="text-zinc-200">+216 XX XXX XXX</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-mono">GITHUB</span>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-zinc-200 hover:text-blue-400 transition-colors">
              github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}