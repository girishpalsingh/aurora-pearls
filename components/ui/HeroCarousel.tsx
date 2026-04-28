'use client';

import { useState, useEffect } from 'react';

const images = [
  '/baroque-choker.png',
  '/black-woman-pearls.png',
  '/tahitian-pendant.png',
  '/latina-woman-pearls.png',
  '/south-sea-drops.png',
  '/plus-size-white-woman-pearls.png',
  '/natural-woman-wine.png',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Change image every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Model ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent z-20 pointer-events-none md:hidden" />
      
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
