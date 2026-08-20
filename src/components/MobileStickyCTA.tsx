import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MobileStickyCTAProps {
  onScrollToOffer: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onScrollToOffer }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past ~500px (past hero)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#07111D]/95 backdrop-blur-lg border-t border-[#D89B37]/40 p-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col text-left">
          <span className="font-serif text-xs font-bold text-[#EFE3CF] leading-tight">
            Atlas Biblijny 3D
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[11px] text-[#C8B99F] line-through">149,90 zł</span>
            <span className="text-sm font-black text-[#EAB85F]">37,90 zł</span>
          </div>
        </div>

        <button
          onClick={onScrollToOffer}
          className="gold-btn py-2.5 px-5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
        >
          <span>Uzyskaj dostęp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
