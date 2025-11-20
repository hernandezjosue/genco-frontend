"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const t = useTranslations('contact')

    return (
        <section id="contacto" className="relative md:py-32 bg-white overflow-hidden lg:py-0 py-0" ref={ref}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Side - Contact Information */}
                    <motion.div
                        className="space-y-8 lg:pt-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight lg:text-4xl whitespace-pre-line">
                                {t('title')}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                                {t('description')}
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            {/* === CONTACT INFO FROM IMAGE === */}
                            <div className="space-y-2">
                                {/* Updated Email */}
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{t('email')}</p>
                                <p className="font-bold text-foreground text-lg">inquiry@starthubcenters.com</p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    {/* Updated Phone for Miami, FL */}
                                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">MIAMI, FL</p>
                                    <p className="font-bold text-foreground text-lg">+1 (888)-404-4405</p>
                                </div>

                                {/* The previous Mexico number section has been removed */}

                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-10 lg:p-12 border border-gray-200 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                                            {t('form.firstName')}
                                        </Label>
                                        <Input
                                            id="firstName"
                                            placeholder={t('form.firstNamePlaceholder')}
                                            className="h-12 bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                                            {t('form.lastName')}
                                        </Label>
                                        <Input
                                            id="lastName"
                                            placeholder={t('form.lastNamePlaceholder')}
                                            className="h-12 bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                                        {t('form.email')}
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={t('form.emailPlaceholder')}
                                        className="h-12 bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                                        {t('form.message')}
                                    </Label>
                                    <Textarea
                                        id="message"
                                        rows={6}
                                        placeholder={t('form.messagePlaceholder')}
                                        className="bg-white border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="bg-foreground text-background hover:bg-foreground/90 h-14 px-10 rounded-full font-semibold text-base group"
                                    >
                                        {t('form.submit')}
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full bg-foreground mt-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-4">{t('footer.company')}</h3>
                            <p className="text-sm text-white/70 leading-relaxed">{t('footer.tagline')}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">{t('footer.services')}</h4>
                            <nav className="flex flex-col space-y-2 text-sm text-white/70">
                                <a href="#servicios" className="hover:text-white transition-colors">
                                    {t('footer.consulting')}
                                </a>
                                <a href="#industrias" className="hover:text-white transition-colors">
                                    {t('footer.industries')}
                                </a>
                            </nav>
                        </div>
                        {/* Removed the 'Mexico' column since only one number is provided */}
                        <div>
                            {/* Updated Phone for Miami, FL */}
                            <h4 className="text-sm font-semibold text-white mb-4">MIAMI, FL</h4>
                            <p className="text-sm text-white/70">+1 (888)-404-4405</p>
                        </div>
                        {/* Empty slot or other relevant info if needed */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-4">{t('email')}</h4>
                            <p className="text-sm text-white/70">inquiry@starthubcenters.com</p>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 text-center">
                        <p className="text-sm text-white/60">
                            © {new Date().getFullYear()} {t('footer.copyright')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}