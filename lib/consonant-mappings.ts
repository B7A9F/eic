/**
 * Consonant Mappings (Tabel 1)
 * Maps IPA consonant phonemes to EiC graphemes with diacritics
 */

export interface ConsonantMapping {
  graphemes: string[];
  output: string;
  color: string;
}

// Tabel 1 - Consonant mappings from reguli-de-baza.md
export const consonantMap: Record<string, ConsonantMapping[]> = {
  'b': [{ graphemes: ['bb', 'b'], output: 'b', color: '#000000' }],
  'd': [{ graphemes: ['dd', 'd'], output: 'd', color: '#000000' }],
  'dʒ': [
    { graphemes: ['dg'], output: 'dğ', color: '#000000' },
    { graphemes: ['gg'], output: 'ğğ', color: '#000000' },
    { graphemes: ['dj'], output: 'dj', color: '#000000' },
    { graphemes: ['g'], output: 'ğ', color: '#000000' },
    { graphemes: ['j'], output: 'j', color: '#000000' },
  ],
  'f': [
    { graphemes: ['ff'], output: 'ff', color: '#000000' },
    { graphemes: ['ph'], output: 'ph', color: '#000000' },
    { graphemes: ['gh'], output: 'gh', color: '#000000' },
    { graphemes: ['f'], output: 'f', color: '#000000' },
  ],
  'g': [
    { graphemes: ['gg'], output: 'gg', color: '#000000' },
    { graphemes: ['g'], output: 'g', color: '#000000' },
  ],
  'h': [{ graphemes: ['h'], output: 'h', color: '#000000' }],
  'x': [{ graphemes: ['h'], output: 'h', color: '#000000' }], // loch
  'tʃ': [
    { graphemes: ['tch'], output: 'tch', color: '#000000' },
    { graphemes: ['ch'], output: 'ch', color: '#000000' },
    { graphemes: ['c'], output: 'c̈', color: '#000000' },
    { graphemes: ['t'], output: 'ẗ', color: '#000000' },
  ],
  'k': [
    { graphemes: ['ck'], output: 'ck', color: '#000000' },
    { graphemes: ['cc'], output: 'cc', color: '#000000' },
    { graphemes: ['cq'], output: 'cq', color: '#000000' },
    { graphemes: ['q'], output: 'q', color: '#000000' },
    { graphemes: ['k'], output: 'k', color: '#000000' },
    { graphemes: ['c'], output: 'c', color: '#000000' },
  ],
  'l': [
    { graphemes: ['ll'], output: 'll', color: '#000000' },
    { graphemes: ['l'], output: 'l', color: '#000000' },
  ],
  'm': [
    { graphemes: ['mm'], output: 'mm', color: '#000000' },
    { graphemes: ['m'], output: 'm', color: '#000000' },
  ],
  'n': [
    { graphemes: ['nn'], output: 'nn', color: '#000000' },
    { graphemes: ['n'], output: 'n', color: '#000000' },
  ],
  'ŋ': [
    { graphemes: ['ng'], output: 'ng', color: '#000000' },
    { graphemes: ['n'], output: 'n', color: '#000000' },
  ],
  'ŋg': [{ graphemes: ['ng'], output: 'ng', color: '#000000' }],
  'p': [
    { graphemes: ['pp'], output: 'pp', color: '#000000' },
    { graphemes: ['p'], output: 'p', color: '#000000' },
  ],
  'r': [
    { graphemes: ['rr'], output: 'rr', color: '#000000' },
    { graphemes: ['r'], output: 'r', color: '#000000' },
  ],
  's': [
    { graphemes: ['ss'], output: 'ss', color: '#000000' },
    { graphemes: ['sc'], output: 'sƈ', color: '#000000' },
    { graphemes: ['cc'], output: 'ƈƈ', color: '#000000' },
    { graphemes: ['c'], output: 'ƈ', color: '#000000' },
    { graphemes: ['s'], output: 's', color: '#000000' },
  ],
  'ʃ': [
    { graphemes: ['sch'], output: 'ŝĉĥ', color: '#000000' },
    { graphemes: ['tch'], output: 'tch', color: '#000000' },
    { graphemes: ['ch'], output: 'ĉĥ', color: '#000000' },
    { graphemes: ['ss'], output: 'ŝŝ', color: '#000000' },
    { graphemes: ['sc'], output: 'ŝĉ', color: '#000000' },
    { graphemes: ['sh'], output: 'sh', color: '#000000' },
    { graphemes: ['c'], output: 'ĉ', color: '#000000' },
    { graphemes: ['s'], output: 'ŝ', color: '#000000' },
    { graphemes: ['t'], output: 't̂', color: '#000000' },
  ],
  't': [
    { graphemes: ['tt'], output: 'tt', color: '#000000' },
    { graphemes: ['t'], output: 't', color: '#000000' },
  ],
  'θ': [{ graphemes: ['th'], output: 'tɦ', color: '#000000' }],
  'ð': [{ graphemes: ['th'], output: 'th', color: '#000000' }],
  'v': [
    { graphemes: ['ph'], output: 'ph', color: '#000000' },
    { graphemes: ['v'], output: 'v', color: '#000000' },
    { graphemes: ['f'], output: 'ᵮ', color: '#000000' },
  ],
  'z': [
    { graphemes: ['zz'], output: 'zz', color: '#000000' },
    { graphemes: ['sc'], output: 'ṡƈ', color: '#000000' },
    { graphemes: ['s'], output: 'ṡ', color: '#000000' },
    { graphemes: ['x'], output: 'ẋ', color: '#000000' },
    { graphemes: ['z'], output: 'z', color: '#000000' },
  ],
  'ʒ': [
    { graphemes: ['s'], output: 'š', color: '#000000' },
    { graphemes: ['g'], output: 'ǧ', color: '#000000' },
  ],
  'w': [
    { graphemes: ['u'], output: 'ű', color: '#000000' },
    { graphemes: ['w'], output: 'w', color: '#000000' },
  ],
  'gz': [{ graphemes: ['x'], output: 'ӿ', color: '#000000' }],
  'ks': [
    { graphemes: ['cc'], output: 'cƈ', color: '#000000' },
    { graphemes: ['x'], output: 'x', color: '#000000' },
  ],
  'ksh': [{ graphemes: ['x'], output: 'x̄', color: '#000000' }],
};

