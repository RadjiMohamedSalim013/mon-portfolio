'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLightbulb, FaUsers, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

export default function InitiativesSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 bg-white">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          <span className="relative">
            Autres
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30"></span>
          </span>
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Projets Collective  en cours de développement visant a créer une communauté dynamique et collaborative autour de l&apos;innovation technologique et de l&apos;entrepreneuriat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Initiative 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
        >
          <div className="relative h-48">
            <Image
              src="/esprit_TIC.jpg"
              alt="Initiative EspritTIC"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center w-max">
                <FaLightbulb className="mr-2" /> Communauté Tech
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">EspritTIC</h3>
            <p className="text-gray-600 mb-6">
              Notre initiative vise la promotion de la technologie et de l&apos;innovation dans la communauté.            </p>
            <div className="flex justify-between items-center">

              <a 
                href="https://www.facebook.com/profile.php?id=61567946667611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                Visiter Notre page facebook <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Initiative 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
        >
          <div className="relative h-48">
            <Image
              src="/initiative-1.jpg"
              alt="Initiative EspritEntrepreneurial"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center w-max">
                <FaUsers className="mr-2" /> Entrepreneuriat
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">EspritEntrepreneurial</h3>
            <p className="text-gray-600 mb-6">
              Une plateforme dédiée à l&apos;entrepreneuriat, visant à connecter les entrepreneurs et à favoriser l&apos;innovation.
            </p>
            <div className="flex justify-between items-center">

              <a 
                href="https://www.facebook.com/profile.php?id=61568523742249" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                Visiter Notre page facebook <FaExternalLinkAlt className="ml-2 text-sm" />
                
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-600 mb-6">Vous avez un projet similaire ou souhaitez collaborer ?</p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg"
        >
          Parlons-en ensemble
        </a>
      </motion.div>
    </section>
  )
}
