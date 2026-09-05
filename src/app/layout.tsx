import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import MouseGlow from "@/components/ui/mouse-glow";
import ScrollProgress from "@/components/ui/scroll-progress";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Sreejith S | Software Engineer",
  description: "Personal Developer Portfolio of Sreejith S - Software Engineer specializing in React, Next.js, Node.js, PostgreSQL, MongoDB, and React Native.",
  keywords: ["Sreejith S", "Software Engineer", "Full Stack Developer", "Next.js 15", "React Native", "Portfolio", "Node.js"],
  authors: [{ name: "Sreejith S" }],
  icons: {
    icon: "/icon.svg",
  },
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_MEASUREMENT_ID}', {
                send_page_view: true
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakartaSans.variable} bg-[#050505] text-white antialiased selection:bg-[#00E599] selection:text-black`}>
        <LenisProvider>
          <ScrollProgress />
          <MouseGlow />
          <ScrollToTop />
          {children}
        </LenisProvider>

        {/* Cloudflare Web Analytics */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "d53d6767d5a343aca0952fbb8912ad66"}'
        />
      </body>
    </html>
  );
}
