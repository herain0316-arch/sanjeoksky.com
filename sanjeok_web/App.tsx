import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import DispatchSystem from './components/DispatchSystem';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Gallery />
        <DispatchSystem />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default App;