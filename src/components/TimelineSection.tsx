import React, { useState } from 'react';
import { 
  History, 
  MapPin, 
  Book, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles,
  Milestone
} from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/contentData';

export const TimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="chronologia" className="py-16 lg:py-24 bg-[#0D1725] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <History className="w-3.5 h-3.5 text-[#D89B37]" />
            <span>CO ZNAJDZIESZ W ŚRODKU</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            CAŁA HISTORIA BIBLIJNA —{' '}
            <span className="text-[#EAB85F]">UŁOŻONA NA MAPIE</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
            Poznaj wydarzenia w naturalnej kolejności chronologicznej, która pozwala zobaczyć, jak zmieniały się miejsca, granice, imperia i trasy — od Księgi Rodzaju po Apokalipsę.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Timeline Navigation / List */}
          <div className="lg:col-span-7 space-y-4">
            {TIMELINE_ITEMS.map((item) => {
              const isActive = activeStep === item.number;
              return (
                <div
                  key={item.number}
                  onClick={() => setActiveStep(item.number)}
                  className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#111C2C] border-[#D89B37] shadow-[0_0_25px_rgba(216,155,55,0.15)] translate-x-1'
                      : 'bg-[#07111D]/80 border-white/5 hover:border-[#D89B37]/40 hover:bg-[#111C2C]/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number Circle */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-serif font-bold text-base sm:text-lg shrink-0 border transition-colors ${
                        isActive
                          ? 'bg-[#D89B37] text-[#07111D] border-[#EAB85F]'
                          : 'bg-[#0D1725] text-[#C8B99F] border-[#D89B37]/30'
                      }`}
                    >
                      0{item.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#D89B37]">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-[#C8B99F] bg-[#07111D] px-2 py-0.5 rounded border border-white/5">
                          {item.scriptureSpan}
                        </span>
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#EFE3CF] mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#C8B99F] leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Location Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {item.keyLocations.map((loc, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-[#07111D] text-[#EFE3CF]/80 border border-white/5"
                          >
                            <MapPin className="w-2.5 h-2.5 text-[#35D47A]" />
                            {loc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Interactive Map Highlight Card on Desktop */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {(() => {
              const currentItem = TIMELINE_ITEMS.find((t) => t.number === activeStep) || TIMELINE_ITEMS[0];
              return (
                <div className="rounded-2xl bg-[#111C2C] border-2 border-[#D89B37]/60 p-6 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#D89B37]/20">
                    <div className="flex items-center gap-2">
                      <Milestone className="w-5 h-5 text-[#EAB85F]" />
                      <span className="text-xs font-serif font-bold text-[#EAB85F] uppercase tracking-wider">
                        ETAP {currentItem.number} Z 9 W ATLASIE
                      </span>
                    </div>
                    <span className="text-xs text-[#35D47A] font-mono font-semibold">
                      {currentItem.scriptureSpan}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#EFE3CF] mb-2">
                    {currentItem.title}
                  </h3>

                  <p className="text-xs text-[#D89B37] font-semibold mb-4">
                    Kluczowy okres: {currentItem.period}
                  </p>

                  <p className="text-sm text-[#C8B99F] leading-relaxed mb-6">
                    {currentItem.description}
                  </p>

                  {/* Highlights Box */}
                  <div className="p-4 rounded-xl bg-[#07111D] border border-[#D89B37]/30 mb-6">
                    <h4 className="text-xs font-bold text-[#EAB85F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Główne punkty na mapie tego rozdziału:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentItem.keyLocations.map((loc, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#EFE3CF]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D89B37]"></span>
                          <span>{loc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#D89B37]/10 border border-[#D89B37]/30 text-xs text-[#EFE3CF]/90 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#EAB85F] shrink-0" />
                    <span>Zawiera szczegółowe rzuty z góry, diagramy terenu i szlaki komunikacyjne.</span>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
