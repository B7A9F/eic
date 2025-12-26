import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Load text-to-ipa dynamically to avoid build issues
    const TextToIPA = require("text-to-ipa");

    // Split text into words and convert each to IPA
    const words = text.toLowerCase().split(/\s+/);
    const ipaWords = words.map((word) => {
      const result = TextToIPA.lookup(word);
      if (result && result.text) {
        // If multiple pronunciations (separated by OR), take the first one
        return result.text.split(" OR ")[0];
      }
      return word; // Return original word if not found
    });

    const phonetic = ipaWords.join(" ");

    return NextResponse.json({ phonetic });
  } catch (error) {
    console.error("Error phonemizing text:", error);
    return NextResponse.json(
      { error: "Error processing text" },
      { status: 500 }
    );
  }
}
