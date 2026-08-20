import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { PreviewCarousel } from './components/PreviewCarousel';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { AudienceSection } from './components/AudienceSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusSection } from './components/BonusSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { OrderModal } from './components/OrderModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07111D] text-[#EFE3CF] font-sans antialiased selection:bg-[#D89B37]/30 selection:text-[#EAB85F] relative">
      {/* 1. Header / Navigation */}
      <Navbar onScrollToOffer={scrollToOffer} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection onScrollToOffer={scrollToOffer} />

        {/* 3. Problem & Comparison Section */}
        <ProblemSection />

        {/* 4. Page Previews Carousel (10 Examples) */}
        <PreviewCarousel onScrollToOffer={scrollToOffer} />

        {/* 5. Chronological Timeline (9 Historical Eras) */}
        <TimelineSection />

        {/* 6. 3D Gallery & Reconstructions */}
        <GallerySection onScrollToOffer={scrollToOffer} />

        {/* 7. Target Audience Profiles */}
        <AudienceSection />

        {/* 8. Core Benefits */}
        <BenefitsSection onScrollToOffer={scrollToOffer} />

        {/* 9. Reader Opinions / Feedback */}
        <TestimonialsSection />

        {/* 10. 8 Special Bonuses */}
        <BonusSection onScrollToOffer={scrollToOffer} />

        {/* 11. Main Offer Card (37,90 zł) */}
        <OfferSection onOpenCheckout={openCheckout} />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. 30-Day Guarantee */}
        <GuaranteeSection onScrollToOffer={scrollToOffer} />
      </main>

      {/* 14. Footer */}
      <Footer onScrollToOffer={scrollToOffer} />

      {/* 15. Mobile Sticky CTA Bar */}
      <MobileStickyCTA onScrollToOffer={scrollToOffer} />

      {/* 16. Checkout & Instant Download Modal */}
      <OrderModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}
