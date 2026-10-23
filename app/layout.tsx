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
    "Portfolio d’Armel Hugo Tekeng. Développement logiciel, analyse de données, BI, modélisation et intérêt pour l’intelligence artificielle. Diplômé en informatique de l’UQTR en 2026, concentration en science des données.",
  keywords: ["développeur logiciel","data scientist","machine learning","inférence causale","Spring Boot","Python","Java","Android","Trois-Rivières"],
  authors: [{ name: "Hugo Tekeng", url: "https://www.hugotekeng.com" }],
  openGraph: {
    title: "Armel Hugo Tekeng — Développement logiciel & science des données",
    description: "Développement logiciel · Science des données · IA appliquée · Analyse et BI — Diplômé de l’UQTR en 2026.",
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

        <a href="#main-content" className="skip-link">Aller au contenu / Skip to content</a>

        <Navbar />

        <main id="main-content" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
