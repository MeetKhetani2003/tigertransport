"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppCTA() {
  const phoneNumber = "919812773410"
  const message = "Hello Durga Transport Services India Pvt Ltd, I would like to get a quote for my logistics requirements."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block">
          Chat with us
        </span>
      </a>
    </motion.div>
  )
}
