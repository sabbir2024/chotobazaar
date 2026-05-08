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
  title:{
    default:"Choto Bazaar",
    template:'%s | Choto Bazaar'
  },
  description:
    "Choto Bazaar is a modern online marketplace where you can explore and buy daily essentials, fashion, electronics, groceries, and more at affordable prices.",

  keywords: [
    "Choto Bazaar",
    "online shopping",
    "ecommerce",
    "Bangladesh online shop",
    "daily essentials",
    "fashion",
    "electronics",
    "groceries",
    "best online marketplace",
  ],


  openGraph: {
    title: "Choto Bazaar",
    description:
      "Explore products, daily essentials, fashion, electronics, and more at Choto Bazaar.",
    url: "https://chotobazaar.vercel.app",
    siteName: "Choto Bazaar",
    images: [
      {
        url: "https://i.ibb.co.com/S77cLZWF/chotologo.png",
        width: 1200,
        height: 630,
        alt: "Choto Bazaar Logo",
      },
      {
        url: "https://i.ibb.co.com/1txKLXsY/image.png",
        width: 1200,
        height: 630,
        alt: "Choto Bazaar Home Page",
      },
      {
        url: "https://i.ibb.co.com/C5mrzdYF/image.png",
        width: 1200,
        height: 630,
        alt: "Choto Bazaar Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Choto Bazaar",
    description:
      "Shop daily essentials, fashion, electronics, and more from Choto Bazaar.",
    images: ["https://i.ibb.co.com/1txKLXsY/image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
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
