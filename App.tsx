import React, { useState } from 'react';
import Visualizer from './components/Visualizer';
import Header from './components/Header';
import FullScreenMenu from './components/FullScreenMenu';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Upload from './components/Upload';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="w-full relative min-h-screen text-white selection:bg-red-600 selection:text-black">
      {/* 1. Fixed Background Visualization */}
      <Visualizer />

      {/* 2. Global Navigation */}
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* 3. Scrollable Content */}
      <div className="relative z-10">
        <Hero />
        <Manifesto />
        <Upload />
        
        {/* Footer */}
        <footer className="py-12 border-t border-neutral-900 bg-black text-center font-mono text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} π TECHNO COLLECTIVE. IRRATIONALITY IS TRUTH.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;