import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Wifi, Car, UtensilsCrossed, Waves } from 'lucide-react';
import { accommodations } from '@/data/accommodations.js';
import AccommodationModal from '@/components/AccommodationModal.jsx';

const municipalities = ['Todos', 'La Vega', 'Villeta', 'Sasaima', 'San Francisco', 'Nocaima', 'Albán', 'Útica', 'Vergara', 'Supatá', 'Nimaima', 'Quebrada Negra'];

const amenityIcons = {
  'WiFi': Wifi,
  'WiFi Satelital': Wifi,
  'Piscina': Waves,
  'Piscina Privada': Waves,
  'Piscina Infinita': Waves,
  'Parqueadero': Car,
  'Cocina equipada': UtensilsCrossed,
  'Cocina': UtensilsCrossed,
  'Cocina Full Equipo': UtensilsCrossed,
  'Cocina Básica': UtensilsCrossed,
  'Cocina Tradicional': UtensilsCrossed,
};

const AccommodationsGrid = () => {
  const [selectedMunicipality, setSelectedMunicipality] = useState('Todos');
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const filteredAccommodations = selectedMunicipality === 'Todos'
    ? accommodations
    : accommodations.filter(acc => acc.municipality === selectedMunicipality);

  useEffect(() => {
    if (id) {
      const acc = accommodations.find(a => a.id.toString() === id);
      if (acc) {
        setSelectedAccommodation(acc);
        setIsModalOpen(true);
      }
    }
  }, [id]);

  const handleViewMore = (accommodation) => {
    navigate(`/hospedajes/${accommodation.id}`);
  };

  const handleCloseModal = (open) => {
    setIsModalOpen(open);
    if (!open) {
      navigate('/hospedajes', { replace: true });
    }
  };

  return (
    <section id="hospedajes" className="pt-6 pb-16 bg-white">
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
            Hospedajes
          </h2>
          <p className="text-sm text-gray-400 mt-1">Filtra por municipio y encuentra tu lugar ideal</p>
        </motion.div>

        {/* Filter pills */}
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
        {filteredAccommodations.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 min-h-[560px] content-start">
            {filteredAccommodations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => handleViewMore(acc)}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2.5">
                  <img
                    src={acc.image}
                    alt={`${acc.name} en ${acc.municipality}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                    {acc.type}
                  </span>
                  {/* Amenity icons overlay — bottom */}
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    {acc.amenities.slice(0, 3).map((amenity, idx) => {
                      const Icon = amenityIcons[amenity];
                      return Icon ? (
                        <div
                          key={idx}
                          title={amenity}
                          className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm"
                        >
                          <Icon className="w-2.5 h-2.5 text-gray-700" />
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">
                    {acc.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Desde <span className="font-semibold text-gray-900">${(acc.priceFrom / 1000).toFixed(0)}k</span> por noche
                  </p>
                  <div className="flex items-center gap-1 mt-0.5 text-gray-400">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="text-xs">{acc.municipality}</span>
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
            <p className="text-sm text-gray-400">Aún no hay hospedajes disponibles.</p>
          </div>
        )}
      </div>

      <AccommodationModal
        accommodation={selectedAccommodation}
        open={isModalOpen}
        onOpenChange={handleCloseModal}
      />
    </section>
  );
};

export default AccommodationsGrid;