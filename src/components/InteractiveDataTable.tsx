import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReactionContext } from '../contexts/ReactionContext';
import reactionsData from '../data/reactions.json';

interface DataRow {
  id: string;
  formula: string;
  name: string;
  molecularWeight: number;
  meltingPoint: string;
  solubility: string;
  stability: string;
  storage: string;
  reactionType: string;
}

const InteractiveDataTable: React.FC = () => {
  const { selectedGroup, hoveredMolecule } = useReactionContext();
  const [sortField, setSortField] = useState<keyof DataRow>('molecularWeight');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  // Generate data from reactions
  const allData: DataRow[] = useMemo(() => {
    const data: DataRow[] = [];
    
    // Add central molecule
    data.push({
      id: 'central',
      formula: reactionsData.centralMolecule.formula,
      name: reactionsData.centralMolecule.name,
      molecularWeight: 408.6,
      meltingPoint: '185-187°C',
      solubility: 'Water, Ethanol',
      stability: 'Stable at RT',
      storage: '2-8°C, Dry',
      reactionType: 'Starting Material'
    });

    // Add all reaction products
    reactionsData.reactionGroups.forEach(group => {
      group.reactions.forEach((reaction, index) => {
        data.push({
          id: `${group.name}-${index}`,
          formula: reaction.formula,
          name: reaction.productName,
          molecularWeight: 400 + (index * 50), // Consistent values based on index
          meltingPoint: `${150 + (index * 10)}-${200 + (index * 15)}°C`,
          solubility: ['Water', 'Ethanol', 'DMSO', 'Acetone'][index % 4],
          stability: ['Stable at RT', 'Refrigerate', 'Freeze'][index % 3],
          storage: ['2-8°C, Dry', 'Room Temperature', '-20°C'][index % 3],
          reactionType: group.name
        });
      });
    });

    return data;
  }, []);

  // Filter data based on selected group
  const filteredData = useMemo(() => {
    let filtered = allData;
    
    if (selectedGroup) {
      filtered = allData.filter(item => item.reactionType === selectedGroup);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.reactionType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [allData, selectedGroup, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });
  }, [filteredData, sortField, sortDirection]);

  const handleSort = (field: keyof DataRow) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: keyof DataRow) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="interactive-data-table">

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th 
                className="sortable"
                onClick={() => handleSort('name')}
                title="Compound name"
              >
                <span>Compound</span>
                {getSortIcon('name')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('formula')}
                title="Chemical formula"
              >
                <span>Formula</span>
                {getSortIcon('formula')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('molecularWeight')}
                title="Molecular weight (g/mol)"
              >
                <span>MW (g/mol)</span>
                {getSortIcon('molecularWeight')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('meltingPoint')}
                title="Melting point (°C)"
              >
                <span>M.P. (°C)</span>
                {getSortIcon('meltingPoint')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('solubility')}
                title="Solubility"
              >
                <span>Solubility</span>
                {getSortIcon('solubility')}
              </th>
              <th 
                className="sortable"
                onClick={() => handleSort('reactionType')}
                title="Reaction type"
              >
                <span>Type</span>
                {getSortIcon('reactionType')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => {
              const isHovered = hoveredMolecule === row.formula;
              const isHighlighted = selectedGroup === row.reactionType;
              
              return (
                <tr
                  key={row.id}
                  className={`data-row ${isHovered ? 'hovered' : ''} ${isHighlighted ? 'highlighted' : ''}`}
                >
                  <td className="molecule-name">
                    <span className="molecule-title">{row.name}</span>
                  </td>
                  <td className="molecule-formula">
                    <code className="formula-code">{row.formula}</code>
                  </td>
                  <td className="molecular-weight">
                    <span className="weight-value">{row.molecularWeight}</span>
                  </td>
                  <td className="melting-point">
                    <span className="temp-value">{row.meltingPoint}</span>
                  </td>
                  <td className="solubility">
                    <span className="solubility-text">{row.solubility}</span>
                  </td>
                  <td className="reaction-type">
                    <span className="reaction-badge">{row.reactionType}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {sortedData.length === 0 && (
        <div className="no-results">
          <p>No molecules found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveDataTable;
