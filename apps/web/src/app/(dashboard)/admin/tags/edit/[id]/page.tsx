"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TagForm from '../../_components/TagForm';

interface TagData {
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
}

export default function EditTag() {
  const params = useParams();
  const router = useRouter();
  const tagId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<TagData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  const loadTag = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/tags/${tagId}`);
      if (!response.ok) {
        throw new Error('Failed to load tag');
      }
      const data = await response.json();
      
      const transformedData: TagData = {
        name: data.name || '',
        description: data.description || '',
        iconUrl: data.iconUrl || '',
        color: data.color || '#3b82f6',
      };
      
      setInitialData(transformedData);
    } catch (error) {
      console.error('Error loading tag:', error);
      setSubmitStatus({type: 'error', message: 'Failed to load tag data'});
    } finally {
      setLoading(false);
    }
  }, [tagId]);

  useEffect(() => {
    loadTag();
  }, [loadTag]);

  const handleSubmit = async (formData: TagData) => {
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/tags/${tagId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Tag updated successfully!'});
        // Optionally redirect back to tags list
        setTimeout(() => router.push('/admin/tags'), 2000);
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to update tag'});
      }
    } catch (error) {
      console.error('Error updating tag:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading tag...</div>
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Failed to load tag data</div>
      </div>
    );
  }

  return (
    <TagForm
      initialData={initialData}
      isEditing={true}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
    />
  );
}
