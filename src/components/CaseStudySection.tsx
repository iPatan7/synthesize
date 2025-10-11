import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudySectionProps {
  // Add any props you might need
}

const CaseStudySection: React.FC<CaseStudySectionProps> = () => {
  return (
    <>
      {/* Case Study 1: Drug Metabolism */}
      <section className="case-study-section">
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
            Ibuprofen, Pregnancy, and Performance
          </motion.h2>
          
          <motion.div 
            className="case-study-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
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
              viewport={{ once: true }}
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
                viewport={{ once: true }}
              >
                <div className="icon">⚡</div>
                <span>Energy Metabolism</span>
              </motion.div>
              <motion.div 
                className="function-icon"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="icon">🛡️</div>
                <span>Antioxidant</span>
              </motion.div>
              <motion.div 
                className="function-icon"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <div className="icon">💪</div>
                <span>Muscle Recovery</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudySection;
