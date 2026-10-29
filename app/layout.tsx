import type { Metadata } from "next";
import {Geist, Geist_Mono, Inter, Jersey_10, Jersey_15, Jersey_20, Press_Start_2P} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Jersey_20({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "HessCar",
  description: "Calcule le coût des trajets entre potes",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, pressStart2P.variable, "font-sans", inter.variable)}
    >
    <head>
      <meta name="google-site-verification" content="gsp-lHLpaW_jTcCECtPyMGqbeY3_lQoALWaxotmmqtg" />
    </head>
      <body className="h-full  bg-primary ">{children}</body>
    </html>
  );
}
