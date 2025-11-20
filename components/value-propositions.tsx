"use client"

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ValueProposition {
  title: string
  description: string
  image: string
}

const slides: ValueProposition[] = [
  {
    title: "¿Cómo generamos valor?",
    description: "Garantizamos el ROI de nuestros proyectos 1 a 1 por contrato.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
  {
    title: "Excelencia Operacional",
    description: "Transformamos procesos para maximizar eficiencia y reducir costos operativos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
  {
    title: "Cadena de Suministro",
    description: "Optimizamos su cadena de suministro de extremo a extremo con soluciones innovadoras.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
  {
    title: "Estrategia Empresarial",
    description: "Desarrollamos estrategias personalizadas que impulsan el crecimiento sostenible.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
  {
    title: "Transformación Digital",
    description: "Implementamos tecnologías que modernizan y agilizan sus operaciones.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
  {
    title: "Gestión del Cambio",
    description: "Acompañamos a su equipo en cada etapa del proceso de transformación.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
  {
    title: "Resultados Medibles",
    description: "Entregamos resultados tangibles y medibles en cada proyecto que emprendemos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-11-06%20a%20la%28s%29%2011.16.40%E2%80%AFa.m.-4x80XtmSeq2VklGkNI6ZYuuRDmnjZX.png",
  },
]

export function ValuePropositions() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
                  </div>

                  {/* Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      className="relative h-full flex items-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="max-w-2xl px-10 md:px-16 lg:px-20 space-y-6">
                        <motion.h3
                          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          {slide.title}
                        </motion.h3>
                        <motion.p
                          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <Button
                            variant="link"
                            className="text-primary hover:text-primary/80 p-0 h-auto text-base font-semibold group"
                          >
                            Leer más
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  )
}
