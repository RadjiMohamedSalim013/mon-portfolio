'use client'

type Etape = {
  annee: string
  titre: string
}

const parcours: Etape[] = [
  { annee: '2025 - aujourd’hui', titre: 'Etudiant en Développement Web - UVCI' },
  { annee: '2021 - 2023', titre: 'Licence en Informatique - Université de XYZ' },
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
