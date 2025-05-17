'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { projets, Projet } from '@/data/projets'  
import FilterButtons from '@/components/projects/FilterButtons'

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'design'>('all')

  const filteredProjects = filter === 'all' 
    ? projets 
    : projets.filter(p => p.categorie === filter)

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Mes <span className="text-blue-600">réalisations</span>
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez une sélection de mes projets web et créations graphiques
        </p>
      </section>

      {/* Filtres */}
      <div className="max-w-6xl mx-auto mb-12 flex justify-center">
        <FilterButtons filter={filter} setFilter={setFilter} />
      </div>

      {/* Grille de projets */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((projet: Projet) => (
          <motion.article
            key={projet.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Badge de catégorie */}
            <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${projet.categorie === 'web' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
              {projet.categorie === 'web' ? 'Web' : 'Design'}
            </div>

            {/* Image du projet */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={projet.image}
                alt={projet.titre}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Contenu texte */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{projet.titre}</h2>
              <p className="text-gray-600 mb-4">{projet.description}</p>
              
              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {projet.techno.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-full ${projet.categorie === 'web' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bouton */}
              <a
                href={projet.lien}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-4 py-2 rounded-lg ${projet.categorie === 'web' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white transition-colors`}
              >
                Voir le projet <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  )
}
