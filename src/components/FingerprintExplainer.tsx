import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './FingerprintExplainer.css';

const FingerprintExplainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentExample, setCurrentExample] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  const examples = [
    { name: 'Serotonin', color: '#00d4ff' },
    { name: 'Dopamine', color: '#00ff88' },
    { name: 'Cholic Acid', color: '#ff6b6b' },
    { name: 'Caffeine', color: '#ffd93d' },
    { name: 'Aspirin', color: '#6bcf7f' },
    { name: 'Glucose', color: '#ff9ff3' }
  ];

  const generateFingerprint = () => {
    const bars = [];
    for (let i = 0; i < 15; i++) {
      bars.push({
        height: Math.random() * 100,
        delay: i * 0.1
      });
    }
    return bars;
  };

  const [unknownFingerprint, setUnknownFingerprint] = useState(generateFingerprint());

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
      setCurrentStep(1);
      
      const timer1 = setTimeout(() => setCurrentStep(2), 1000);
      const timer2 = setTimeout(() => setCurrentStep(3), 2000);
      const timer3 = setTimeout(() => setCurrentStep(4), 3000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isInView, controls]);

  // Start animation immediately when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start('visible');
      setCurrentStep(1);
    }, 100);
    return () => clearTimeout(timer);
  }, [controls]);

  useEffect(() => {
    if (currentStep >= 4) {
      const exampleTimer = setInterval(() => {
        setCurrentExample((prev) => (prev + 1) % examples.length);
        setUnknownFingerprint(generateFingerprint());
      }, 3000);
      return () => clearInterval(exampleTimer);
    }
  }, [currentStep, examples.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      ref={ref}
      className="fingerprint-explainer"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="demo-container">
        {/* Step 1: Unknown Sample */}
        <motion.div 
          className={`step step-1 ${currentStep >= 1 ? 'active' : ''}`}
          variants={itemVariants}
        >
          <div className="molecule-container">
            <div className="molecule unknown-molecule">
              <div className="molecule-structure">
                <div className="atom">?</div>
                <div className="bonds">
                  <div className="bond"></div>
                  <div className="bond"></div>
                  <div className="bond"></div>
                </div>
              </div>
              <div className="molecule-label">Unknown Sample</div>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Generate Fingerprint */}
        <motion.div 
          className={`step step-2 ${currentStep >= 2 ? 'active' : ''}`}
          variants={itemVariants}
        >
          <div className="fingerprint-container">
            <h3>MS/MS Spectrum</h3>
            <div className="fingerprint-bars">
              {unknownFingerprint.map((bar, index) => (
                <motion.div
                  key={index}
                  className="fingerprint-bar"
                  style={{
                    height: `${bar.height}%`,
                    backgroundColor: examples[currentExample].color
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.height}%` }}
                  transition={{ 
                    duration: 0.8, 
                    delay: bar.delay,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Step 3: Search Database */}
        <motion.div 
          className={`step step-3 ${currentStep >= 3 ? 'active' : ''}`}
          variants={itemVariants}
        >
          <div className="search-container">
            <h3>Database Search</h3>
            <div className="search-animation">
              <div className="search-icon">🔍</div>
              <div className="search-progress">
                <div className="progress-bar"></div>
              </div>
              <div className="search-text">Searching 10,000+ compounds...</div>
            </div>
          </div>
        </motion.div>

        {/* Step 4: Match Found */}
        <motion.div 
          className={`step step-4 ${currentStep >= 4 ? 'active' : ''}`}
          variants={itemVariants}
        >
          <div className="match-container">
            <h3>Match Found!</h3>
            <div className="matched-compound" key={currentExample}>
              <div className="molecule known-molecule">
                <div className="molecule-structure">
                  <div className="atom">{examples[currentExample].name.charAt(0)}</div>
                  <div className="bonds">
                    <div className="bond"></div>
                    <div className="bond"></div>
                    <div className="bond"></div>
                  </div>
                </div>
                <div className="molecule-label">{examples[currentExample].name}</div>
              </div>
              <div className="match-score">
                <div className="score-value">98.7%</div>
                <div className="score-label">Confidence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="explanation"
        variants={itemVariants}
      >
        <h2>Chemical Fingerprint Identification</h2>
        <p>
          MS/MS spectral libraries enable rapid identification of unknown compounds 
          by matching their unique fragmentation patterns against reference databases.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default FingerprintExplainer;