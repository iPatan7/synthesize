import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudySectionProps {
  // Add any props you might need
}

const CaseStudySection: React.FC<CaseStudySectionProps> = () => {
  return (
    <>
      {/* Case Study 1: Drug Metabolism */}
      <section className="case-study-section headline">
        <div className="case-study-content">
          <motion.h2 
            className="case-study-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            The Secret Life of Common Drugs
          </motion.h2>
          
          <motion.div 
            className="case-study-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
            viewport={{ once: true }}
          >
            Novel Drug-Metabolite Conjugate Discovery: Ibuprofen-Carnitine
          </motion.h2>
          
          <motion.div 
            className="case-study-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>Our investigation uncovered a previously unknown molecule present in the human body after the use of a common painkiller: <strong>Ibuprofen-Carnitine</strong>. This novel conjugate reveals a direct link between a widely used drug and one of the body's most crucial metabolic pathways.</p>
            <p>The second part of this molecule, <strong>L-carnitine</strong>, is a vital compound synthesized in the liver, kidney, and brain. It's renowned for its role in cellular energy and is a key player in protecting the body from stress.</p>
            <p>This discovery is more than just a chemical footnote; it opens a new frontier of questions. How does the conjugation of a drug to a vital metabolite like L-carnitine affect our energy systems, our response to inflammation, and our ability to recover from physical exertion?</p>
          </motion.div>

          {/* Interactive Molecular Reveal */}
          <div className="molecular-reveal">
            <motion.div 
              className="molecules-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="molecule ibuprofen"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="molecule-structure">
                  <div className="molecule-label">Parent Drug</div>
                  <div className="molecule-icon">💊</div>
                  <div className="molecule-name">Ibuprofen</div>
                  <div className="molecule-formula">C₁₃H₁₈O₂</div>
                  <div className="molecule-class">NSAID • Anti-inflammatory</div>
                  <div className="molecule-badges">
                    <span className="molecule-chip">COX Inhibitor</span>
                    <span className="molecule-chip">OTC Analgesic</span>
                  </div>
                  <div className="molecule-hover-info">
                    <div className="hover-title">Drug Properties</div>
                    <div className="hover-details">
                      <p>• Non-steroidal anti-inflammatory drug</p>
                      <p>• Inhibits cyclooxygenase enzymes</p>
                      <p>• Common over-the-counter medication</p>
                      <p>• Used for pain and inflammation relief</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="conjugation-arrow"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="arrow-icon">+</div>
                <div className="arrow-text">Conjugation</div>
                <div className="arrow-pill">Acyltransferase Bridge</div>
                <div className="arrow-subtext">Aligns drug metabolism with mitochondrial uptake</div>
                <div className="formula-sequence">
                  <span className="formula-fragment">C₁₃H₁₈O₂</span>
                  <span className="formula-join">+</span>
                  <span className="formula-fragment">C₇H₁₅NO₃</span>
                  <span className="formula-join">⇌</span>
                  <span className="formula-result">Ibuprofen-Carnitine</span>
                </div>
              </motion.div>

              <motion.div 
                className="molecule carnitine"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="molecule-structure">
                  <div className="molecule-label">Metabolic Co-factor</div>
                  <div className="molecule-icon">⚡</div>
                  <div className="molecule-name">L-Carnitine</div>
                  <div className="molecule-formula">C₇H₁₅NO₃</div>
                  <div className="molecule-class">Essential Metabolite • Energy Shuttle</div>
                  <div className="molecule-badges">
                    <span className="molecule-chip">β-oxidation</span>
                    <span className="molecule-chip">Mitochondrial Shuttle</span>
                  </div>
                  <div className="molecule-hover-info">
                    <div className="hover-title">Metabolic Functions</div>
                    <div className="hover-details">
                      <p>• Transports fatty acids into mitochondria</p>
                      <p>• Essential for cellular energy production</p>
                      <p>• Synthesized in liver, kidney, and brain</p>
                      <p>• Protects against oxidative stress</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="conjugate-result"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            >
              <div className="molecule-structure conjugate">
                <div className="molecule-label conjugate">Conjugate Discovery</div>
                <div className="conjugate-header">
                  <motion.div 
                    className="conjugate-icon"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 1.7, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    🔬
                  </motion.div>
                  <div className="conjugate-titles">
                    <motion.div 
                      className="conjugate-name"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.9 }}
                      viewport={{ once: true }}
                    >
                      Ibuprofen-Carnitine
                    </motion.div>
                    <motion.div 
                      className="conjugate-formula"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                      viewport={{ once: true }}
                    >
                      C₁₃H₁₈O₂-C₇H₁₅NO₃
                    </motion.div>
                    <motion.div 
                      className="conjugate-class"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2.1 }}
                      viewport={{ once: true }}
                    >
                      Novel Conjugate • Drug-Metabolite
                    </motion.div>
                  </div>
                </div>
                <div className="conjugate-meta">
                  <motion.div 
                    className="discovery-badge"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 2.25, type: "spring", stiffness: 260 }}
                    viewport={{ once: true }}
                  >
                    First Discovery
                  </motion.div>
                  <motion.div 
                    className="research-impact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.35 }}
                    viewport={{ once: true }}
                  >
                    Human Urine Metabolite
                  </motion.div>
                </div>
                <div className="molecule-badges conjugate-badges">
                  <span className="molecule-chip">Energy Pathway Signal</span>
                  <span className="molecule-chip">Safety Insight</span>
                </div>
                <div className="molecule-hover-info discovery-hover">
                  <div className="hover-title">Discovery Significance</div>
                  <div className="hover-details">
                    <p>• First reported drug-carnitine conjugate in humans</p>
                    <p>• Identified through reverse metabolomics approach</p>
                    <p>• Found in urine samples from clinical studies</p>
                    <p>• Opens new understanding of drug metabolism</p>
                    <p>• Potential implications for drug efficacy and safety</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated Function Cards */}
          <div className="carnitine-functions">
            <motion.h3 
              className="functions-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
            >
              L-Carnitine's Vital Functions
            </motion.h3>
            
            <div className="function-cards">
              <motion.div 
                className="function-card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="card-icon">⚡</div>
                <h4 className="card-title">Energy Metabolism</h4>
                <p className="card-description">
                  L-carnitine's primary role is to transport fatty acids into mitochondria, acting as a crucial shuttle for cellular energy production.
                </p>
              </motion.div>

              <motion.div 
                className="function-card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="card-icon">🛡️</div>
                <h4 className="card-title">Potent Antioxidant</h4>
                <p className="card-description">
                  It helps protect the neuromuscular system by neutralizing excess reactive oxygen and nitrogen species that can damage DNA, lipids, and proteins.
                </p>
              </motion.div>

              <motion.div 
                className="function-card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="card-icon">💪</div>
                <h4 className="card-title">Muscle Recovery</h4>
                <p className="card-description">
                  By reducing exercise-induced muscle damage and inflammation, L-carnitine supplementation can aid in post-exercise recovery.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Impact Statement */}
          <motion.div 
            className="impact-statement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6 }}
            viewport={{ once: true }}
          >
            <div className="impact-content">
              <h3>Opening New Frontiers</h3>
              <p>This discovery opens new avenues for understanding how drugs may interact with crucial metabolic pathways related to health, recovery, and performance. The implications extend far beyond pain management, potentially revolutionizing our understanding of drug-metabolite interactions.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudySection;
