export type Projet = {
  id: number
  titre: string
  description: string
  image: string
  techno: string[]
  lien: string
  categorie: 'web' | 'design'
}

export const projets: Projet[] = [
  {
    id: 1,
    titre: "ProxiTalents",
    description: "ProxiTalent est une plateforme web dédiée à la mise en relation de talents et d'entreprises .",
    image: "/web/ProxiTalent.jpg",
    techno: ["MERN",  "Tailwind", 'HTML', 'MongoDB'],
    lien: "https://proxitalents-frontend.onrender.com",
    categorie: "web"
  },
  {
    id: 2,
    titre: "Affiche Rentrée Scolaire",
    description: "Conception d'affiche sans le cadre de la rentrée scolaire 2024-2025 pour une Assocation Islamique",
    image: "/affiche/jfsiscolaire.png",
    techno: ["canva"],
    lien: "https://drive.google.com/file/d/1XzxQQdP9MoobpQMpZtelJtaVS64W0tvP/view?usp=sharing",
    categorie: "design"
  },
  {
    id: 3,
    titre: "TodoApp",
    description: " Cette application permet aux utilisateurs de créer, lire, mettre à jour et supprimer des tâches avec une interface propre et réactive.",
    image: "/web/TodoApp.jpg",
    techno: ["React", "Node.js", "MongoDB"],
    lien: "https://todoappnext.onrender.com",
    categorie: "web"
  },
  {
    id: 4,
    titre: "HorairesApp ",
    description: "HorairesApp  une application web construite avec Node.js et Express. Elle permet de gérer l'accès à différentes pages en fonction des horaires de travail (du lundi au vendredi, de 9h à 17h)..",
    image: "/web/HorrairesApp.jpg",
    techno: [ "Node.js", "Express"],
    lien: "https://web-app-horaires.onrender.com/",
    categorie: "web"
  },
  {
    id: 5,
    titre: "Affiche Projets Salubrité Recyclage ",
    description: "Ceci est une affiche de projet de salubrité recyclage.",
    image: "/affiche/psr.png",
    techno: ["canva", "chatGpt"],
    lien: "https://drive.google.com/file/d/1L7iu86HLRrIWgcoRoOyL00cZSpJoB4Gz/view?usp=sharing",
    categorie: "web"
  },
  {
    id: 6,
    titre: "mini-calculatrice",
    description: "Conception d'une mini-calculatrice avec interface graphique.",
    image: "/web/MiniCalculatrice.jpg",
    techno: ["HTML", "Taillwind", "JavaScript"],
    lien: "https://mini-calculatrice.vercel.app/",
    categorie: "web"
  }
]
