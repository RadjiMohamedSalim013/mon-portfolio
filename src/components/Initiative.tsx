type InitiativeProps = {
  titre: string
  description: string
  lien: string
}

export default function Initiative({ titre, description, lien }: InitiativeProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-6">
      <h3 className="text-xl font-bold text-blue-600">{titre}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <a
        href={lien}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm text-white bg-blue-600 px-4 py-1.5 rounded hover:bg-blue-700 transition"
      >
        Voir la page Facebook
      </a>
    </div>
  )
}
  