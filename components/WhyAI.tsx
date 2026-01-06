
import React from 'react';

const benefits = [
  "Faster flavor innovation (Weeks vs Years)",
  "Lower experimentation cost via Virtual Taste Testing",
  "Stronger alignment with Gen Z food culture",
  "Automated supply chain & demand forecasting",
  "Zero-waste production through predictive modeling"
];

export const WhyAI: React.FC = () => {
  return (
    <section id="why-ai" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1613919113166-796ca33c19ee?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[3rem] shadow-2xl" 
              alt="Packaging Lineup" 
              loading="lazy"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-brand font-black text-stone-900 uppercase italic">Why AI First Wins</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-stone-700 group">
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform">
                    <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200">
              <p className="text-stone-500 italic">
                "We aren't just making chips; we're building a content engine that snacks. The data tells us what people want before they even know they're hungry."
              </p>
              <div className="mt-4 font-bold text-stone-900">— CTO, Crunch.ai</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
