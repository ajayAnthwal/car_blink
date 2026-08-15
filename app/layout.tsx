import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/providers";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CarBlink — India's Leading Car Service Comparison Platform",
  description: "Compare car service prices, book verified workshops near you, and save time and money with CarBlink.",
  icons: {
    icon: "/car_blink.jpg",
    shortcut: "/car_blink.jpg",
    apple: "/car_blink.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body bg-neutral-bg text-neutral-text-dark min-h-screen flex flex-col">
        <div className="bg-primary-blue text-white text-center py-2.5 px-4 text-sm font-semibold tracking-wide">
          We Compare, We Negotiate, You Save.
        </div>
        <Navbar />
        <Providers >
          <Toaster
            position="top-right"
            richColors
          />
          <main className="flex-grow">{children}</main>
        </Providers>

        <Footer />
      </body>
    </html>
  );
}


