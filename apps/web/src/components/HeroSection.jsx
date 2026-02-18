import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden
                 flex items-center justify-center
                 sm:flex sm:items-end sm:justify-start"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://eldoradoradio.cundinamarca.gov.co/wp-content/uploads/2025/02/PHOTO-2025-02-21-11-31-10-1.jpg"
          alt="Vista panorámica del Gualivá, Cundinamarca"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 sm:from-black/80 sm:via-black/20 sm:to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto
                      px-6 sm:px-10 lg:px-16
                      py-24 sm:pb-28 sm:pt-0">
        <div className="max-w-3xl">

          {/* Eyebrow — will-change promueve a capa GPU propia */}
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            style={{ willChange: 'transform, opacity' }}
            className="text-emerald-400 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium mb-4 sm:mb-5 font-sans"
          >
            Cundinamarca · Colombia · 90 min de Bogotá
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
            className="font-playfair font-bold text-white leading-[0.95] mb-5 sm:mb-6"
          >
            <span className="block text-5xl sm:text-8xl lg:text-[7rem]">Vital Tur</span>
            <span className="block text-2xl sm:text-5xl lg:text-6xl font-light text-white/70 mt-1">
              Hospedajes &amp; Aventura
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
            className="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-md"
          >
            Fincas y cabañas en La Vega, Villeta, Sasaima y más.<br />
            Reserva directo, sin intermediarios.
          </motion.p>

        </div>
      </div>

      {/* Scroll indicator — CSS animation, no Framer loop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        style={{ willChange: 'opacity' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <button
          onClick={() => scrollToSection('experiencias-preview')}
          className="group flex flex-col items-center gap-1 text-white/50 hover:text-emerald-400 transition-colors duration-300"
          aria-label="Explorar"
          style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
        >
          <span className="block w-px h-8 bg-white/25 group-hover:bg-emerald-400/50 transition-colors duration-300" />
          <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </motion.div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;