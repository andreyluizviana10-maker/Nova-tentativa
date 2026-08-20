import React from 'react';
import { 
  Gift, 
  BookOpen, 
  FolderKanban, 
  HeartHandshake, 
  CalendarDays, 
  Layers, 
  Flame, 
  Anchor, 
  Navigation, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BONUS_ITEMS } from '../data/contentData';

interface BonusSectionProps {
  onScrollToOffer: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToOffer }) => {
  const getBonusIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#EAB85F]" />;
      case 'FolderKanban':
        return <FolderKanban className="w-5 h-5 text-[#EAB85F]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#EAB85F]" />;
      case 'CalendarDays':
        return <CalendarDays className="w-5 h-5 text-[#EAB85F]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#EAB85F]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#EAB85F]" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-[#EAB85F]" />;
      case 'Navigation':
        return <Navigation className="w-5 h-5 text-[#EAB85F]" />;
      default:
        return <Gift className="w-5 h-5 text-[#EAB85F]" />;
    }
  };

  return (
    <section id="bonusy" className="py-16 lg:py-24 bg-[#07111D] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <Gift className="w-3.5 h-3.5 text-[#35D47A]" />
            <span>DODATKI SPECJALNE W ZESTAWIE</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            OTRZYMASZ RÓWNIEŻ{' '}
            <span className="text-[#EAB85F]">8 DODATKOWYCH MATERIAŁÓW</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
            Wszystkie materiały pomocnicze są włączone do pakietu głównego i dostępne natychmiast po zamówieniu Atlasu Biblijnego 3D.
          </p>
        </div>

        {/* 8 Bonuses Grid (4 columns on large desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUS_ITEMS.map((bonus) => (
            <div
              key={bonus.number}
              className="rounded-2xl bg-[#111C2C] border border-[#D89B37]/30 p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:border-[#D89B37] hover:shadow-[0_0_25px_rgba(216,155,55,0.15)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D89B37]/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header of Bonus Card */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-serif font-bold text-[#EAB85F] bg-[#07111D] px-2 py-0.5 rounded border border-[#D89B37]/30">
                    BONUS #{bonus.number}
                  </span>

                  {/* Green Badge W PREZENCIE */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#35D47A] bg-[#35D47A]/10 border border-[#35D47A]/30 px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3" />
                    <span>{bonus.badgeText}</span>
                  </span>
                </div>

                {/* Editorial Book Mockup Graphic Container */}
                <div className="mb-4 p-4 rounded-xl bg-[#07111D] border border-[#D89B37]/25 flex items-center justify-center flex-col text-center relative group-hover:border-[#D89B37]/60 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#111C2C] border border-[#D89B37]/40 flex items-center justify-center mb-2 shadow-inner">
                    {getBonusIcon(bonus.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D89B37]">
                    {bonus.format}
                  </span>
                  <span className="text-xs font-semibold text-[#EFE3CF] mt-0.5">
                    {bonus.pagesCount}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-base font-bold text-[#EFE3CF] mb-2 group-hover:text-[#EAB85F] transition-colors leading-snug">
                  {bonus.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#C8B99F] leading-relaxed mb-4">
                  {bonus.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#C8B99F]">
                <span>Dostęp natychmiastowy</span>
                <span className="text-[#35D47A] font-semibold">0,00 zł w pakiecie</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0D1725] border border-[#D89B37]/30 max-w-3xl mx-auto text-center shadow-lg">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#EFE3CF] mb-2">
            <Sparkles className="w-4 h-4 text-[#D89B37]" />
            <span>Pełny komplet materiałów (Atlas 300+ stron + 8 bonusów) w jednej opłacie</span>
          </div>
          <p className="text-xs text-[#C8B99F] mb-5">
            Nie ponosisz żadnych dodatkowych kosztów ani ukrytych opłat subskrypcyjnych.
          </p>
          <button
            onClick={onScrollToOffer}
            className="gold-btn px-8 py-3 rounded-xl text-sm sm:text-base font-bold inline-flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-transform"
          >
            <span>Odbierz Atlas z 8 bonusami (37,90 zł)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
