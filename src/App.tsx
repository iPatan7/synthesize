import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollContainer from './components/ScrollContainer';
import MetabolomeSphere from './components/MetabolomeSphere';
import LiveChart from './components/LiveChart';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [isThemeDark, setIsThemeDark] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollProgress = (progress: number) => {
    setScrollProgress(progress);
    // Transition from dark to light based on scroll progress
    setIsDark(progress < 0.5);
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
        {/* Hero Section - Dark Metabolome */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="video-overlay"></div>
          </div>
          
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Unveiling the Dark Metabolome
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Journey from the unknown to the known through the power of discovery
            </motion.p>
          </div>

          <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.2} />
              <pointLight position={[10, 10, 10]} intensity={0.5} />
              <pointLight position={[-10, -10, -10]} intensity={0.3} />
              <MetabolomeSphere isDark={isDark} scrollProgress={scrollProgress} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Environment preset="night" />
            </Canvas>
          </div>

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="scroll-arrow"></div>
            <p>Scroll to discover</p>
          </motion.div>
        </section>

        {/* Transition Section */}
        <section className="transition-section">
          <div className="transition-content">
            <motion.h2 
              className="transition-title"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              The Discovery Process
            </motion.h2>
            
            <div className="molecule-grid">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="molecule"
                  initial={{ opacity: 0, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                >
                  <div className="molecule-structure"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge Section - Metabolome */}
        <section className="knowledge-section">
          <div className="knowledge-content">
            <motion.h2 
              className="knowledge-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              The Complete Metabolome
            </motion.h2>
            
            <motion.p 
              className="knowledge-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Real-time analysis and visualization of identified metabolites
            </motion.p>

            <div className="dashboard">
              <div className="chart-section">
                <LiveChart isVisible={scrollProgress > 0.6} />
              </div>
              
              <div className="stats-grid">
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3>Identified Metabolites</h3>
                  <div className="stat-number">1,247</div>
                </motion.div>
                
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3>Confidence Level</h3>
                  <div className="stat-number">94.2%</div>
                </motion.div>
                
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3>Analysis Time</h3>
                  <div className="stat-number">2.3s</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </ScrollContainer>
    </div>
  );
}

export default App;
