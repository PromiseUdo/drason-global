import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cormorant, dmSans } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drason Global Limited",
  description: "Foods | Marine | Energies",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-dm-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex-1">{children}</main>
        <Footer />
        <ScrollToTop /> {/* Add ScrollToTop here */}
      </body>
    </html>
  );
}
