import { Poppins, Roboto, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import UpperBanner from "@/components/UpperBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const myInter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

const myfont = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myfont.className}>
        <span className="fixed top-0 left-0 right-0 z-50">
          <UpperBanner />
          <Navbar />
        </span>
        <div className="mt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}