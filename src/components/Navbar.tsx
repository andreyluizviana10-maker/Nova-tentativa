import React from 'react';
import { Compass, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onScrollToOffer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToOffer }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#07111D]/90 backdrop-blur-md border-b border-[#D89B37]/20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D89B37]/30 to-[#0D1725] border border-[#D89B37]/50 flex items-center justify-center text-[#EAB85F] shadow-[0_0_15px_rgba(216,155,55,0.2)]">
            <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
          </div>
          <div>
            <span className="block font-serif text-base sm:text-lg font-bold tracking-wider text-[#EFE3CF] group-hover:text-[#EAB85F] transition-colors">
              ATLAS BIBLIJNY <span className="text-[#D89B37]">3D</span>
            </span>
            <span className="block text-[10px] sm:text-xs text-[#C8B99F] tracking-widest uppercase">
              Biblioteka Biblijna 3D
            </span>
          </div>
        </a>

        {/* Quick Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#C8B99F]">
          <a href="#podglad" className="hover:text-[#EAB85F] transition-colors">
            Podgląd stron
          </a>
          <a href="#chronologia" className="hover:text-[#EAB85F] transition-colors">
            Chronologia
          </a>
          <a href="#galeria" className="hover:text-[#EAB85F] transition-colors">
            Mapy 3D
          </a>
          <a href="#bonusy" className="hover:text-[#EAB85F] transition-colors">
            8 Bonusów
          </a>
          <a href="#faq" className="hover:text-[#EAB85F] transition-colors">
            Pytania
          </a>
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#C8B99F] bg-[#111C2C] px-3 py-1.5 rounded-full border border-[#D89B37]/20">
            <span className="w-2 h-2 rounded-full bg-[#35D47A] animate-pulse"></span>
            <span>Dostęp cyfrowy od ręki</span>
          </div>

          <button
            onClick={onScrollToOffer}
            id="nav-cta-btn"
            className="gold-btn px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 shadow-[0_4px_15px_rgba(216,155,55,0.25)] hover:shadow-[0_6px_20px_rgba(216,155,55,0.4)] cursor-pointer"
          >
            <span>Zamów Atlas — 37,90 zł</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
