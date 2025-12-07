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
            <p>Our library uncovered previously unknown drug biotransformations. We found <strong>41 5-ASA conjugates</strong> and <strong>56 ibuprofen conjugates</strong> across human datasets, representing <strong>6% of human-exclusive metabolites</strong>. Many were significantly elevated in individuals with inflammatory bowel disease (IBD).</p>
            <p>This expands the known metabolic map of how our bodies and microbiomes process common medications, revealing crucial drug-microbiome interactions.</p>
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
                <span className="derivative-count">41 conjugates</span>
              </div>
              <div className="molecule-node ibuprofen">
                <span className="molecule-name">Ibuprofen</span>
                <span className="derivative-count">56 conjugates</span>
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

      {/* Case Study 2: Comprehensive Drug Discovery */}
      <section className="case-study-section drug-discovery">
        <div className="case-study-content">
          <motion.h2
            className="case-study-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Comprehensive Drug Metabolite Discovery
          </motion.h2>

          <motion.div
            className="case-study-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>Our synthetic library revealed a comprehensive map of drug metabolism across <strong>7 common medications</strong>, uncovering <strong>161 drug derivatives</strong> that represent <strong>6% of all human-exclusive metabolites</strong> found in our study.</p>
            <p>These discoveries provide unprecedented insights into how our bodies and microbiomes process essential medications, with implications for drug efficacy, safety, and personalized medicine.</p>
          </motion.div>

          {/* Drug Grid */}
          <div className="drug-grid">
            {/* Ibuprofen */}
            <motion.div
              className="drug-card featured"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">💊</div>
              <h3 className="drug-name">Ibuprofen</h3>
              <div className="drug-count">56 conjugates</div>
              <div className="drug-type">NSAID • Anti-inflammatory</div>
              <p className="drug-context">Pain relief medication. Significantly elevated in IBD patients. Includes novel ibuprofen-carnitine conjugate.</p>
            </motion.div>

            {/* 5-ASA */}
            <motion.div
              className="drug-card featured"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">🔬</div>
              <h3 className="drug-name">5-ASA (Mesalamine)</h3>
              <div className="drug-count">41 conjugates</div>
              <div className="drug-type">Anti-inflammatory</div>
              <p className="drug-context">Primary IBD treatment. Derivatives show strong correlation with gut microbiome activity and disease state.</p>
            </motion.div>

            {/* Atorvastatin */}
            <motion.div
              className="drug-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">❤️</div>
              <h3 className="drug-name">Atorvastatin</h3>
              <div className="drug-count">Multiple derivatives</div>
              <div className="drug-type">Statin • Lipid-lowering</div>
              <p className="drug-context">Cholesterol management. Metabolites reveal complex hepatic and gut microbial processing pathways.</p>
            </motion.div>

            {/* Atenolol */}
            <motion.div
              className="drug-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">🫀</div>
              <h3 className="drug-name">Atenolol</h3>
              <div className="drug-count">Multiple derivatives</div>
              <div className="drug-type">Beta-blocker</div>
              <p className="drug-context">Blood pressure control. Derivatives provide insights into cardiovascular drug metabolism.</p>
            </motion.div>

            {/* Primaquine */}
            <motion.div
              className="drug-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">🦟</div>
              <h3 className="drug-name">Primaquine</h3>
              <div className="drug-count">Multiple derivatives</div>
              <div className="drug-type">Antimalarial</div>
              <p className="drug-context">Malaria treatment. Metabolite profiling reveals bioactivation and detoxification pathways.</p>
            </motion.div>

            {/* Naproxen */}
            <motion.div
              className="drug-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">💊</div>
              <h3 className="drug-name">Naproxen</h3>
              <div className="drug-count">Multiple derivatives</div>
              <div className="drug-type">NSAID • Anti-inflammatory</div>
              <p className="drug-context">Pain and inflammation relief. Conjugation patterns differ from ibuprofen despite similar mechanism.</p>
            </motion.div>

            {/* Methocarbamol */}
            <motion.div
              className="drug-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="drug-icon">💪</div>
              <h3 className="drug-name">Methocarbamol</h3>
              <div className="drug-count">Multiple derivatives</div>
              <div className="drug-type">Muscle Relaxant</div>
              <p className="drug-context">Skeletal muscle relaxation. Metabolic profile shows unique conjugation to amino acids.</p>
            </motion.div>
          </div>

          {/* Summary Banner */}
          <motion.div
            className="drug-summary-banner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <div className="banner-content">
              <div className="banner-stat">
                <span className="stat-number">161</span>
                <span className="stat-label">Drug Derivatives Discovered</span>
              </div>
              <div className="banner-divider" />
              <div className="banner-stat">
                <span className="stat-number">7</span>
                <span className="stat-label">Common Medications Analyzed</span>
              </div>
              <div className="banner-divider" />
              <div className="banner-stat">
                <span className="stat-number">6%</span>
                <span className="stat-label">Of Human-Exclusive Metabolites</span>
              </div>
            </div>
            <p className="banner-impact">
              This comprehensive drug metabolite atlas opens new frontiers in understanding medication efficacy, safety profiles, and the crucial role of the gut microbiome in drug metabolism.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudySection;
