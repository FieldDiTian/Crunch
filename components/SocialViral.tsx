
import React from 'react';
import { AIBadge } from './AIBadge';

const viralContent = [
  {
    platform: "TikTok",
    hashtags: ["#CrunchChallenge", "#AISnacks", "#FlavorDrop"],
    caption: "The crunch heard across the algorithm. 🔊🍟",
    engagement: "2.4M views",
    color: "from-pink-500 to-orange-500"
  },
  {
    platform: "Instagram",
    hashtags: ["#FlavorHack", "#SnackTech", "#CrunchAI"],
    caption: "Wait for the umami hit... it's AI-perfect. 🤯",
    engagement: "847K likes",
    color: "from-purple-500 to-pink-500"
  },
  {
    platform: "X (Twitter)",
    hashtags: ["#AISnacking", "#TrendToShelf", "#CrunchMoment"],
    caption: "We turned TikTok food trends into actual chips. The future is crunchy.",
    engagement: "12K retweets",
    color: "from-blue-500 to-cyan-500"
  }
];

const contentStrategy = [
  {
    title: "Auto-Generated Captions",
    desc: "AI writes scroll-stopping copy in milliseconds",
    metric: "95% engagement rate"
  },
  {
    title: "Trending Hashtags",
    desc: "Real-time hashtag optimization based on viral patterns",
    metric: "3x reach boost"
  },
  {
    title: "Platform Adaptation",
    desc: "Content automatically formatted for each social platform",
    metric: "Multi-channel ready"
  }
];

export const SocialViral: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-brand font-black mb-4">Designed to Go Viral</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Each flavor launches with AI-generated slogans, captions, and hashtags — designed for TikTok and Instagram from the very first bit.
          </p>
        </div>

        {/* Social Content Examples */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {viralContent.map((content, idx) => (
            <div key={idx} className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl p-8 border border-stone-700 hover:border-yellow-500/50 transition-all group relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${content.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity -z-10`}></div>
              
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <AIBadge label="AI_COPY" variant="dark" className="" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.hashtags.map((tag, i) => (
                    <span key={i} className="text-xs text-yellow-400 font-mono bg-yellow-500/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-white font-medium mb-6 leading-relaxed">
                  "{content.caption}"
                </p>
                
                <div className="pt-4 border-t border-stone-700">
                  <span className="text-stone-500 text-xs uppercase tracking-wider">Projected Performance</span>
                  <p className="text-yellow-500 font-bold text-lg">{content.engagement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Strategy Grid */}
        <div className="bg-stone-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-stone-700">
          <h3 className="text-2xl font-brand font-black mb-8 text-center">AI-Powered Content Strategy</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contentStrategy.map((strategy, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <span className="text-yellow-500 font-brand font-black text-3xl">{idx + 1}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{strategy.title}</h4>
                <p className="text-stone-400 text-sm mb-3 leading-relaxed">{strategy.desc}</p>
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">{strategy.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 p-[2px] rounded-2xl">
            <div className="bg-stone-900 px-8 py-6 rounded-2xl">
              <p className="text-stone-300 mb-4">
                <span className="text-yellow-500 font-bold">Launch speed:</span> From trend detection to viral post in 48 hours
              </p>
              <button className="px-8 py-3 bg-yellow-500 text-stone-900 font-bold rounded-xl hover:bg-yellow-400 transition-colors">
                See the Content Engine →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
