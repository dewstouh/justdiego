"use client";

import { useState, useEffect } from 'react';

interface TechnologyData {
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
}

interface TechnologyFormProps {
  initialData?: TechnologyData;
  isEditing?: boolean;
  onSubmit: (technologyData: TechnologyData) => Promise<void>;
  isSubmitting?: boolean;
  submitStatus?: {type: 'success' | 'error' | null, message: string};
}

const colorOptions = [
  { value: '#ef4444', label: 'Red', bg: 'bg-red-500' },
  { value: '#f97316', label: 'Orange', bg: 'bg-orange-500' },
  { value: '#eab308', label: 'Yellow', bg: 'bg-yellow-500' },
  { value: '#22c55e', label: 'Green', bg: 'bg-green-500' },
  { value: '#3b82f6', label: 'Blue', bg: 'bg-blue-500' },
  { value: '#6366f1', label: 'Indigo', bg: 'bg-indigo-500' },
  { value: '#8b5cf6', label: 'Purple', bg: 'bg-purple-500' },
  { value: '#ec4899', label: 'Pink', bg: 'bg-pink-500' },
  { value: '#6b7280', label: 'Gray', bg: 'bg-gray-500' },
  { value: '#1f2937', label: 'Dark Gray', bg: 'bg-gray-800' },
];

export default function TechnologyForm({ 
  initialData, 
  isEditing = false, 
  onSubmit, 
  isSubmitting = false, 
  submitStatus 
}: TechnologyFormProps) {
  const [formData, setFormData] = useState<TechnologyData>(
    initialData || {
      name: '',
      description: '',
      iconUrl: '',
      color: '#3b82f6', // Default blue
    }
  );

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (field: keyof TechnologyData, value: string) => {
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
          {isEditing ? 'EDIT TECHNOLOGY' : 'CREATE NEW TECHNOLOGY'}
        </h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          {isEditing ? 'Update technology information' : 'Create a new technology for categorizing solutions'}
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
          <h3 className="text-xl font-bold text-gray-900 mb-4">TECHNOLOGY INFORMATION</h3>
          
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
            <label className="block text-sm font-bold text-gray-700 mb-2">DESCRIPTION</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none h-24"
              placeholder="Optional description of the technology"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">ICON URL</label>
            <input
              value={formData.iconUrl || ''}
              onChange={(e) => handleChange('iconUrl', e.target.value)}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              placeholder="https://example.com/icon.svg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">COLOR *</label>
            <div className="grid grid-cols-5 gap-2 mb-3">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleChange('color', option.value)}
                  className={`p-3 rounded border-2 ${
                    formData.color === option.value 
                      ? 'border-gray-900' 
                      : 'border-gray-300'
                  } ${option.bg} text-white font-medium`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <input
              type="color"
              value={formData.color}
              onChange={(e) => handleChange('color', e.target.value)}
              className="w-full p-1 border-2 border-gray-300 focus:border-gray-900 outline-none h-12"
            />
          </div>

          {/* Preview */}
          <div className="border-t pt-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">PREVIEW</label>
            <div className="flex items-center space-x-2">
              <span 
                className="inline-block px-3 py-1 rounded-full text-white font-medium"
                style={{ backgroundColor: formData.color }}
              >
                {formData.name || 'Technology Name'}
              </span>
            </div>
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
              : (isEditing ? 'UPDATE TECHNOLOGY' : 'CREATE TECHNOLOGY')
            }
          </button>
        </div>
      </form>
    </div>
  );
}
