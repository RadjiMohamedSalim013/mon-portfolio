'use client'

type Etape = {
  annee: string
  titre: string
}

const parcours: Etape[] = [
  { annee: '2025 ', titre: 'Etudiant en Licence 3 Informatique Science du Numérique a l\'université virtuelle de cote d\'ivoire - UVCI' },
  { annee: '2025- en cours', titre: 'Certification Developpeur Fullstack chez GOYMACODE' },
  { annee: '2020 - 2021', titre: 'Stage en développement front-end chez ABC Agency' },
]

export default function Parcours() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Mon parcours</h2>
      <ul className="space-y-4 border-l-2 border-blue-500 pl-4">
        {parcours.map((etape, index) => (
          <li key={index}>
            <div className="text-blue-600 font-medium">{etape.annee}</div>
            <div>{etape.titre}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}
