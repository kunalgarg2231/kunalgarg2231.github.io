import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kunal Garg - Financial Analyst Portfolio",
  description: "Results-driven Finance professional with an MBA and a Post Graduate Program in Financial Analysis.",
  openGraph: {
    title: "Kunal Garg - Financial Analyst Portfolio",
    description: "Results-driven Finance professional with an MBA and a Post Graduate Program in Financial Analysis.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${hankenGrotesk.variable} ${sourceSerif4.variable} bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        {children}
      </body>
    </html>
  );
}
