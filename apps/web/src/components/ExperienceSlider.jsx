import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Users, MapPin } from 'lucide-react';
import { accommodations } from '@/data/accommodations.js';
import { tours } from '@/data/tours.js';
import { useNavigate } from 'react-router-dom';

const ExperienceSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const previewAccommodations = accommodations.slice(0, 3);
    const previewTours = tours.slice(0, 3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 1 : 0));

    // Animación de slide reducida — 0.3s en lugar de 0.5-0.6s
    const slideAnim = {
        initial: { opacity: 0, x: 16 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: { duration: 0.3, ease: 'easeOut' },
    };

    return (
        <section id="experiencias-preview" className="relative pt-4 pb-8 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

            {/* Background Ambient — solo en desktop, el blur pesado no corre en móvil */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 transition-colors duration-1000 ${currentSlide === 0 ? 'bg-emerald-100/20' : 'bg-blue-100/20'}`} />
                <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 transition-colors duration-1000 ${currentSlide === 0 ? 'bg-blue-100/20' : 'bg-emerald-100/20'}`} />
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── MOBILE LAYOUT ── */}
                <div className="md:hidden">
                    <AnimatePresence mode="wait">
                        {currentSlide === 0 ? (
                            <motion.div
                                key="acc-mobile"
                                {...slideAnim}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <div className="text-center mb-5">
                                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-1">Hospedajes Únicos</h2>
                                    <p className="text-sm text-gray-500">Encuentra el lugar perfecto para descansar</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {accommodations.slice(0, 4).map((acc) => (
                                        <div key={acc.id} onClick={() => navigate(`/hospedajes/${acc.id}`)} className="group cursor-pointer">
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
                                                <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" loading="lazy" />
                                                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                                                    {acc.type}
                                                </span>
                                                <div className="absolute bottom-2 left-2 flex gap-1">
                                                    {acc.amenities && acc.amenities.slice(0, 1).map((_, idx) => (
                                                        <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm">
                                                            <svg className="w-2.5 h-2.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-xs font-semibold text-gray-900 leading-tight line-clamp-1">{acc.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">Desde <span className="font-semibold text-gray-800">${(acc.priceFrom / 1000).toFixed(0)}k</span> por noche</p>
                                            <div className="flex items-center gap-0.5 text-gray-400 mt-0.5">
                                                <MapPin className="w-2.5 h-2.5 shrink-0" />
                                                <span className="text-xs truncate">{acc.municipality}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mb-6">
                                    <Button onClick={() => navigate('/hospedajes')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 text-base rounded-full inline-flex items-center gap-2 h-10">
                                        Ver todos los hospedajes <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="tours-mobile"
                                {...slideAnim}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <div className="text-center mb-5">
                                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-1">Planes Únicos</h2>
                                    <p className="text-sm text-gray-500">Experiencias que te conectarán con la región</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {tours.slice(0, 4).map((tour) => (
                                        <div key={tour.id} onClick={() => navigate(`/planes/${tour.id}`)} className="group cursor-pointer">
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2">
                                                <img src={tour.images[0]} alt={tour.name} className="w-full h-full object-cover" loading="lazy" />
                                                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                                                    {tour.difficulty}
                                                </span>
                                            </div>
                                            <p className="text-xs font-semibold text-gray-900 leading-tight line-clamp-1">{tour.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">Desde <span className="font-semibold text-gray-800">${(tour.price / 1000).toFixed(0)}k</span> por persona</p>
                                            <div className="flex items-center gap-0.5 text-gray-400 mt-0.5">
                                                <MapPin className="w-2.5 h-2.5 shrink-0" />
                                                <span className="text-xs truncate">{tour.municipality}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mb-6">
                                    <Button onClick={() => navigate('/planes')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 text-base rounded-full inline-flex items-center gap-2 h-10">
                                        Ver todos los planes <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile controls */}
                    <div className="flex items-center justify-center gap-3">
                        <button onClick={prevSlide} className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-emerald-600 transition-all shadow-sm" aria-label="Anterior">
                            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                        <button onClick={() => setCurrentSlide(0)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'}`} aria-label="Hospedajes" />
                        <button onClick={() => setCurrentSlide(1)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'}`} aria-label="Planes" />
                        <button onClick={nextSlide} className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-emerald-600 transition-all shadow-sm" aria-label="Siguiente">
                            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* ── DESKTOP LAYOUT ── */}
                <div className="hidden md:block relative">
                    <div className="min-h-[500px] flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            {currentSlide === 0 ? (
                                <motion.div key="acc-desktop" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.4, ease: 'easeOut' }} style={{ willChange: 'transform, opacity' }} className="w-full pb-8 absolute inset-x-0 top-0">
                                    <div className="text-center mb-6">
                                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-2">Hospedajes Únicos</h2>
                                        <p className="text-base text-gray-600 max-w-2xl mx-auto">Encuentra el lugar perfecto para descansar y conectar con la naturaleza</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6 mb-8">
                                        {previewAccommodations.map((acc, i) => (
                                            <motion.div key={acc.id} onClick={() => navigate(`/hospedajes/${acc.id}`)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.3 }} style={{ willChange: 'transform, opacity' }} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col cursor-pointer">
                                                <div className="relative h-48 overflow-hidden shrink-0"><img src={acc.image} alt={acc.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" loading="lazy" /></div>
                                                <div className="p-5 flex flex-col flex-grow">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{acc.name}</h3>
                                                    <div className="flex items-center gap-3 text-gray-600 mb-2 text-xs">
                                                        <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /><span>{acc.capacity.min}-{acc.capacity.max} pers</span></div>
                                                        <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /><span className="truncate">{acc.municipality}</span></div>
                                                    </div>
                                                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{acc.description}</p>
                                                    <div className="text-emerald-700 font-semibold text-base mt-auto pt-1">Desde ${acc.priceFrom.toLocaleString('es-CO')} COP</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="text-center"><Button onClick={() => navigate('/hospedajes')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 text-base rounded-full inline-flex items-center gap-2 h-10">Ver todos los hospedajes <ArrowRight className="w-4 h-4" /></Button></div>
                                </motion.div>
                            ) : (
                                <motion.div key="tours-desktop" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.4, ease: 'easeOut' }} style={{ willChange: 'transform, opacity' }} className="w-full pb-8 absolute inset-x-0 top-0">
                                    <div className="text-center mb-6">
                                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-2">Planes para Vivir Experiencias Únicas</h2>
                                        <p className="text-base text-gray-600 max-w-2xl mx-auto">Experiencias únicas que te conectarán con la esencia de la región</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6 mb-8">
                                        {previewTours.map((tour, i) => (
                                            <motion.div key={tour.id} onClick={() => navigate(`/planes/${tour.id}`)} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i, duration: 0.3 }} style={{ willChange: 'transform, opacity' }} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col cursor-pointer">
                                                <div className="relative h-48 overflow-hidden shrink-0"><img src={tour.images[0]} alt={tour.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" loading="lazy" /></div>
                                                <div className="p-5 flex flex-col flex-grow">
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{tour.name}</h3>
                                                    <div className="flex items-center gap-3 text-gray-600 mb-2 text-xs">
                                                        <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /><span>{tour.duration}</span></div>
                                                        <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /><span>Grupos</span></div>
                                                    </div>
                                                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">{tour.description}</p>
                                                    <div className="text-emerald-700 font-semibold text-base mt-auto pt-1">Desde ${tour.price.toLocaleString('es-CO')} COP</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="text-center"><Button onClick={() => navigate('/planes')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 text-base rounded-full inline-flex items-center gap-2 h-10">Ver todos los planes <ArrowRight className="w-4 h-4" /></Button></div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Height placeholder */}
                        <div className="opacity-0 pointer-events-none pb-8">
                            <div className="text-center mb-6"><h2 className="text-4xl font-playfair font-bold mb-2">Hidden</h2><p className="text-base max-w-2xl mx-auto">Hidden</p></div>
                            <div className="grid grid-cols-3 gap-6 mb-8"><div className="bg-white rounded-xl h-[400px]"></div></div>
                            <div className="text-center"><Button>Hidden</Button></div>
                        </div>
                    </div>

                    {/* Desktop dots + flanking arrows */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <button onClick={prevSlide} className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-emerald-600 transition-all shadow-sm" aria-label="Anterior">
                            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                        <button onClick={() => setCurrentSlide(0)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} aria-label="Hospedajes" />
                        <button onClick={() => setCurrentSlide(1)} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} aria-label="Planes" />
                        <button onClick={nextSlide} className="p-1.5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-emerald-600 transition-all shadow-sm" aria-label="Siguiente">
                            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSlider;