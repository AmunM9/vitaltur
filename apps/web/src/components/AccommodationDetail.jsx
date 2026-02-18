
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { MapPin, Wifi, Car, UtensilsCrossed, Waves, Home, MessageCircle } from 'lucide-react';

const AccommodationDetail = ({ accommodation, open, onOpenChange }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!accommodation) return null;

  const amenityIcons = {
    'WiFi': Wifi,
    'Piscina': Waves,
    'Parqueadero': Car,
    'Cocina equipada': UtensilsCrossed,
    'Cocina': UtensilsCrossed,
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el hospedaje "${accommodation.name}". ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/${accommodation.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-playfair text-gray-900">
            {accommodation.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="space-y-3">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={accommodation.images[selectedImage]}
                alt={`${accommodation.name} - Vista ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {accommodation.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-2xl overflow-hidden transition-all ${selectedImage === index ? 'ring-2 ring-emerald-500' : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${accommodation.name} - Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">{accommodation.description}</p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Comodidades</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {accommodation.amenities.map((amenity, index) => {
                const Icon = amenityIcons[amenity] || Home;
                return (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <Icon className="w-5 h-5 text-emerald-600" />
                    <span>{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicios Incluidos</h3>
            <ul className="space-y-2">
              {accommodation.services.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Options */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Opciones de Precio</h3>
            <div className="space-y-3">
              {accommodation.pricingOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-emerald-50 rounded-2xl"
                >
                  <span className="text-gray-900 font-medium">{option.type}</span>
                  <span className="text-emerald-700 font-semibold text-lg">
                    ${option.price.toLocaleString('es-CO')} COP
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <Button
            onClick={handleWhatsAppContact}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-2xl flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccommodationDetail;
