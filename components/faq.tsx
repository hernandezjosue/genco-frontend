"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import { useTranslations } from 'next-intl'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)
  const t = useTranslations('faq')

  const faqKeys = ['transform', 'services', 'sizes', 'timeline', 'success'] as const

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Image and Title */}
          <div className="space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm uppercase tracking-wider mb-4"
              >
                {t('label')}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              >
                {t('title')}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/hero-image.png"
                alt="Equipo profesional trabajando juntos"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t(`questions.${key}.question`)}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-base text-muted-foreground leading-relaxed">
                    {t(`questions.${key}.answer`)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
