'use client'
import { HeartHandshake } from 'lucide-react'
import { useEffect, useState } from 'react'

const images = [
  "/images/yeshua1.jpg",
  "/images/yeshua2.jpg",
  "/images/yeshua3.jpg",
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setIsFading(false)
      }, 1000) // tempo do fade
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[900px] flex items-center overflow-hidden bg-gray-400">
      {/* Todas as imagens sobrepostas */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"} pointer-events-none`}
          style={{ backgroundImage: `url(${image})`,
                    backgroundColor: "#9CA3AF" }}
        />
      ))}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black opacity-65 z-20"></div>

      {/* Conteúdo */}
      <div className="container mx-auto py-16 px-4 relative z-30 text-white">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
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
                className="bg-[#03989e] px-5 py-2 rounded-md text-black font-semibold flex items-center justify-center w-fit gap-2"
              >
                <HeartHandshake className='w-5 h-5' />
                Faça Parte
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
