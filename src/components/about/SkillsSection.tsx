'use client'
import { motion } from 'framer-motion'
import skillsCategories, { SkillCategory } from '@/data/skillsData' // adapte le chemin

export default function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        <span className="relative">
          Mes compétences
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/30"></span>
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsCategories.map((category: SkillCategory, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl ${category.color} hover:shadow-md transition-shadow border border-gray-200`}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-white mr-4 shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="bg-white/80 text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
