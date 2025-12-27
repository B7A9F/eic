import { NextRequest, NextResponse } from "next/server";
import { getDictionary } from "@/lib/phonetic-dictionary";
import { EiCProcessor } from "@/lib/eic-processor";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const dictionary = getDictionary();
    const processor = new EiCProcessor();

    // Split text into words and process each
    const words = text
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 0);

    const ipaResults: string[] = [];
    const eicResults: string[] = [];

    for (const word of words) {
      // Remove punctuation for lookup
      const cleanWord = word.replace(/[^\w'-]/g, "");
      const ipa = dictionary.lookup(cleanWord);

      if (ipa) {
        ipaResults.push(ipa);

        // Process with EiC
        const eicWord = processor.process(cleanWord, ipa);
        eicResults.push(eicWord.html);
      } else {
        // Word not found in dictionary
        ipaResults.push(word);
        eicResults.push(word);
      }
    }

    const phonetic = ipaResults.join(" ");
    const eic = eicResults.join(" ");

    return NextResponse.json({ phonetic, eic });
  } catch (error) {
    console.error("Error phonemizing text:", error);
    return NextResponse.json(
      { error: "Error processing text" },
      { status: 500 }
    );
  }
}
