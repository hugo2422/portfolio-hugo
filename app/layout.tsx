import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armel Hugo Tekeng — Développement logiciel & science des données",
  description:
    "Portfolio d’Armel Hugo Tekeng. Développement logiciel, analyse de données, BI et modélisation. Diplômé en informatique de l’UQTR en 2026, concentration en science des données.",
  keywords: ["développeur logiciel","data scientist","machine learning","inférence causale","Spring Boot","Python","Java","Android","Trois-Rivières"],
  authors: [{ name: "Hugo Tekeng", url: "https://www.hugotekeng.com" }],
  openGraph: {
    title: "Armel Hugo Tekeng — Développement logiciel & science des données",
    description: "Développement logiciel · Science des données · Analyse et BI — Diplômé de l’UQTR en 2026.",
    type: "website",
    locale: "fr_CA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050a14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#050a14] text-white`}>

        {/* Fixed background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute inset-0 bg-[#050a14]" />
          <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-blue-600/[0.08] blur-[120px]" />
          <div className="absolute -top-20 right-0 h-[460px] w-[460px] rounded-full bg-violet-600/[0.07] blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-cyan-600/[0.05] blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(5,10,20,0.6)_100%)]" />
        </div>

        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
