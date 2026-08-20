import React from 'react';
import { 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Lock, 
  BookMarked, 
  Sparkles, 
  Smartphone, 
  Layers, 
  MapPin,
  CheckCircle2
} from 'lucide-react';
import heroMockup from '../assets/images/hero_atlas_mockup_1787192331082.jpg';

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#D89B37]/15 bg-map-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D89B37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#1E3A5F]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - COPY & ACTIONS */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111C2C] border border-[#D89B37]/30 mb-6 shadow-sm">
              <div className="flex text-[#EAB85F] text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#EAB85F]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#EFE3CF]">
                Wysoko oceniany przez miłośników Biblii w Polsce
              </span>
            </div>

            {/* Giant Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#EFE3CF] leading-[1.12] mb-6">
              PRZESTAŃ TYLKO CZYTAĆ BIBLIĘ.{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#EAB85F] to-[#D89B37]">
                ZACZNIJ WIDZIEĆ JEJ ŚWIAT.
              </span>
            </h1>

            {/* Subheadings & Body Copy */}
            <p className="text-base sm:text-lg text-[#EFE3CF]/90 leading-relaxed mb-4 max-w-2xl font-normal">
              Odkryj miejsca, drogi, miasta i krajobrazy, które stoją za historiami opisanymi w Biblii. Od Edenu po Patmos — poznaj kontekst wydarzeń dzięki szczegółowym mapom, wizualizacjom i rekonstrukcjom 3D.
            </p>

            <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed mb-8 max-w-2xl border-l-2 border-[#D89B37]/50 pl-4 py-1 italic">
              Stworzony dla osób, które chcą nie tylko czytać Biblię, ale naprawdę zrozumieć, gdzie i dlaczego rozgrywały się jej najważniejsze wydarzenia.
            </p>

            {/* Main CTA Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onScrollToOffer}
                id="hero-main-cta-btn"
                className="gold-btn px-8 py-4 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 cursor-pointer group shadow-[0_10px_30px_rgba(216,155,55,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Pokaż mi biblijne mapy</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#C8B99F]">
                <span className="text-[#35D47A] font-bold">37,90 zł</span>
                <span>•</span>
                <span>Jednorazowa opłata</span>
              </div>
            </div>

            {/* 4 Key Metrics Bar */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-5 px-4 sm:px-6 rounded-2xl bg-[#0D1725] border border-[#D89B37]/25 mb-6">
              <div className="text-left border-r border-[#D89B37]/15 pr-2 last:border-0">
                <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#EAB85F]">
                  300+
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold text-[#C8B99F] tracking-wider uppercase">
                  STRON
                </span>
              </div>
              
              <div className="text-left sm:border-r border-[#D89B37]/15 pr-2 last:border-0">
                <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#EAB85F]">
                  280+
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold text-[#C8B99F] tracking-wider uppercase">
                  ILUSTRACJI HD
                </span>
              </div>

              <div className="text-left border-r border-[#D89B37]/15 pr-2 last:border-0">
                <span className="block font-serif text-2xl sm:text-3xl font-extrabold text-[#EAB85F]">
                  100+
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold text-[#C8B99F] tracking-wider uppercase">
                  MAP I WIZUALIZACJI
                </span>
              </div>

              <div className="text-left pr-2">
                <span className="block font-serif text-sm sm:text-base font-extrabold text-[#EAB85F] leading-tight">
                  OD RODZAJU
                </span>
                <span className="block text-[11px] sm:text-xs font-semibold text-[#C8B99F] tracking-wider uppercase">
                  DO APOKALIPSY
                </span>
              </div>
            </div>

            {/* Polish Bible Translation Compatibility Note */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#EFE3CF]/85 mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#35D47A] shrink-0" />
              <span>
                <strong>Pasuje do każdego polskiego wydania Biblii</strong> — korzystaj z przekładu, który już znasz (Biblia Tysiąclecia, Warszawska, Paulistów i inne).
              </span>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#C8B99F]">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#35D47A]" />
                <span>Bezpieczna płatność SSL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#EAB85F]" />
                <span>30 dni gwarancji satysfakcji</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#35D47A]" />
                <span>Ochrona prywatności i danych</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN - SOPHISTICATED PRODUCT MOCKUP */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Visual glow frame */}
            <div className="relative w-full max-w-lg lg:max-w-none group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D89B37]/25 via-[#EAB85F]/20 to-[#35D47A]/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-2xl bg-[#0D1725] border border-[#D89B37]/40 p-4 sm:p-5 shadow-2xl overflow-hidden">
                
                {/* Mockup visual representation */}
                <div className="relative rounded-xl overflow-hidden bg-[#07111D] border border-[#D89B37]/25 aspect-[16/11]">
                  <img
                    src={heroMockup}
                    alt="Atlas Biblijny 3D - Mockup wydania cyfrowego z mapami topograficznymi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating seal on mockup */}
                  <div className="absolute top-3 left-3 bg-[#07111D]/90 backdrop-blur-md border border-[#D89B37]/60 text-[#EAB85F] px-3 py-1.5 rounded-lg text-xs font-bold font-serif shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D89B37]" />
                    <span>300+ STRON W HD</span>
                  </div>

                  {/* Tag on bottom right */}
                  <div className="absolute bottom-3 right-3 bg-[#07111D]/90 backdrop-blur-md border border-[#35D47A]/40 text-[#35D47A] px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35D47A]"></span>
                    <span>Wersja Cyfrowa 2026</span>
                  </div>
                </div>

                {/* Bottom Attention Box */}
                <div className="mt-4 p-3 rounded-xl bg-[#111C2C] border border-[#D89B37]/25 flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D89B37]/20 border border-[#D89B37]/40 flex items-center justify-center text-[#EAB85F] shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-[#EFE3CF]">
                        Cyfrowy dostęp • Natychmiastowe pobranie
                      </p>
                      <p className="text-[11px] text-[#C8B99F]">
                        Otwórz na telefonie, tablecie, czytniku lub komputerze
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[11px] text-[#C8B99F] line-through block">149,90 zł</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#EAB85F]">37,90 zł</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Micro Highlights below image */}
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-[#C8B99F]">
              <span className="flex items-center gap-1.5">
                <BookMarked className="w-4 h-4 text-[#D89B37]" />
                Format PDF HD
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D89B37]" />
                Ponad 100 map 3D
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#D89B37]" />
                8 bonusów w cenie
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
