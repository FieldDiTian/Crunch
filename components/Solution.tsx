
import React from 'react';
import { AIBadge } from './AIBadge';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <span className="text-yellow-500 font-bold tracking-widest text-sm uppercase">The Future of Snacking</span>
            <h2 className="text-5xl font-brand font-black">An AI First Chip Company</h2>
            <p className="text-xl text-stone-400">
              Our AI analyzes user taste preferences and social media food trends to generate new potato chip flavors and the marketing content that launches them.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h4 className="text-yellow-500 font-bold mb-2 uppercase text-xs tracking-tighter">Key Insight</h4>
              <p className="text-2xl font-bold leading-tight italic">
                "AI is the decision-maker — not a support tool."
              </p>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-3 gap-2 relative">
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1599490659223-4408441cd1ae?w=400&q=80" className="rounded-xl h-64 w-full object-cover" alt="Plain" loading="lazy" referrerPolicy="no-referrer" />
              <AIBadge label="RAW_DATA" className="top-2 left-2" variant="dark" />
              <div className="text-center mt-2 text-xs font-bold text-stone-500">PLAIN BASE</div>
            </div>
            <div className="relative group translate-y-8">
              <img src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80" className="rounded-xl h-64 w-full object-cover" alt="Seasoned" loading="lazy" referrerPolicy="no-referrer" />
              <AIBadge label="FLAVOR_SCORE: 0.94" className="top-2 left-2" variant="dark" />
              <div className="text-center mt-2 text-xs font-bold text-yellow-500">OPTIMIZED SEASONING</div>
            </div>
            <div className="relative group translate-y-16">
              <img src="https://images.unsplash.com/photo-1613919113166-796ca33c19ee?w=400&q=80" className="rounded-xl h-64 w-full object-cover shadow-2xl" alt="Packaged" loading="lazy" referrerPolicy="no-referrer" />
              <AIBadge label="MARKET_SYNC" className="top-2 left-2" variant="dark" />
              <div className="text-center mt-2 text-xs font-bold text-green-500">SHELF READY</div>
            </div>
            
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
