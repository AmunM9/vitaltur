
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { MapPin, Wifi, Car, UtensilsCrossed, Waves, Home, MessageCircle, Users, BedDouble } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery.jsx';

const AccommodationModal = ({ accommodation, open, onOpenChange }) => {
  if (!accommodation) return null;

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

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el hospedaje "${accommodation.name}" en ${accommodation.municipality}. ¿Podrían darme más información sobre disponibilidad?`
    );
    window.open(`https://wa.me/${accommodation.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white rounded-3xl max-h-[95vh] flex flex-col">
        <div className="overflow-y-auto p-6 md:p-8">
          <DialogHeader className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <DialogTitle className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-2">
                  {accommodation.name}
                </DialogTitle>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>{accommodation.municipality}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4 text-emerald-600" />
                    <span>{accommodation.type}</span>
                  </div>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-500">Desde</p>
                <p className="text-2xl font-bold text-emerald-700">
                  ${accommodation.priceFrom.toLocaleString('es-CO')}
                </p>
                <p className="text-xs text-gray-400">por noche</p>
              </div>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Gallery & Description */}
            <div className="space-y-8">
              <ImageGallery images={accommodation.images} title={accommodation.name} />

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sobre este lugar</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {accommodation.description}
                </p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-600" />
                  Capacidad y Distribución
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Capacidad</p>
                    <p className="font-medium text-gray-900">
                      {accommodation.capacity.min} - {accommodation.capacity.max} personas
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Habitaciones</p>
                    <p className="font-medium text-gray-900 flex items-center gap-1">
                      <BedDouble className="w-4 h-4" />
                      {accommodation.capacity.rooms} habitaciones
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500">Camas totales</p>
                    <p className="font-medium text-gray-900">
                      {accommodation.capacity.beds} camas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Details, Services, Pricing */}
            <div className="space-y-8">
              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comodidades</h3>
                <div className="grid grid-cols-2 gap-3">
                  {accommodation.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity] || Home;
                    return (
                      <div key={index} className="flex items-center gap-2 text-gray-700 bg-gray-50 p-2 rounded-lg">
                        <Icon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Servicios Adicionales</h3>
                <ul className="space-y-2">
                  {accommodation.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Table */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Tarifas Estimadas</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between p-3 hover:bg-gray-50">
                    <span className="text-gray-600 text-sm">Noche (Lun-Jue)</span>
                    <span className="font-medium text-gray-900">${accommodation.pricing.weekday.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between p-3 hover:bg-gray-50">
                    <span className="text-gray-600 text-sm">Noche (Vie-Dom)</span>
                    <span className="font-medium text-gray-900">${accommodation.pricing.weekend.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between p-3 hover:bg-gray-50 bg-emerald-50/50">
                    <span className="text-emerald-800 text-sm font-medium">Paquete Fin de Semana</span>
                    <span className="font-bold text-emerald-700">${accommodation.pricing.weekendPackage.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between p-3 hover:bg-gray-50">
                    <span className="text-gray-600 text-sm">Persona Adicional</span>
                    <span className="font-medium text-gray-900">${accommodation.pricing.extraPerson.toLocaleString('es-CO')}</span>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 text-xs text-gray-500 text-center">
                  * Precios sujetos a temporada y disponibilidad
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccommodationModal;
