import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './PublicationsSection.css';

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <div ref={ref} className="publications-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="main-title"
          variants={itemVariants}
        >
          Publications
        </motion.h2>
        
        <motion.p
          className="subtitle"
          variants={itemVariants}
        >
          Access Dr. Abubaker Patan's complete research publications and academic profile
        </motion.p>

        <motion.div
          className="orcid-section"
          variants={itemVariants}
        >
          <div className="orcid-card">
            <div className="orcid-header">
              <span className="orcid-icon">👨‍🔬</span>
              <h3>Dr. Abubaker Patan, Ph.D.</h3>
              <p className="orcid-title">Postdoctoral Researcher</p>
            </div>
            <p className="orcid-description">
              View Dr. Patan's complete academic profile, publications, and research contributions. 
              Access his employment history, education, and research focus areas in metabolomics and mass spectrometry.
            </p>
            <a 
              href="/dr-patan"
              className="orcid-link"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/dr-patan');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              View Dr. Patan's Full Profile →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PublicationsSection;
