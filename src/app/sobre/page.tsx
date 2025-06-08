import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Cristo vive',
  openGraph:{
    title: 'Sobre',
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

export default function Sobre(){
    return(
        <main>
            <div>
                Sobre
            </div>
        </main>
    )
}