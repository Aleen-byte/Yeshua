'use client'
import Link from "next/link"
import { X , AlignRight} from "lucide-react";
import { useState } from "react";

export function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <header className="flex px-2 py-4 bg-gray-200 text-whitw h-[60px] md:h-[80px]">
            <div className="flex items-center justify-between w-full mx-2 md:mx-5 max-w-auto text-[#03989e] font-bold text-[16px]">
                <a href="/" className="text-[#03989e] font-bold text-2xl flex gap-2 items-center mt-2">
                    <img className="w-12 md:w-16 h-auto" src="/images/logoyeshua.png" alt="Logo"/>
                </a>

                <nav className="ml-auto">
                    <ul className="hidden xl:flex items-center justify-center gap-20">
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
                            <Link href='/sobre'>
                                Sobre
                            </Link>
                        </li>
                        <li className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full hover:scale-105">
                            <Link href='/contatos'>
                                Contatos
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="xl:hidden block text-5xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <AlignRight/>}
                </button>

                <ul
                    className={`absolute xl:hidden top-14 md:top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-xl transform transition-all duration-300 z-50 ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-5 pointer-events-none"
                     }`}
                 >
                    <li className="list-none w-full text-center p-4 hover:bg-[#03989e] hover:text-white transition-all cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-[#03989e] hover:text-white transition-all cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link href="/contatos">Contatos</Link>
                    </li>
                    <li className="list-none w-full text-center p-4 hover:bg-[#03989e]  hover:text-white transition-all cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Link href="/sobre">Sobre</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}