'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const navItems = ['Solutions', 'Toolkit', 'Work', 'Projects'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
      isScrolled ? 'bg-primary/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center md:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-xs md:text-sm font-bold text-gray-900 px-3 py-2 thick-underline transition-none"
            >
              {item.toUpperCase()}
            </a>
          ))}
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
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-bold text-gray-900 px-6 py-3 hover:bg-gray-100"
                  onClick={closeMobileMenu}
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
