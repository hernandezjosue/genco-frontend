import { Hero } from "@/components/hero"
import { WhatWeDo } from "@/components/what-we-do"
import { ServicesDetailed } from "@/components/services-detailed"
import { Industries } from "@/components/industries"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <WhatWeDo />
      <ServicesDetailed />
      <Industries />
{/*
      <FAQ />
*/}
      <Contact />
{/*
      <WhatsAppButton />
*/}
    </main>
  )
}
