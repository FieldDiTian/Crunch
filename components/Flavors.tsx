
import React from 'react';
import { AIBadge } from './AIBadge';

const chipFlavors = [
  {
    name: "Korean BBQ Truffle",
    profile: "Umami / Smoky / Earthy",
    target: "Gen Z Urbanites",
    score: "94.8",
    img: "/assets/flavor_korean_bbq.webp"
  },
  {
    name: "Spicy Honey Hot-Pot",
    profile: "Sweet / Heat / Sichuan",
    target: "Spicy Adventurers",
    score: "91.2",
    img: "/assets/flavor_spicy_honey.webp"
  },
  {
    name: "Yuzu Dill Pickle",
    profile: "Zesty / Acidic / Refreshing",
    target: "Wellness Enthusiasts",
    score: "89.5",
    img: "/assets/flavor_yuzu_dill.webp"
  }
];

export const Flavors: React.FC = () => {
  return (
    <section id="flavors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-brand font-black text-stone-900">AI-Generated Flavors</h2>
            <p className="text-stone-500 mt-2">New concepts identified in the last 72 hours.</p>
          </div>
          <button className="text-yellow-600 font-bold hover:underline flex items-center gap-2">
            View Prediction Engine <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {chipFlavors.map((flavor, idx) => (
            <div key={idx} className="bg-stone-50 rounded-[2rem] overflow-hidden border border-stone-200 group">
              <div className="h-64 relative overflow-hidden bg-stone-200">
                <img
                  src={flavor.img}
                  alt={flavor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <AIBadge label={`SCORE: ${flavor.score}%`} className="bottom-4 right-4" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-brand font-black text-stone-900 mb-2 uppercase italic">{flavor.name}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {flavor.profile.split(' / ').map(p => (
                    <span key={p} className="px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-[10px] font-black tracking-widest uppercase">{p}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                  <div>
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Target Audience</div>
                    <div className="font-bold text-stone-800">{flavor.target}</div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
