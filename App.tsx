import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExecutivesSection from './components/ExecutivesSection';
import ActivitiesSection from './components/ActivitiesSection';
import NoticesSection from './components/NoticesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <ExecutivesSection />
        <ActivitiesSection />
        <NoticesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;