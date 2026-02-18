import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: 'inicio', label: 'Inicio', path: '/' },
    { id: 'hospedajes', label: 'Hospedajes', path: '/hospedajes' },
    { id: 'planes', label: 'Planes Turísticos', path: '/planes' },
    { id: 'contacto', label: 'Contacto', path: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['inicio', 'contacto'];
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const section = document.getElementById(sectionId);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sectionId);
            break;
          }
        }
      } else {
        if (location.pathname === '/hospedajes') setActiveSection('hospedajes');
        else if (location.pathname === '/planes') setActiveSection('planes');
        else if (location.pathname === '/contacto') setActiveSection('contacto');
        else setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavigation = (link) => {
    setMenuOpen(false);
    navigate(link.path);
    if (link.path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
        } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation({ path: '/', isScroll: false })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-playfair font-bold text-gray-900">
              Vital Tur
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link)}
                className={`relative text-sm font-medium transition-colors ${activeSection === link.id
                    ? 'text-emerald-700'
                    : 'text-gray-700 hover:text-emerald-600'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-emerald-600"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              // X icon when open
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-emerald-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeSection === link.id
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;