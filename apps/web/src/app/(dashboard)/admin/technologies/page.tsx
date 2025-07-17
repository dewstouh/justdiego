"use client";

import { useState, useEffect } from 'react';
import TechnologyForm from './_components/TechnologyForm';

interface Technology {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
  createdAt: string;
}

export default function ManageTechnologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingTechnology, setEditingTechnology] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    loadTechnologies();
  }, []);

  const loadTechnologies = async () => {
    try {
      const response = await fetch('/api/admin/technologies');
      const data = await response.json();
      setTechnologies(data.technologies || []);
    } catch (error) {
      console.error('Failed to load technologies:', error);
      setStatus({type: 'error', message: 'Failed to load technologies'});
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (technologyData: {
    name: string;
    description?: string;
    iconUrl?: string;
    color: string;
  }) => {
    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/technologies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(technologyData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Technology created successfully!'});
        setShowCreateForm(false);
        loadTechnologies();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to create technology'});
      }
    } catch (error) {
      console.error('Error creating technology:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (technologyData: {
    name: string;
    description?: string;
    iconUrl?: string;
    color: string;
  }) => {
    if (!editingTechnology) return;

    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/technologies/${editingTechnology}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(technologyData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Technology updated successfully!'});
        setEditingTechnology(null);
        loadTechnologies();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to update technology'});
      }
    } catch (error) {
      console.error('Error updating technology:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const transformTechnologyToFormData = (technology: Technology) => {
    return {
      name: technology.name,
      description: technology.description,
      iconUrl: technology.iconUrl,
      color: technology.color,
    };
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this technology?')) return;

    try {
      const response = await fetch(`/api/admin/technologies/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Technology deleted successfully!'});
        loadTechnologies();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to delete technology'});
      }
    } catch (error) {
      console.error('Error deleting technology:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading technologies...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MANAGE TECHNOLOGIES</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create and manage technologies used in solutions</p>
      </div>

      {status.type && (
        <div className={`p-4 border-2 ${
          status.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {status.message}
        </div>
      )}

      {/* Create Button */}
      <div className="text-center">
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="px-6 py-2 border-2 border-gray-900 bg-gray-900 text-white font-bold hover:bg-white hover:text-gray-900 transition-colors"
        >
          {showCreateForm ? 'CANCEL' : 'CREATE NEW TECHNOLOGY'}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-gray-50 p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">CREATE NEW TECHNOLOGY</h3>
          <TechnologyForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitStatus={status}
          />
        </div>
      )}

      {/* Technologies List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">EXISTING TECHNOLOGIES ({technologies.length})</h3>
        
        {technologies.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No technologies found</p>
        ) : (
          <div className="grid gap-4">
            {technologies.map((technology) => (
              <div key={technology.id} className="bg-white border-2 border-gray-300">
                {editingTechnology === technology.id ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">EDIT TECHNOLOGY</h3>
                      <button
                        onClick={() => setEditingTechnology(null)}
                        className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-bold hover:bg-gray-600 hover:text-white transition-colors"
                      >
                        CANCEL
                      </button>
                    </div>
                    <TechnologyForm
                      initialData={transformTechnologyToFormData(technology)}
                      isEditing={true}
                      onSubmit={handleEditSubmit}
                      isSubmitting={isSubmitting}
                      submitStatus={status}
                    />
                  </div>
                ) : (
                  <div className="p-6 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-8 h-8 rounded"
                        style={{ backgroundColor: technology.color }}
                      ></div>
                      <div>
                        <h4 className="font-bold text-gray-900">{technology.name}</h4>
                        {technology.description && <p className="text-gray-600">{technology.description}</p>}
                        {technology.iconUrl && (
                          <p className="text-sm text-blue-600">
                            <a href={technology.iconUrl} target="_blank" rel="noopener noreferrer">
                              View Icon
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          Created: {new Date(technology.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingTechnology(technology.id)}
                        className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDelete(technology.id)}
                        className="px-4 py-2 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors"
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
