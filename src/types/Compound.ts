export interface Compound {
  compound_name: string;
  smiles: string;
  mw: number;
  mass_mg: number;
  volume_of_stock_ml: number;
  stock_concentration_1mM: number;
  equivalence: number;
  density: string;
  micro_liter_per_reaction: number;
  volume_liquid_sm: string;
  solvent: string;
  no_of_reactions: number;
}

export interface CompoundsData {
  compounds: Compound[];
}
