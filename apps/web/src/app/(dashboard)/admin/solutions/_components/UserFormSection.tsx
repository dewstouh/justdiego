import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';
import { CountrySearch } from '@justdiego/react-utils';
import type { Prisma } from '@justdiego/db';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface UserData {
  email: string;
  name: string;
  avatarUrl?: string;
  countryId: string;
}

interface UserFormSectionProps {
  formData: UserData;
  countries: Country[];
  onChange: (field: keyof UserData, value: string) => void;
}

export function UserFormSection({ formData, countries, onChange }: UserFormSectionProps) {
  const handleCountrySelect = (country: Prisma.CountryCreateInput) => {
    onChange('countryId', country.id || '');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => onChange('name', e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
              placeholder="John Doe"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Avatar URL
          </label>
          <input
            type="url"
            value={formData.avatarUrl}
            onChange={(e) => onChange('avatarUrl', e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900"
            placeholder="https://example.com/avatar.jpg"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Country *
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
      </CardContent>
    </Card>
  );
}
