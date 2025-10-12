import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReactionContextType {
  selectedGroup: string | null;
  hoveredGroup: string | null;
  selectedMolecule: string | null;
  hoveredMolecule: string | null;
  setSelectedGroup: (group: string | null) => void;
  setHoveredGroup: (group: string | null) => void;
  setSelectedMolecule: (molecule: string | null) => void;
  setHoveredMolecule: (molecule: string | null) => void;
  clearSelections: () => void;
}

const ReactionContext = createContext<ReactionContextType | undefined>(undefined);

interface ReactionProviderProps {
  children: ReactNode;
}

export const ReactionProvider: React.FC<ReactionProviderProps> = ({ children }) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [selectedMolecule, setSelectedMolecule] = useState<string | null>(null);
  const [hoveredMolecule, setHoveredMolecule] = useState<string | null>(null);

  const clearSelections = () => {
    setSelectedGroup(null);
    setHoveredGroup(null);
    setSelectedMolecule(null);
    setHoveredMolecule(null);
  };

  return (
    <ReactionContext.Provider
      value={{
        selectedGroup,
        hoveredGroup,
        selectedMolecule,
        hoveredMolecule,
        setSelectedGroup,
        setHoveredGroup,
        setSelectedMolecule,
        setHoveredMolecule,
        clearSelections,
      }}
    >
      {children}
    </ReactionContext.Provider>
  );
};

export const useReactionContext = () => {
  const context = useContext(ReactionContext);
  if (context === undefined) {
    throw new Error('useReactionContext must be used within a ReactionProvider');
  }
  return context;
};

