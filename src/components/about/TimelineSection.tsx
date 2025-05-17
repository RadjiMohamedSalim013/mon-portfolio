'use client'
import { FaGraduationCap,  } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TimelineSection() {
  const timelineItems = [
    { 
      year: '2025 - Aujourd\'hui', 
      title: 'Université Virtuelle de Cote d\'Ivoire', 
      icon: <FaGraduationCap className="text-blue-500" />,
      description: 'Licence 3: Developpement D\'applications et e-services'
    },
    { 
      year: '2025- Aujourd\'hui', 
      title: 'GOYMACODE', 
      icon: <FaGraduationCap className="text-blue-500" />,
      description: 'certification Developpeur Fullstask'
    },
    { 
      year: '2021 - 2022', 
      title: 'BAC D', 
      icon: <FaGraduationCap className="text-blue-500" />,
      description: 'Lycée Moderne de Port Bouet'
    }
  ]

  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        <span className="relative">
          Mon parcours
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30"></span>
        </span>
      </h2>

      <div className="relative">
        <div className="absolute left-6 h-full w-0.5 bg-blue-500/20 transform -translate-x-1/2"></div>
        
        {timelineItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-16 pb-10"
          >
            <div className="absolute left-6 w-8 h-8 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center transform -translate-x-1/2">
              {item.icon}
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <span className="text-blue-500 font-medium">{item.year}</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
