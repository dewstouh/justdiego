"use client";

import { useState, useEffect } from 'react';
import { UserFormSection } from '@/components/admin/UserFormSection';
import { CompanyFormSection } from '@/components/admin/CompanyFormSection';
import { SolutionFormSection } from '@/components/admin/SolutionFormSection';
import { ReviewFormSection } from '@/components/admin/ReviewFormSection';
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

interface CompanyData {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
}

interface ReviewData {
  rating: number;
  comment: string;
  attachments?: string[];
}

interface TechnicalDetail {
  title: string;
  content: string;
}

interface SolutionData {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  description?: string;
  thumbnailUrl?: string;
  demoUrl?: string;
  problemDescription: string;
  solutionDescription: string;
  technicalDetails?: TechnicalDetail[];
  attachments?: string[];
  challenges?: string[];
  outcomes?: string[];
  completedAt?: string;
  isForSale: boolean;
  companyId?: string;
  technologies?: Prisma.TechnologyCreateInput[];
}

interface FormData {
  user: UserData;
  company: CompanyData;
  solution: SolutionData;
  review: ReviewData;
}

export default function AdminDashboard() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [formData, setFormData] = useState<FormData>({
    user: {
      email: 'example@example.com',
      name: '',
      avatarUrl: '',
      countryId: 'country-spain', // Default to Spain
    },
    company: {
      name: '',
      description: '',
      logoUrl: '',
      website: '',
      countryId: 'country-spain', // Default to Spain
    },
    solution: {
      title: '',
      slug: '',
      shortDescription: '',
      longDescription: '',
      description: '',
      thumbnailUrl: '',
      demoUrl: '',
      problemDescription: '',
      solutionDescription: '',
      technicalDetails: [],
      attachments: [],
      challenges: [],
      outcomes: [],
      isForSale: false,
      technologies: [],
    },
    review: {
      rating: 5,
      comment: '',
      attachments: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await fetch('/api/admin/countries');
        const data = await response.json();
        setCountries(data.countries || []);
      } catch (error) {
        console.error('Failed to load countries:', error);
        // Fallback countries
        setCountries([
          { id: 'es', name: 'Spain', flag: '🇪🇸' },
          { id: 'us', name: 'United States', flag: '🇺🇸' },
          { id: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
          { id: 'de', name: 'Germany', flag: '🇩🇪' },
          { id: 'fr', name: 'France', flag: '🇫🇷' },
        ]);
      }
    };

    loadCountries();
  }, []);

  const handleUserChange = (field: keyof UserData, value: string) => {
    setFormData(prev => ({
      ...prev,
      user: { ...prev.user, [field]: value }
    }));
  };

  const handleCompanyChange = (field: keyof CompanyData, value: string) => {
    setFormData(prev => ({
      ...prev,
      company: { ...prev.company, [field]: value }
    }));
  };

  const handleSolutionChange = (field: keyof SolutionData, value: string | boolean | string[] | TechnicalDetail[] | Prisma.TechnologyCreateInput[]) => {
    setFormData(prev => ({
      ...prev,
      solution: { ...prev.solution, [field]: value }
    }));
  };

  const handleReviewChange = (field: keyof ReviewData, value: string | number | string[]) => {
    setFormData(prev => ({
      ...prev,
      review: { ...prev.review, [field]: value }
    }));
  };

  const handleTechnicalDetailChange = (index: number, field: 'title' | 'content', value: string) => {
    const updatedDetails = [...(formData.solution.technicalDetails || [])];
    if (!updatedDetails[index]) {
      updatedDetails[index] = { title: '', content: '' };
    }
    updatedDetails[index] = { ...updatedDetails[index], [field]: value };
    handleSolutionChange('technicalDetails', updatedDetails);
  };

  const addTechnicalDetail = () => {
    const updatedDetails = [...(formData.solution.technicalDetails || []), { title: '', content: '' }];
    handleSolutionChange('technicalDetails', updatedDetails);
  };

  const removeTechnicalDetail = (index: number) => {
    const updatedDetails = formData.solution.technicalDetails?.filter((_, i) => i !== index) || [];
    handleSolutionChange('technicalDetails', updatedDetails);
  };

  const handleArrayInputChange = (field: 'challenges' | 'outcomes' | 'attachments', value: string, section: 'solution' | 'review') => {
    const arrayValue = value.split('\n').filter(item => item.trim() !== '');
    if (section === 'solution') {
      handleSolutionChange(field as keyof SolutionData, arrayValue);
    } else {
      handleReviewChange(field as keyof ReviewData, arrayValue);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    handleSolutionChange('title', title);
    handleSolutionChange('slug', generateSlug(title));
  };

  const resetForm = () => {
    setFormData({
      user: {
        email: 'example@example.com',
        name: '',
        avatarUrl: '',
        countryId: 'country-spain',
      },
      company: {
        name: '',
        description: '',
        logoUrl: '',
        website: '',
        countryId: 'country-spain',
      },
      solution: {
        title: '',
        slug: '',
        shortDescription: '',
        longDescription: '',
        description: '',
        thumbnailUrl: '',
        demoUrl: '',
        problemDescription: '',
        solutionDescription: '',
        technicalDetails: [],
        attachments: [],
        challenges: [],
        outcomes: [],
        isForSale: false,
        technologies: [],
      },
      review: {
        rating: 5,
        comment: '',
        attachments: [],
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/solutions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Solution created successfully!'});
        resetForm();
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to create solution'});
      }
    } catch (error) {
      console.error('Error creating solution:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">ADD NEW SOLUTION</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create new solutions with automatic user and company creation</p>
      </div>

      {submitStatus.type && (
        <div className={`p-4 border-2 ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <UserFormSection 
          formData={formData.user}
          countries={countries}
          onChange={handleUserChange}
        />

        <CompanyFormSection 
          formData={formData.company}
          countries={countries}
          onChange={handleCompanyChange}
        />

        <SolutionFormSection 
          formData={formData.solution}
          onChange={handleSolutionChange}
          onArrayInputChange={handleArrayInputChange}
          onTitleChange={handleTitleChange}
          onTechnicalDetailChange={handleTechnicalDetailChange}
          onAddTechnicalDetail={addTechnicalDetail}
          onRemoveTechnicalDetail={removeTechnicalDetail}
        />

        <ReviewFormSection 
          formData={formData.review}
          onChange={handleReviewChange}
          onArrayInputChange={handleArrayInputChange}
        />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 border-2 border-gray-900 font-bold text-white transition-colors duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gray-900 hover:bg-white hover:text-gray-900'
            }`}
          >
            {isSubmitting ? 'CREATING SOLUTION...' : 'CREATE SOLUTION'}
          </button>
        </div>
      </form>
    </div>
  );
}