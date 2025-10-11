import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollContainer from './components/ScrollContainer';
// import LiveChart from './components/LiveChart';
import Navbar from './components/Navbar';
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
        {/* Hero Section - Using Breakthrough Styling */}
        <section className="breakthrough-section hero-breakthrough">
          <div className="breakthrough-content">
            <motion.h1 
              className="breakthrough-title hero-title"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Charting the Undiscovered Metabolome
            </motion.h1>
            
            <motion.div 
              className="breakthrough-text hero-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="breakthrough-question">How do you turn the unknown into the known?</p>
              <p className="breakthrough-description">
                We applied a strategy called <strong>Reverse Metabolomics</strong>: searching our new synthetic library against massive public data repositories.
              </p>
            </motion.div>
            
            <motion.div 
              className="breakthrough-stats hero-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="stat-card">
                <span className="stat-number">3.4%</span>
                <span className="stat-label">to 6.8% annotated</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">60,146,352</span>
                <span className="stat-label">MS/MS spectra matches</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15,000+</span>
                <span className="stat-label">distinct molecules</span>
              </div>
            </motion.div>
          </div>
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Doubling Our Known Universe
            </motion.h2>
            
            <motion.div 
              className="breakthrough-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="breakthrough-question">How do you turn the unknown into the known?</p>
              <p className="breakthrough-description">
                We applied a strategy called <strong>Reverse Metabolomics</strong>: searching our new synthetic library against massive public data repositories.
              </p>
            </motion.div>
            
            <motion.div 
              className="breakthrough-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="stat-card">
                <span className="stat-number">3.4%</span>
                <span className="stat-label">to 6.8% annotated</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">60,146,352</span>
                <span className="stat-label">MS/MS spectra matches</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15,000+</span>
                <span className="stat-label">distinct molecules</span>
              </div>
            </motion.div>
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

        {/* Awakening Section - Bringing the Dark Metabolome to Light */}
        <section className="awakening-section">
          <div className="awakening-container">
            <video 
              src="/videos/2.mp4" 
              className="awakening-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="content-overlay">
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Bringing the Dark Metabolome to Light
              </motion.h2>

              <motion.div
                className="section-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p>
                  Using <strong>Reverse Metabolomics</strong>, we searched our new synthetic library against massive public data repositories, effectively turning the unknown into the known.
                  <br/><br/>
                  This breakthrough doubled the annotation rate of all public MS/MS data, matching over <strong>60 million spectra</strong> and bringing <strong>15,000 molecules</strong> out of the dark.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team-section">
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
              <p>This work would not be possible without a global collaborative ecosystem and the dedicated researchers charting the future of metabolomics.</p>
            </motion.div>

            {/* Research Team */}
            <motion.div
              className="team-members"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3>Research Team</h3>
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Abubaker Patan, Ph.D.</h4>
                    <p>Research Presenter</p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Prof. Pieter C. Dorrestein</h4>
                    <p>Principal Investigator</p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Prof. Siegel Dionicio</h4>
                    <p>Co-Investigator</p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Shipei Xing</h4>
                    <p>Research Scientist</p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Vincent Lamoureux</h4>
                    <p>Research Scientist</p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Helena Mannochio Russo</h4>
                    <p>Research Scientist</p>
                  </div>
                </div>

                <div className="team-member">
                  <div className="member-photo">
                    <div className="photo-placeholder">
                      <span className="placeholder-icon">👥</span>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Lab Members & Collaborators</h4>
                    <p>Global Research Network</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Platform Logos */}
            <div className="platform-logos">
              <motion.div
                className="logo-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <div className="platform-logo">GNPS</div>
                <div className="platform-logo">ReDU</div>
                <div className="platform-logo">MassIVE</div>
                <div className="platform-logo">MASST</div>
                <div className="platform-logo">GNPS</div>
                <div className="platform-logo">ReDU</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>The Dorrestein Laboratory</h3>
              <p>UC San Diego</p>
              <p>Charting the Undiscovered Metabolome</p>
            </div>
            
            <div className="footer-section">
              <h4>Research</h4>
              <ul>
                <li><a href="#team">Team</a></li>
                <li><a href="#publications">Publications</a></li>
                <li><a href="#data">Data</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Platforms</h4>
              <ul>
                <li><a href="https://gnps.ucsd.edu" target="_blank" rel="noopener noreferrer">GNPS</a></li>
                <li><a href="https://redu.ucsd.edu" target="_blank" rel="noopener noreferrer">ReDU</a></li>
                <li><a href="https://massive.ucsd.edu" target="_blank" rel="noopener noreferrer">MassIVE</a></li>
                <li><a href="https://masst.ucsd.edu" target="_blank" rel="noopener noreferrer">MASST</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>University of California, San Diego</p>
              <p>La Jolla, CA 92093</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 The Dorrestein Laboratory. All rights reserved.</p>
          </div>
        </footer>
      </ScrollContainer>
    </div>
  );
}

export default App;