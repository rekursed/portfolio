import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReCaptchaProvider } from "@/components/ReCaptchaProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Hassan — Senior Software Engineer / Tech Lead",
  description:
    "Portfolio of Mohammad Hassan: engineering leadership, backend-focused full-stack, cloud-native, CI/CD, and AI/ML integration.",
  metadataBase: new URL("https://mhassan.info"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container-max mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mohammad Hassan
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </header>
        <main>
          <ReCaptchaProvider>{children}</ReCaptchaProvider>
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container-max mx-auto px-6 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Mohammad Hassan. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
