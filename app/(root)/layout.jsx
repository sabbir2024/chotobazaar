import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./conponents/navbar/Navbar";
import Footer from "./conponents/footer/Footer";
import localFont from 'next/font/local'


import "../globals.css";
import NextAuthProvider from "../provider/NextAuthProvider";
import FacebookPixel from "../../components/FacebookPixel";


export const fontBangla = localFont({
  src: '../../public/font/FN Mahin Dui Dashok Regular.ttf',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://chotobazaar.vercel.app"),

  title: {
    default: "Choto Bazaar",
    template: "%s | Choto Bazaar",
  },

  description:
    "Choto Bazaar is a modern online marketplace for discovering quality products with a smooth and fast shopping experience.",

  applicationName: "Choto Bazaar",

  keywords: [
    "Choto Bazaar",
    "ecommerce",
    "online shopping",
    "marketplace",
    "Bangladesh shopping",
    "buy products online",
  ],

  authors: [{ name: "Choto Bazaar Team" }],
  creator: "Choto Bazaar",
  publisher: "Choto Bazaar",

  alternates: {
    canonical: "https://chotobazaar.vercel.app",
  },

  icons: {
    icon: "https://i.ibb.co.com/S77cLZWF/chotologo.png",
    shortcut: "https://i.ibb.co.com/S77cLZWF/chotologo.png",
    apple: "https://i.ibb.co.com/S77cLZWF/chotologo.png",
  },

  openGraph: {
    type: "website",
    url: "https://chotobazaar.vercel.app",
    title: "Choto Bazaar",
    description:
      "Discover quality products easily on Choto Bazaar marketplace.",
    siteName: "Choto Bazaar",
    images: [
      {
        url: "https://i.ibb.co.com/1txKLXsY/image.png",
        width: 1200,
        height: 630,
        alt: "Choto Bazaar Home Preview",
      },
      {
        url: "https://i.ibb.co.com/C5mrzdYF/image.png",
        width: 1200,
        height: 630,
        alt: "Choto Bazaar Products Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Choto Bazaar",
    description:
      "Modern marketplace for fast and easy online shopping experience.",
    images: ["https://i.ibb.co.com/1txKLXsY/image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
          <FacebookPixel />
        </body>
      </html>
    </NextAuthProvider>
  );
}
