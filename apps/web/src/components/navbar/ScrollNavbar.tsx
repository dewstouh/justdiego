'use client';

import { useState, useEffect } from 'react';

interface ScrollNavbarProps {
  children: React.ReactNode;
}

export default function ScrollNavbar({ children }: ScrollNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full h-16 flex justify-center items-center z-50 navbar-transition ${
      isScrolled ? 'bg-neutral-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center md:justify-center">
        {children}
      </div>
    </nav>
  );
}
