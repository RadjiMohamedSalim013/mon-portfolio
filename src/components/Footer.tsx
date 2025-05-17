export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center py-8 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <p className="text-gray-300 text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-blue-400 font-medium">RadjiMohamedSalim</span>. Tous droits réservés.
        </p>
        <div className="mt-2 h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
      </div>
    </footer>
  )
}