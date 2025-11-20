"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "@/components/globe"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations('hero')

  const scrollToNext = () => {
    const nextSection = document.querySelector("#que-hacemos")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 md:py-20 bg-background">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-xs font-medium text-primary">{t('badge')}</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] tracking-tight font-bold whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('title')}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t('subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="relative bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6 md:px-7 h-11 md:h-12 group overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000 before:ease-in-out"
              >
                {t('freeConsultation')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent font-medium px-6 md:px-7 h-11 md:h-12 bg-transparent"
              >
                {t('learnMore')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Globe */}
          <motion.div
            className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Globe />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium uppercase tracking-wider">{t('explore')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
