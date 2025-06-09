
export function Loc(){
    return(
        <section className="bg-[#5ba08e] text-white relative overflow-hidden h-[550px] md:h-[812px] bg-cover bg-center px-5 flex items-center">
            
            <div className="container mx-auto py-16 md:px-4 relative md:pt-50">

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        Onde Estamos
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minima animi enim placeat quaerat, vero facere veritatis aspernatur ducimus ipsam non. Ad, quia a placeat commodi ex vitae enim deleniti!
                    </p>
                </div>

                <div className="w-full h-[300px] md:h-[450px]">
                    <iframe
                        title="Localização do Projeto Yeshua" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7949.478923711041!2d-42.836289080946266!3d-4.982900055840807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e3f3d5f1ec503%3A0x201d343195c28239!2sPROJETO%20SOCIAL%20YESHUA!5e0!3m2!1spt-BR!2sbr!4v1749494845660!5m2!1spt-BR!2sbr" 
                        width="100%"
                        height="100%"
                        loading="lazy"
                        className="rounded-xl border-none"
                        allowFullScreen
                        ></iframe>
                </div>

            </article>


            </div>
        </section>
    )
}