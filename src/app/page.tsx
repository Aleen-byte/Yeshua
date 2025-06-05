import { Metadata } from "next"
import { Hero } from "./_components/hero"
import { About } from "./_components/about"

export const metadata: Metadata = {
  title: 'Home',
  description: 'Cristo vive',
  openGraph:{
    title: 'Home',
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

export default function Home(){
  return(
    <main>
      <Hero />
      <About />
    </main>
   
  )
}