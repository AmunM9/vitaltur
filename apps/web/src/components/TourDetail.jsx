
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { MapPin, Clock, Users, CheckCircle, XCircle, MessageCircle } from 'lucide-react';

const TourDetail = ({ tour, open, onOpenChange }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!tour) return null;

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa reservar el plan "${tour.name}" en ${tour.municipality}. ¿Podrían darme más información sobre disponibilidad?`
    );
    window.open(`https://wa.me/${tour.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-playfair text-gray-900">
            {tour.name}
          </DialogTitle>
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium">{tour.municipality}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Desde ${tour.price.toLocaleString('es-CO')} COP por persona</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={tour.images[selectedImage]}
                alt={`${tour.name} - Vista ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {tour.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-2xl overflow-hidden transition-all ${selectedImage === index ? 'ring-2 ring-emerald-500' : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${tour.name} - Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">{tour.description}</p>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Itinerario</h3>
            <div className="space-y-2">
              {tour.itinerary.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Included & Excluded */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Incluye
              </h3>
              <ul className="space-y-2">
                {tour.included.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-gray-500" />
                No Incluye
              </h3>
              <ul className="space-y-2">
                {tour.excluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-gray-400 mt-1">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Group Pricing */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Precios por Grupo</h3>
            <div className="space-y-3">
              {tour.groupPricing.map((pricing, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-emerald-50 rounded-2xl"
                >
                  <span className="text-gray-900 font-medium">{pricing.size}</span>
                  <span className="text-emerald-700 font-semibold text-lg">
                    ${pricing.pricePerPerson.toLocaleString('es-CO')} COP por persona
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Reservation Button */}
          <Button
            onClick={handleWhatsAppReservation}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-2xl flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar por WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourDetail;
