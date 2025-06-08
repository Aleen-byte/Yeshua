
export function Voluntary() {
return(
    <section className="bg-[#248ba5] text-white relative overflow-hidden h-[550px] md:h-[812px] px-5 bg-cover bg-right md:bg-[length:200%] lg:bg-cover lg:bg-center flex items-center justify-center"
             style={{backgroundImage: "url('/images/fundo1 (2).png')"}}>
        <div className="container mx-auto pb-16 md:px-4 relative md:pt-0">

            <article className="flex">
                <div className="lg:w-165">

                </div>
                <div className="space-y-6">
                    <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold leading-10 pb-10">
                        Seja um Voluntário
                    </h1>
                    <p className="lg:text-lg">
                        ssitatibus iusto, praesentium doloribus dicta eaque suscipit sed quae ex deserunt temporibus repellendus molestiae!
                    </p>

                    <div>
                        <a
                             href="/sobre"
                            className="border-2 border-white px-5 py-[15px] rounded-[12px] text-white font-bold flex items-center justify-center w-full gap-2 md:w-60 hover:bg-white hover:text-[#248ba5] transition-colors duration-300 ease-in-out">
                            Quero ser um voluntário 
                        </a>
                    </div>

                </div>
            </article>


            </div>
    </section>
)
}