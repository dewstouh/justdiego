"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import CompanyForm from '../../_components/CompanyForm';

interface CompanyData {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
  ownerId: string;
}

export default function EditCompany() {
  const params = useParams();
  const router = useRouter();
  const companyId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<CompanyData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  const loadCompany = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/companies/${companyId}`);
      if (!response.ok) {
        throw new Error('Failed to load company');
      }
      const data = await response.json();
      
      const transformedData: CompanyData = {
        name: data.name || '',
        description: data.description || '',
        logoUrl: data.logoUrl || '',
        website: data.website || '',
        countryId: data.countryId || 'country-spain',
        ownerId: data.ownerId || '',
      };
      
      setInitialData(transformedData);
    } catch (error) {
      console.error('Error loading company:', error);
      setSubmitStatus({type: 'error', message: 'Failed to load company data'});
    } finally {
      setLoading(false);
    }
  }, [companyId]);

  useEffect(() => {
    loadCompany();
  }, [loadCompany]);

  const handleSubmit = async (formData: CompanyData) => {
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/companies/${companyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Company updated successfully!'});
        // Optionally redirect back to companies list
        setTimeout(() => router.push('/admin/companies'), 2000);
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to update company'});
      }
    } catch (error) {
      console.error('Error updating company:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading company...</div>
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Failed to load company data</div>
      </div>
    );
  }

  return (
    <CompanyForm
      initialData={initialData}
      isEditing={true}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
    />
  );
}
