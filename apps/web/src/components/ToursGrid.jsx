import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';
import { tours } from '@/data/tours.js';
import TourModal from '@/components/TourModal.jsx';

const municipalities = ['Todos', 'La Vega', 'Villeta', 'Sasaima', 'San Francisco', 'Nocaima', 'Albán', 'Útica', 'Vergara', 'Supatá', 'Nimaima', 'Quebrada Negra'];

const ToursGrid = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMunicipality, setSelectedMunicipality] = useState('Todos');
  const navigate = useNavigate();
  const { id } = useParams();

  const filteredTours = selectedMunicipality === 'Todos'
    ? tours
    : tours.filter(tour => tour.municipality === selectedMunicipality);

  useEffect(() => {
    if (id) {
      const tour = tours.find(t => t.id.toString() === id);
      if (tour) {
        setSelectedTour(tour);
        setIsModalOpen(true);
      }
    }
  }, [id]);

  const handleViewTour = (tour) => {
    navigate(`/planes/${tour.id}`);
  };

  const handleCloseModal = (open) => {
    setIsModalOpen(open);
    if (!open) {
      navigate('/planes', { replace: true });
    }
  };

  return (
    <section id="planes" className="pt-6 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — compact */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900">
            Planes Turísticos
          </h2>
          <p className="text-sm text-gray-400 mt-1">Elige la aventura perfecta para ti</p>
        </motion.div>

        {/* Filter pills — slim, Airbnb-style */}
        <div className="mb-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 pb-2 min-w-max">
            {municipalities.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMunicipality(m)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${selectedMunicipality === m
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 min-h-[560px] content-start">
            {filteredTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => handleViewTour(tour)}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2.5">
                  <img
                    src={tour.images[0]}
                    alt={tour.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                    {tour.difficulty}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                      {tour.name}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 shrink-0">
                      ${(tour.price / 1000).toFixed(0)}k
                    </p>
                  </div>

                  <div className="flex items-center gap-1 mt-0.5 text-gray-400">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="text-xs truncate">{tour.municipality}</span>
                  </div>

                  <div className="flex items-center gap-3 mt-1 text-gray-400">
                    <span className="flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />{tour.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <Users className="w-3 h-3" />{tour.minPeople}–{tour.maxPeople}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[560px] bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-lg font-playfair font-semibold text-gray-800 mb-1">
              Próximamente en {selectedMunicipality}
            </p>
            <p className="text-sm text-gray-400">Aún no hay planes disponibles.</p>
          </div>
        )}
      </div>

      <TourModal
        tour={selectedTour}
        open={isModalOpen}
        onOpenChange={handleCloseModal}
      />
    </section>
  );
};

export default ToursGrid;