"use client"

import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const messages = [
    "¿Necesitas optimizar tus procesos?",
    "Consulta gratuita disponible",
    "¿Hablamos de tu proyecto?",
    "Expertos en manufactura esbelta",
  ]

  // Replace with your actual WhatsApp number
  const whatsappNumber = "5215536874009"
  const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios de consultoría.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const scheduleNextMessage = (isFirst = false) => {
      // First message after 5 seconds, subsequent messages between 15-30 seconds
      const delay = isFirst ? 5000 : Math.random() * 15000 + 15000

      timeoutId = setTimeout(() => {
        setShowMessage(true)

        // Hide message after 5 seconds
        setTimeout(() => {
          setShowMessage(false)

          // Change to next message during fade out
          setTimeout(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
          }, 300)
        }, 5000)

        // Schedule next message appearance
        scheduleNextMessage()
      }, delay)
    }

    // Start the cycle
    scheduleNextMessage(true)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [messages.length])

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence mode="wait">
        {showMessage && (
          <motion.div
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 10, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -5, x: 10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-20 right-0 mb-2"
          >
            <div className="bg-background border border-border rounded-2xl px-5 py-3.5 shadow-xl backdrop-blur-sm min-w-[280px] max-w-[320px]">
              <p className="text-sm text-foreground leading-relaxed">{messages[currentMessageIndex]}</p>
              {/* Tail pointing to button */}
              <div className="absolute -bottom-1.5 right-8">
                <div className="w-4 h-4 bg-background border-r border-b border-border rotate-45" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-14 h-14 bg-foreground rounded-full shadow-md flex items-center justify-center border border-border/20"
          animate={{
            boxShadow: isHovered ? "0 8px 24px rgba(0, 0, 0, 0.15)" : "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MessageCircle className="w-6 h-6 text-background" strokeWidth={2} />
        </motion.div>
      </motion.a>
    </div>
  )
}
