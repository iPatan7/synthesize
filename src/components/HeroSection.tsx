// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for the container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Adds a delay between each child animating in
      delayChildren: 0.5,   // Waits half a second before starting
    },
  },
};

// Animation variants for the text elements (headline, subtitle)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        src="/videos/metabolome-intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => console.log('Video loaded successfully')}
        onError={(e) => console.error('Video error:', e)}
        onLoadStart={() => console.log('Video loading started')}
      />
      <div className="hero-content-wrapper">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
                 <motion.div variants={itemVariants} className="hero-lab-info">
                   <div className="lab-badge">The Dorrestein Laboratory</div>
                   <div className="lab-location">UC San Diego</div>
                 </motion.div>
                 <motion.h1 variants={itemVariants}>
                   Charting the Undiscovered Metabolome
                 </motion.h1>
                 <motion.p variants={itemVariants} className="hero-subtitle">
                   From the unknown to the known. Unveiling the chemical language that shapes our world.
                 </motion.p>
                 <motion.div variants={itemVariants} className="hero-stats">
                   <div className="hero-stat">
                     <span className="stat-number">1.75B</span>
                     <span className="stat-label">Mass Spectra</span>
                   </div>
                   <div className="hero-stat">
                     <span className="stat-number">96.6%</span>
                     <span className="stat-label">Unannotated</span>
                   </div>
                   <div className="hero-stat">
                     <span className="stat-number">15K+</span>
                     <span className="stat-label">Molecules Found</span>
                   </div>
                 </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
