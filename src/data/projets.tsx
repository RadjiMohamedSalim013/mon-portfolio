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
    titre: "Portfolio Next.js",
    description: "Mon portfolio professionnel réalisé avec les dernières technologies web modernes.",
    image: "/projects/portfolio.png",
    techno: ["Next.js", "TypeScript", "Tailwind"],
    lien: "#",
    categorie: "web"
  },
  {
    id: 2,
    titre: "Affiche Festival",
    description: "Conception d'affiche pour un festival culturel local avec approche minimaliste.",
    image: "/projects/affiche-festival.png",
    techno: ["Photoshop", "Illustrator"],
    lien: "#",
    categorie: "design"
  },
  {
    id: 3,
    titre: "Application E-commerce",
    description: "Plateforme complète avec gestion de panier, paiement et espace admin.",
    image: "/projects/ecommerce.png",
    techno: ["React", "Node.js", "MongoDB"],
    lien: "#",
    categorie: "web"
  },
  {
    id: 4,
    titre: "Campagne Publicitaire",
    description: "Série d'affiches pour une marque de vêtements éco-responsables.",
    image: "/projects/campagne-pub.png",
    techno: ["InDesign", "Photoshop"],
    lien: "#",
    categorie: "design"
  },
  {
    id: 5,
    titre: "Dashboard Analytique",
    description: "Outil de visualisation de données avec graphiques interactifs.",
    image: "/projects/dashboard.png",
    techno: ["D3.js", "TypeScript"],
    lien: "#",
    categorie: "web"
  },
  {
    id: 6,
    titre: "Identité Visuelle",
    description: "Création de l'identité graphique complète pour un café littéraire.",
    image: "/projects/identite-visuelle.png",
    techno: ["Illustrator", "Branding"],
    lien: "#",
    categorie: "design"
  }
]
