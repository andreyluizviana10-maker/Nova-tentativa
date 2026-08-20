import React from 'react';
import { HelpCircle, Eye, Compass, Mountain, MapPin } from 'lucide-react';
import { IMAGES } from '../data/contentData';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0D1725] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D89B37]" />
            <span>DLACZEGO TO MA ZNACZENIE</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-6">
            CZYTAŁEŚ TE FRAGMENTY DZIESIĄTKI RAZY.{' '}
            <span className="block mt-1 text-[#EAB85F]">
              ALE CZY KIEDYKOLWIEK NAPRAWDĘ JE ZOBACZYŁEŚ?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#C8B99F] leading-relaxed">
            Biblia wymienia setki prawdziwych miejsc — Betel, Kafarnaum, Jerozolimę, Jerycho, Samarię, Patmos… Bez poznania ich położenia łatwo stracić kluczową część kontekstu całej historii zbawienia.
          </p>
        </div>

        {/* Side by Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT CARD — SAM TEKST */}
          <div className="rounded-2xl bg-[#07111D] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-lg opacity-90 hover:opacity-100 transition-opacity">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#C8B99F] text-xs font-bold tracking-wider uppercase mb-6">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>SAM TEKST (BEZ MAPY)</span>
              </div>

              {/* Biblical Quote */}
              <div className="p-5 rounded-xl bg-[#111C2C]/50 border-l-4 border-gray-600 mb-6">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#EFE3CF]/80">
                  „Potem Jezus udał się ze swoimi uczniami do wiosek w okolicach Cezarei Filipowej…”
                </blockquote>
                <span className="block text-xs text-[#C8B99F] mt-2 font-mono">— Ewangelia Marka 8, 27</span>
              </div>

              {/* Problem Questions */}
              <div className="space-y-3 text-sm sm:text-base text-[#C8B99F] font-normal leading-relaxed mb-6">
                <p>
                  <strong className="text-[#EFE3CF]">Gdzie znajdowała się Cezarea Filipowa?</strong> Jak wyglądała? Dlaczego Jezus zabrał apostołów w najbardziej wysunięty na północ, pogański kraniec krainy, tuż pod potężny skalny klif?
                </p>
                <p>
                  Czytając sam suchy tekst bez mapy, łatwo po prostu przejść dalej bez zrozumienia, jak dramatyczne tło geograficzne towarzyszyło wyznaniu wiary Piotra.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-xs text-[#C8B99F]/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              <span>Brak wizualnego punktu odniesienia i skali terenu</span>
            </div>
          </div>

          {/* RIGHT CARD — Z ATLASEM BIBLIJNYM 3D */}
          <div className="rounded-2xl bg-[#111C2C] border-2 border-[#D89B37] p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(216,155,55,0.18)] relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D89B37]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Gold Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D89B37]/20 border border-[#D89B37]/60 text-[#EAB85F] text-xs font-bold tracking-wider uppercase">
                  <Eye className="w-3.5 h-3.5 text-[#D89B37]" />
                  <span>Z ATLASEM BIBLIJNYM 3D</span>
                </div>
                <span className="text-xs text-[#35D47A] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35D47A] animate-ping"></span>
                  Pełny kontekst 3D
                </span>
              </div>

              {/* Biblical Quote */}
              <div className="p-4 rounded-xl bg-[#07111D] border-l-4 border-[#D89B37] mb-5">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#EFE3CF]">
                  „Potem Jezus udał się ze swoimi uczniami do wiosek w okolicach Cezarei Filipowej…”
                </blockquote>
              </div>

              {/* Large 3D Caesarea Philippi Image */}
              <div className="rounded-xl overflow-hidden border border-[#D89B37]/40 mb-5 relative aspect-[16/9] bg-[#07111D]">
                <img
                  src={IMAGES.caesarea}
                  alt="3D Rekonstrukcja topograficzna Cezarei Filipowej u stóp góry Hermon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Markers */}
                <div className="absolute bottom-3 left-3 bg-[#07111D]/85 backdrop-blur-md border border-[#D89B37]/40 px-2.5 py-1 rounded text-[11px] text-[#EFE3CF] flex items-center gap-1.5">
                  <Mountain className="w-3 h-3 text-[#EAB85F]" />
                  <span>Góra Hermon • Źródła Banias</span>
                </div>

                <div className="absolute top-3 right-3 bg-[#D89B37] text-[#07111D] px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                  Widok 3D
                </div>
              </div>

              {/* Explanation / Impact */}
              <p className="text-sm sm:text-base text-[#EFE3CF] font-medium leading-relaxed mb-4">
                Teraz nie tylko czytasz nazwę. <strong className="text-[#EAB85F]">Widzisz potężny masyw góry Hermon, rwące źródła rzeki Jordan oraz pogańskie świątynie wyryte w skale.</strong> Rozumiesz, dlaczego Jezus zapytał uczniów: <em>„Za kogo Mnie uważacie?”</em> dokładnie w tym miejscu.
              </p>
            </div>

            <div className="pt-4 border-t border-[#D89B37]/20 text-xs text-[#EAB85F] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#35D47A]" />
                Zrozumienie geograficzne i teologiczne
              </span>
              <span className="text-[11px] text-[#C8B99F]">Strona 184 w Atlasie</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
