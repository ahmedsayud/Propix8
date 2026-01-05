"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const cairo = localFont({
  src: [
    {
      path: "../public/font/Cairo-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/font/Cairo-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/font/Cairo-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/font/Cairo-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/font/Cairo-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/font/Cairo-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/font/Cairo-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/font/Cairo-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-cairo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password";

  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased`}
      >
        {!isAuthPage && <Navbar />}
        {children}
        {!isAuthPage && <Footer />}
      </body>
    </html>
  );
}
