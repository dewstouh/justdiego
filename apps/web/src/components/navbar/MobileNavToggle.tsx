'use client';

import { useState } from 'react';

interface MobileNavToggleProps {
  children: React.ReactNode;
}

export default function MobileNavToggle({ children }: MobileNavToggleProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-900 hamburger-line ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-900 hamburger-line ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-900 hamburger-line ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary/95 backdrop-blur-sm shadow-lg md:hidden">
          <div className="flex flex-col py-4">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
