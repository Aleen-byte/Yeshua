
import "./globals.css";

import { Header } from '../components/header'
import { Metadata } from "next";

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
