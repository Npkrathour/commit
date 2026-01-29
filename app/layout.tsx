import type { Metadata } from "next";
import { Nunito, Work_Sans, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const work = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "One screen. One team. Full clarity.",
  description: "What you did. What you’re doing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${work.variable} ${inter.variable} antialiased`}
      >
        {children}
        
      </body>
    </html>
  );
}
