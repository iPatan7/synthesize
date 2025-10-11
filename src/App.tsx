import React, { useState, useRef } from 'react';
import ScrollContainer from './components/ScrollContainer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TransitionSection from './components/TransitionSection';
import BreakthroughSection from './components/BreakthroughSection';
import CaseStudySection from './components/CaseStudySection';
import AwakeningSection from './components/AwakeningSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isThemeDark, setIsThemeDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollProgress = (progress: number) => {
    setScrollProgress(progress);
  };

  const handleThemeToggle = () => {
    setIsThemeDark(!isThemeDark);
    // Toggle body class for theme
    if (isThemeDark) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  return (
    <div className="App" ref={containerRef}>
      <Navbar isDark={isThemeDark} scrollProgress={scrollProgress} onThemeToggle={handleThemeToggle} />
      <ScrollContainer onScrollProgress={handleScrollProgress}>
        <HeroSection />
        <TransitionSection />
        <BreakthroughSection />
        <CaseStudySection />
        <AwakeningSection />
        <TeamSection />
        <Footer />
      </ScrollContainer>
    </div>
  );
}

export default App;