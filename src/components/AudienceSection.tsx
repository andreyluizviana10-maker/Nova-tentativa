import React from 'react';
import { BookOpen, GraduationCap, Church, Library, Users, Heart } from 'lucide-react';
import { AUDIENCE_CATEGORIES } from '../data/contentData';

export const AudienceSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#D89B37]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#D89B37]" />;
      case 'Church':
        return <Church className="w-6 h-6 text-[#D89B37]" />;
      case 'Library':
        return <Library className="w-6 h-6 text-[#D89B37]" />;
      default:
        return <Users className="w-6 h-6 text-[#D89B37]" />;
    }
  };

  return (
    <section className="py-14 bg-[#0D1725] relative border-b border-[#D89B37]/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-serif font-bold text-[#EAB85F] uppercase tracking-widest block mb-2">
            DLA KOGO POWSTAŁ ATLAS BIBLIJNY 3D
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#EFE3CF]">
            Narzędzie stworzone dla pasjonatów i nauczycieli Pisma Świętego
          </h3>
        </div>

        {/* 4 Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {AUDIENCE_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#111C2C] border border-[#D89B37]/25 p-5 flex flex-col items-start hover:border-[#D89B37] hover:bg-[#111C2C]/90 transition-all duration-300 shadow-md group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#07111D] border border-[#D89B37]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(cat.icon)}
              </div>
              <h4 className="font-serif text-base font-bold text-[#EFE3CF] mb-2 group-hover:text-[#EAB85F] transition-colors">
                {cat.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#C8B99F] leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Inclusive note */}
        <div className="mt-8 text-center text-xs sm:text-sm text-[#C8B99F] flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-[#EAB85F]" />
          <span>
            Oraz dla każdego, kto po prostu pragnie czytać Biblię z większym zrozumieniem i zachwytem.
          </span>
        </div>

      </div>
    </section>
  );
};
