import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hugo Tekeng",
  description: "Portfolio de Hugo Tekeng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#050816] text-white antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[#050816]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.10),transparent_38%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.08),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.03))]" />
        </div>

        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}