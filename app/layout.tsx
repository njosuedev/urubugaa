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
  title: "Urubugaa | Online Shopping & Selling in Rwanda",
  description: "Urubugaa is your one-stop online marketplace to buy and sell products online. Join our affiliate program, sign up, or signin today and start shopping and selling easily and securely.",
  keywords: [
    "Urubugaa",
    "buy online Rwanda",
    "sell online Rwanda",
    "online marketplace",
    "electronics",
    "fashion",
    "home goods",
    "fast delivery",
    "online shopping",
    "online selling",
    "affiliate program",
    "sign up",
    "signin"
  ],
  authors: [{ name: "Urubugaa Team" }],
  creator: "Urubugaa",
  publisher: "Urubugaa",
  metadataBase: new URL("https://www.urubugaa.vercel.app"),
  openGraph: {
    title: "Urubugaa | Online Shopping & Selling in Rwanda",
    description: "Shop and sell products online with Urubugaa. Join our affiliate program, sign up, or signin today for a secure and fast online marketplace experience.",
    url: "https://www.urubugaa.vercel.app",
    siteName: "Urubugaa",
    images: [
      {
        url: "/urubugaa.png", 
        width: 1200,
        height: 630,
        alt: "Urubugaa Online Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urubugaa | Online Shopping & Selling in Rwanda",
    description: "Shop and sell products online easily with Urubugaa. Join our affiliate program, sign up, or signin today!",
    site: "@urubugaa",
    creator: "@urubugaa",
    images: ["/urubugaa.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
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
