
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Home, Map } from 'lucide-react';

const IntroSection = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Naturaleza Auténtica',
      description: 'Descubre paisajes vírgenes, cascadas cristalinas y montañas que te dejarán sin aliento. Te esperamos con una biodiversidad única.'
    },
    {
      icon: Home,
      title: 'Hospedajes Verificados',
      description: 'Alójate en fincas, casas campestres y eco-lodges cuidadosamente seleccionados que garantizan comodidad y experiencias memorables.'
    },
    {
      icon: Map,
      title: 'Planes a tu Medida',
      description: 'Desde aventuras extremas hasta escapadas relajantes. Diseñamos experiencias turísticas que se adaptan a tus gustos y presupuesto.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="intro" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                  <Icon className="w-10 h-10 text-emerald-700 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
