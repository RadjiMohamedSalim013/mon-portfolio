'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/profil.jpg" 
            alt="À propos de moi"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Passionné par <span className="text-blue-600">l{'\''}innovation technologique</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Je conçois des solutions web claires, fiables et adaptées aux besoins des utilisateurs. 
            Mon approche structurée et collaborative garantit des résultats concrets et durables.
          </p>
          <div className="space-y-4 mb-8">
            {["Expertise Full-Stack", "Design responsive", "Optimisation SEO"].map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            En savoir plus sur moi <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
