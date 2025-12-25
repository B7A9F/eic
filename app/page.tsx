"use client";

import { useState, useEffect } from "react";
import { phonemize } from "phonemize";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [phoneticOutput, setPhoneticOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim()) {
        setIsLoading(true);
        try {
          const phonetic = phonemize(inputText);
          setPhoneticOutput(phonetic);
        } catch (error) {
          console.error("Error phonemizing text:", error);
          setPhoneticOutput("Error processing text");
        } finally {
          setIsLoading(false);
        }
      } else {
        setPhoneticOutput("");
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [inputText]);

  const handleCopy = () => {
    if (phoneticOutput) {
      navigator.clipboard.writeText(phoneticOutput);
    }
  };

  const handleClear = () => {
    setInputText("");
    setPhoneticOutput("");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-full mx-auto px-4 py-3">
          <h1 className="text-xl font-normal text-gray-700">English to IPA</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row h-[calc(100vh-73px)]">
        {/* Left Panel - Input */}
        <div className="flex-1 flex flex-col border-r border-gray-200">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500 uppercase">English</span>
            {inputText && (
              <button
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
                aria-label="Clear text"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Textarea */}
          <div className="flex-1 relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text"
              className="w-full h-full p-4 resize-none border-0 outline-none text-lg text-gray-900 placeholder-gray-400"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            />
          </div>
        </div>

        {/* Right Panel - Output */}
        <div className="flex-1 flex flex-col">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
            <span className="text-sm text-gray-500 uppercase">IPA</span>
            {phoneticOutput && (
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
                aria-label="Copy to clipboard"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Output Area */}
          <div className="flex-1 relative">
            <div className="w-full h-full p-4 overflow-auto">
              {isLoading ? (
                <div className="flex items-center text-gray-400">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="text-lg">Processing...</span>
                </div>
              ) : phoneticOutput ? (
                <p
                  className="text-lg text-gray-900 leading-relaxed"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  {phoneticOutput}
                </p>
              ) : (
                <p
                  className="text-lg text-gray-400"
                  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                  Translation
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
