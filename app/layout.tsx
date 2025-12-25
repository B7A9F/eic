import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EiC - English in Color",
  description: "Transform English text into EiC (English in Color) system",
};

// Force dynamic rendering to prevent build timeout
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
