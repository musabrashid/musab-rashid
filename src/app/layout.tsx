import type { Metadata } from "next";
import { Instrument_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musab Rashid | Senior Product Analyst",
  description:
    "Personal site of Musab Rashid — Senior Product Analyst at United Airlines, focused on digital insights, product analytics, and data-driven roadmap prioritization.",
  openGraph: {
    title: "Musab Rashid | Senior Product Analyst",
    description:
      "Product analytics, voice of customer, and data-driven product decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
