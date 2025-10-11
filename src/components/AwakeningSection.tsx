import React from 'react';
import { motion } from 'framer-motion';

interface AwakeningSectionProps {
  // Add any props you might need
}

const AwakeningSection: React.FC<AwakeningSectionProps> = () => {
  return (
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
            viewport={{ once: true }}
          >
            Bringing the Dark Metabolome to Light
          </motion.h2>

          <motion.div
            className="section-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
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
  );
};

export default AwakeningSection;
