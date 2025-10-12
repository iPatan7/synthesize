import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: "UC San Diego Skaggs School of Pharmacy and Pharmaceutical Sciences",
      logo: process.env.PUBLIC_URL + "/img/skaggs.png",
      description: "Leading institution in pharmaceutical research and education",
      website: "https://pharmacy.ucsd.edu/"
    },
    {
      name: "The Dorrestein Laboratory",
      logo: process.env.PUBLIC_URL + "/img/lab.png", 
      description: "Pioneering metabolomics and mass spectrometry research",
      website: "https://dorresteinlab.ucsd.edu/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section className="partners-section">
      <div className="partners-container">
        <motion.div 
          className="partners-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="partners-title">Our Partners</h2>
          <p className="partners-subtitle">
            Collaborating with leading institutions to advance metabolomics research
          </p>
        </motion.div>

        <motion.div 
          className="partners-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="partner-card"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="partner-logo-container">
                <img 
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="partner-logo"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="partner-logo-fallback" style={{ display: 'none' }}>
                  <span className="partner-fallback-text">
                    {partner.name.split(' ')[0]}
                  </span>
                </div>
              </div>
              
              <div className="partner-content">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
                
                <motion.a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="partner-link-icon"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="partners-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="partners-footer-text">
            These partnerships enable groundbreaking research in metabolomics and mass spectrometry
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
