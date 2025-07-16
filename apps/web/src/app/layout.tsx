import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import KonamiCode from "@/components/KonamiCode";
import Footer from "@/components/Footer";
import DefaultSuspense from "@/components/DefaultSuspense";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Diego - Business Solutions",
  description: "Turning hours into minutes, automate your business & stop wasting money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable}`}>
        <Navbar />
        {children}
        <div className="w-full flex flex-col items-center justify-center px-16 lg:px-24">
          <DefaultSuspense>
            <Footer />
          </DefaultSuspense>
        </div>
        <KonamiCode/>
      </body>
    </html>
  );
}
