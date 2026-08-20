import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Smartphone,
  CreditCard,
  Building2,
  Mail
} from 'lucide-react';
import { BONUS_ITEMS } from '../data/contentData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'blik' | 'p24' | 'card'>('blik');
  const [blikCode, setBlikCode] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(true);

  const [downloadedAtlas, setDownloadedAtlas] = useState(false);
  const [downloadedBonuses, setDownloadedBonuses] = useState(false);

  if (!isOpen) return null;

  const handleDownloadAtlas = () => {
    setDownloadedAtlas(true);
    // Simulate generating file download
    setTimeout(() => setDownloadedAtlas(false), 3000);
  };

  const handleDownloadBonuses = () => {
    setDownloadedBonuses(true);
    // Simulate generating file download
    setTimeout(() => setDownloadedBonuses(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);
    // Simulate real fast payment confirmation
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#111C2C] border-2 border-[#D89B37] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#C8B99F] hover:text-[#EFE3CF] w-9 h-9 rounded-full bg-[#07111D] border border-white/10 flex items-center justify-center cursor-pointer"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#D89B37]/20 text-[#EAB85F] text-xs font-serif font-bold uppercase tracking-wider mb-2">
                <Lock className="w-3 h-3 text-[#35D47A]" />
                <span>Bezpieczne zamówienie cyfrowe</span>
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-[#EFE3CF]">
                Zamów Atlas Biblijny 3D
              </h3>
              <p className="text-xs text-[#C8B99F] mt-1">
                Wypełnij dane, aby otrzymać natychmiastowy dostęp do wszystkich materiałów.
              </p>
            </div>

            {/* Order Summary Box */}
            <div className="p-4 rounded-xl bg-[#07111D] border border-[#D89B37]/30 mb-6 flex items-center justify-between">
              <div>
                <p className="font-serif text-sm font-bold text-[#EFE3CF]">
                  Komplet: Atlas Biblijny 3D + 8 Bonusów
                </p>
                <p className="text-[11px] text-[#35D47A] font-medium flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  Dostęp natychmiastowy po płatności
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#C8B99F] line-through block">149,90 zł</span>
                <span className="font-serif text-xl font-extrabold text-[#EAB85F]">37,90 zł</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#EFE3CF] mb-1.5">
                  Twój adres e-mail (do wysyłki plików PDF):
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#C8B99F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="twoj-email@domena.pl"
                    className="w-full bg-[#07111D] border border-[#D89B37]/40 rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#EFE3CF] placeholder:text-[#C8B99F]/50 focus:outline-none focus:border-[#EAB85F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#EFE3CF] mb-1.5">
                  Imię i nazwisko:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="np. Jan Kowalski"
                  className="w-full bg-[#07111D] border border-[#D89B37]/40 rounded-xl px-4 py-2.5 text-sm text-[#EFE3CF] placeholder:text-[#C8B99F]/50 focus:outline-none focus:border-[#EAB85F]"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#EFE3CF] mb-2">
                  Wybierz metodę płatności:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('blik')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'blik'
                        ? 'bg-[#D89B37]/20 border-[#D89B37] text-[#EAB85F]'
                        : 'bg-[#07111D] border-white/10 text-[#C8B99F]'
                    }`}
                  >
                    <span className="font-extrabold text-sm text-[#EAB85F]">BLIK</span>
                    <span className="text-[10px] text-[#C8B99F]">Najszybciej</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('p24')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'p24'
                        ? 'bg-[#D89B37]/20 border-[#D89B37] text-[#EAB85F]'
                        : 'bg-[#07111D] border-white/10 text-[#C8B99F]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#EAB85F]" />
                    <span className="text-[10px]">Przelew Online</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-[#D89B37]/20 border-[#D89B37] text-[#EAB85F]'
                        : 'bg-[#07111D] border-white/10 text-[#C8B99F]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#EAB85F]" />
                    <span className="text-[10px]">Karta / GPay</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'blik' && (
                <div className="p-3 rounded-xl bg-[#07111D] border border-[#D89B37]/30">
                  <label className="block text-[11px] font-semibold text-[#EAB85F] mb-1">
                    Wpisz 6-cyfrowy kod BLIK z aplikacji bankowej:
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={blikCode}
                    onChange={(e) => setBlikCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="123 456"
                    className="w-full bg-[#111C2C] border border-[#D89B37]/50 rounded-lg px-3 py-2 text-center text-lg font-mono tracking-widest text-[#EFE3CF] focus:outline-none"
                  />
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 accent-[#D89B37]"
                />
                <label htmlFor="terms" className="text-[11px] text-[#C8B99F] leading-tight cursor-pointer">
                  Akceptuję regulamin zakupu produktu cyfrowego oraz potwierdzam 30-dniową gwarancję satysfakcji.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !termsAccepted}
                className="w-full gold-btn py-3.5 px-6 rounded-xl text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Przetwarzanie płatności...</span>
                ) : (
                  <>
                    <span>Opłać zamówienie (37,90 zł)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center flex items-center justify-center gap-3 text-[11px] text-[#C8B99F]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#35D47A]" />
                Szyfrowanie SSL
              </span>
              <span>•</span>
              <span>30 dni na zwrot</span>
            </div>
          </div>
        ) : (
          /* SUCCESS / DOWNLOAD PORTAL */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#35D47A]/20 border-2 border-[#35D47A] flex items-center justify-center text-[#35D47A] mx-auto mb-4 animate-bounce">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-black text-[#EFE3CF] mb-2">
              Dziękujemy za zamówienie!
            </h3>
            <p className="text-xs sm:text-sm text-[#C8B99F] mb-6">
              Dostęp do materiałów został aktywowany. Kopia została również przesłana na adres: <strong className="text-[#EAB85F]">{email || 'Twój adres e-mail'}</strong>.
            </p>

            <div className="space-y-3 mb-6 text-left">
              <div className="p-3.5 rounded-xl bg-[#07111D] border border-[#D89B37]/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#EAB85F] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#EFE3CF]">Atlas Biblijny 3D (Wydanie Główne HD)</p>
                    <p className="text-[10px] text-[#C8B99F]">300+ stron • PDF wysokiej rozdzielczości</p>
                  </div>
                </div>
                <button 
                  onClick={handleDownloadAtlas}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 cursor-pointer transition-all ${
                    downloadedAtlas
                      ? 'bg-[#35D47A] text-[#07111D]'
                      : 'bg-[#D89B37] text-[#07111D] hover:bg-[#EAB85F]'
                  }`}
                >
                  {downloadedAtlas ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Pobrano!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Pobierz</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-[#07111D] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#35D47A] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#EFE3CF]">Pakiet 8 Dodatków i Map Specjalnych</p>
                    <p className="text-[10px] text-[#C8B99F]">Kompletny zestaw bonusowy PDF + Plakaty</p>
                  </div>
                </div>
                <button 
                  onClick={handleDownloadBonuses}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 cursor-pointer transition-all ${
                    downloadedBonuses
                      ? 'bg-[#35D47A] text-[#07111D]'
                      : 'bg-[#111C2C] border border-[#D89B37]/50 text-[#EAB85F] hover:bg-[#D89B37] hover:text-[#07111D]'
                  }`}
                >
                  {downloadedBonuses ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Pobrano!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Pobierz</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#C8B99F] hover:text-[#EFE3CF] underline cursor-pointer"
            >
              Zamknij okno
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
