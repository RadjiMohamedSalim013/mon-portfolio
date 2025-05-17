'use client'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSuccess(true)
      setFormData({ nom: '', email: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Titre */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact 
          </h1>
         
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Section Informations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mes coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Localisation</h3>
                  <p className="text-gray-600">Abidjan, Côte d'Ivoire</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:contact@votrenom.com" 
                    className="text-blue-600 hover:underline"
                  >
                    radjimohamed013@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <a 
                    href="tel:+2250000000000" 
                    className="text-gray-600 hover:text-blue-600"
                  >
                    +225 07 58 91 38 73
                  </a>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tonusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-gray-700 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://linkedin.com/in/tonprofil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-blue-700 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://twitter.com/tonpseudo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-blue-50 p-3 rounded-full text-blue-500 transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Section Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez un message</h2>
            
            {success ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg inline-flex items-center">
                  <FaPaperPlane className="mr-2" />
                  <span>Message envoyé avec succès !</span>
                </div>
                <p className="mt-6 text-gray-600">
                  Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Nouveau message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}