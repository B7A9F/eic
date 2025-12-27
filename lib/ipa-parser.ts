/**
 * IPA Parser
 * Detects stress, separates phonemes, classifies C/V
 */

import type { Phoneme, PhonemeType } from './types';

export class IPAParser {
  /**
   * Parse IPA string and extract phonemes with metadata
   */
  parse(ipa: string): { phonemes: Phoneme[]; stressIndex: number | null } {
    let cleaned = ipa.trim();
    let stressIndex: number | null = null;

    // Detect primary stress marker (ˈ)
    const stressMatch = cleaned.match(/ˈ/);
    if (stressMatch && stressMatch.index !== undefined) {
      // Count phonemes before stress marker to find stressed syllable
      const beforeStress = cleaned.substring(0, stressMatch.index);
      stressIndex = this.countPhonemes(beforeStress);
    }

    // Remove stress markers
    cleaned = cleaned.replace(/[ˈˌ]/g, '');

    // Remove syllable separators but track positions
    cleaned = cleaned.replace(/\./g, ' ');

    // Tokenize into phonemes
    const phonemes = this.tokenize(cleaned);

    // Create Phoneme objects
    return {
      phonemes: phonemes.map((ph, index) => ({
        ipa: ph,
        index,
        type: this.classifyPhoneme(ph),
        isStressed: stressIndex !== null && index === stressIndex,
      })),
      stressIndex,
    };
  }

  /**
   * Tokenize IPA string into individual phonemes
   */
  private tokenize(ipa: string): string[] {
    const phonemes: string[] = [];
    let i = 0;

    while (i < ipa.length) {
      // Skip spaces
      if (ipa[i] === ' ') {
        i++;
        continue;
      }

      // Try to match compound phonemes first (2-3 chars)
      let matched = false;
      for (let len = 3; len >= 2; len--) {
        if (i + len <= ipa.length) {
          const candidate = ipa.substring(i, i + len);
          if (this.isCompoundPhoneme(candidate)) {
            phonemes.push(candidate);
            i += len;
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        // Single character phoneme
        phonemes.push(ipa[i]);
        i++;
      }
    }

    return phonemes.filter(p => p.length > 0);
  }

  /**
   * Check if a string is a compound phoneme
   */
  private isCompoundPhoneme(str: string): boolean {
    const compounds = [
      'tʃ', 'dʒ', 'ŋg', // Consonants
      'əʊ', 'aʊ', 'aɪ', 'eɪ', 'ɔɪ', // Diphthongs
      'iə', 'eə', 'ʊə', // Vowel sequences
      'ks', 'gz', // x sounds
    ];
    return compounds.includes(str);
  }

  /**
   * Count phonemes in IPA string (for stress detection)
   */
  private countPhonemes(ipa: string): number {
    const cleaned = ipa.replace(/[ˈˌ.\s]/g, '');
    return this.tokenize(cleaned).length;
  }

  /**
   * Classify phoneme as consonant or vowel
   */
  classifyPhoneme(phoneme: string): PhonemeType {
    const vowels = /[aeiouæɛɪɒʊəɔʌ]/;
    
    // Semivowels are treated as vowels in EiC
    if (phoneme === 'w' || phoneme === 'j') {
      return 'V';
    }
    
    if (vowels.test(phoneme)) {
      return 'V';
    }
    
    return 'C';
  }
}

