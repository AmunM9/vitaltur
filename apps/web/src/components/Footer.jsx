import React from 'react';
import { Leaf, Instagram, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-playfair font-bold">Vital Tur</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Descubre experiencias auténticas que conectan
              naturaleza, cultura y aventura.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    navigate('/hospedajes');
                    window.scrollTo(0, 0);
                  }}
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Hospedajes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/planes');
                    window.scrollTo(0, 0);
                  }}
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Planes Turísticos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/contacto');
                    window.scrollTo(0, 0);
                  }}
                  className="text-white/70 hover:text-emerald-400 transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Vital Tur. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
