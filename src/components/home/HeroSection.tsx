// components/Home/HeroSection.jsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Background" fill className="object-cover" priority quality={100} />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/30"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="relative inline-block">
            <Image src="/profil.jpg" alt="Profil" width={150} height={150} className="rounded-full border-4 border-white/90 shadow-xl" />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          <span className="relative">
            <span className="absolute inset-0 bg-black/20 blur-md rounded-full"></span>
            <span className="relative text-blue-400">Bonjour,</span>
          </span> je suis <span className="text-white relative">Radji Mohamed Salim<span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400/80"></span></span>
        </h1>

        <h2 className="inline-block text-xl md:text-2xl font-semibold text-white mb-8 px-4 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
          Développeur Full-Stack | Créateur d{'\''}expériences digitales
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/projects" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-white/20">
            Explorer mon travail <FaArrowRight />
          </Link>
          <Link href="/contact" className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-white/20">
            Discutons de votre projet
          </Link>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="https://github.com/RadjiMohamedSalim013" className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/10">
            <FaGithub size={20} />
          </a>
          <a href="www.linkedin.com/in/mohamed-salim-radji-0496b4257" className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/10">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}
