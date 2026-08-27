import { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import GlitchPreloader from './components/GlitchPreloader';
import './App.css';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <LanguageProvider>
      {showPreloader && (
        <GlitchPreloader onComplete={() => setShowPreloader(false)} />
      )}
      <div className="app">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </LanguageProvider>
  );
}
