
import "./globals.css";

import { Header } from '../components/header';
import { Metadata } from "next";
import Head from 'next/head';

<Head>
  <link rel="preload" href="/images/bg1.png" as="image" />
  <link rel="preload" href="/images/bg2.png" as="image" />
  <link rel="preload" href="/images/bg3.png" as="image" />
</Head>


export const metadata: Metadata = {
  title: 'Projeto Yeshua',
  description: 'Cristo vive',
  icons: {
    icon: 'src/app/favicon.jpg',
  },
  openGraph:{
    title: 'Projeto Yeshua',
    description: 'Cristo vive'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />

        {children}
      </body>
    </html>
  );
}
