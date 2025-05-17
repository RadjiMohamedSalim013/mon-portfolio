import { FaFilter, FaCode, FaPalette } from 'react-icons/fa'

type FilterButtonsProps = {
  filter: 'all' | 'web' | 'design'
  setFilter: (value: 'all' | 'web' | 'design') => void
}

export default function FilterButtons({ filter, setFilter }: FilterButtonsProps) {
  return (
    <div className="inline-flex rounded-md shadow-sm">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 text-sm font-medium rounded-l-lg flex items-center ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
      >
        <FaFilter className="mr-2" /> Tous
      </button>
      <button
        onClick={() => setFilter('web')}
        className={`px-4 py-2 text-sm font-medium flex items-center ${filter === 'web' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
      >
        <FaCode className="mr-2" /> Projets Web
      </button>
      <button
        onClick={() => setFilter('design')}
        className={`px-4 py-2 text-sm font-medium rounded-r-lg flex items-center ${filter === 'design' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
      >
        <FaPalette className="mr-2" /> Créations Graphiques
      </button>
    </div>
  )
}
