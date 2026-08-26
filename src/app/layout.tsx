import type { Metadata, Viewport } from "next";
import { EB_Garamond, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-cursor-sans",
  display: "swap",
});

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-cursor-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-cursor-mono",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#14120b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className={`${sans.className} min-h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
