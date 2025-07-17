"use client";

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import UserForm from '../../_components/UserForm';

interface UserData {
  name: string;
  avatarUrl?: string;
  countryId: string;
}

export default function EditUser() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;
  
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<UserData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  const loadUser = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to load user');
      }
      const data = await response.json();
      
      const transformedData: UserData = {
        name: data.name || '',
        avatarUrl: data.avatarUrl || '',
        countryId: data.countryId || 'country-spain',
      };
      
      setInitialData(transformedData);
    } catch (error) {
      console.error('Error loading user:', error);
      setSubmitStatus({type: 'error', message: 'Failed to load user data'});
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const handleSubmit = async (formData: UserData) => {
    setIsSubmitting(true);
    setSubmitStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: 'User updated successfully!'});
        // Optionally redirect back to users list
        setTimeout(() => router.push('/admin/users'), 2000);
      } else {
        setSubmitStatus({type: 'error', message: result.error || 'Failed to update user'});
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setSubmitStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Loading user...</div>
      </div>
    );
  }

  if (!initialData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">Failed to load user data</div>
      </div>
    );
  }

  return (
    <UserForm
      initialData={initialData}
      isEditing={true}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitStatus={submitStatus}
    />
  );
}
