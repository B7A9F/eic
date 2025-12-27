/**
 * EiC Display Component
 * Displays word with colors, diacritics, and underlining
 */

import React from 'react';

interface EiCDisplayProps {
  html: string;
}

export default function EiCDisplay({ html }: EiCDisplayProps) {
  return (
    <div
      className="text-lg leading-relaxed font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ fontFamily: 'Georgia, serif' }}
    />
  );
}

