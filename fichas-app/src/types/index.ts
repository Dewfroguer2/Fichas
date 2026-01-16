// Sistema e configurações
export interface PDFMappingPattern {
  regex: string;
  field: string;
  type: 'modifier_or_value' | 'number' | 'string';
}

export interface PDFMapping {
  patterns: PDFMappingPattern[];
  keywords: Record<string, string[]>;
}

export interface SystemConfig {
  id: string;
  name: string;
  description: string;
  attributes: {
    base: string[];
    custom: string[];
  };
  pdfMapping: PDFMapping;
}

export interface SystemsConfigFile {
  systems: SystemConfig[];
}

// Personagem e dados
export interface Talent {
  id: string;
  name: string;
  description: string;
  source?: string; // origem: livro, PDF, manual, etc.
}

export interface CharacterAttribute {
  name: string;
  value: number;
  modifier?: number;
}

export interface Character {
  id: string;
  name: string;
  systemId: string;
  createdAt: number;
  updatedAt: number;
  attributes: Record<string, CharacterAttribute>;
  talents: Talent[];
  notes?: string;
  isIncomplete?: boolean; // marcação de ficha incompleta
}

// PDF e parsing
export interface PDFParsingResult {
  extractedText: string;
  mappedData: Record<string, string | number>;
  confidence: Record<string, number>;
}

// Tipo para IndexedDB
export type DBSchema = {
  characters: { key: 'id'; value: Character };
  systems: { key: 'id'; value: SystemConfig };
  talents: { key: 'id'; value: Talent };
};
