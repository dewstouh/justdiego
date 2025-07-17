"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TechnologyForm from '../../_components/TechnologyForm';

interface TechnologyData {
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
}

export default function EditTechnology() {
  const params = useParams();
  const router = useRouter();
  const technologyId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<TechnologyData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  const loadTechnology = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/technologies/${technologyId}`);
      if (!response.ok) {
        throw new Error('Failed to load technology');
      }
      const data = await response.json();
      
      const transformedData: TechnologyData = {
        name: data.name || '',
        description: data.description || '',
        iconUrl: data.iconUrl || '',
        color: data.color || '#3b82f6',
      };
      
      setInitialData(transformedData);
    } catch (error) {
      console.error('Error loading technology:', error);
      setSubmitStatus({type: 'error', message: 'Failed to load technology data'});
    } finally {
      setLoading(false);
    }
  }, [technologyId]);

  useEffect(() => {
    loadTechnology();
  }, [loadTechnology]);

  const handleSubmit = async (formData: TechnologyData) => {
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/technologies/${technologyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Technology updated successfully!'});
        // Optionally redirect back to technologies list
        setTimeout(() => router.push('/admin/technologies'), 2000);
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to update technology'});
      }
    } catch (error) {
      console.error('Error updating technology:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading technology...</div>
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Failed to load technology data</div>
      </div>
    );
  }

  return (
    <TechnologyForm
      initialData={initialData}
      isEditing={true}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
    />
  );
}
