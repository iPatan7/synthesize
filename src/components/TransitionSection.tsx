import React from 'react';
import { motion } from 'framer-motion';

interface TransitionSectionProps {
  // Add any props you might need
}

const TransitionSection: React.FC<TransitionSectionProps> = () => {
  return (
    <section className="transition-section">
      <div className="transition-content">
        <motion.h2 
          className="transition-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          A New Paradigm: Synthetic Multiplexing
        </motion.h2>
        
        <motion.div 
          className="transition-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
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
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
            >
              <div className="molecule-structure"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
