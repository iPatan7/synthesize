import React from 'react';
import { motion } from 'framer-motion';

interface TeamSectionProps {
  // Add any props you might need
}

const TeamSection: React.FC<TeamSectionProps> = () => {
  const teamMembers = [
    {
      name: "Abubaker Patan, Ph.D.",
      role: "Research Presenter",
      icon: "👤"
    },
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
      name: "Shipei Xing",
      role: "Research Scientist",
      icon: "👤"
    },
    {
      name: "Vincent Lamoureux",
      role: "Research Scientist",
      icon: "👤"
    },
    {
      name: "Helena Mannochio Russo",
      role: "Research Scientist",
      icon: "👤"
    },
    {
      name: "Lab Members & Collaborators",
      role: "Global Research Network",
      icon: "👥"
    }
  ];

  const platforms = ["GNPS", "ReDU", "MassIVE", "MASST", "GNPS", "ReDU"];

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
                    <span className="placeholder-icon">{member.icon}</span>
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
