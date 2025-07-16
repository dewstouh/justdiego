import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';
import { CountrySearch } from '@justdiego/react-utils';
import type { Prisma } from '@justdiego/db';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface CompanyData {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
}

interface CompanyFormSectionProps {
  formData: CompanyData;
  countries: Country[];
  onChange: (field: keyof CompanyData, value: string) => void;
}

export function CompanyFormSection({ formData, countries, onChange }: CompanyFormSectionProps) {
  const handleCountrySelect = (country: Prisma.CountryCreateInput) => {
    onChange('countryId', country.id || '');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              placeholder="Acme Corp"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => onChange('website', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              placeholder="https://company.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Company Description *
          </label>
          <textarea
            required
            value={formData.description}
            onChange={(e) => onChange('description', e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 h-24"
            placeholder="Brief description of what the company does..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Logo URL
            </label>
            <input
              type="url"
              value={formData.logoUrl}
              onChange={(e) => onChange('logoUrl', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              placeholder="https://example.com/logo.png"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Company Country *
            </label>
            <div className="space-y-2">
              <select
                required
                value={formData.countryId}
                onChange={(e) => onChange('countryId', e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.flag} {country.name}
                  </option>
                ))}
              </select>
              <div className="text-xs text-gray-500">
                Or search for country:
              </div>
              <CountrySearch 
                onCountrySelect={handleCountrySelect}
                placeholder="Search for country..."
                limit={20}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
