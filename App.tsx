
import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Process } from './components/Process';
import { Flavors } from './components/Flavors';
import { SocialViral } from './components/SocialViral';
import { WhyAI } from './components/WhyAI';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Flavors />
        <SocialViral />
        <WhyAI />
      </main>
      <Footer />
    </div>
  );
};

export default App;
