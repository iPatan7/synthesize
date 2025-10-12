import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import reactionsData from '../data/reactions.json';

interface Reaction {
  productName: string;
  reagents: string;
  formula: string;
}

interface ReactionGroup {
  name: string;
  color: string;
  description: string;
  reactions: Reaction[];
}

interface ReactionWheelProps {
  className?: string;
}

const ReactionWheel: React.FC<ReactionWheelProps> = ({ className = '' }) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [hoveredReaction, setHoveredReaction] = useState<Reaction | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const { centralMolecule, reactionGroups } = reactionsData;
  const totalGroups = reactionGroups.length;
  const angleStep = 360 / totalGroups;

  const getGroupPosition = (index: number) => {
    const angle = (index * angleStep) * (Math.PI / 180);
    const radius = 320; // Position groups at the edge of the 800px wheel (400px radius - 80px group size)
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle: index * angleStep
    };
  };

  const getReactionPosition = (groupIndex: number, reactionIndex: number, totalReactions: number) => {
    const groupPos = getGroupPosition(groupIndex);
    const spread = 60; // Increased spread for better visibility
    const offset = (reactionIndex - (totalReactions - 1) / 2) * (spread / totalReactions);
    
    return {
      x: groupPos.x + Math.cos((groupPos.angle + offset) * Math.PI / 180) * 120, // Increased distance from groups
      y: groupPos.y + Math.sin((groupPos.angle + offset) * Math.PI / 180) * 120
    };
  };

  return (
    <div className={`reaction-wheel-container ${className}`}>
      <motion.div 
        className="reaction-wheel"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Central Molecule */}
        <motion.div 
          className="central-molecule"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="molecule-structure">
            <div className="molecule-name">{centralMolecule.name}</div>
            <div className="molecule-formula">{centralMolecule.formula}</div>
            <div className="molecule-description">{centralMolecule.description}</div>
          </div>
        </motion.div>

        {/* Reaction Groups */}
        {reactionGroups.map((group: ReactionGroup, groupIndex: number) => {
          const position = getGroupPosition(groupIndex);
          const isSelected = selectedGroup === group.name;
          
          return (
            <motion.div
              key={group.name}
              className={`reaction-group ${isSelected ? 'selected' : ''}`}
              style={{
                '--group-color': group.color,
                left: `calc(50% + ${position.x}px)`,
                top: `calc(50% + ${position.y}px)`,
                transform: 'translate(-50%, -50%)'
              } as React.CSSProperties}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + groupIndex * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.3,
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGroup(isSelected ? null : group.name)}
            >
              <div className="group-label">{group.name}</div>
              <div className="group-dot" />
              <div className="group-glow" />
            </motion.div>
          );
        })}

        {/* Connection Lines */}
        <svg className="connection-lines" viewBox="0 0 800 800">
          {reactionGroups.map((group: ReactionGroup, groupIndex: number) => {
            const position = getGroupPosition(groupIndex);
            const isSelected = selectedGroup === group.name;
            
            return (
              <motion.line
                key={`line-${groupIndex}`}
                x1="400"
                y1="400"
                x2={400 + position.x}
                y2={400 + position.y}
                stroke={group.color}
                strokeWidth={isSelected ? 4 : 2}
                opacity={isSelected ? 1 : 0.4}
                strokeDasharray={isSelected ? "0" : "5,5"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: isSelected ? 1 : 0.4,
                  strokeWidth: isSelected ? 4 : 2
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 1.2 + groupIndex * 0.03,
                  type: "spring",
                  stiffness: 50
                }}
              />
            );
          })}
        </svg>

        {/* Product Molecules */}
        <AnimatePresence>
          {selectedGroup && reactionGroups
            .find(group => group.name === selectedGroup)
            ?.reactions.map((reaction: Reaction, reactionIndex: number) => {
              const groupIndex = reactionGroups.findIndex(g => g.name === selectedGroup);
              const position = getReactionPosition(groupIndex, reactionIndex, 
                reactionGroups[groupIndex].reactions.length);
              
              return (
                <motion.div
                  key={reaction.productName}
                  className="product-molecule"
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    top: `calc(50% + ${position.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0, 
                    rotate: 90,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: reactionIndex * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.4,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredReaction(reaction)}
                  onMouseLeave={() => setHoveredReaction(null)}
                >
                  <div className="product-dot" />
                  <div className="product-formula">{reaction.formula}</div>
                  <div className="product-glow" />
                </motion.div>
              );
            })}
        </AnimatePresence>

        {/* Product Connection Lines */}
        <AnimatePresence>
          {selectedGroup && (
            <svg className="product-lines" viewBox="0 0 800 800">
              {reactionGroups
                .find(group => group.name === selectedGroup)
                ?.reactions.map((reaction: Reaction, reactionIndex: number) => {
                  const groupIndex = reactionGroups.findIndex(g => g.name === selectedGroup);
                  const groupPos = getGroupPosition(groupIndex);
                  const productPos = getReactionPosition(groupIndex, reactionIndex, 
                    reactionGroups[groupIndex].reactions.length);
                  
                  return (
                    <motion.line
                      key={`product-line-${reactionIndex}`}
                      x1={400 + groupPos.x}
                      y1={400 + groupPos.y}
                      x2={400 + productPos.x}
                      y2={400 + productPos.y}
                      stroke={reactionGroups[groupIndex].color}
                      strokeWidth="2"
                      opacity="0.6"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ pathLength: 0 }}
                      transition={{ duration: 0.6, delay: reactionIndex * 0.1 }}
                    />
                  );
                })}
            </svg>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredReaction && (
          <motion.div
            className="reaction-tooltip"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="tooltip-title">{hoveredReaction.productName}</div>
            <div className="tooltip-reagents">{hoveredReaction.reagents}</div>
            <div className="tooltip-formula">{hoveredReaction.formula}</div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ReactionWheel;
