"use client"

import {motion, useInView} from "framer-motion"
import {useRef} from "react"
import Image from "next/image"
import {useTranslations} from 'next-intl'
import {scrollToNext} from "@/components/hero";

export function WhatWeDo() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: "-100px"})
    const t = useTranslations('whatWeDo')

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: {opacity: 0, y: 40},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    return (
        <section
            id="que-hacemos"
            className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden"
            ref={ref}
        >
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)]"/>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.7}}
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-20 space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                        {t('title')}
                    </h2>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                        {t('description')}
                    </p>
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <motion.button
                            onClick={() => scrollToNext('#contacto')}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors relative overflow-hidden group shadow-lg shadow-primary/20"
                        >
                            <span className="relative z-10">{t('startProject')}</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                initial={{x: "-100%"}}
                                whileHover={{x: "100%"}}
                                transition={{duration: 0.5}}
                            />
                        </motion.button>
                        <motion.button
                            onClick={() => scrollToNext('#servicios')}
                            whileHover={{x: 5}}
                            className="px-6 py-3 text-white font-medium hover:text-primary transition-colors inline-flex items-center gap-2 border border-white/20 rounded-lg hover:border-primary/50"
                        >
                            {t('viewServices')}
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                animate={{x: [0, 3, 0]}}
                                transition={{duration: 1.5, repeat: Number.POSITIVE_INFINITY}}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </motion.svg>
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
                >
                    {/* Left: Image card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{y: -8, transition: {duration: 0.3}}}
                        className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-slate-800 aspect-[3/4] group cursor-pointer border border-white/5"
                    >
                        <Image
                            src="/business-professional-working-on-laptop.png"
                            alt="Professional working"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        whileHover={{y: -8, transition: {duration: 0.3}}}
                        className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white p-8 flex flex-col justify-between aspect-[3/4] cursor-pointer shadow-xl shadow-primary/20 border border-blue-400/20"
                    >
                        <motion.div
                            animate={{y: [0, -5, 0]}}
                            transition={{duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                            className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </motion.div>
                        <div className="space-y-3">
                            <div className="text-4xl md:text-5xl font-bold">200+</div>
                            <p className="text-sm text-white/90">{t('clientsServed')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        whileHover={{y: -8, transition: {duration: 0.3}}}
                        className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-white p-8 flex flex-col justify-between aspect-[3/4] cursor-pointer group shadow-xl border border-slate-200"
                    >
                        <motion.div
                            animate={{rotate: [0, 10, 0]}}
                            transition={{duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut"}}
                            className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors"
                        >
                            <svg
                                className="w-7 h-7 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </motion.div>
                        <div className="text-center space-y-2">
                            <div
                                className="text-sm text-slate-600 uppercase tracking-wider">{t('projectsCompleted')}</div>
                            <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
                            <p className="text-xs text-slate-500">{t('successfulImplementations')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        whileHover={{y: -8, transition: {duration: 0.3}}}
                        className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-white p-8 flex flex-col justify-between aspect-[3/4] cursor-pointer group shadow-xl border border-slate-200"
                    >
                        <motion.div
                            animate={{rotate: 360}}
                            transition={{duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear"}}
                            className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors"
                        >
                            <svg
                                className="w-7 h-7 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </motion.div>
                        <div className="text-center space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary">15+</div>
                            <p className="text-sm text-slate-600">{t('yearsExperience')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        whileHover={{y: -8, transition: {duration: 0.3}}}
                        className="lg:col-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 flex flex-col items-center justify-center aspect-[3/4] cursor-pointer border border-white/10 shadow-xl"
                    >
                        <div
                            className="text-xs font-bold tracking-wider mb-6 uppercase text-slate-400">{t('ourApproach')}</div>
                        <motion.div
                            whileHover={{scale: 1.05}}
                            className="w-full max-w-[180px] aspect-[9/16] bg-white/5 rounded-3xl border-2 border-primary/30 p-3 backdrop-blur-sm shadow-lg shadow-primary/10"
                        >
                            <div
                                className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                                <motion.svg
                                    animate={{scale: [1, 1.1, 1]}}
                                    transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
                                    className="w-12 h-12 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </motion.svg>
                            </div>
                        </motion.div>
                        <p className="text-xs text-slate-400 mt-4 text-center">{t('measurableResults')}</p>
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.6, delay: 0.8}}
                        className="flex items-center gap-3 text-sm"
                    >
                        <span
                            className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"/>
                        <span className="text-slate-400 uppercase tracking-wider font-mono text-xs">
              {t('openToProjects')}
            </span>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.6, delay: 0.9}}
                        className="flex items-center justify-end gap-3 text-sm"
                    >
            <span className="text-slate-400 uppercase tracking-wider font-mono text-xs">
              {t('provenMethodology')}
            </span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
