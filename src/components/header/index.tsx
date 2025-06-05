import Link from "next/link"

export function Header(){
    return(
        <header className="flex px-2 py-4 bg-gray-200 text-whitw h-[60px] md:h-[80px]">
            <div className="flex items-center justify-between w-full mx-10 max-w-7x1 text-[#03989e] font-bold text-[16px]">
                <a href="/" className="text-[#03989e] font-bold text-2xl flex gap-2 items-center">
                    <img src="/images/logo.jpg" alt="Logo" width="48px"/>
                    <span>Yeshua</span>
                </a>

                <nav className="mx-20">
                    <ul className="flex items-center justify-center gap-20">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/contatos'>
                                Contatos
                            </Link>
                        </li>
                        <li>
                            <Link href='/sobre'>
                                Sobre
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}