import { Metadata } from "next"
import { Hero } from "./_components/hero"
import { About } from "./_components/about"
import { Suport } from "./_components/suport"
import { Voluntary } from "./_components/voluntary"
import { Apoiadores } from "./_components/apoiadores"
import { Loc } from "./_components/loc"

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
      <Voluntary />
      <Suport />
      <Apoiadores />
      <Loc />
    </main>
   
  )
}