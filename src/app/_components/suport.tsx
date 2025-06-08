
export function Suport() {
    return(
        <section className="bg-[#5ba08e] text-white relative overflow-hidden h-[550px] md:h-[812px] bg-cover bg-center flex items-center">
            
            <div className="container mx-auto py-16 md:px-4 relative md:pt-50">

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        Ajude o Projeto
                    </h1>
                    <p className="lg:text-lg">
                        ssitatibus iusto, praesentium doloribus dicta eaque suscipit sed quae ex deserunt temporibus repellendus molestiae!
                    </p>

                    <div>
                        <a
                             href="/sobre"
                            className="border-2 border-gray-300 px-5 py-[15px] rounded-[12px] text-white font-semibold flex items-center justify-center w-full gap-2 md:w-60 hover:border-white hover:bg-white hover:text-[#17acb2] transition-colors duration-300 ease-in-out">
                            Mais Sobre
                        </a>
                    </div>

                </div>
            </article>


            </div>
        </section>
    )
}