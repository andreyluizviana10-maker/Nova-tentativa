import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/contentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0D1725] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111C2C] border border-[#D89B37]/30 text-[#EAB85F] text-xs font-semibold tracking-wider uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#D89B37]" />
            <span>OPINIE CZYTELNIKÓW</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#EFE3CF] leading-tight mb-4">
            CO MÓWIĄ OSOBY{' '}
            <span className="text-[#EAB85F]">KORZYSTAJĄCE Z MATERIAŁÓW?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C8B99F] leading-relaxed">
            Zobacz, jak wizualne podejście do geografii biblijnej pomaga w osobistym studium, katechezie i prowadzeniu grup.
          </p>
        </div>

        {/* 4 Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#111C2C] border border-[#D89B37]/25 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[#D89B37]/70 transition-all duration-300 relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#EAB85F] mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EAB85F]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#EFE3CF]/90 leading-relaxed italic mb-6">
                  „{item.quote}”
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-[#D89B37]/40"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#EFE3CF]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#C8B99F]">
                      {item.role} • {item.city}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#35D47A] font-medium bg-[#07111D] px-2.5 py-1 rounded border border-white/5">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>{item.verifiedLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
