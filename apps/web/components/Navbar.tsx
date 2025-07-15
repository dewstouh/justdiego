'use client';

import { useState, useEffect } from 'react';
import NavItems from './navbar/NavItems';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full h-16 flex justify-center items-center z-50 navbar-transition ${
      isScrolled ? 'bg-neutral-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center md:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 md:gap-8">
          <NavItems/>
        </div>

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
              <NavItems onClick={closeMobileMenu}/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