// Syllabic consonants with white background and black border
export const syllabicConsonants: Record<string, { output: string; color: string; border: string }> = {
  'l̩': { output: 'l', color: '#FFFFFF', border: '#000000' },
  'n̩': { output: 'n', color: '#FFFFFF', border: '#000000' },
  'm̩': { output: 'm', color: '#FFFFFF', border: '#000000' },
  'k̩': { output: 'c', color: '#FFFFFF', border: '#000000' },
  'ŗ': { output: 'r', color: '#FFFFFF', border: '#000000' },
  'd̦': { output: 'd', color: '#FFFFFF', border: '#000000' },
};

/**
 * Find best matching consonant grapheme
 * Uses greedy matching (longest match first)
 */
export function findConsonantMatch(
  phoneme: string,
  graphemes: string,
  startIndex: number
): { match: string; output: string; color: string; length: number } | null {
  const mappings = consonantMap[phoneme];
  if (!mappings) return null;

  // Try each mapping (already sorted by length in definition)
  for (const mapping of mappings) {
    for (const grapheme of mapping.graphemes) {
      const endIndex = startIndex + grapheme.length;
      const slice = graphemes.substring(startIndex, endIndex);
      
      if (slice.toLowerCase() === grapheme.toLowerCase()) {
        return {
          match: grapheme,
          output: mapping.output,
          color: mapping.color,
          length: grapheme.length,
        };
      }
    }
  }

  return null;
}

