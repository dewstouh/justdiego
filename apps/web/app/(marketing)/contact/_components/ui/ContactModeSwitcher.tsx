import React from 'react';

export type ContactMode = 'contact' | 'meeting';

interface ContactModeSwitcherProps {
  selectedMode: ContactMode;
  onModeChange: (mode: ContactMode) => void;
}

interface ModeButtonProps {
  mode: ContactMode;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function ModeButton({ isActive, onClick, children }: ModeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-bold transition-colors ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}

export function ContactModeSwitcher({ selectedMode, onModeChange }: ContactModeSwitcherProps) {
  return (
    <div className="flex justify-center">
      <div className="flex bg-gray-100 border-2 border-gray-300 overflow-hidden">
        <ModeButton
          mode="contact"
          isActive={selectedMode === 'contact'}
          onClick={() => onModeChange('contact')}
        >
          Contact Us
        </ModeButton>
        <ModeButton
          mode="meeting"
          isActive={selectedMode === 'meeting'}
          onClick={() => onModeChange('meeting')}
        >
          Book a Meeting
        </ModeButton>
      </div>
    </div>
  );
}
