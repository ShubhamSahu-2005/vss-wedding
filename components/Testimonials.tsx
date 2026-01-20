import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <div className="relative py-32 px-4 bg-luxury-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-luxury-gold uppercase tracking-ultra-wide text-xs mb-6 block font-medium">Kind Words</span>
        <h2 className="text-4xl md:text-6xl font-serif text-luxury-black mb-16 italic">Love Stories</h2>

        <div className="relative">
          <div className="min-h-[250px] flex flex-col justify-center items-center px-12">
            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-luxury-black/80 mb-10 italic">
              "{REVIEWS[activeIndex].comment}"
            </p>

            <div className="space-y-1">
              <h4 className="text-sm font-bold tracking-widest uppercase text-luxury-black">{REVIEWS[activeIndex].name}</h4>
              <p className="text-xs text-luxury-gold tracking-widest uppercase">{REVIEWS[activeIndex].role}</p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="w-1 h-1 rounded-full bg-luxury-gold"></span>
                <span className="text-[10px] uppercase tracking-ultra-wide text-luxury-black/40">Verified Review</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-12 mt-12">
            <button
              onClick={prev}
              className="text-luxury-black/30 hover:text-luxury-gold transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="text-luxury-black/30 hover:text-luxury-gold transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};