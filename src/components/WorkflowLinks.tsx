import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './WorkflowLinks.css';

const WorkflowLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const workflowCategories = [
    {
      title: "Data Management",
      icon: "📊",
      links: [
        {
          name: "Main Dataset",
          description: "Primary metabolomics dataset",
          url: "https://docs.google.com/spreadsheets/d/1qsVwOTojlyM5Ry7ZhA3anXMRfllIuHGHncjWLxphUlY/edit?gid=0#gid=0",
          type: "spreadsheet"
        },
        {
          name: "Analysis Results",
          description: "Processed analysis data",
          url: "https://docs.google.com/spreadsheets/d/1c5OyhvqI8z0tHc2B9QB_AaG2_L53AeQhx1GHA4r1dGY/edit?gid=0#gid=0",
          type: "spreadsheet"
        },
        {
          name: "Reference Library",
          description: "Spectral reference database",
          url: "https://docs.google.com/spreadsheets/u/0/d/1eHFmddA-L81CJLHjyHEbpBzWiduK_3Tof9ymvocMNwY/htmlview",
          type: "spreadsheet"
        }
      ]
    },
    {
      title: "GNPS Workflows",
      icon: "🔬",
      links: [
        {
          name: "GNPS2 Homepage",
          description: "Next-generation metabolomics platform",
          url: "https://gnps2.org/homepage",
          type: "platform"
        },
        {
          name: "Reverse Metabolomics Workflow",
          description: "Create library workflow",
          url: "https://gnps2.org/workflowinput?workflowname=reverse_metabolomics_create_library_workflow&task=5520b24107ef41e0ae15413024eb6183",
          type: "workflow"
        },
        {
          name: "MassIVE Login",
          description: "Mass spectrometry data repository",
          url: "https://massive.ucsd.edu/ProteoSAFe/user/login.jsp",
          type: "platform"
        },
        {
          name: "GNPS1 Login",
          description: "Classic GNPS platform",
          url: "https://gnps.ucsd.edu/ProteoSAFe/user/login.jsp",
          type: "platform"
        }
      ]
    },
    {
      title: "Analysis Tools",
      icon: "⚗️",
      links: [
        {
          name: "Metabolomics USI",
          description: "Universal Spectrum Identifier viewer",
          url: "https://metabolomics-usi.gnps2.org/dashinterface/?usi1=mzspec%3AMassIVE%3ATASK-0a1395fcada2483d8cae6291bb293a16-spec%2Fspec-00000.mgf%3Ascan%3A1&width=10.0&height=6.0&mz_min=None&mz_max=None&max_intensity=125&annotate_precision=4&annotation_rotation=90&cosine=standard&fragment_mz_tolerance=0.1&grid=False&annotate_peaks=%5B%5B89.06027221679688%2C%20133.08587646484375%2C%20177.1122589111328%2C%20327.1997375488281%5D%2C%20%5B%5D%5D",
          type: "tool"
        },
        {
          name: "Auto Smile",
          description: "Automated SMILES structure generation",
          url: "https://autosmiles.streamlit.app/",
          type: "tool"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'spreadsheet': return '📊';
      case 'platform': return '🌐';
      case 'workflow': return '⚙️';
      case 'tool': return '🔧';
      case 'publication': return '📄';
      default: return '🔗';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'spreadsheet': return '#00d4ff';
      case 'platform': return '#00ff88';
      case 'workflow': return '#ff6b6b';
      case 'tool': return '#ffa726';
      case 'publication': return '#ab47bc';
      default: return '#ffffff';
    }
  };

  return (
    <div ref={ref} id="workflow" className="workflow-links">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="main-title"
          variants={categoryVariants}
        >
          Research Workflow & Resources
        </motion.h2>
        
        <motion.p
          className="subtitle"
          variants={categoryVariants}
        >
          Access our data management tools, analysis workflows, and research publications
        </motion.p>

        <motion.div
          className="navigation-links"
          variants={categoryVariants}
        >
          <a href="#research" className="nav-link research-link">
            <span className="nav-icon">🔬</span>
            <span className="nav-text">View Research</span>
          </a>
          <a href="#publications" className="nav-link publications-link">
            <span className="nav-icon">📚</span>
            <span className="nav-text">View Publications</span>
          </a>
          <a href="#workflow" className="nav-link workflow-link">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Data Management</span>
          </a>
        </motion.div>

        <div className="categories-grid">
          {workflowCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="category-card"
              variants={categoryVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="links-container">
                {category.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`workflow-link ${link.type}`}
                    variants={linkVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 10px 30px ${getTypeColor(link.type)}40`
                    }}
                  >
                    <div className="link-header">
                      <div className="link-type-icon">
                        {getTypeIcon(link.type)}
                      </div>
                      <div className="link-name">{link.name}</div>
                    </div>
                    <div className="link-description">{link.description}</div>
                    <div className="link-arrow">→</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="footer-note"
          variants={categoryVariants}
        >
          <p>
            🔬 All tools and resources are actively maintained and updated for the latest metabolomics research standards.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkflowLinks;
