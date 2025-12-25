# EiC - English in Color

MVP web application for transforming English text into the EiC (English in Color) phonetic system.

## Current Status

Project has been restructured to use Next.js App Router with phonemize for phonetic transcription. This is a clean starting point for building the EiC system.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
eic/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with textarea and phonetic output
│   └── globals.css         # Global styles (Tailwind only)
├── B_tehnic.md            # Technical documentation
├── Eic.md                 # EiC system documentation
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## Features

- Simple textarea input for English text
- Phonetic transcription output using phonemize library
- Real-time processing with debounce
- Clean Tailwind CSS styling

## Technology Stack

- **Next.js 14+** with App Router
- **TypeScript**
- **Tailwind CSS**
- **phonemize** - Library for phonetic transcription (G2P)

## Next Steps

The EiC transformation system will be built on top of this foundation, implementing the rules and algorithms described in B_tehnic.md and Eic.md.

## License

MIT
