"use client";

import React, { useState } from 'react';
import Form from './Form';
import Calendly from './Calendly';

type ContactMode = 'contact' | 'meeting';

export default function Contact() {
  const [selectedMode, setSelectedMode] = useState<ContactMode>('contact');

  return (
    <div className="space-y-8">
        <div className="flex justify-center">
          <div className="flex bg-gray-100 border-2 border-gray-300 overflow-hidden">
            <button
              onClick={() => setSelectedMode('contact')}
              className={`px-8 py-3 font-bold transition-colors ${
                selectedMode === 'contact'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setSelectedMode('meeting')}
              className={`px-8 py-3 font-bold transition-colors ${
                selectedMode === 'meeting'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Book a Meeting
            </button>
          </div>
        </div>

        {/* Content based on selected mode */}
        <div className="transition-all duration-300">
        {selectedMode === 'contact' ? <Form /> : <Calendly />}
        </div>
    </div>
  );
}
