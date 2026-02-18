
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Slider */}
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gray-100 group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Imagen ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => goToImage(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
              currentIndex === idx 
                ? 'ring-2 ring-emerald-500 ring-offset-2' 
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`Miniatura ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
