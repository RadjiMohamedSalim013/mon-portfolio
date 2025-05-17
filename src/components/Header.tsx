"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 shadow-lg" : "bg-white dark:bg-gray-900 py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec dégradé de couleur */}
          <Link
            href="/"
            className="text-xl font-bold transition-all duration-300 flex items-center group"
          >
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-3 py-2 rounded-lg mr-2 group-hover:rounded-full transition-all duration-300">
              SALIM
            </span>
            
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            <NavLink href="/" icon={<FaHome className="mr-2" />}>
              Accueil
            </NavLink>
            <NavLink href="/about" icon={<FaUser className="mr-2" />}>
              À propos
            </NavLink>
            <NavLink href="/projects" icon={<FaCode className="mr-2" />}>
              Projets
            </NavLink>
            <NavLink href="/contact" icon={<FaEnvelope className="mr-2" />}>
              Contact
            </NavLink>
          </ul>

          {/* Bouton menu mobile */}
          <button
            aria-label="Menu mobile"
            aria-expanded={isOpen}
            className="md:hidden p-2 rounded-md hover:bg-teal-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="text-gray-800 dark:text-white h-6 w-6" />
            ) : (
              <FaBars className="text-gray-800 dark:text-white h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 pb-4">
            <MobileNavLink href="/" icon={<FaHome size={18} />} onClick={() => setIsOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink href="/about" icon={<FaUser size={18} />} onClick={() => setIsOpen(false)}>
              À propos
            </MobileNavLink>
            <MobileNavLink href="/projects" icon={<FaCode size={18} />} onClick={() => setIsOpen(false)}>
              Projets
            </MobileNavLink>
            <MobileNavLink href="/contact" icon={<FaEnvelope size={18} />} onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300 group"
      >
        {icon && (
          <span className="text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform mr-2">
            {icon}
          </span>
        )}
        <span className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-blue-500 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-300">
          {children}
        </span>
      </Link>
    </li>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="flex items-center py-3 px-4 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors duration-300"
      >
        {icon && <span className="text-teal-500 dark:text-teal-400 mr-3">{icon}</span>}
        {children}
      </Link>
    </li>
  );
}