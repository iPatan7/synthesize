import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactionWheel from './ReactionWheel';
import ChemistryFormulas from './ChemistryFormulas';

interface TransitionSectionProps {
  // Add any props you might need
}

const TransitionSection: React.FC<TransitionSectionProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="research" className="paradigm-section">
      {/* Clean scientific background */}
      <div className="paradigm-background">
        <div className="scientific-grid" />
      </div>

      <motion.div 
        className="paradigm-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="paradigm-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="paradigm-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A New Paradigm: <span className="highlight">Forging a Map of the Unknown</span>
          </motion.h2>
          
          <motion.p 
            className="paradigm-question"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            How do you navigate a universe of unknown signals? You don't just explore—you build the map yourself.
          </motion.p>
        </motion.div>

        <motion.div 
          className="paradigm-narrative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="narrative-text">
            To illuminate the vast <strong>dark metabolome</strong>, we pioneered a new approach: <strong>Synthetic Multiplexing</strong>. 
            Instead of searching for needles in a haystack, we created a comprehensive library of known "needles" to match them against.
          </p>
          
          <p className="narrative-text">
            This wasn't a small effort. We started with <strong>1,450 foundational small molecules</strong> and subjected them to 
            <strong> thousands of unique chemical reactions</strong>, mimicking the metabolic processes that happen in nature.
          </p>
        </motion.div>

        <motion.div 
          className="achievement-highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="achievement-card">
            <div className="achievement-icon">🧬</div>
            <div className="achievement-text">
              <span className="achievement-label">Landmark Achievement</span>
              <span className="achievement-number">134,453</span>
              <span className="achievement-description">unique molecular fingerprints (MS/MS spectra)</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="paradigm-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="stat-grid">
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">⚗️</div>
              <span className="stat-number">1,450</span>
              <span className="stat-label">Foundational Molecules</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">🔬</div>
              <span className="stat-number">134,453</span>
              <span className="stat-label">Unique Spectra</span>
            </motion.div>
            
            <motion.div 
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">⚡</div>
              <span className="stat-number">Thousands</span>
              <span className="stat-label">Chemical Reactions</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="paradigm-conclusion"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="conclusion-text">
            Each spectrum is a verified <strong>"point on the map"</strong>, a known entity we can now use to identify 
            the millions of unknown signals in public data, transforming the unknown into the known.
          </p>
        </motion.div>

        {/* Interactive Reaction Wheel */}
        <motion.div 
          className="reaction-wheel-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="reaction-wheel-title"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            viewport={{ once: true }}
          >
            From One Molecule to <span className="highlight">134,453 Spectra</span>
          </motion.h3>
          
          <motion.p 
            className="reaction-wheel-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            viewport={{ once: true }}
          >
            Click on any reaction type to explore how cholic acid transforms into diverse molecular structures through synthetic multiplexing.
          </motion.p>
          
          <ReactionWheel className="paradigm-reaction-wheel" />
        </motion.div>

        {/* Interactive chemistry formulas */}
        <ChemistryFormulas />
      </motion.div>
    </section>
  );
};

export default TransitionSection;