"use client";

import React, { useState } from 'react';
import ContactForm from './Form';
import CalendlyBooking from './Calendly';
import { ContactModeSwitcher, ContactMode } from './ui/ContactModeSwitcher';

export default function Contact() {
  const [selectedMode, setSelectedMode] = useState<ContactMode>('contact');

  const handleModeChange = (mode: ContactMode) => {
    setSelectedMode(mode);
  };

  return (
    <div className="space-y-8">
      <ContactModeSwitcher 
        selectedMode={selectedMode} 
        onModeChange={handleModeChange} 
      />

      <div className="transition-all duration-300">
        {selectedMode === 'contact' ? <ContactForm /> : <CalendlyBooking />}
      </div>
    </div>
  );
}
