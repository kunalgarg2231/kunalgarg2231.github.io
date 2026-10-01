import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  // Variable font (no fixed weights): Google serves static Fraunces weights
  // from query-string URLs that next/font cannot parse.
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kunal Garg | Financial Analyst",
  description: "Results-driven Finance professional with an MBA and a Post Graduate Program in Financial Analysis.",
  openGraph: {
    title: "Kunal Garg | Financial Analyst",
    description: "Results-driven Finance professional with an MBA and a Post Graduate Program in Financial Analysis.",
    type: "website",
  }
};

export const viewport: Viewport = {
  themeColor: "#F7F8FA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
