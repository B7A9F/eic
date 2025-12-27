/**
 * Vowel Mappings (Tabel 2)
 * Maps IPA vowel phonemes to colors and gradients
 */

export interface VowelMapping {
  color: string | null;
  gradient: {
    colors: string[];
    percentages: number[];
  } | null;
}

// Tabel 2 - Vowel mappings from reguli-de-baza.md
export const vowelMap: Record<string, VowelMapping> = {
  // Simple vowels
  'æ': { color: '#00b0f0', gradient: null }, // Light blue
  'ʌ': { 
    color: null,
    gradient: { colors: ['#008E40', '#000000'], percentages: [70, 30] }
  }, // Green gradient
  'a': { color: '#008E40', gradient: null }, // Dark green
  'ɑ': { color: '#008E40', gradient: null }, // Dark green
  'ɑː': { color: '#008E40', gradient: null }, // Dark green
  'ə': { color: '#000000', gradient: null }, // Black (schwa)
  'e': { color: '#EE5B00', gradient: null }, // Orange
  'ɛ': { color: '#EE5B00', gradient: null }, // Orange
  'ɪ': {
    color: null,
    gradient: { colors: ['#CC0000', '#000000'], percentages: [70, 30] }
  }, // Red gradient
  'i': { color: '#CC0000', gradient: null }, // Red
  'iː': { color: '#CC0000', gradient: null }, // Red
  'ɒ': {
    color: null,
    gradient: { colors: ['#FF3399', '#000000'], percentages: [70, 30] }
  }, // Pink gradient
  'ɔ': {
    color: null,
    gradient: { colors: ['#FF3399', '#000000'], percentages: [70, 30] }
  }, // Pink gradient
  'o': { color: '#FF3399', gradient: null }, // Pink
  'ɔː': { color: '#FF3399', gradient: null }, // Pink
  'ʊ': {
    color: null,
    gradient: { colors: ['#7030A0', '#000000'], percentages: [70, 30] }
  }, // Purple gradient
  'u': { color: '#7030A0', gradient: null }, // Purple
  'uː': { color: '#7030A0', gradient: null }, // Purple

  // Diphthongs
  'əʊ': {
    color: null,
    gradient: { colors: ['#002B7F', '#FCD116', '#CE1126'], percentages: [0, 50, 100] }
  }, // Romanian flag gradient
  'aɪ': { color: '#4472C4', gradient: null }, // Medium blue
  'eɪ': { color: '#00246C', gradient: null }, // Dark blue
  'aʊ': { color: '#23D300', gradient: null }, // Neon green
  'ɔɪ': {
    color: null,
    gradient: { colors: ['#FF3399', '#CC0000'], percentages: [0, 100] }
  }, // Pink to red gradient
  'juː': { color: '#833C0B', gradient: null }, // Brown
  'ju': { color: '#833C0B', gradient: null }, // Brown

  // Special cases
  'wʌ': {
    color: null,
    gradient: { colors: ['#000000', '#FFFF00', '#000000'], percentages: [0, 50, 100] }
  }, // Black-yellow-black gradient
};

/**
 * Get mapping for a vowel phoneme
 */
export function getVowelMapping(phoneme: string): VowelMapping | null {
  // Try exact match
  let mapping = vowelMap[phoneme];
  if (mapping) return mapping;

  // Try normalized versions (remove length markers, etc.)
  const normalized = phoneme.replace(/ː/g, '').replace(/\./g, '');
  mapping = vowelMap[normalized];
  if (mapping) return mapping;

  return null;
}

/**
 * Generate CSS gradient string from mapping
 */
export function generateGradient(mapping: VowelMapping): string {
  if (!mapping.gradient) {
    return mapping.color || '#000000';
  }

  const { colors, percentages } = mapping.gradient;
  const stops = colors.map((color, i) => `${color} ${percentages[i]}%`).join(', ');
  
  return `linear-gradient(90deg, ${stops})`;
}

