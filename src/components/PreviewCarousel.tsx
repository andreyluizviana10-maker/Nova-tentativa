import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Maximize2, 
  X, 
  BookOpen, 
  Compass, 
  Check 
} from 'lucide-react';
import { PREVIEW_ITEMS } from '../data/contentData';
import { PreviewItem } from '../types';

interface PreviewCarouselProps {
  onScrollToOffer: () => void;
}

export const PreviewCarousel: React.FC<PreviewCarouselProps> = ({ onScrollToOffer }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedPreview, setSelectedPreview] = useState<PreviewItem | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="podglad" className="py-16 lg:py-24 bg-[#07111D] relative border-b border-[#D89B37]/15 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D89B37]" />
              <span>ZOBACZ, CO OTRZYMASZ</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
              ZAJRZYJ DO ŚRODKA,{' '}
              <span className="text-[#EAB85F]">ZANIM PODEJMIESZ DECYZJĘ</span>
            </h2>

            <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
              Oto 10 przykładowych stron i wizualizacji pokazujących styl materiałów, precyzję kartografii i jakość rekonstrukcji znajdujących się w Atlasie Biblijnym 3D.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Poprzednia strona podglądu"
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft 
                  ? 'bg-[#111C2C] border-[#D89B37]/50 text-[#EAB85F] hover:bg-[#D89B37] hover:text-[#07111D]' 
                  : 'bg-[#0D1725] border-white/5 text-gray-600 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Następna strona podglądu"
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight 
                  ? 'bg-[#111C2C] border-[#D89B37]/50 text-[#EAB85F] hover:bg-[#D89B37] hover:text-[#07111D]' 
                  : 'bg-[#0D1725] border-white/5 text-gray-600 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PREVIEW_ITEMS.map((item) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 snap-start rounded-2xl bg-[#111C2C] border border-[#D89B37]/30 p-4 sm:p-5 flex flex-col justify-between shadow-xl hover:border-[#D89B37] transition-all duration-300 group"
            >
              <div>
                {/* Image Box */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-[#07111D] border border-white/10">
                  <img
                    src={item.image}
                    alt={`${item.theme} - Podgląd Atlasu Biblijnego 3D`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Number Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#07111D]/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-serif font-bold text-[#EAB85F] border border-[#D89B37]/40">
                    PRZYKŁAD #{item.number}
                  </div>

                  {item.isArtisticVisual && (
                    <div className="absolute top-2.5 right-2.5 bg-[#07111D]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-[#C8B99F] border border-white/10">
                      Wizualizacja koncepcyjna
                    </div>
                  )}

                  {/* Zoom button on hover */}
                  <button
                    onClick={() => setSelectedPreview(item)}
                    aria-label={`Powiększ ${item.theme}`}
                    className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-[#07111D]/90 backdrop-blur-sm border border-[#D89B37]/50 text-[#EAB85F] flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-110 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Theme Title */}
                <div className="mb-2">
                  <h3 className="font-serif text-lg font-bold text-[#EFE3CF] group-hover:text-[#EAB85F] transition-colors leading-snug">
                    {item.theme}
                  </h3>
                  <p className="text-xs text-[#C8B99F] font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#C8B99F] leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#EFE3CF]/85">
                      <Check className="w-3 h-3 text-[#35D47A] shrink-0" />
                      <span className="truncate">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#D89B37] font-mono">
                  {item.scriptureRef}
                </span>
                <button
                  onClick={() => setSelectedPreview(item)}
                  className="text-xs text-[#EAB85F] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Szczegóły</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Bottom Summary & CTA */}
        <div className="mt-12 text-center bg-[#0D1725] rounded-2xl border border-[#D89B37]/25 p-6 sm:p-8 max-w-3xl mx-auto shadow-lg">
          <p className="text-base sm:text-lg text-[#EFE3CF] mb-5 leading-relaxed font-serif">
            To tylko niewielki fragment z ponad <strong>300 stron</strong>. Pełny Atlas zawiera dziesiątki rozbudowanych map, wizualizacji oraz materiałów pomagających zrozumieć świat Biblii.
          </p>

          <button
            onClick={onScrollToOffer}
            id="preview-cta-btn"
            className="gold-btn px-8 py-3.5 rounded-xl text-base font-bold inline-flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
          >
            <span>Chcę zobaczyć cały Atlas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedPreview && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPreview(null)}
        >
          <div 
            className="bg-[#111C2C] border border-[#D89B37] rounded-2xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPreview(null)}
              className="absolute top-4 right-4 text-[#C8B99F] hover:text-[#EFE3CF] w-9 h-9 rounded-full bg-[#07111D] border border-white/10 flex items-center justify-center"
              aria-label="Zamknij podgląd"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-[#07111D] border border-[#D89B37]/40">
              <img
                src={selectedPreview.image}
                alt={selectedPreview.theme}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D89B37]/20 text-[#EAB85F] text-xs font-serif font-bold mb-3">
              <span>STRONA PRZYKŁADOWA #{selectedPreview.number}</span>
              {selectedPreview.scriptureRef && <span>• {selectedPreview.scriptureRef}</span>}
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#EFE3CF] mb-2">
              {selectedPreview.theme}
            </h3>
            <p className="text-sm text-[#EAB85F] mb-4 font-medium">
              {selectedPreview.subtitle}
            </p>
            <p className="text-base text-[#C8B99F] leading-relaxed mb-6">
              {selectedPreview.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {selectedPreview.details.map((detail, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#07111D] border border-white/5 text-xs text-[#EFE3CF]">
                  <Check className="w-3.5 h-3.5 text-[#35D47A] inline-block mr-1.5" />
                  {detail}
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setSelectedPreview(null);
                  onScrollToOffer();
                }}
                className="gold-btn px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Przejdź do oferty (37,90 zł)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
