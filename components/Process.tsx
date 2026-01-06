
import React from 'react';

const steps = [
  {
    title: "Trend Detection",
    desc: "AI scans viral food conversations, TikTok recipes, and taste signals in real-time.",
    img: "/assets/process_trend.webp"
  },
  {
    title: "Flavor Generation",
    desc: "Neural networks combine seasoning ratios to hit precise umami and heat profiles.",
    img: "/assets/process_flavor_gen.webp"
  },
  {
    title: "Instant Launch",
    desc: "AI automatically generates names, slogans, and high-converting social media creative.",
    img: "/assets/process_launch.webp"
  }
];

export const Process: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-brand font-black text-center text-stone-900 mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative mb-6 overflow-hidden rounded-2xl h-48">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-yellow-500 text-stone-900 rounded-full flex items-center justify-center font-brand font-black text-xl">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
