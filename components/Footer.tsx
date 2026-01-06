
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 pt-24 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block mb-12">
          <img 
            src="https://images.unsplash.com/photo-1621447509374-f20384462152?auto=format&fit=crop&q=80&w=1200" 
            className="w-full max-w-[800px] h-[400px] object-cover rounded-[3rem] mx-auto filter brightness-50" 
            alt="Final Hero Shot"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <h2 className="text-4xl lg:text-6xl font-brand font-black text-white mb-6 uppercase tracking-tight">
              A chip brand that cannot exist without AI.
            </h2>
            <button className="bg-yellow-500 text-stone-900 px-10 py-4 rounded-full font-brand font-black hover:scale-105 transition-transform">
              PARTNER WITH US
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-stone-200 pt-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center font-brand font-black text-white text-[10px]">C</div>
            <span className="font-brand font-black text-sm tracking-tighter">CRUNCH.AI</span>
          </div>
          <div className="text-sm text-stone-400">
            © 2024 AI-Driven Snack Innovation. Concept Design Project.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-stone-400 font-bold text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-stone-900">Privacy</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
            <a href="#" className="hover:text-stone-900">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
