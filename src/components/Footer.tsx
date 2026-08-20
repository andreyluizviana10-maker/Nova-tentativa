import React, { useState } from 'react';
import { Compass, Mail, Shield, FileText, RefreshCw } from 'lucide-react';

interface FooterProps {
  onScrollToOffer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToOffer }) => {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const openLegalModal = (title: string, text: string) => {
    setModalContent({ title, text });
  };

  return (
    <footer className="bg-[#050C15] text-[#C8B99F] pt-16 pb-24 sm:pb-16 border-t border-[#D89B37]/20 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D89B37]/30 to-[#0D1725] border border-[#D89B37]/50 flex items-center justify-center text-[#EAB85F]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-[#EFE3CF]">
                  Biblioteka Biblijna 3D
                </span>
                <span className="block text-[11px] text-[#C8B99F] tracking-wider uppercase">
                  Wydawnictwo Cyfrowe
                </span>
              </div>
            </div>

            <p className="text-sm text-[#C8B99F] max-w-md leading-relaxed">
              Wizualne materiały edukacyjne i kartograficzne pomagające lepiej poznawać świat, realia historyczne i geografię Pisma Świętego.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#EAB85F]">
              <Mail className="w-4 h-4 text-[#D89B37]" />
              <span>kontakt@bibliotekabiblijna3d.pl</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#EFE3CF] uppercase tracking-wider">
              Nawigacja
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#podglad" className="hover:text-[#EAB85F] transition-colors">
                  Podgląd stron i map
                </a>
              </li>
              <li>
                <a href="#chronologia" className="hover:text-[#EAB85F] transition-colors">
                  Układ chronologiczny
                </a>
              </li>
              <li>
                <a href="#bonusy" className="hover:text-[#EAB85F] transition-colors">
                  8 dodatków w prezencie
                </a>
              </li>
              <li>
                <button onClick={onScrollToOffer} className="hover:text-[#EAB85F] transition-colors text-left cursor-pointer">
                  Oferta promocyjna (37,90 zł)
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#EFE3CF] uppercase tracking-wider">
              Informacje prawne
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => openLegalModal('Regulamin Serwisu i Zakupu', 'Regulamin określa zasady zakupu produktów cyfrowych w serwisie Biblioteka Biblijna 3D. Dostęp do zakupionych materiałów cyfrowych (PDF) jest przyznawany natychmiast po zaksięgowaniu płatności. Materiały są przeznaczone do użytku osobistego i edukacyjnego.')}
                  className="hover:text-[#EAB85F] transition-colors text-left cursor-pointer"
                >
                  Regulamin sklepu
                </button>
              </li>
              <li>
                <button
                  onClick={() => openLegalModal('Polityka Prywatności i RODO', 'Dbamy o bezpieczeństwo Twoich danych osobowych zgodnie z RODO. Dane przetwarzane są wyłącznie w celu realizacji zamówienia, dostarczenia plików i obsługi gwarancyjnej. Nie przekazujemy danych osobom trzecim.')}
                  className="hover:text-[#EAB85F] transition-colors text-left cursor-pointer"
                >
                  Polityka prywatności
                </button>
              </li>
              <li>
                <button
                  onClick={() => openLegalModal('Polityka Zwrotów i Gwarancji', 'Kupujący ma prawo do skorzystania z 30-dniowej gwarancji satysfakcji. W przypadku chęci otrzymania zwrotu wystarczy kontakt mailowy z podaniem numeru transakcji.')}
                  className="hover:text-[#EAB85F] transition-colors text-left cursor-pointer"
                >
                  Polityka zwrotów (30 dni)
                </button>
              </li>
              <li>
                <button
                  onClick={() => openLegalModal('Kontakt z obsługą klienta', 'W przypadku jakichkolwiek pytań technicznych dotyczących pobierania materiałów napisz na adres: kontakt@bibliotekabiblijna3d.pl. Odpowiadamy w dni robocze w ciągu maksymalnie 24 godzin.')}
                  className="hover:text-[#EAB85F] transition-colors text-left cursor-pointer"
                >
                  Pomoc i Kontakt
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-[#C8B99F]/75 space-y-4 text-center sm:text-left">
          <p className="leading-relaxed">
            <strong>Ważna informacja:</strong> Produkt cyfrowy. Materiał edukacyjny nie jest oficjalnym wydaniem Biblii ani publikacją żadnego konkretnego kościoła lub organizacji religijnej. Służy jako kompendium wiedzy historycznej, geograficznej i archeologicznej dla każdego czytelnika Pisma Świętego.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px]">
            <span>
              © 2026 Biblioteka Biblijna 3D. Wszelkie prawa zastrzeżone.
            </span>
            <div className="flex items-center gap-4">
              <span>Płatności: BLIK • PayU • Przelewy24 • Visa • Mastercard</span>
            </div>
          </div>
        </div>

      </div>

      {/* Simple Legal Modal */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-[#111C2C] border border-[#D89B37] rounded-2xl max-w-lg w-full p-6 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl font-bold text-[#EFE3CF] mb-4">
              {modalContent.title}
            </h3>
            <p className="text-sm text-[#C8B99F] leading-relaxed mb-6">
              {modalContent.text}
            </p>
            <button
              onClick={() => setModalContent(null)}
              className="gold-btn px-5 py-2 rounded-lg text-xs font-bold float-right cursor-pointer"
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
