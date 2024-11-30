import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import { CookiesProvider } from 'next-client-cookies/server';

import prisma from "@/lib/prismadb";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Birag",
  description: "Birag is the best",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <ModalProvider/>
      <ToasterProvider />
        <CookiesProvider>
          {children}
        </CookiesProvider>
      </body>
    </html>
  );
}
