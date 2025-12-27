/**
 * EiC Processor - Main transformation engine
 * Implements the algorithm from reguli-de-baza.md
 */

import type { EiCWord, Grapheme } from './types';
import { IPAParser } from './ipa-parser';
import { GraphemePhonemeAligner } from './grapheme-phoneme-aligner';
import { findConsonantMatch } from './consonant-mappings';
import { getVowelMapping, generateGradient } from './vowel-mappings';

export class EiCProcessor {
  private parser = new IPAParser();
  private aligner = new GraphemePhonemeAligner();

  /**
   * Process a word and generate EiC output
   */
  process(word: string, ipa: string): EiCWord {
    // Step 1: Parse IPA
    const { phonemes, stressIndex } = this.parser.parse(ipa);

    // Step 2: Align graphemes with phonemes
    const graphemes = this.aligner.align(word, phonemes);

    // Step 3: Apply colors and diacritics
    this.applyColors(word, graphemes, phonemes, stressIndex);

    // Step 4: Apply stress underlining
    if (stressIndex !== null) {
      this.applyStressUnderlining(graphemes, phonemes, stressIndex);
    }

    // Step 5: Generate HTML output
    const html = this.generateHTML(graphemes);

    return {
      original: word,
      ipa,
      graphemes,
      phonemes,
      html,
    };
  }

  /**
   * Apply colors and diacritics to graphemes
   */
  private applyColors(
    word: string,
    graphemes: Grapheme[],
    phonemes: any[],
    stressIndex: number | null
  ): void {
    let graphemeIndex = 0;
    let phonemeIndex = 0;

    while (graphemeIndex < graphemes.length && phonemeIndex < phonemes.length) {
      const phoneme = phonemes[phonemeIndex];
      const grapheme = graphemes[graphemeIndex];

      if (grapheme.isMute) {
        graphemeIndex++;
        continue;
      }

      if (phoneme.type === 'C') {
        // Apply consonant mapping
        const wordPart = word.substring(graphemeIndex);
        const match = findConsonantMatch(phoneme.ipa, wordPart, 0);

        if (match) {
          // Apply to matched graphemes
          for (let i = 0; i < match.length && graphemeIndex + i < graphemes.length; i++) {
            const g = graphemes[graphemeIndex + i];
            g.color = match.color;
            if (i === 0 && match.output !== match.match) {
              g.diacritic = match.output.charAt(i);
            }
          }
          graphemeIndex += match.length;
        } else {
          // Default black for consonants
          grapheme.color = '#000000';
          graphemeIndex++;
        }
        phonemeIndex++;
      } else {
        // Apply vowel mapping
        const mapping = getVowelMapping(phoneme.ipa);
        
        if (mapping) {
          // Find vowel group
          const vocalGroup = this.getVowelGroup(graphemes, graphemeIndex);
          
          for (let i = 0; i < vocalGroup.length; i++) {
            const g = graphemes[graphemeIndex + i];
            if (!g.isMute) {
              if (mapping.gradient) {
                g.color = generateGradient(mapping);
              } else {
                g.color = mapping.color || '#000000';
              }
            }
          }
          graphemeIndex += vocalGroup.length;
        } else {
          grapheme.color = '#000000';
          graphemeIndex++;
        }
        phonemeIndex++;
      }
    }
  }

  /**
   * Get vowel group (consecutive vowels)
   */
  private getVowelGroup(graphemes: Grapheme[], startIndex: number): Grapheme[] {
    const group: Grapheme[] = [];
    let index = startIndex;

    while (index < graphemes.length && graphemes[index].type === 'V') {
      group.push(graphemes[index]);
      index++;
    }

    return group.length > 0 ? group : [graphemes[startIndex]];
  }

  /**
   * Apply stress underlining to first vowel group after stress
   */
  private applyStressUnderlining(
    graphemes: Grapheme[],
    phonemes: any[],
    stressIndex: number
  ): void {
    // Find phoneme at stress index
    if (stressIndex >= 0 && stressIndex < phonemes.length) {
      const stressedPhoneme = phonemes[stressIndex];
      
      // Find corresponding graphemes and underline vowels
      for (const grapheme of graphemes) {
        if (grapheme.type === 'V' && !grapheme.isMute) {
          // Simplified: underline first vowel group
          // More sophisticated logic would match phoneme position
          grapheme.isUnderlined = true;
          break; // Only underline first vowel group for now
        }
      }
    }
  }

  /**
   * Generate HTML output with colors and formatting
   */
  private generateHTML(graphemes: Grapheme[]): string {
    return graphemes
      .map((g) => {
        const char = g.diacritic || g.char;
        let style = '';

        if (g.color) {
          if (g.color.startsWith('linear-gradient')) {
            style += `background: ${g.color}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;`;
          } else {
            style += `color: ${g.color};`;
          }
        }

        if (g.hasBorder) {
          style += ' border: 1px solid #000000; padding: 1px 2px;';
        }

        if (g.isUnderlined) {
          style += ' text-decoration: underline; text-decoration-thickness: 2px;';
        }

        if (g.isMute) {
          style += ' opacity: 0.5;';
        }

        if (style) {
          return `<span style="${style}">${char}</span>`;
        }

        return char;
      })
      .join('');
  }
}

