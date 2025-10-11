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
              Into the Dark Metabolome
            </motion.h1>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              <div className="stat-highlight">
                <span className="stat-number">96.6%</span>
                <span className="stat-label">unannotated</span>
              </div>
              <div className="stat-description">
                Of the 1.75 billion mass spectra publicly available
              </div>
            </motion.div>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Our mission is to bring these unknown molecules into the light
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

        {/* Transition Section - Synthetic Multiplexing */}
        <section className="transition-section">
          <div className="transition-content">
            <motion.h2 
              className="transition-title"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              A New Paradigm: Synthetic Multiplexing
            </motion.h2>
            
            <motion.div 
              className="transition-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="transition-question">How do you chart the unknown? You build a map.</p>
              <p className="transition-description">
                We created a massive MS/MS spectral reference library through multiplexed organic synthesis.
              </p>
            </motion.div>
            
            <motion.div 
              className="library-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="stat-card">
                <span className="stat-number">1,450</span>
                <span className="stat-label">small molecules</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">134,453</span>
                <span className="stat-label">unique MS/MS spectra</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">thousands</span>
                <span className="stat-label">chemical reactions</span>
              </div>
            </motion.div>
            
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

        {/* Breakthrough Section - Doubling Our Known Universe */}
        <section className="breakthrough-section">
          <div className="breakthrough-content">
            <motion.h2 
              className="breakthrough-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Doubling Our Known Universe
            </motion.h2>
            
            <motion.div 
              className="breakthrough-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p>We applied a strategy called <strong>Reverse Metabolomics</strong>: searching our new synthetic library against massive public data repositories.</p>
              <p>The result: we doubled the annotation rate of all public MS/MS data, matching over 60 million spectra and identifying over 15,000 distinct molecules.</p>
            </motion.div>

            <div className="breakthrough-stats">
              <motion.div 
                className="annotation-progress"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: "3.4%" }}
                    whileInView={{ width: "6.8%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </div>
                <div className="progress-labels">
                  <span className="before">3.4% annotated</span>
                  <span className="after">6.8% annotated</span>
                </div>
              </motion.div>
              
              <div className="spectra-matches">
                <motion.div 
                  className="big-number"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <span className="number">60,146,352</span>
                  <span className="label">MS/MS spectra matches</span>
                </motion.div>
              </div>
            </div>

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
                  <h3>Distinct Molecules</h3>
                  <div className="stat-number">15,000+</div>
                </motion.div>
                
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3>Annotation Rate</h3>
                  <div className="stat-number">Doubled</div>
                </motion.div>
                
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3>Public Repositories</h3>
                  <div className="stat-number">Multiple</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 1: Drug Metabolism */}
        <section className="case-study-section">
          <div className="case-study-content">
            <motion.h2 
              className="case-study-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              The Secret Life of Common Drugs
            </motion.h2>
            
            <motion.div 
              className="case-study-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p>Our library uncovered previously unknown drug biotransformations. We found <strong>29 5-ASA derivatives</strong> and <strong>21 ibuprofen derivatives</strong> across human datasets, many of which were elevated in individuals with inflammatory bowel disease (IBD).</p>
              <p>This expands the known metabolic map of how our bodies and microbiomes process common medications.</p>
            </motion.div>

            <div className="molecular-network">
              <motion.div 
                className="network-visualization"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="molecule-node 5asa">
                  <span className="molecule-name">5-ASA</span>
                  <span className="derivative-count">29 derivatives</span>
                </div>
                <div className="molecule-node ibuprofen">
                  <span className="molecule-name">Ibuprofen</span>
                  <span className="derivative-count">21 derivatives</span>
                </div>
                <div className="connection-lines"></div>
              </motion.div>
            </div>

            <div className="spectra-comparison">
              <motion.div 
                className="spectra-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="spectrum synthetic">
                  <h4>Synthetic Spectrum</h4>
                  <div className="spectrum-bars">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="bar" style={{ height: `${Math.random() * 100 + 20}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="cosine-score">
                  <span className="score">Cosine: 0.95</span>
                </div>
                <div className="spectrum human">
                  <h4>Human Feces Spectrum</h4>
                  <div className="spectrum-bars">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="bar" style={{ height: `${Math.random() * 100 + 20}%` }}></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Study 2: Ibuprofen Pregnancy */}
        <section className="case-study-section pregnancy">
          <div className="case-study-content">
            <motion.h2 
              className="case-study-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Ibuprofen, Pregnancy, and Performance
            </motion.h2>
            
            <motion.div 
              className="case-study-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p>We identified a novel conjugate: <strong>Ibuprofen-Carnitine</strong>, found in human urine.</p>
              <p>L-carnitine is a key metabolite for energy metabolism and is known to reduce inflammation and oxidative stress after exercise. This discovery opens new avenues for understanding how drugs may interact with crucial metabolic pathways related to health and recovery.</p>
            </motion.div>

            <div className="ibuprofen-carnitine">
              <motion.div 
                className="molecule-structure"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="molecule-name">Ibuprofen-Carnitine</div>
                <div className="molecule-formula">C₁₃H₁₈O₂-C₇H₁₅NO₃</div>
              </motion.div>
              
              <div className="carnitine-functions">
                <motion.div 
                  className="function-icon"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="icon">⚡</div>
                  <span>Energy Metabolism</span>
                </motion.div>
                <motion.div 
                  className="function-icon"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="icon">🛡️</div>
                  <span>Antioxidant</span>
                </motion.div>
                <motion.div 
                  className="function-icon"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="icon">💪</div>
                  <span>Muscle Recovery</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="team-content">
            <motion.h2 
              className="team-title"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              A Collaborative Effort
            </motion.h2>
            
            <motion.div 
              className="team-description"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="researcher-highlight">
                <motion.div 
                  className="researcher-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="researcher-name">Abubaker Patan, Ph.D.</div>
                  <div className="researcher-lab">Dorrestein Lab</div>
                  <div className="researcher-institution">UC San Diego</div>
                </motion.div>
                <motion.p 
                  className="research-presentation"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  This research is presented by <strong>Abubaker Patan, Ph.D.</strong>, from the <strong>Dorrestein Lab</strong> at UC San Diego.
                </motion.p>
              </div>
              <p>This work would not be possible without a global collaborative ecosystem and the dedicated researchers charting the future of metabolomics.</p>
            </motion.div>

            <div className="platform-logos">
              <motion.div 
                className="logo-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="platform-logo">GNPS</div>
                <div className="platform-logo">ReDU</div>
                <div className="platform-logo">MassIVE</div>
                <div className="platform-logo">MASST</div>
                <div className="platform-logo">GNPS</div>
                <div className="platform-logo">ReDU</div>
              </motion.div>
            </div>

            <motion.div 
              className="acknowledgments"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3>Acknowledgments</h3>
              <p>Prof. Pieter C. Dorrestein, Prof. Siegel Dionicio, Shipei Xing, Vincent Lamoureux, Helena Mannochio Russo, and all lab members and collaborators.</p>
            </motion.div>
          </div>
        </section>
      </ScrollContainer>
    </div>
  );
}

export default App;
