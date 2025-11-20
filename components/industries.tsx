"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Car,
  Building2,
  ShoppingBag,
  Shield,
  Factory,
  Mountain,
  Store,
  Radio,
  Truck,
  Landmark,
  Shirt,
  Beaker,
} from "lucide-react"

const industries = [
  { name: "Automotriz", category: "Manufactura", icon: Car, gradient: "from-blue-500 to-cyan-500" },
  { name: "Bancos", category: "Servicios Financieros", icon: Building2, gradient: "from-blue-600 to-indigo-600" },
  { name: "Consumo", category: "Retail", icon: ShoppingBag, gradient: "from-cyan-500 to-blue-500" },
  { name: "Seguros", category: "Servicios Financieros", icon: Shield, gradient: "from-indigo-600 to-blue-600" },
  { name: "Manufactura", category: "Industria", icon: Factory, gradient: "from-blue-500 to-blue-600" },
  { name: "Minería y Metales", category: "Recursos", icon: Mountain, gradient: "from-slate-600 to-blue-600" },
  { name: "Retail", category: "Comercio", icon: Store, gradient: "from-cyan-400 to-blue-500" },
  { name: "Telecomunicaciones", category: "Tecnología", icon: Radio, gradient: "from-blue-600 to-indigo-500" },
  { name: "Logística y Transporte", category: "Servicios", icon: Truck, gradient: "from-blue-500 to-cyan-600" },
  { name: "Gobierno", category: "Sector Público", icon: Landmark, gradient: "from-indigo-700 to-blue-700" },
  { name: "Textil", category: "Manufactura", icon: Shirt, gradient: "from-cyan-500 to-blue-400" },
  { name: "Química", category: "Industria", icon: Beaker, gradient: "from-blue-600 to-cyan-600" },
]

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      id="industrias"
      className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Experiencia Multisectorial
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Industrias que{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Transformamos
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especializados en optimización de procesos SAP S/4HANA para múltiples sectores industriales
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  className="relative h-full bg-white border border-border/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}
                  />

                  {/* Icon container */}
                  <div className="relative mb-4">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} p-3 shadow-lg`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300">
                      {industry.category}
                    </span>
                  </div>

                  {/* Industry name */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 mb-2 text-balance">
                    {industry.name}
                  </h3>

                  {/* Animated accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                    className={`h-1 rounded-full bg-gradient-to-r ${industry.gradient} mt-4`}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿No encuentras tu industria?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contáctanos para soluciones personalizadas adaptadas a las necesidades específicas de tu sector
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Hablar con un experto
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
