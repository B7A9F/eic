/**
 * Grapheme-Phoneme Aligner
 * Implements greedy monographism and perfect mapping
 */

import type { Grapheme, Phoneme, PhonemeType } from './types';
import { findConsonantMatch } from './consonant-mappings';

export class GraphemePhonemeAligner {
  /**
   * Align graphemes with phonemes using greedy monographism
   */
  align(word: string, phonemes: Phoneme[]): Grapheme[] {
    const graphemes: Grapheme[] = word.split('').map((char, index) => ({
      char,
      index,
      type: this.classifyGrapheme(char),
    }));

    let graphemeIndex = 0;
    let phonemeIndex = 0;

    while (graphemeIndex < graphemes.length && phonemeIndex < phonemes.length) {
      const phoneme = phonemes[phonemeIndex];
      
      // Group consecutive graphemes of same type
      const graphemeGroup = this.getGraphemeGroup(graphemes, graphemeIndex);
      
      // Try to match phoneme with graphemes (greedy monographism)
      if (graphemeGroup.type === phoneme.type) {
        const matchLength = this.tryMatch(
          word,
          graphemeIndex,
          phoneme,
          graphemeGroup
        );

        if (matchLength > 0) {
          // Match found - mark graphemes as consumed
          for (let i = graphemeIndex; i < graphemeIndex + matchLength; i++) {
            if (i < graphemes.length) {
              // Will be colored by processor
            }
          }
          graphemeIndex += matchLength;
          phonemeIndex++;
        } else {
          // No match - phoneme moves forward, graphemes become mute
          for (let i = graphemeIndex; i < graphemeIndex + graphemeGroup.length; i++) {
            if (i < graphemes.length) {
              graphemes[i].isMute = true;
              graphemes[i].color = '#808080';
            }
          }
          graphemeIndex += graphemeGroup.length;
          // Phoneme doesn't advance - tries next grapheme group
        }
      } else {
        // Type mismatch - mark graphemes as mute and move forward
        for (let i = graphemeIndex; i < graphemeIndex + graphemeGroup.length; i++) {
          if (i < graphemes.length) {
            graphemes[i].isMute = true;
            graphemes[i].color = '#808080';
          }
        }
        graphemeIndex += graphemeGroup.length;
        // Phoneme doesn't advance
      }
    }

    // Mark remaining graphemes as mute
    while (graphemeIndex < graphemes.length) {
      graphemes[graphemeIndex].isMute = true;
      graphemes[graphemeIndex].color = '#808080';
      graphemeIndex++;
    }

    return graphemes;
  }

  /**
   * Get group of consecutive graphemes of same type
   */
  private getGraphemeGroup(
    graphemes: Grapheme[],
    startIndex: number
  ): { type: PhonemeType; length: number } {
    if (startIndex >= graphemes.length) {
      return { type: 'C', length: 0 };
    }

    const startType = graphemes[startIndex].type;
    let length = 1;

    while (
      startIndex + length < graphemes.length &&
      graphemes[startIndex + length].type === startType
    ) {
      length++;
    }

    return { type: startType, length };
  }

  /**
   * Try to match phoneme with graphemes (greedy - longest first)
   */
  private tryMatch(
    word: string,
    graphemeIndex: number,
    phoneme: Phoneme,
    graphemeGroup: { type: PhonemeType; length: number }
  ): number {
    if (phoneme.type === 'C') {
      // Try consonant matching with greedy algorithm
      const graphemeString = word.substring(graphemeIndex, graphemeIndex + graphemeGroup.length);
      const match = findConsonantMatch(phoneme.ipa, graphemeString, 0);
      return match ? match.length : 0;
    } else {
      // For vowels, consume entire grapheme group (simplified for MVP)
      // More sophisticated vowel matching can be added later
      return graphemeGroup.length;
    }
  }

  /**
   * Classify grapheme as consonant or vowel
   */
  private classifyGrapheme(char: string): PhonemeType {
    const lower = char.toLowerCase();
    const vowels = /[aeiou]/;
    const semivowels = /[wy]/; // Treated as vowels in EiC

    if (vowels.test(lower) || semivowels.test(lower)) {
      return 'V';
    }

    return 'C';
  }
}

