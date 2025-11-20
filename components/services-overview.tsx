"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ServiceCategory {
  category: string
  items: string[]
}

const servicesData: ServiceCategory[] = [
  {
    category: "Procesos",
    items: [
      "Mejora de Procesos",
      "Automatización de Procesos",
      "Tecnologías de Información y Comunicaciones",
      "Optimización de la Cadena de Suministros",
      "Certificaciones de Procesos",
    ],
  },
  {
    category: "Operaciones",
    items: [
      "Manufactura Esbelta",
      "Aumento de la Rentabilidad",
      "Optimización de Costos",
      "TPM",
      "Planeación Estratégica",
      "Business Intelligence",
      "Desarrollo Organizacional",
    ],
  },
]

export function ServicesOverview() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 lg:py-36 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Potenciando tu éxito <span className="text-muted-foreground">con nuestras soluciones</span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-foreground">Bienvenida del Director</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Empoderamos a las organizaciones para tomar el control de sus operaciones con herramientas orientadas al
                usuario. Desde el seguimiento de procesos hasta la planificación estratégica personalizada, nuestra
                plataforma ayuda a gestionar la transformación empresarial fácilmente.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-foreground">Conociendo mejor nuestra metodología</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Nuestra plataforma de consultoría simplifica la gestión empresarial. Ya sea mejora de procesos, ahorro,
                inversión o seguimiento de rendimiento, es fácil con nuestras poderosas herramientas.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { number: "15+", label: "Años de Experiencia" },
            { number: "200+", label: "Proyectos Completados" },
            { number: "4.9/5.0", label: "Satisfacción del Cliente" },
            { number: "98%", label: "Tasa de Retención" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
