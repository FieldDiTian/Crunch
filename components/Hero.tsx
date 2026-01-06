
import React from 'react';
import { AIBadge } from './AIBadge';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-brand font-black text-stone-900 leading-tight mb-6">
            Chips Designed by AI.<br />
            <span className="text-yellow-500">Loved by Humans.</span>
          </h1>
          <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto lg:mx-0">
            We turn social media food trends into potato chip flavors — in weeks, not years. 
            The snack brand for the algorithm age.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#flavors" className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-stone-900 font-bold rounded-xl text-lg hover:shadow-xl hover:shadow-yellow-200 transition-all text-center">
              Explore the Flavors
            </a>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-stone-200 text-stone-600 font-bold rounded-xl text-lg hover:bg-stone-50 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-700 bg-stone-200">
            <img 
              src="/assets/hero_chips_ai.webp" 
              alt="Premium Seasoned Chips" 
              className="w-full h-[500px] object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            <AIBadge label="TREND_SIGNAL: HIGH" className="top-8 right-8" />
            <AIBadge label="LAUNCH_READY: 98%" className="bottom-12 left-8" />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] opacity-20 -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-stone-200 rounded-full -z-10 border-dashed animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
};
