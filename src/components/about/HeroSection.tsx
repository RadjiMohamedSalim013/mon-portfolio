'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto text-center pt-20 pb-16 px-4 sm:px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      >
        Passionné par le <span className="text-blue-600">développement</span> et l'<span className="text-blue-600">innovation</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        Je crée des expériences digitales qui marient performance technique et élégance visuelle, avec une approche centrée sur l'utilisateur.
      </motion.p>
    </section>
  )
}
