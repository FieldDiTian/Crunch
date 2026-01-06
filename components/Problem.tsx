
import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-4xl font-brand font-black text-stone-900 mb-4">Why Chip Innovation Is Broken</h2>
        <div className="w-24 h-2 bg-yellow-500 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative group bg-stone-100 rounded-2xl overflow-hidden">
              <img
                src="/assets/problem_boring_chips.webp"
                alt="Standard Potato Chips"
                className="w-full h-64 object-cover filter grayscale opacity-60 transition-all group-hover:grayscale-0 group-hover:opacity-100"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-stone-900/80 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">Legacy Brands</span>
              </div>
            </div>
            <img
              src="/assets/problem_spices.webp"
              alt="Raw Spices"
              className="rounded-2xl w-full h-40 object-cover bg-stone-100"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="pt-12">
            <img
              src="/assets/problem_gourmet_chips.webp"
              alt="Gourmet Chips"
              className="rounded-2xl w-full h-[400px] object-cover shadow-xl ring-8 ring-yellow-500/10 bg-stone-100"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-stone-50 border-l-4 border-yellow-500">
            <h3 className="font-bold text-xl mb-2">Stagnant Cycles</h3>
            <p className="text-stone-600">Traditional chip brands move too slowly. It takes 18-24 months for a new flavor to hit the shelf. By then, the trend is dead.</p>
          </div>
          <div className="p-6 rounded-2xl bg-stone-50 border-l-4 border-yellow-500">
            <h3 className="font-bold text-xl mb-2">Outdated Research</h3>
            <p className="text-stone-600">Flavor decisions rely on focus groups and dusty spreadsheets rather than real-time cultural sentiment.</p>
          </div>
          <div className="p-6 rounded-2xl bg-stone-50 border-l-4 border-yellow-500">
            <h3 className="font-bold text-xl mb-2">Trend Misalignment</h3>
            <p className="text-stone-600">Social food trends change weekly. If you're not agile, you're irrelevant to Gen Z and Alpha consumers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
