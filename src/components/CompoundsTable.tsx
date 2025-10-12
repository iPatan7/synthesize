import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compound } from '../types/Compound';
import compoundsData from '../data/compounds.json';

interface CompoundsTableProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const CompoundsTable: React.FC<CompoundsTableProps> = ({ isExpanded, onToggle }) => {
  const [sortField, setSortField] = useState<keyof Compound>('compound_name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const compounds: Compound[] = compoundsData.compounds;

  // Filter and sort compounds
  const filteredAndSortedCompounds = useMemo(() => {
    let filtered = compounds.filter(compound =>
      compound.compound_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      compound.smiles.toLowerCase().includes(searchTerm.toLowerCase()) ||
      compound.solvent.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
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
  }, [compounds, searchTerm, sortField, sortDirection]);

  const handleSort = (field: keyof Compound) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: keyof Compound) => {
    if (sortField !== field) return '↕️';
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  return (
    <motion.div 
      className="compounds-table-container"
      initial={false}
      animate={{ height: isExpanded ? 'auto' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{ overflow: 'hidden' }}
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="compounds-table-content"
          >
            {/* Search and Controls */}
            <div className="compounds-controls">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search compounds..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="compounds-search"
                />
              </div>
              <div className="table-info">
                <span className="results-count">
                  {filteredAndSortedCompounds.length} compounds found
                </span>
              </div>
            </div>

            {/* Table */}
            <div className="compounds-table-wrapper">
              <table className="compounds-table">
                <thead>
                  <tr>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('compound_name')}
                    >
                      <div className="header-content">
                        <span>Compound Name</span>
                        <small>{getSortIcon('compound_name')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('smiles')}
                    >
                      <div className="header-content">
                        <span>SMILES</span>
                        <small>{getSortIcon('smiles')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('mw')}
                    >
                      <div className="header-content">
                        <span>MW</span>
                        <small>{getSortIcon('mw')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('mass_mg')}
                    >
                      <div className="header-content">
                        <span>Mass (mg)</span>
                        <small>{getSortIcon('mass_mg')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('stock_concentration_1mM')}
                    >
                      <div className="header-content">
                        <span>Stock Conc. (mM)</span>
                        <small>{getSortIcon('stock_concentration_1mM')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('micro_liter_per_reaction')}
                    >
                      <div className="header-content">
                        <span>μL/Reaction</span>
                        <small>{getSortIcon('micro_liter_per_reaction')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('solvent')}
                    >
                      <div className="header-content">
                        <span>Solvent</span>
                        <small>{getSortIcon('solvent')}</small>
                      </div>
                    </th>
                    <th 
                      className="sortable" 
                      onClick={() => handleSort('no_of_reactions')}
                    >
                      <div className="header-content">
                        <span>No. Reactions</span>
                        <small>{getSortIcon('no_of_reactions')}</small>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedCompounds.map((compound, index) => (
                    <motion.tr
                      key={compound.compound_name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className="compound-row"
                    >
                      <td className="compound-name">
                        <span className="name-text">{compound.compound_name}</span>
                      </td>
                      <td className="smiles">
                        <code className="smiles-code" title={compound.smiles}>
                          {compound.smiles}
                        </code>
                      </td>
                      <td className="molecular-weight">
                        <span className="weight-value">{compound.mw}</span>
                      </td>
                      <td className="mass">
                        <span className="mass-value">{compound.mass_mg}</span>
                      </td>
                      <td className="concentration">
                        <span className="conc-value">{compound.stock_concentration_1mM}</span>
                      </td>
                      <td className="micro-liters">
                        <span className="ul-value">{compound.micro_liter_per_reaction}</span>
                      </td>
                      <td className="solvent">
                        <span className="solvent-text">{compound.solvent}</span>
                      </td>
                      <td className="reactions">
                        <span className="reactions-value">{compound.no_of_reactions.toLocaleString()}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredAndSortedCompounds.length === 0 && (
              <div className="no-results">
                <p>No compounds found matching your search criteria.</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CompoundsTable;
