import React from 'react';
import './ResearchImpactSection.css';

const ResearchImpactSection: React.FC = () => {
    const impactStats = [
        {
            number: "492,376",
            label: "MS/MS Spectra Synthesized",
            description: "Complete spectral library with molecular structure annotations",
            icon: "📊"
        },
        {
            number: "172,483",
            label: "Candidate Compounds",
            description: "Unique molecular structures across diverse chemical classes",
            icon: "🧬"
        },
        {
            number: "91%",
            label: "Unique Chemical Space",
            description: "Novel structures not present in any major database",
            icon: "✨"
        },
        {
            number: "60,146,352",
            label: "Spectral Matches",
            description: "Matches across public metabolomics repositories",
            icon: "🔍"
        },
        {
            number: "17.4%",
            label: "Annotation Growth",
            description: "Increase in global metabolomics annotations",
            icon: "📈"
        },
        {
            number: "15,190",
            label: "Distinct Structures Found",
            description: "Confirmed molecular discoveries in real samples",
            icon: "🎯"
        }
    ];

    return (
        <section id="research-impact" className="paradigm-section">
            {/* Scientific background like TransitionSection */}
            <div className="paradigm-background">
                <div className="scientific-grid" />
            </div>

            <div className="paradigm-content">
                <div className="paradigm-header">
                    <h2 className="paradigm-title">
                        Revolutionary Research Impact: <span className="highlight">Transforming Metabolomics</span>
                    </h2>

                    <p className="paradigm-question">
                        What happens when you create the largest single contribution to metabolomics annotation?
                    </p>
                </div>

                <div className="paradigm-stats">
                    <div className="stat-grid">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                                <p className="stat-description">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="paradigm-conclusion">
                    <p className="conclusion-text">
                        This research doubled the known chemical space and enabled discoveries across <strong>human health</strong>, <strong>microbiology</strong>, and <strong>environmental science</strong> - representing the largest single leap forward in metabolomics annotation history.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ResearchImpactSection;
