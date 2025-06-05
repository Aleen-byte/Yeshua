import {HeartHandshake } from 'lucide-react';


export function Hero(){
    return(
        <section className="text-white relative overflow-hidden h-[650px] md:h-[812px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/bg.jpg')"}}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="container mx-auto py-16 px-4 relative inset-0">

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-10">
                Conheça o Projeto Yeshua
            </h1>
            <p className="lg:text-lg">
                O Projeto Yeshua é uma iniciativa social dedicada ao cuidado de crianças e adolescentes em situação de vulnerabilidade. 
                Nosso compromisso é promover o acesso à educação, aos valores cristãos e à dignidade humana, formando jovens conscientes, 
                preparados e cheios de esperança para um futuro melhor. <br />
                Acreditamos que, com amor, fé e oportunidades, é possível mudar histórias e construir uma sociedade mais justa.
            </p>

            <div>
              <a 
              href="#"
              className="bg-[#03989e] px-5 py-2 rounded-md text-black font-semibold flex items-center
              justify-center w-fit gap-2"
              >
                <HeartHandshake className='w-5 h-5'/>
                Faça Parte
                </a>
            </div>
          </div>

        </article>

        </div>


    </section>
    )
}