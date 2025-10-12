import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './DrPatanProfile.css';

const DrPatanProfile = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const employment = [
    {
      organization: "University of California, San Diego",
      location: "San Diego, US",
      position: "PostDoc (Chemistry)",
      period: "2024-02-10 to present",
      description: "Postdoctoral research in metabolomics and mass spectrometry"
    }
  ];

  const education = [
    {
      institution: "Istanbul University",
      location: "Istanbul, TR",
      degree: "PhD (Organic Chemistry)",
      period: "2015-09-01 to 2019-06-27",
      description: "Doctoral research in organic chemistry and synthesis"
    }
  ];

  const publications = [
    {
      title: "A guide to reverse metabolomics—a framework for big data discovery strategy",
      journal: "Nature Protocols",
      year: "2025-10",
      doi: "10.1038/s41596-024-01136-2",
      type: "Journal Article",
      contributors: "Vincent Charron-Lamoureux; Helena Mannochio-Russo; Santosh Lamichhane; Shipei Xing; Abubaker Patan; Paulo Wender Portal Gomes; Prajit Rajkumar; Victoria Deleray; Andrés Mauricio Caraballo-Rodríguez; Kee Voon Chua et al.",
      impact: "High Impact"
    },
    {
      title: "Environmental and Maternal Imprints on Infant Gut Metabolic Programming",
      journal: "Preprint",
      year: "2025-07-24",
      doi: "10.1101/2025.07.24.666662",
      type: "Preprint",
      contributors: "Kine Eide Kvitne; Celeste Allaband; Jennifer C. Onuora; Daniela Perry; Simone Zuffa; Lucas Patel; Vincent Charron-Lamoureux; Ipsita Mohanty; Kristija Sejane; Abubaker Patan et al.",
      impact: "Emerging"
    },
    {
      title: "A Multi-Organ Murine Metabolomics Atlas Reveals Molecular Dysregulations in Alzheimer's Disease",
      journal: "Preprint",
      year: "2025-04-28",
      doi: "10.1101/2025.04.28.651123",
      type: "Preprint",
      contributors: "Simone Zuffa; Celeste Allaband; Vincent Charron-Lamoureux; Andres M. Caraballo-Rodriguez; Abubaker Patan; Ipsita Mohanty; Julius Agongo; John W. Bostick; T. Jaymie Connerly; Taren Thron et al.",
      impact: "Emerging"
    },
    {
      title: "MS/MS Mass Spectrometry Filtering Tree for Bile Acid Isomer Annotation",
      journal: "Preprint",
      year: "2025-03-11",
      doi: "10.1101/2025.03.04.641505",
      type: "Preprint",
      contributors: "Ipsita Mohanty; Shipei Xing; Vanessa Castillo; Julius Agongo; Abubaker Patan; Yasin El Abiead; Helena Mannochio-Russo; Simone Zuffa; Jasmine Zemlin; Alexandre Tronel et al.",
      impact: "Emerging"
    },
    {
      title: "Recent Applications and Evaluation of Metal Nanoparticle–Polymer Hybrids as Chronic Wound Dressings",
      journal: "Journal of Nanomaterials",
      year: "2024-01-08",
      doi: "10.1155/2024/3280349",
      type: "Journal Article",
      contributors: "Mohammad Tahir Aminzai; Abubaker Patan; Thangjam Ibomcha Singh",
      impact: "Medium Impact"
    },
    {
      title: "Reactions of 2,3-dichloro-1,4-naphthoquinone with piperidine, amine and some thiol nucleophile",
      journal: "Phosphorus, Sulfur and Silicon and the Related Elements",
      year: "2021",
      doi: "10.1080/10426507.2021.1901700",
      type: "Journal Article",
      contributors: "Patan, A.; Göksel, F.S.; Sahinler Ayla, S.",
      impact: "Medium Impact"
    }
  ];

  const conferences = [
    {
      title: "Synthesis and characterization of new N-and N-, S-, substituted 1,4-Naphthoquinones",
      event: "1st International Symposium on Graduate Research in Science Focus on Entrepreneurship and Innovation",
      year: "2018-09-04",
      type: "Conference Poster"
    },
    {
      title: "Yeni N-, ve N,S- Sübstitüe 1,4-Naftokinon Bileşiklerinin Sentezi",
      event: "Uluslararası Katılımlı 6. İlaç Kimyası: İlaç Etken Maddesi Tasarımı, Sentezi, Üretimi ve Standardizasyonu Kongresi",
      year: "2018-03-22",
      type: "Conference Abstract"
    },
    {
      title: "Mezogözenekli Silika Partiküllerin Hazırlanması ve Kontrollü Salım Sistemlerinde Uygulanması",
      event: "III.Ulusal Organik Kimya Kongresi",
      year: "2016-05-09",
      type: "Conference Abstract"
    }
  ];

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

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High Impact': return '#00d4ff';
      case 'Medium Impact': return '#00ff88';
      case 'Emerging': return '#ffa726';
      default: return '#cccccc';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Journal Article': return '📄';
      case 'Preprint': return '📝';
      case 'Conference Poster': return '📊';
      case 'Conference Abstract': return '📋';
      default: return '📄';
    }
  };

  return (
    <div ref={ref} id="profile" className="dr-patan-profile">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div className="profile-header" variants={itemVariants}>
          <div className="profile-photo">
            <div className="photo-placeholder">👨‍🔬</div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">Dr. Abubaker Patan, Ph.D.</h1>
            <p className="profile-title">Postdoctoral Researcher</p>
            <p className="profile-institution">University of California, San Diego</p>
            <div className="profile-links">
              <a 
                href="#profile"
                className="profile-link profile-page-link"
              >
                <span className="link-icon">👨‍🔬</span>
                View Full Profile
              </a>
              <a 
                href="https://orcid.org/0000-0003-1415-7829"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link orcid-link"
              >
                <span className="link-icon">🔬</span>
                ORCID Profile
              </a>
            </div>
          </div>
        </motion.div>

        {/* Employment Section */}
        <motion.section className="profile-section" variants={itemVariants}>
          <h2 className="section-title">Employment</h2>
          <div className="timeline">
            {employment.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{job.position}</h3>
                  <p className="timeline-organization">{job.organization}</p>
                  <p className="timeline-location">{job.location}</p>
                  <p className="timeline-period">{job.period}</p>
                  <p className="timeline-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section className="profile-section" variants={itemVariants}>
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <p className="timeline-organization">{edu.institution}</p>
                  <p className="timeline-location">{edu.location}</p>
                  <p className="timeline-period">{edu.period}</p>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Publications Section */}
        <motion.section className="profile-section" variants={itemVariants}>
          <h2 className="section-title">Recent Publications</h2>
          <div className="publications-list">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="publication-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="publication-header">
                  <div className="publication-type">
                    <span className="type-icon">{getTypeIcon(pub.type)}</span>
                    <span className="type-label">{pub.type}</span>
                  </div>
                  <div className="publication-impact">
                    <span 
                      className="impact-badge"
                      style={{ color: getImpactColor(pub.impact) }}
                    >
                      {pub.impact}
                    </span>
                  </div>
                </div>
                
                <h3 className="publication-title">{pub.title}</h3>
                
                <div className="publication-meta">
                  <p className="publication-journal">{pub.journal} • {pub.year}</p>
                  <p className="publication-contributors">{pub.contributors}</p>
                </div>
                
                <div className="publication-actions">
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doi-link"
                  >
                    View DOI →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Conferences Section */}
        <motion.section className="profile-section" variants={itemVariants}>
          <h2 className="section-title">Conference Presentations</h2>
          <div className="conferences-list">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                className="conference-item"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="conference-header">
                  <span className="conference-type">{conf.type}</span>
                  <span className="conference-year">{conf.year}</span>
                </div>
                <h3 className="conference-title">{conf.title}</h3>
                <p className="conference-event">{conf.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Focus Section */}
        <motion.section className="profile-section" variants={itemVariants}>
          <h2 className="section-title">Research Focus</h2>
          <div className="research-focus">
            <div className="focus-item">
              <span className="focus-icon">🧬</span>
              <div className="focus-content">
                <h3>Metabolomics</h3>
                <p>Advanced mass spectrometry techniques for metabolite identification and characterization</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-icon">⚗️</span>
              <div className="focus-content">
                <h3>Organic Chemistry</h3>
                <p>Synthesis and characterization of novel organic compounds and materials</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-icon">🔬</span>
              <div className="focus-content">
                <h3>Reverse Metabolomics</h3>
                <p>Big data discovery strategies for unknown metabolite identification</p>
              </div>
            </div>
            <div className="focus-item">
              <span className="focus-icon">💊</span>
              <div className="focus-content">
                <h3>Drug Discovery</h3>
                <p>Pharmaceutical applications and drug delivery systems</p>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default DrPatanProfile;
