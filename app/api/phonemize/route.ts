import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Dynamic import to avoid bundling phonemize during build
    const { phonemize } = await import("phonemize");
    const phonetic = phonemize(text);

    return NextResponse.json({ phonetic });
  } catch (error) {
    console.error("Error phonemizing text:", error);
    return NextResponse.json(
      { error: "Error processing text" },
      { status: 500 }
    );
  }
}
