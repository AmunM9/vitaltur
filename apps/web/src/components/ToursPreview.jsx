
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { tours } from '@/data/tours.js';
import { useNavigate } from 'react-router-dom';

const ToursPreview = () => {
  const previewTours = tours.slice(0, 3);
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Planes para Vivir Experiencias Únicas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiencias únicas que te conectarán con la esencia de la región
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.images[0]}
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tour.name}
                </h3>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Grupos</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tour.description}
                </p>
                <div className="text-emerald-700 font-semibold text-lg">
                  Desde ${tour.price.toLocaleString('es-CO')} COP
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
            onClick={() => navigate('/planes')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-2xl inline-flex items-center gap-2"
          >
            Ver todos los planes
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToursPreview;
