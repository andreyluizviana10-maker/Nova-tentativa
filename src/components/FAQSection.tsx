import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/contentData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#07111D] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D89B37]" />
            <span>PYTANIA I ODPOWIEDZI</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            NAJCZĘŚCIEJ ZADAWANE PYTANIA
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
            Masz pytania przed zakupem? Poniżej znajdziesz odpowiedzi na najczęstsze kwestie techniczne i organizacyjne.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#111C2C] border border-[#D89B37]/25 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#111C2C]/80"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#EFE3CF] hover:text-[#EAB85F] transition-colors">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#07111D] border border-[#D89B37]/30 flex items-center justify-center text-[#EAB85F] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#D89B37] text-[#07111D]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#C8B99F] leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
