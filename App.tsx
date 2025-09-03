
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import { FEATURES } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#111111] text-gray-300 font-sans">
      <Header />
      <main>
        <HeroSection />
        <div className="bg-[#111111] relative z-10 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-green-400">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Adaline gives you the building blocks to build, evaluate, and deploy your most ambitious AI ideas. 
                Go from a prompt to a production-ready API in minutes.
              </p>
            </div>
            <div className="mt-16 max-w-2xl mx-auto sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {FEATURES.map((feature) => (
                  <FeatureSection
                    key={feature.name}
                    name={feature.name}
                    description={feature.description}
                    icon={feature.icon}
                  />
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
