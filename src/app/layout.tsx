import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Venus Labs",
    template: "%s | Venus Labs",
  },
  description: "Building next‑gen creative tools and experiences.",
  metadataBase: new URL("https://venuslabs.net"),
  openGraph: {
    title: "Venus Labs",
    description: "Building next‑gen creative tools and experiences.",
    url: "/",
    siteName: "Venus Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venus Labs",
    description: "Building next‑gen creative tools and experiences.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
