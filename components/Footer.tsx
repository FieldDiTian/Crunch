
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-brand font-black text-white mb-6 uppercase tracking-tight leading-tight">
              A chip brand that cannot exist without AI.
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
              Join us in revolutionizing the snack industry with AI-powered innovation. From trend detection to market launch in weeks, not years.
            </p>
            <button className="bg-yellow-500 text-stone-900 px-12 py-5 rounded-full font-brand font-black text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              PARTNER WITH US →
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center font-brand font-black text-white text-sm">C</div>
              <span className="font-brand font-black text-lg tracking-tighter">CRUNCH.AI</span>
            </div>
            
            <div className="text-sm text-stone-500 text-center">
              © 2024 AI-Driven Snack Innovation. Concept Design Project.
            </div>
            
            <div className="flex space-x-8 text-stone-500 font-bold text-xs uppercase tracking-widest">
              <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-stone-900 transition-colors">Press Kit</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
