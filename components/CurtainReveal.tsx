import React, { useEffect, useState } from 'react';

export const CurtainReveal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-luxury-white transition-opacity duration-1000 ease-in-out flex items-center justify-center pointer-events-none"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="text-luxury-gold font-serif text-3xl tracking-ultra-wide animate-pulse">
        VSS WEDDINGS
      </div>
    </div>
  );
};