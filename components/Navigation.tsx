
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-brand font-black text-white">C</div>
          <span className="font-brand font-black text-xl tracking-tighter">CRUNCH.AI</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-stone-600">
          <a href="#flavors" className="hover:text-yellow-600 transition-colors">FLAVORS</a>
          <a href="#how-it-works" className="hover:text-yellow-600 transition-colors">HOW IT WORKS</a>
          <a href="#why-ai" className="hover:text-yellow-600 transition-colors">VISION</a>
        </div>
        <button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-yellow-500 hover:text-stone-900 transition-all">
          INVESTOR DEMO
        </button>
      </div>
    </nav>
  );
};
