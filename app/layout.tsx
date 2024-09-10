import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import Navbar from '@/components/navbar/Navbar';
import Providers from './providers';
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "World travel",
  description: "travel around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang='en' suppressHydrationWarning>
    <body className={inter.className}>
      <Providers>
      <Navbar />
      <main className='container py-10'>{children}</main>
      </Providers>
      
    </body>
  </html>
  </ClerkProvider>
  );
}
