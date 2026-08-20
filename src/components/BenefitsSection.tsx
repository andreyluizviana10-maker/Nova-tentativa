import React from 'react';
import { 
  Brain, 
  Compass, 
  Mountain, 
  Users, 
  Clock, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { BENEFITS } from '../data/contentData';

interface BenefitsSectionProps {
  onScrollToOffer: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onScrollToOffer }) => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#EAB85F]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#EAB85F]" />;
      case 'Mountain':
        return <Mountain className="w-6 h-6 text-[#EAB85F]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#EAB85F]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#EAB85F]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#EAB85F]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#EAB85F]" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-[#07111D] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <Eye className="w-3.5 h-3.5 text-[#D89B37]" />
            <span>KORZYŚCI Z WIZUALNEGO STUDIUM</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            CO ZMIENIA SIĘ, GDY ZACZYNASZ{' '}
            <span className="text-[#EAB85F]">WIDZIEĆ BIBLIĘ NA MAPIE?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
            Przestań gubić się w nazwach i odległościach. Odkryj, jak trójwymiarowa perspektywa wzbogaca Twoje codzienne czytanie Pisma Świętego.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl bg-[#111C2C] border border-[#D89B37]/30 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[#D89B37] hover:shadow-[0_0_30px_rgba(216,155,55,0.12)] transition-all duration-300 group"
            >
              <div>
                {/* Top Icon and Step */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1725] border border-[#D89B37]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getBenefitIcon(benefit.iconName)}
                  </div>
                  <span className="font-serif text-xs font-bold text-[#D89B37] px-2.5 py-1 rounded bg-[#07111D] border border-white/5">
                    KORZYŚĆ 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#EFE3CF] mb-3 group-hover:text-[#EAB85F] transition-colors leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#C8B99F] leading-relaxed mb-4">
                  {benefit.description}
                </p>
              </div>

              {/* Practical Example Box */}
              <div className="pt-4 border-t border-white/5">
                <div className="p-3 rounded-xl bg-[#07111D] border border-white/5 text-xs text-[#EFE3CF]/85">
                  <strong className="text-[#EAB85F] block mb-1">Przykład w praktyce:</strong>
                  <span>{benefit.practicalExample}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onScrollToOffer}
            className="gold-btn px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold inline-flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
          >
            <span>Dołącz i zacznij widzieć świat Biblii (37,90 zł)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
