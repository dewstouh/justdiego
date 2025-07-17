"use client";

import { useState, useEffect } from 'react';
import SearchableCountrySelect from '../../_components/SearchableCountrySelect';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface CompanyData {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
  ownerId: string;
}

interface CompanyFormProps {
  initialData?: CompanyData;
  isEditing?: boolean;
  onSubmit: (companyData: CompanyData) => Promise<void>;
  isSubmitting?: boolean;
  submitStatus?: {type: 'success' | 'error' | null, message: string};
}

export default function CompanyForm({ 
  initialData, 
  isEditing = false, 
  onSubmit, 
  isSubmitting = false, 
  submitStatus 
}: CompanyFormProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<CompanyData>(
    initialData || {
      name: '',
      description: '',
      logoUrl: '',
      website: '',
      countryId: 'country-spain', // Default country
      ownerId: '',
    }
  );

  useEffect(() => {
    loadCountries();
    loadUsers();
  }, []);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const loadCountries = async () => {
    try {
      const response = await fetch('/api/admin/countries');
      const data = await response.json();
      setCountries(data.countries || []);
    } catch (error) {
      console.error('Failed to load countries:', error);
    }
  };

  const loadUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  };

  const handleChange = (field: keyof CompanyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {isEditing ? 'EDIT COMPANY' : 'CREATE NEW COMPANY'}
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          {isEditing ? 'Update company information' : 'Create a new company in the system'}
        </p>
      </div>

      {submitStatus?.type && (
        <div className={`p-4 border-2 ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 border-2 border-gray-300 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">COMPANY INFORMATION</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">NAME *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">DESCRIPTION *</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">LOGO URL</label>
            <input
              type="url"
              value={formData.logoUrl || ''}
              onChange={(e) => handleChange('logoUrl', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              placeholder="https://example.com/logo.jpg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">WEBSITE</label>
            <input
              type="url"
              value={formData.website || ''}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              placeholder="https://example.com"
            />
          </div>

          <SearchableCountrySelect
            countries={countries}
            selectedCountryId={formData.countryId}
            onSelectionChange={(countryId: string) => handleChange('countryId', countryId)}
            placeholder="Search for a country..."
            title="COUNTRY"
          />

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">OWNER *</label>
            <select
              value={formData.ownerId}
              onChange={(e) => handleChange('ownerId', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            >
              <option value="">Select owner</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white p-6 border-2 border-gray-300">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-4 text-white font-bold ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gray-900 hover:bg-gray-800'
            }`}
          >
            {isSubmitting 
              ? (isEditing ? 'UPDATING...' : 'CREATING...') 
              : (isEditing ? 'UPDATE COMPANY' : 'CREATE COMPANY')
            }
          </button>
        </div>
      </form>
    </div>
  );
}
