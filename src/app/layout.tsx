import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import MouseGlow from "@/components/ui/mouse-glow";
import ScrollProgress from "@/components/ui/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Sreejith S | Full Stack Developer & Mobile App Engineer",
  description: "Personal Developer Portfolio of Sreejith S - Specializing in React, Next.js, Node.js, PostgreSQL, MongoDB, and React Native.",
  keywords: ["Sreejith S", "Full Stack Developer", "Next.js 15", "React Native", "Portfolio", "Node.js", "Dubai Developer"],
  authors: [{ name: "Sreejith S" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${plusJakartaSans.variable} bg-[#050505] text-white antialiased selection:bg-[#00E599] selection:text-black`}>
        <LenisProvider>
          <ScrollProgress />
          <MouseGlow />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
