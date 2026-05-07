import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hugo Tekeng — Développeur logiciel & Data",
  description:
    "Portfolio de Hugo Tekeng, développeur logiciel spécialisé en back-end, data science et mobile Android. Bac. Informatique UQTR — Fin de programme été 2026.",
  keywords: ["développeur logiciel", "data science", "back-end", "Android", "Python", "Java", "SQL", "Trois-Rivières"],
  authors: [{ name: "Hugo Tekeng", url: "https://www.hugotekeng.com" }],
  openGraph: {
    title: "Hugo Tekeng — Développeur logiciel & Data",
    description: "Back-end · Data Science · Mobile Android. Fin de programme UQTR été 2026.",
    type: "website",
    locale: "fr_CA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#030712] text-white`}>

        {/* Fixed background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[#030712]" />
          {/* Glow orbs */}
          <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-600/[0.09] blur-[110px]" />
          <div className="absolute -top-16 right-0 h-[420px] w-[420px] rounded-full bg-violet-600/[0.07] blur-[90px]" />
          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-600/[0.05] blur-[90px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(3,7,18,0.55)_100%)]" />
        </div>

        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
