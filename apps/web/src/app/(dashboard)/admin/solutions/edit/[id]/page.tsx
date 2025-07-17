"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import SolutionForm from '../../_components/SolutionForm';

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
  problemDescription: string;
  solutionDescription: string;
  technicalDetails?: TechnicalDetail[];
  attachments?: string[];
  challenges?: string[];
  outcomes?: string[];
  completedAt: string;
  customerId: string;
  companyId?: string;
  technologies?: string[];
  tags?: string[];
}

interface ReviewData {
  rating: number;
  comment: string;
  attachments?: string[];
  authorId: string;
}

interface FormData {
  solution: SolutionData;
  review: ReviewData;
}

export default function EditSolution() {
  const params = useParams();
  const solutionId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  const loadSolution = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/solutions/${solutionId}`);
      if (!response.ok) {
        throw new Error('Failed to load solution');
      }
      const data = await response.json();
      
      // Transform the data to match our FormData structure
      const transformedData: FormData = {
        solution: {
          title: data.solution.title || '',
          slug: data.solution.slug || '',
          shortDescription: data.solution.shortDescription || '',
          longDescription: data.solution.longDescription || '',
          description: data.solution.description || '',
          problemDescription: data.solution.problemDescription || '',
          solutionDescription: data.solution.solutionDescription || '',
          technicalDetails: data.solution.technicalDetails || [],
          attachments: data.solution.attachments || [],
          challenges: data.solution.challenges || [],
          outcomes: data.solution.outcomes || [],
          completedAt: data.solution.completedAt ? new Date(data.solution.completedAt).toISOString().split('T')[0]! : new Date().toISOString().split('T')[0]!,
          customerId: data.solution.customerId || '',
          companyId: data.solution.companyId || '',
          technologies: data.solution.technologies?.map((tech: {id: string}) => tech.id) || [],
          tags: data.solution.tags?.map((tag: {id: string}) => tag.id) || [],
        },
        review: {
          rating: data.review?.rating || 5,
          comment: data.review?.comment || '',
          attachments: data.review?.attachments || [],
          authorId: data.review?.authorId || '',
        },
      };
      
      setInitialData(transformedData);
    } catch (error) {
      console.error('Error loading solution:', error);
      setSubmitStatus({type: 'error', message: 'Failed to load solution data'});
    } finally {
      setLoading(false);
    }
  }, [solutionId]);

  useEffect(() => {
    loadSolution();
  }, [solutionId, loadSolution]);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/solutions/${solutionId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'Solution updated successfully!'});
        // Optionally redirect back to admin or solutions list
        // router.push('/admin/solutions');
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to update solution'});
      }
    } catch (error) {
      console.error('Error updating solution:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading solution...</div>
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Failed to load solution data</div>
      </div>
    );
  }

  return (
    <SolutionForm
      initialData={initialData}
      isEditing={true}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
    />
  );
}
