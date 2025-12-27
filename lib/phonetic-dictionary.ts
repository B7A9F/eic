/**
 * Phonetic Dictionary Parser
 * Loads and parses the custom dict.txt file
 */

import fs from "fs";
import path from "path";

interface DictionaryEntry {
  word: string;
  transcriptions: string[];
}

class PhoneticDictionary {
  private dictionary: Map<string, string[]> = new Map();
  private loaded: boolean = false;

  /**
   * Load dictionary from dict.txt file
   */
  loadDictionary(): void {
    if (this.loaded) return;

    try {
      const dictPath = path.resolve("./lib/dict.txt");
      const content = fs.readFileSync(dictPath, "utf-8");
      const lines = content.split("\n");

      for (const line of lines) {
        if (!line.trim()) continue;

        // Split by tab
        const parts = line.split("\t");
        if (parts.length < 2) continue;

        const word = parts[0].toLowerCase().trim();
        const transcriptionsRaw = parts[1].trim();

        // Parse transcriptions: /ipa1/,/ipa2/,/ipa3/
        const transcriptions: string[] = [];
        const matches = transcriptionsRaw.match(/\/([^\/]+)\//g);

        if (matches) {
          for (const match of matches) {
            // Remove leading and trailing slashes
            const ipa = match.substring(1, match.length - 1);
            transcriptions.push(ipa);
          }
        }

        if (transcriptions.length > 0) {
          this.dictionary.set(word, transcriptions);
        }
      }

      this.loaded = true;
      console.log(
        `Phonetic dictionary loaded: ${this.dictionary.size} entries`
      );
    } catch (error) {
      console.error("Error loading phonetic dictionary:", error);
      this.loaded = true; // Mark as loaded to avoid repeated attempts
    }
  }

  /**
   * Lookup phonetic transcription for a word
   * @param word - Word to lookup
   * @returns Second transcription if multiple exist, otherwise first transcription, or null if not found
   */
  lookup(word: string): string | null {
    if (!this.loaded) {
      this.loadDictionary();
    }

    const normalized = word.toLowerCase().trim();
    const transcriptions = this.dictionary.get(normalized);

    if (!transcriptions || transcriptions.length === 0) {
      return null;
    }

    // If multiple transcriptions exist, return the second one
    // Otherwise, return the first (and only) one
    if (transcriptions.length > 1) {
      return transcriptions[1];
    }

    return transcriptions[0];
  }

  /**
   * Lookup all phonetic transcriptions for a word
   * @param word - Word to lookup
   * @returns Array of transcriptions or empty array if not found
   */
  lookupAll(word: string): string[] {
    if (!this.loaded) {
      this.loadDictionary();
    }

    const normalized = word.toLowerCase().trim();
    return this.dictionary.get(normalized) || [];
  }

  /**
   * Check if word exists in dictionary
   */
  hasWord(word: string): boolean {
    if (!this.loaded) {
      this.loadDictionary();
    }

    return this.dictionary.has(word.toLowerCase().trim());
  }
}

// Singleton instance
let dictionaryInstance: PhoneticDictionary | null = null;

export function getDictionary(): PhoneticDictionary {
  if (!dictionaryInstance) {
    dictionaryInstance = new PhoneticDictionary();
  }
  return dictionaryInstance;
}
