import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
  title: 'Projeto Yeshua',
  description: 'Cristo vive',
}
export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">Página Nao Encontrada</h1>
            <p>Essa página nao existe ou nao esta disponivel no momneto</p>
            <Link href='/'>
            Voltar para a home
            </Link>
        </div>
    )
}