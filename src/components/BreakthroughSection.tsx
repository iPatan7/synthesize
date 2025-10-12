import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CompoundsTable from './CompoundsTable';

interface BreakthroughSectionProps {
  // Add any props you might need
}

const BreakthroughSection: React.FC<BreakthroughSectionProps> = () => {
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  const toggleTable = () => {
    setIsTableExpanded(!isTableExpanded);
  };

  return (
    <section className="breakthrough-section">
      <div className="breakthrough-content">
        <motion.h2 
          className="breakthrough-title"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Doubling Our Known Universe
        </motion.h2>
        
        <motion.div 
          className="breakthrough-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
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
          viewport={{ once: true }}
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

        {/* Expandable Compounds Table */}
        <motion.div 
          className="compounds-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="compounds-header">
            <h3 className="compounds-title">Synthetic Compound Library</h3>
            <p className="compounds-description">
              Explore our comprehensive library of bile acid derivatives and related compounds used in the reverse metabolomics approach.
            </p>
            <motion.button
              className="toggle-table-btn"
              onClick={toggleTable}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isTableExpanded ? 'Hide' : 'Show'} Compound Data
              <span className="toggle-icon">
                {isTableExpanded ? '▲' : '▼'}
              </span>
            </motion.button>
          </div>
          
          <CompoundsTable 
            isExpanded={isTableExpanded} 
            onToggle={toggleTable} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BreakthroughSection;
