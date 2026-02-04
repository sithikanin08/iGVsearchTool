import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iGV Search Tool | AIESEC in SLIIT",
  description: "Explore verified Global Volunteer projects, gain international exposure, and make a real social impact through AIESEC in SLIIT. Discover opportunities in Sri Lanka.",
  keywords: ["AIESEC", "SLIIT", "volunteer", "Sri Lanka", "global volunteer", "iGV", "exchange program"],
  authors: [{ name: "AIESEC in SLIIT" }],
  openGraph: {
    title: "iGV Search Tool | AIESEC in SLIIT",
    description: "Explore verified Global Volunteer projects in Sri Lanka through AIESEC in SLIIT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1f3e9]`}
      >
        {children}
      </body>
    </html>
  );
}
