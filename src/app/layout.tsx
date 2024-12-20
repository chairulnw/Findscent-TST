"use client";

import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider

// Import font lokal
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Bungkus aplikasi dengan SessionProvider */}
        <SessionProvider>
          <main className="min-h-screen">{children}</main> {/* Konten Utama */}
        </SessionProvider>
      </body>
    </html>
  );
}
