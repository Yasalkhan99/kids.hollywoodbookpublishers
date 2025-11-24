import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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
  title: "kids hollywoodbooks publisher",
  description: "Publish Your Children's Book Anywhere Without The Hassle",
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
        {children}  
      </body>
    </html>
  );
}
