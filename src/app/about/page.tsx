'use client'

import HeroSection from '@/components/about/HeroSection'  
import TimelineSection from '@/components/about/TimelineSection'
import SkillsSection from '@/components/about/SkillsSection'
import InitiativesSection from '@/components/about/InitiativesSection'
export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <InitiativesSection />
    </main>
  )
}