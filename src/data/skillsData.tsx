import { ReactElement } from 'react'
import { FaCode, FaPalette, FaRobot, FaLightbulb} from 'react-icons/fa'

export type SkillCategory = {
  title: string
  icon: ReactElement
  skills: string[]
  color: string
}

const skillsCategories: SkillCategory[] = [
  { 
    title: 'Développement Frontend', 
    icon: <FaCode className="text-2xl text-blue-500" />,
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
    color: 'bg-blue-50'
  },
  { 
    title: 'Design', 
    icon: <FaPalette className="text-2xl text-blue-500" />,
    skills: ['Figma', 'Canva'],
    color: 'bg-purple-50'
  },
  { 
    title: 'Outils IA', 
    icon: <FaRobot className="text-2xl text-blue-500" />,
    skills: ['ChatGPT', 'DeepSeek', 'Gemini' ,'Prompt Engineering'],
    color: 'bg-green-50'
  },
  { 
    title: 'Backend', 
    icon: <FaCode className="text-2xl text-blue-500" />,
    skills: ['Node.js', 'Express', 'Flask', 'MongoDB', ],
    color: 'bg-yellow-50'
  },
  { 
    title: 'Burreautique', 
    icon: <FaLightbulb className="text-2xl text-blue-500" />,
    skills: ['Word', 'Excel', ],
    color: 'bg-red-50'
  },
 
]

export default skillsCategories
