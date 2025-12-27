import { NextRequest, NextResponse } from "next/server";
import { getDictionary } from "@/lib/phonetic-dictionary";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const dictionary = getDictionary();

    // Split text into words and convert each to IPA
    const words = text
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 0);
    const ipaWords = words.map((word) => {
      // Remove punctuation for lookup
      const cleanWord = word.replace(/[^\w'-]/g, "");
      const ipa = dictionary.lookup(cleanWord);
      return ipa || word; // Return IPA or original word if not found
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
