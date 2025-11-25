import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const childHood = localFont({
  src: "../public/fonts/Child Hood.otf",
  variable: "--font-childhood",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter_18pt-Black.ttf",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Children’s Book Publishing Made Easy – Hollywood Books Publisher",
  description: "From illustrations to printing, we handle everything for your children’s book. Simple process, expert support, worldwide availability. Publish your kids’ book now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${childHood.variable} ${inter.variable} antialiased`}
      >
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=bc23fe0d-f07b-4d75-bb93-7be4f31694fe"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
