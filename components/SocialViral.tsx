
import React from 'react';

export const SocialViral: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-brand font-black mb-4">Designed to Go Viral</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Each flavor launches with AI-generated slogans, captions, and hashtags — designed for TikTok and Instagram from the very first bit.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl group bg-stone-800">
            <img src="https://images.unsplash.com/photo-1621447509374-f20384462152?q=80&w=400&auto=format" className="w-full h-full object-cover" alt="Viral Snacks" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-yellow-500 font-bold text-xs uppercase mb-1">#crunchchallenge</span>
              <p className="font-bold text-sm leading-tight">The crunch heard across the algorithm.</p>
            </div>
          </div>
          <div className="aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl mt-8 bg-stone-800">
            <img src="https://images.unsplash.com/photo-1599488611731-0158b282c967?q=80&w=400&auto=format" className="w-full h-full object-cover" alt="Food Trend" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-yellow-500 font-bold text-xs uppercase mb-1">#flavorhack</span>
              <p className="font-bold text-sm leading-tight">Wait for the umami hit... 🤯</p>
            </div>
          </div>
          <div className="aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl bg-stone-800">
            <img src="https://images.unsplash.com/photo-1613918108466-292b78a8ef95?q=80&w=400&auto=format" className="w-full h-full object-cover" alt="Aesthetic Food" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-yellow-500 font-bold text-xs uppercase mb-1">#snackwithus</span>
              <p className="font-bold text-sm leading-tight">AI just out-cooked your grandma.</p>
            </div>
          </div>
          <div className="aspect-[9/16] relative rounded-3xl overflow-hidden shadow-2xl mt-8 bg-stone-800">
            <img src="https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=400&auto=format" className="w-full h-full object-cover" alt="Tasty Crisps" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-yellow-500 font-bold text-xs uppercase mb-1">#crunchai</span>
              <p className="font-bold text-sm leading-tight">The future of snacking is here.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
