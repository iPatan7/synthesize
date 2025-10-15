import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  // Add any props you might need
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="hero-section">
      {/* Full Background Video */}
      <video 
        src={`${process.env.PUBLIC_URL}/videos/metabolome-intro.mp4`} 
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="video-overlay" />
      
      <div className="hero-container">
        {/* Content Overlay */}
        <div className="hero-content-wrapper">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Partners Badge */}
            <motion.div 
              className="hero-lab-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="hero-partners">
                <div className="lab-badge">The Dorrestein Laboratory</div>
                <div className="lab-separator">/</div>
                <div className="lab-badge">Siegel Lab Group</div>
              </div>
              <div className="lab-location">Joint research partners</div>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Charting the Undiscovered Metabolome
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              A breakthrough in reverse metabolomics that doubled our known molecular universe
            </motion.p>
            
            {/* Hero Stats */}
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              <div className="hero-stat">
                <span className="stat-number">60M+</span>
                <span className="stat-label">Spectra Matches</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">15K+</span>
                <span className="stat-label">New Molecules</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">3.4%</span>
                <span className="stat-label">to 6.8% Annotated</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="scroll-arrow" />
          <p>Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
