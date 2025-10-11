import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  // Add any props you might need
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>The Dorrestein Laboratory</h3>
          <p>UC San Diego</p>
          <p>Charting the Undiscovered Metabolome</p>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4>Research</h4>
          <ul>
            <li><a href="#team">Team</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#data">Data</a></li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Platforms</h4>
          <ul>
            <li><a href="https://gnps.ucsd.edu" target="_blank" rel="noopener noreferrer">GNPS</a></li>
            <li><a href="https://redu.ucsd.edu" target="_blank" rel="noopener noreferrer">ReDU</a></li>
            <li><a href="https://massive.ucsd.edu" target="_blank" rel="noopener noreferrer">MassIVE</a></li>
            <li><a href="https://masst.ucsd.edu" target="_blank" rel="noopener noreferrer">MASST</a></li>
          </ul>
        </motion.div>
        
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4>Contact</h4>
          <p>University of California, San Diego</p>
          <p>La Jolla, CA 92093</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2024 The Dorrestein Laboratory. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
