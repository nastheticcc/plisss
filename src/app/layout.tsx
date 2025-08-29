'use client';
import "./globals.css"; 
import { ReactNode } from "react";

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-pink-300 text-black min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
