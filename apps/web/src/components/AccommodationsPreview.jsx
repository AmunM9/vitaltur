
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';
import { accommodations } from '@/data/accommodations.js';
import { useNavigate } from 'react-router-dom';

const AccommodationsPreview = () => {
  const previewAccommodations = accommodations.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section id="hospedajes-preview" className="py-20" style={{ backgroundColor: 'rgba(168, 213, 181, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Hospedajes Únicos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra el lugar perfecto para descansar y conectar con la naturaleza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewAccommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {accommodation.name}
                </h3>
                <div className="text-emerald-700 font-semibold text-lg">
                  Desde ${accommodation.priceFrom.toLocaleString('es-CO')} COP
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            onClick={() => navigate('/hospedajes')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl inline-flex items-center gap-2"
          >
            Ver todos los hospedajes
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationsPreview;
