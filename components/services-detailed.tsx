"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslations } from "next-intl"

const MinimalistIcon = ({ path, className = "" }: { path: string; className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
)

const consultingServices = [
  {
    id: "processImprovement",
    iconPath: "M32 12 L32 52 M20 24 L32 12 L44 24 M24 52 L40 52",
  },
  {
    id: "processAutomation",
    iconPath:
      "M24 20 L40 20 M28 28 L36 28 M32 36 L32 44 M20 32 C20 26 24 20 32 20 C40 20 44 26 44 32 C44 38 40 44 32 44 C24 44 20 38 20 32",
  },
  {
    id: "informationTechnology",
    iconPath: "M16 20 L48 20 L48 48 L16 48 Z M16 28 L48 28 M24 36 L28 36 M32 36 L40 36",
  },
  {
    id: "supplyChainOptimization",
    iconPath:
      "M12 32 L24 32 L32 16 L40 32 L52 32 M20 40 C20 42 18 44 16 44 C14 44 12 42 12 40 C12 38 14 36 16 36 C18 36 20 38 20 40 M52 40 C52 42 50 44 48 44 C46 44 44 42 44 40 C44 38 46 36 48 36 C50 36 52 38 52 40",
  },
  {
    id: "processCertifications",
    iconPath: "M16 24 L28 24 L28 16 L36 16 L36 24 L48 24 L48 48 L16 48 Z M32 32 L32 40 M28 36 L36 36",
  },
  {
    id: "leanManufacturing",
    iconPath: "M20 24 L44 24 M20 32 L44 32 M20 40 L44 40 M16 16 L48 16 L48 48 L16 48 Z",
  },
  {
    id: "profitabilityIncrease",
    iconPath: "M16 44 L24 36 L32 40 L40 28 L48 32 M40 28 L48 28 L48 32",
  },
  {
    id: "costOptimization",
    iconPath:
      "M32 16 C38 16 44 22 44 28 C44 34 38 40 32 40 C26 40 20 34 20 28 C20 22 26 16 32 16 M28 26 L32 26 L32 30 L34 30 M32 34 L32 36",
  },
  {
    id: "tpm",
    iconPath: "M32 16 L32 24 M20 20 L24 24 M44 20 L40 24 M16 28 L48 28 L44 44 L20 44 Z",
  },
  {
    id: "strategicPlanning",
    iconPath: "M16 32 L32 16 L48 32 M24 32 L24 44 L40 44 L40 32 M28 36 L28 44 M32 36 L32 44 M36 36 L36 44",
  },
  {
    id: "businessIntelligence",
    iconPath:
      "M32 16 C38 16 44 20 44 28 C44 32 42 36 38 38 L38 48 L26 48 L26 38 C22 36 20 32 20 28 C20 20 26 16 32 16 M32 24 L32 32",
  },
  {
    id: "organizationalDevelopment",
    iconPath: "M16 20 L20 20 L20 44 L16 44 Z M28 28 L32 28 L32 44 L28 44 Z M40 24 L44 24 L44 44 L40 44 Z",
  },
] as const

export function ServicesDetailed() {
  const t = useTranslations("servicesDetailed")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const duplicatedServices = [...consultingServices, ...consultingServices]

  return (
    <section
      ref={ref}
      id="servicios"
      className="py-16 md:py-24 lg:py-40 bg-gradient-to-b from-muted/30 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[500px_1fr] gap-6 md:gap-8 lg:gap-16 items-start mb-12 md:mb-20 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground">
              {t("titlePrefix")} <span className="text-muted-foreground/40">{t("titleHighlight")}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pt-4"
          >
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t("intro")}</p>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-20" />

        <div className="relative mb-6 md:mb-8">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedServices.slice(0, 8).map((service, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 w-[280px] md:w-[380px] bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <MinimalistIcon
                    path={service.iconPath}
                    className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{t(`items.${service.id}.title`)}</h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t(`items.${service.id}.description`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{
              x: [-1600, 0],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {duplicatedServices.slice(4, 12).map((service, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 w-[280px] md:w-[380px] bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="mb-4 md:mb-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <MinimalistIcon
                    path={service.iconPath}
                    className="w-10 h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{t(`items.${service.id}.title`)}</h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t(`items.${service.id}.description`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
