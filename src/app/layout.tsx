import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    <html lang="en" className={`${roboto.variable} h-full`}>
      <body className={`${roboto.className} min-h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
