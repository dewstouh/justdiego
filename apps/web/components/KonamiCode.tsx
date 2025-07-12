'use client';

import React from 'react'
import { useState, useEffect } from 'react';

const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];


export default function KonamiCode() {

      const [konamiActivated, setKonamiActivated] = useState(false);
      const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
    
      useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          const newSequence = [...konamiSequence, event.code].slice(-konamiCode.length);
          setKonamiSequence(newSequence);
          
          if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
            setKonamiActivated(true);
            setTimeout(() => setKonamiActivated(false), 3000);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [konamiSequence]);

  return (
    <>
          {konamiActivated && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <div className="bg-gray-200 border-4 border-gray-900 p-8 text-center">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">EASTER EGG ACTIVATED!</h2>
                      <p className="text-sm text-gray-900">No bullshit. Just delivered work.</p>
                  </div>
              </div>
          )}
    </>
  )
}
