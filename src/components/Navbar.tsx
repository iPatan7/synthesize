import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  scrollProgress: number;
  onThemeToggle?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, scrollProgress, onThemeToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Team', href: '#team' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo Section */}
          <div className="navbar-logo-section">
            <a href="#home" className="navbar-logo-link">
              <div className="navbar-logo-icon">
                <img 
                  src="/img/logo.png" 
                  alt="UCSD Logo" 
                  className="navbar-logo-image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div className="navbar-logo-fallback" style={{ display: 'none' }}>
                  <span className="navbar-logo-text">UCSD</span>
                </div>
              </div>
              <div className="navbar-brand-text">
                <span className="navbar-brand">
                  The Dorrestein Laboratory
                </span>
                <span className="navbar-brand-accent">
                  UCSD
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="navbar-link"
              >
                {item.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={onThemeToggle}
              className="navbar-theme-toggle"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="navbar-theme-icon"
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {isDark ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </motion.div>
              <motion.span
                className="navbar-theme-text"
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isDark ? 'Light' : 'Dark'}
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={toggleMobileMenu}
              className="navbar-mobile-button"
            >
              <svg className="navbar-mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="navbar-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={() => {
                onThemeToggle?.();
                setIsMobileMenuOpen(false);
              }}
              className="navbar-mobile-theme-toggle"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="navbar-mobile-theme-icon"
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {isDark ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </motion.div>
              <span className="navbar-mobile-theme-text">
                Switch to {isDark ? 'Light' : 'Dark'} Theme
              </span>
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
