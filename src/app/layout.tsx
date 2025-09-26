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
        <header className="sticky top-0 z-40 backdrop-blur-md border-b" style={{background: 'var(--glass-bg)', borderColor: 'var(--glass-border)'}}>
          <div className="container-max mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="#home" className="text-2xl font-bold bg-gradient-to-r" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Mohammad Hassan
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
          </div>
        </header>
        <main>
          <ReCaptchaProvider>{children}</ReCaptchaProvider>
        </main>
        <footer className="py-12 border-t" style={{background: 'var(--card-bg)', borderColor: 'var(--glass-border)'}}>
          <div className="container-max mx-auto px-6 text-center">
            <p style={{color: 'var(--muted)'}}>© {new Date().getFullYear()} Mohammad Hassan. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
