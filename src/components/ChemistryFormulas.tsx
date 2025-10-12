import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import reactionsData from '../data/reactions.json';
import { useReactionContext } from '../contexts/ReactionContext';
import InteractiveDataTable from './InteractiveDataTable';

interface ChemistryFormulasProps {
  className?: string;
}

const ChemistryFormulas: React.FC<ChemistryFormulasProps> = ({ className = '' }) => {
  const { 
    selectedGroup, 
    hoveredGroup, 
    selectedMolecule, 
    hoveredMolecule,
    setSelectedGroup, 
    setHoveredGroup, 
    setSelectedMolecule, 
    setHoveredMolecule 
  } = useReactionContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Get formulas based on selected group or show central molecule
  const getDisplayFormulas = () => {
    if (selectedGroup) {
      const group = reactionsData.reactionGroups.find(g => g.name === selectedGroup);
      return group ? group.reactions.map(r => r.formula) : [reactionsData.centralMolecule.formula];
    }
    return [reactionsData.centralMolecule.formula];
  };

  const formulas = getDisplayFormulas();

  return (
    <div className={`chemistry-formulas-container ${className}`}>
      <motion.div 
        className="chemistry-formulas"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >


      </motion.div>
    </div>
  );
};

export default ChemistryFormulas;
