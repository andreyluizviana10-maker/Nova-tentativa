import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Gift, 
  MapPin, 
  Laptop, 
  Smartphone, 
  Infinity as InfinityIcon, 
  Headphones,
  CreditCard,
  Zap,
  Clock
} from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  // Honest subtle countdown for session offer (e.g. 2h 45m remaining in day session)
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 2,
    minutes: 48,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="oferta" className="py-16 lg:py-24 bg-[#0D1725] relative border-b border-[#D89B37]/15">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D89B37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111C2C] border border-[#D89B37]/50 text-[#EAB85F] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(216,155,55,0.2)]">
            <Zap className="w-4 h-4 text-[#D89B37] fill-[#D89B37]" />
            <span>OFERTA SPECJALNA — EDYCJA CYFROWA 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            UZYSKAJ NATYCHMIASTOWY DOSTĘP
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed max-w-2xl mx-auto">
            Wszystko, czego potrzebujesz, aby odkrywać geografię, historię i miejsca Biblii w nowoczesny, trójwymiarowy sposób.
          </p>
        </div>

        {/* Big Central Conversion Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#111C2C] border-2 border-[#D89B37] p-6 sm:p-10 lg:p-12 shadow-[0_0_50px_rgba(216,155,55,0.2)] relative overflow-hidden">
          
          {/* Top subtle badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D89B37] to-[#EAB85F] text-[#07111D] font-serif font-extrabold text-xs px-6 py-1.5 rounded-bl-xl shadow-md uppercase tracking-wider">
            Zniżka -75% Dzisiaj
          </div>

          {/* Session Timer Box */}
          <div className="mb-8 p-3.5 rounded-xl bg-[#07111D] border border-[#D89B37]/30 flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#EFE3CF]">
              <Clock className="w-4 h-4 text-[#EAB85F] shrink-0" />
              <span>Gwarancja promocyjnej ceny dla bieżącej sesji:</span>
            </div>
            
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <div className="px-2.5 py-1 rounded bg-[#111C2C] border border-[#D89B37]/40 text-xs font-mono font-bold text-[#EAB85F]">
                {String(timeLeft.hours).padStart(2, '0')} <span className="text-[10px] text-[#C8B99F]">GODZ.</span>
              </div>
              <span className="text-[#D89B37] font-bold">:</span>
              <div className="px-2.5 py-1 rounded bg-[#111C2C] border border-[#D89B37]/40 text-xs font-mono font-bold text-[#EAB85F]">
                {String(timeLeft.minutes).padStart(2, '0')} <span className="text-[10px] text-[#C8B99F]">MIN.</span>
              </div>
              <span className="text-[#D89B37] font-bold">:</span>
              <div className="px-2.5 py-1 rounded bg-[#111C2C] border border-[#D89B37]/40 text-xs font-mono font-bold text-[#EAB85F]">
                {String(timeLeft.seconds).padStart(2, '0')} <span className="text-[10px] text-[#C8B99F]">SEK.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Checklist items - 7 cols */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <h3 className="font-serif text-xl font-bold text-[#EFE3CF] mb-4">
                W pakiecie otrzymujesz:
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong className="text-[#EAB85F]">Atlas Biblijny 3D</strong> — 300+ stron w formacie PDF HD
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong className="text-[#35D47A]">8 materiałów dodatkowych</strong> (wartość w pakiecie gratis)
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong>Ponad 100 map i wizualizacji 3D</strong> w wysokiej rozdzielczości
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong>Dostęp na komputerze</strong> (Windows, macOS, Linux)
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong>Dostęp na telefonie i tablecie</strong> (Android, iPhone, iPad)
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong>Dostęp bez ograniczeń czasowych</strong> (pobierasz pliki na własność)
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm sm:text-base text-[#EFE3CF]">
                  <div className="w-5 h-5 rounded-full bg-[#35D47A]/20 border border-[#35D47A]/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#35D47A]" />
                  </div>
                  <div>
                    <strong>Polska obsługa klienta</strong> i wsparcie techniczne
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#C8B99F] italic">
                Wszystko, czego potrzebujesz, aby odkrywać geografię Biblii w bardziej wizualny sposób.
              </div>
            </div>

            {/* Price Box & Large CTA - 5 cols */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#07111D] border border-[#D89B37]/40 text-center shadow-inner">
              
              <span className="text-xs font-semibold text-[#FF5E57] tracking-wider uppercase line-through mb-1">
                Wartość katalogowa: 149,90 zł
              </span>

              <span className="text-xs font-serif font-bold text-[#EAB85F] tracking-widest uppercase mb-1">
                DZISIAJ TYLKO
              </span>

              {/* Giant Price 37,90 zł */}
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-serif text-5xl sm:text-6xl font-black text-[#EFE3CF] tracking-tight">
                  37,90
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#EAB85F]">
                  zł
                </span>
              </div>

              <span className="text-xs text-[#C8B99F] mb-6 block font-medium">
                Jednorazowa płatność • Bez subskrypcji
              </span>

              {/* Very Large CTA Button */}
              <button
                onClick={onOpenCheckout}
                id="offer-cta-button"
                className="w-full gold-btn py-4 px-6 rounded-xl text-base sm:text-lg font-bold flex items-center justify-center gap-3 cursor-pointer group shadow-[0_10px_25px_rgba(216,155,55,0.35)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Uzyskaj dostęp teraz</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-4 text-[11px] text-[#C8B99F] flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35D47A]"></span>
                <span>Produkt cyfrowy • Natychmiastowy dostęp po zakupie</span>
              </div>

              {/* Polish Payment Methods */}
              <div className="mt-6 pt-4 border-t border-white/10 w-full">
                <span className="block text-[11px] text-[#C8B99F] mb-2 font-medium">
                  Bezpieczne polskie metody płatności:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-[#EFE3CF]/80">
                  <span className="px-2 py-1 rounded bg-[#111C2C] border border-[#D89B37]/30 font-bold text-[#EAB85F]">
                    BLIK
                  </span>
                  <span className="px-2 py-1 rounded bg-[#111C2C] border border-white/10 font-bold">
                    Przelewy24
                  </span>
                  <span className="px-2 py-1 rounded bg-[#111C2C] border border-white/10 font-bold">
                    PayU
                  </span>
                  <span className="px-2 py-1 rounded bg-[#111C2C] border border-white/10 font-medium">
                    Karta Visa/MC
                  </span>
                  <span className="px-2 py-1 rounded bg-[#111C2C] border border-white/10 font-medium">
                    Apple Pay / GPay
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Trust Badges bottom row */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#C8B99F]">
              <Lock className="w-4 h-4 text-[#35D47A]" />
              <span>Szyfrowane połączenie 256-bit SSL</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#C8B99F]">
              <Award className="w-4 h-4 text-[#EAB85F]" />
              <span>30 dni bezwarunkowej gwarancji</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#C8B99F]">
              <ShieldCheck className="w-4 h-4 text-[#35D47A]" />
              <span>Pełna ochrona danych osobowych RODO</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
