import type { Metadata } from "next";
import { Manrope, Tektur } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Silverius Mobile Mechanic | Mobile Auto Repair Indianapolis, IN",
  description:
    "Professional mobile mechanic services in Indianapolis and surrounding areas. We come to you for oil changes, brake repair, engine diagnostics, and more. Call (463) 249-8724.",
  keywords:
    "mobile mechanic, Indianapolis, auto repair, car repair, oil change, brake repair, engine repair, mobile auto service, Indiana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${tektur.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
