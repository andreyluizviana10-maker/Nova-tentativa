import React from 'react';
import { Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onScrollToOffer: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#0D1725] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-[#111C2C] border-2 border-[#D89B37]/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* Gold Seal 30 Dni */}
          <div className="shrink-0 relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#EAB85F] via-[#D89B37] to-[#B87A1E] p-1 shadow-[0_0_35px_rgba(216,155,55,0.35)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#07111D] border-2 border-[#EAB85F]/50 flex flex-col items-center justify-center text-center p-2">
                <Award className="w-6 h-6 text-[#EAB85F] mb-0.5" />
                <span className="font-serif text-3xl sm:text-4xl font-black text-[#EFE3CF] leading-none">
                  30
                </span>
                <span className="font-serif text-xs sm:text-sm font-bold text-[#EAB85F] tracking-widest uppercase mt-0.5">
                  DNI
                </span>
                <span className="text-[9px] text-[#C8B99F] tracking-tighter uppercase">
                  GWARANCJI
                </span>
              </div>
            </div>
          </div>

          {/* Copy & CTA */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#35D47A] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% BEZPIECZNY ZAKUP</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
              GWARANCJA, KTÓRA POZWALA KUPIĆ BEZ OBAW
            </h2>

            <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed mb-6">
              Masz pełne 30 dni na zapoznanie się ze wszystkimi stronami, mapami i 8 dodatkowymi materiałami. Jeśli produkt nie spełni Twoich oczekiwań, możesz skorzystać z warunków gwarancji zwrotu zgodnie z regulaminem sklepu. Wystarczy jedna wiadomość e-mail.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onScrollToOffer}
                className="w-full sm:w-auto gold-btn px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
              >
                <span>Chcę uzyskać dostęp (37,90 zł)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#C8B99F]">
                <CheckCircle2 className="w-4 h-4 text-[#35D47A]" />
                <span>Zero ryzyka po Twojej stronie</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
