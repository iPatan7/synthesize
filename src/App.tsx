import React, { useState, useRef, useEffect } from 'react';
import ScrollContainer from './components/ScrollContainer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TransitionSection from './components/TransitionSection';
import BreakthroughSection from './components/BreakthroughSection';
import CaseStudySection from './components/CaseStudySection';
import AwakeningSection from './components/AwakeningSection';
import TeamSection from './components/TeamSection';
import PartnersSection from './components/PartnersSection';
import WorkflowLinks from './components/WorkflowLinks';
import PublicationsSection from './components/PublicationsSection';
import Footer from './components/Footer';
import { DrPatanPage } from './pages';
import { ReactionProvider } from './contexts/ReactionContext';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isThemeDark, setIsThemeDark] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/dr-patan') {
      setCurrentPage('dr-patan');
    } else {
      setCurrentPage('home');
    }
  }, []);

  // Listen for route changes
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/dr-patan') {
        setCurrentPage('dr-patan');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

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

  if (currentPage === 'dr-patan') {
    return <DrPatanPage />;
  }

  return (
    <ReactionProvider>
      <div className="App" ref={containerRef}>
        <Navbar isDark={isThemeDark} scrollProgress={scrollProgress} onThemeToggle={handleThemeToggle} />
        <ScrollContainer onScrollProgress={handleScrollProgress}>
          <HeroSection />
          <TransitionSection />
          <BreakthroughSection />
          <CaseStudySection />
          <AwakeningSection />
          <WorkflowLinks />
          <PublicationsSection />
          <TeamSection />
          <PartnersSection />
          <Footer />
        </ScrollContainer>
      </div>
    </ReactionProvider>
  );
}

export default App;