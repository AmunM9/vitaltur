import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '573218966317';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, me gustaría aparecer en Vital Tur'
);

const ContactSection = () => {
  const [hovered, setHovered] = useState(false);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      '_blank'
    );
  };

  return (
    <section
      id="contacto"
      className="relative py-32 bg-emerald-950 overflow-hidden"
    >
      {/* Decorative ambient glow — warm emerald from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(16,185,129,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Thin top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium mb-6"
        >
          ¿Quieres aparecer aquí?
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair font-bold leading-[0.95] mb-8"
        >
          <span className="block text-5xl sm:text-7xl lg:text-8xl text-white">
            Tu hospedaje,
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-white/40 font-light mt-2">
            en el mapa del Gualivá.
          </span>
        </motion.h2>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/40 text-sm sm:text-base font-light leading-relaxed max-w-md mb-16"
        >
          Recopilamos las mejores experiencias, fincas y cabañas de la región.
          Si tienes un lugar especial, cuéntanos — nos encantaría incluirlo.
        </motion.p>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button
            onClick={openWhatsApp}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative flex items-center gap-5 cursor-pointer"
            aria-label="Contactar por WhatsApp"
          >
            {/* Icon circle */}
            <div
              className="relative flex items-center justify-center w-14 h-14 rounded-full border border-emerald-400/30 transition-all duration-500"
              style={{
                background: hovered
                  ? 'rgba(16,185,129,0.2)'
                  : 'rgba(16,185,129,0.08)',
                boxShadow: hovered
                  ? '0 0 32px rgba(16,185,129,0.3)'
                  : '0 0 0px transparent',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  fill="#34d399"
                />
              </svg>
            </div>

            {/* Text */}
            <div className="text-left">
              <p className="text-white text-lg sm:text-xl font-playfair font-semibold leading-tight group-hover:text-emerald-300 transition-colors duration-300">
                Escríbenos por WhatsApp
              </p>
              <p className="text-white/30 text-xs tracking-widest mt-0.5 font-light">
                +57 321 896 6317
              </p>
            </div>

            {/* Arrow */}
            <motion.span
              animate={{ x: hovered ? 8 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-emerald-400 text-xl ml-1"
            >
              →
            </motion.span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;