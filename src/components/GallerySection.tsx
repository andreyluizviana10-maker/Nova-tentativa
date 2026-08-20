import React, { useState } from 'react';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/contentData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onScrollToOffer: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onScrollToOffer }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-16 lg:py-24 bg-[#07111D] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D89B37]" />
            <span>ZOBACZ JAKOŚĆ WYKONANIA</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            MAPY 3D, REKONSTRUKCJE I WIZUALIZACJE{' '}
            <span className="text-[#EAB85F]">W JEDNYM MIEJSCU</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
            Wysoka rozdzielczość, rzetelność archeologiczna i estetyka albumowa stworzona z myślą o czytelnikach, którzy chcą poczuć realia świata biblijnego.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#111C2C] border border-[#D89B37]/30 overflow-hidden shadow-xl hover:border-[#D89B37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] bg-[#07111D] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#07111D]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#EAB85F] border border-[#D89B37]/40">
                    {item.category}
                  </div>

                  {item.isArtisticVisual && (
                    <div className="absolute top-3 right-3 bg-[#07111D]/85 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#C8B99F] border border-white/10">
                      Wizualizacja artystyczna
                    </div>
                  )}

                  {/* Zoom Action */}
                  <button
                    onClick={() => setActiveItem(item)}
                    aria-label={`Powiększ ${item.title}`}
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-[#07111D]/90 backdrop-blur-sm border border-[#D89B37]/60 text-[#EAB85F] flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <span className="block text-xs font-semibold text-[#D89B37] mb-1">
                    {item.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-lg font-bold text-[#EFE3CF] mb-3 group-hover:text-[#EAB85F] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C8B99F] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#EFE3CF]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#35D47A] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={() => setActiveItem(item)}
                  className="w-full py-2 rounded-lg bg-[#07111D] hover:bg-[#D89B37]/15 border border-[#D89B37]/30 text-xs font-semibold text-[#EAB85F] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Powiększ i zobacz detale 3D</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div 
            className="bg-[#111C2C] border border-[#D89B37] rounded-2xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-[#C8B99F] hover:text-[#EFE3CF] w-9 h-9 rounded-full bg-[#07111D] border border-white/10 flex items-center justify-center cursor-pointer"
              aria-label="Zamknij"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-[#07111D] border border-[#D89B37]/40">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#D89B37]/20 text-[#EAB85F] text-xs font-bold">
                {activeItem.category}
              </span>
              {activeItem.isArtisticVisual && (
                <span className="text-xs text-[#C8B99F] italic">
                  (Wizualizacja artystyczno-koncepcyjna)
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#EFE3CF] mb-1">
              {activeItem.title}
            </h3>
            <p className="text-sm text-[#D89B37] mb-4">{activeItem.subtitle}</p>

            <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed mb-6">
              {activeItem.description}
            </p>

            <div className="p-4 rounded-xl bg-[#07111D] border border-white/10 mb-6">
              <h4 className="text-xs font-bold text-[#EAB85F] uppercase tracking-wider mb-2">
                Kluczowe elementy na tej mapie:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeItem.features.map((f, i) => (
                  <div key={i} className="text-xs text-[#EFE3CF] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D47A]"></span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setActiveItem(null);
                  onScrollToOffer();
                }}
                className="gold-btn px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Uzyskaj dostęp do wszystkich map (37,90 zł)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
