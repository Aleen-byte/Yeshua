
import { ArrowRight } from 'lucide-react';

export function About(){
    return(
        <section className="bg-[#17acb2] bg-cover bg-center text-white relative overflow-hidden h-[550px] md:h-[812px] px-5 flex items-center"
                 style={{backgroundImage: "url('/images/fundo1 (1).png')"}}>
            
            
            
            <div className="container mx-auto py-16 md:px-4 relative md:pt-50">

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        Venha conhecer o projeto Yeshua
                    </h1>
                    <p className="lg:text-lg">
                        ssitatibus iusto, praesentium doloribus dicta eaque suscipit sed quae ex deserunt temporibus repellendus molestiae!
                    </p>

                    <div>
                        <a
                             href="/sobre"
                            className="border-2 bg-white border-white px-5 py-[15px] rounded-[12px] text-[#183b47] font-bold flex items-center justify-center w-full gap-2 md:w-60 hover:border-white hover:bg-transparent hover:text-white transition-colors duration-300 ease-in-out">
                            Mais Sobre
                            <ArrowRight />
                        </a>
                    </div>

                </div>
            </article>


            </div>
        </section>
    )
}