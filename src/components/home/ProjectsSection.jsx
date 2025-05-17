'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTools } from 'react-icons/fa'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      description: "Plateforme complète de vente en ligne avec paiement sécurisé, gestion de stock et tableau de bord admin.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project-1.jpg",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Réseau Social",
      description: "Application de réseau social avec fonctionnalités de publication, commentaires et chat en temps réel.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "/project-2.jpg",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Dashboard Analytique",
      description: "Outil de visualisation de données avec graphiques interactifs et export de rapports.",
      technologies: ["TypeScript", "D3.js", "Express"],
      image: "/project-3.jpg",
      githubLink: "#",
      liveLink: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Mes <span className="text-blue-600">réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions sur mesure combinant performance, design et expérience utilisateur
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col h-full">
              {/* Image du projet */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Contenu texte */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies utilisées */}
                <div className="mb-4">
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaTools className="mr-2 text-blue-500" />
                    <span className="font-medium">Technologies :</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Voir le projet <FaExternalLinkAlt className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/projects" 
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-full text-lg font-medium transition-all transform hover:scale-105"
          >
            Voir tous mes projets <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
