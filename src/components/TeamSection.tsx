import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  // Add any props you might need
}

const TeamSection: React.FC<TeamSectionProps> = () => {
  const teamMembers = [
    {
      name: "Prof. Pieter C. Dorrestein",
      role: "Principal Investigator",
      icon: "👤"
    },
    {
      name: "Prof. Siegel Dionicio",
      role: "Co-Investigator",
      icon: "👤"
    },
    {
      name: "Abubaker Patan, PhD",
      role: "Postdoc",
      icon: "👤",
      photo: "/images/dr-patan.jpeg"
    },
    {
      name: "Shipei Xing",
      role: "Postdoc",
      icon: "👤"
    },
    {
      name: "Vincent Lamoureux",
      role: "Postdoc",
      icon: "👤"
    },
    {
      name: "Julius Agongo",
      role: "Postdoc",
      icon: "👤"
    },
    {
      name: "Lab Members & Collaborators",
      role: "Global Research Network",
      icon: "👥"
    }
  ];

  const platforms = [
    "GNPS",
    "ReDU",
    "MassIVE",
    "MASST",
    "GNPS",
    "StructureMASST"
  ];

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="team" className="team-section">
      <div className="team-content">
        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          A Collaborative Effort
        </motion.h2>

        <motion.div
          className="team-description"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>This work would not be possible without a global collaborative ecosystem and the dedicated researchers charting the future of metabolomics.</p>
        </motion.div>

        {/* Research Team */}
        <motion.div
          className="team-members"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Research Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -8
                }}
              >
                <div className="member-photo">
                  <div className="photo-placeholder">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="member-photo-img"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          position: 'absolute',
                          top: 0,
                          left: 0
                        }}
                      />
                    ) : (
                      <span className="placeholder-icon">{member.icon}</span>
                    )}
                  </div>
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Group Photo */}
        <motion.div
          className="team-group-photo"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/img/team.jpeg"
            alt="Research team group photo"
            style={{ width: '100%', borderRadius: '12px', marginTop: '24px', cursor: 'zoom-in' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsLightboxOpen(true)}
          />
        </motion.div>

        {isLightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.img
              src="/img/team.jpeg"
              alt="Research team group photo large"
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '95%',
                maxHeight: '90vh',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                cursor: 'zoom-out'
              }}
            />
          </motion.div>
        )}

        {/* Platform Logos */}
        <div className="platform-logos">
          <motion.div
            className="logo-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="platform-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
              >
                {platform}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
