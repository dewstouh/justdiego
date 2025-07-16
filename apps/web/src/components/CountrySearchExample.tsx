"use client";

import React, { useState } from 'react';
import { CountrySearch } from '@justdiego/react-utils';
import type { Prisma } from '@justdiego/db';

export function CountrySearchExample() {
  const [selectedCountry, setSelectedCountry] = useState<Prisma.CountryCreateInput | null>(null);

  const handleCountrySelect = (country: Prisma.CountryCreateInput) => {
    setSelectedCountry(country);
    console.log('Selected country:', country);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Country Search Example</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Search for a Country</h2>
        <CountrySearch 
          onCountrySelect={handleCountrySelect}
          placeholder="Type to search countries..."
          limit={50}
          showFlags={true}
        />
      </div>

      {selectedCountry && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Selected Country</h3>
          <div className="flex items-center space-x-3">
            <span className="text-3xl" role="img" aria-label={`${selectedCountry.name} flag`}>
              {selectedCountry.flag}
            </span>
            <div>
              <div className="font-medium text-blue-900">{selectedCountry.name}</div>
              <div className="text-sm text-blue-700 uppercase">Code: {selectedCountry.code}</div>
              <div className="text-sm text-blue-700">ID: {selectedCountry.id}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountrySearchExample;
