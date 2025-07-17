"use client";

import { useState, useEffect } from 'react';
import SearchableCountrySelect from '../../_components/SearchableCountrySelect';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface UserData {
  name: string;
  avatarUrl?: string;
  countryId: string;
}

interface UserFormProps {
  initialData?: UserData;
  isEditing?: boolean;
  onSubmit: (userData: UserData) => Promise<void>;
  isSubmitting?: boolean;
  submitStatus?: {type: 'success' | 'error' | null, message: string};
}

export default function UserForm({ 
  initialData, 
  isEditing = false, 
  onSubmit, 
  isSubmitting = false, 
  submitStatus 
}: UserFormProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState<UserData>(
    initialData || {
      name: '',
      avatarUrl: '',
      countryId: 'country-spain', // Default country
    }
  );

  useEffect(() => {
    loadCountries();
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

  const handleChange = (field: keyof UserData, value: string) => {
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
          {isEditing ? 'EDIT USER' : 'CREATE NEW USER'}
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          {isEditing ? 'Update user information' : 'Create a new user in the system'}
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">USER INFORMATION</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">NAME *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Email will be generated automatically from the name
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">AVATAR URL</label>
            <input
              type="url"
              value={formData.avatarUrl || ''}
              onChange={(e) => handleChange('avatarUrl', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <SearchableCountrySelect
            countries={countries}
            selectedCountryId={formData.countryId}
            onSelectionChange={(countryId) => handleChange('countryId', countryId)}
            placeholder="Search for a country..."
            title="COUNTRY"
          />
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
              : (isEditing ? 'UPDATE USER' : 'CREATE USER')
            }
          </button>
        </div>
      </form>
    </div>
  );
}
