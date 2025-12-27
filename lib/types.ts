/**
 * TypeScript types for EiC system
 */

export type PhonemeType = 'C' | 'V';

export interface Grapheme {
  char: string;
  index: number;
  type: PhonemeType;
  color?: string;
  diacritic?: string;
  isUnderlined?: boolean;
  isMute?: boolean;
  hasBorder?: boolean; // For syllabic consonants (white with black border)
}

export interface Phoneme {
  ipa: string;
  index: number;
  type: PhonemeType;
  isStressed?: boolean;
}

export interface Alignment {
  graphemes: Grapheme[];
  phoneme: Phoneme | null;
  consumed: boolean;
}

export interface EiCWord {
  original: string;
  ipa: string;
  graphemes: Grapheme[];
  phonemes: Phoneme[];
  html: string; // HTML output with colors and formatting
}

