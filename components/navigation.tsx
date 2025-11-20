"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import {LogoLight} from "@/components/logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('navigation')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = [
    { href: "#servicios", label: t('services') },
    { href: "#industrias", label: t('industries') },
    { href: "#nosotros", label: t('about') },
    { href: "#contacto", label: t('contact') },
  ]

  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${currentPath}`)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/80 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 bg-white">
          <div className="flex items-center justify-between h-16">
            <Link href={`/${locale}`} className="flex items-center relative z-[10001] bg-transparent">
                <LogoLight  />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="relative group">
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{locale}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => switchLocale('es')}
                    className="block px-4 py-2 text-sm hover:bg-accent w-full text-left"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className="block px-4 py-2 text-sm hover:bg-accent w-full text-left"
                  >
                    English
                  </button>
                </div>
              </div>

              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-5 h-9">
                {t('talkToUs')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground relative z-[10001]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[10000] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white z-[10001] md:hidden overflow-y-auto"
              style={{ backgroundColor: "#ffffff" }}
            >
              {/* Full screen container with centered content */}
              <div className="min-h-full flex flex-col items-center justify-between p-8 py-20">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Logo at top */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="pt-4"
                >
                  <Image
                    src="/images/design-mode/ChatGPT%20Image%207%20nov%202025%2C%2002_49_27%20p.m.png"
                    alt="GENCO Consulting"
                    width={200}
                    height={60}
                    className="w-auto h-12"
                  />
                </motion.div>

                {/* Centered menu items */}
                <nav className="flex flex-col items-center justify-center flex-1 gap-3 w-full max-w-md">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        className="block text-center text-4xl font-bold text-foreground hover:text-primary transition-colors py-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex gap-4 pt-4"
                  >
                    <button
                      onClick={() => {
                        switchLocale('es')
                        setIsOpen(false)
                      }}
                      className={`px-4 py-2 rounded-lg ${locale === 'es' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                    >
                      Español
                    </button>
                    <button
                      onClick={() => {
                        switchLocale('en')
                        setIsOpen(false)
                      }}
                      className={`px-4 py-2 rounded-lg ${locale === 'en' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                    >
                      English
                    </button>
                  </motion.div>
                </nav>

                {/* CTA Button at bottom */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="w-full max-w-md pb-4"
                >
                  <Button
                    size="lg"
                    className="w-full h-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('talkToUs')}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Transformamos negocios con consultoría estratégica
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
