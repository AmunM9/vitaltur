
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Clock, Users, CheckCircle, XCircle, MessageCircle, MapPin, Calendar, Mountain } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery.jsx';

const TourModal = ({ tour, open, onOpenChange }) => {
  if (!tour) return null;

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa reservar el plan "${tour.name}" en ${tour.municipality}. ¿Podrían darme más información sobre disponibilidad?`
    );
    window.open(`https://wa.me/${tour.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white rounded-3xl max-h-[95vh] flex flex-col">
        <div className="overflow-y-auto p-6 md:p-8">
          <DialogHeader className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <DialogTitle className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-3">
                  {tour.name}
                </DialogTitle>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium">{tour.municipality}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                    <Clock className="w-3.5 h-3.5" /> {tour.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                    <Mountain className="w-3.5 h-3.5" /> Dificultad: {tour.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
                    <Users className="w-3.5 h-3.5" /> {tour.minPeople}-{tour.maxPeople} pers.
                  </span>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-500">Precio por persona</p>
                <p className="text-3xl font-bold text-emerald-700">
                  ${tour.price.toLocaleString('es-CO')}
                </p>
              </div>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Gallery, Description, Itinerary */}
            <div className="space-y-8">
              <ImageGallery images={tour.images} title={tour.name} />

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Descripción de la Experiencia</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {tour.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  Itinerario Detallado
                </h3>
                <div className="space-y-4 border-l-2 border-emerald-100 pl-4 ml-2">
                  {tour.itinerary.morning.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-emerald-800 mb-2 text-sm uppercase tracking-wider">Mañana</h4>
                      <ul className="space-y-2">
                        {tour.itinerary.morning.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.itinerary.afternoon.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2 text-sm uppercase tracking-wider mt-4">Tarde</h4>
                      <ul className="space-y-2">
                        {tour.itinerary.afternoon.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tour.itinerary.evening.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-indigo-800 mb-2 text-sm uppercase tracking-wider mt-4">Noche</h4>
                      <ul className="space-y-2">
                        {tour.itinerary.evening.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Includes, Pricing, Logistics */}
            <div className="space-y-8">
              {/* Includes / Excludes */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-emerald-50/50 p-5 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-gray-400" />
                    No incluye
                  </h3>
                  <ul className="space-y-2">
                    {tour.excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 font-bold">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Tarifas por Persona</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex justify-between p-3 hover:bg-gray-50">
                    <span className="text-gray-600 text-sm">Tarifa General</span>
                    <span className="font-bold text-emerald-700">${tour.pricing.perPerson.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between p-3 hover:bg-gray-50">
                    <span className="text-gray-600 text-sm">Grupo 4-6 personas</span>
                    <span className="font-medium text-gray-900">${tour.pricing.groupSmall.toLocaleString('es-CO')}</span>
                  </div>
                  <div className="flex justify-between p-3 hover:bg-gray-50">
                    <span className="text-gray-600 text-sm">Grupo 7-10 personas</span>
                    <span className="font-medium text-gray-900">${tour.pricing.groupLarge.toLocaleString('es-CO')}</span>
                  </div>
                  {tour.pricing.children > 0 && (
                    <div className="flex justify-between p-3 hover:bg-gray-50">
                      <span className="text-gray-600 text-sm">Niños (menores de 10)</span>
                      <span className="font-medium text-gray-900">${tour.pricing.children.toLocaleString('es-CO')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Logistics */}
              <div className="bg-blue-50 p-5 rounded-2xl space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-blue-800 uppercase">Punto de Encuentro</p>
                    <p className="text-sm text-blue-900">{tour.meetingPoint}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-blue-800 uppercase">Hora de Salida</p>
                    <p className="text-sm text-blue-900">{tour.departureTime}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleWhatsAppReservation}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar Cupo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourModal;
