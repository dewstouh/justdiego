"use client";

import { useState, useEffect } from 'react';
import TagForm from './_components/TagForm';

interface Tag {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  color: string;
  createdAt: string;
}

export default function ManageTags() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingTag, setEditingTag] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    loadTags();
  }, []);

  const loadTags = async () => {
    try {
      const response = await fetch('/api/admin/tags');
      const data = await response.json();
      setTags(data.tags || []);
    } catch (error) {
      console.error('Failed to load tags:', error);
      setStatus({type: 'error', message: 'Failed to load tags'});
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (tagData: {
    name: string;
    description?: string;
    iconUrl?: string;
    color: string;
  }) => {
    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tagData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Tag created successfully!'});
        setShowCreateForm(false);
        loadTags();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to create tag'});
      }
    } catch (error) {
      console.error('Error creating tag:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (tagData: {
    name: string;
    description?: string;
    iconUrl?: string;
    color: string;
  }) => {
    if (!editingTag) return;

    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/tags/${editingTag}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tagData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Tag updated successfully!'});
        setEditingTag(null);
        loadTags();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to update tag'});
      }
    } catch (error) {
      console.error('Error updating tag:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const transformTagToFormData = (tag: Tag) => {
    return {
      name: tag.name,
      description: tag.description,
      iconUrl: tag.iconUrl,
      color: tag.color,
    };
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this tag?')) return;

    try {
      const response = await fetch(`/api/admin/tags/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Tag deleted successfully!'});
        loadTags();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to delete tag'});
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading tags...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MANAGE TAGS</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create and manage tags for categorizing content</p>
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
          {showCreateForm ? 'CANCEL' : 'CREATE NEW TAG'}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-gray-50 p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">CREATE NEW TAG</h3>
          <TagForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitStatus={status}
          />
        </div>
      )}

      {/* Tags List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">EXISTING TAGS ({tags.length})</h3>
        
        {tags.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No tags found</p>
        ) : (
          <div className="grid gap-4">
            {tags.map((tag) => (
              <div key={tag.id} className="bg-white border-2 border-gray-300">
                {editingTag === tag.id ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">EDIT TAG</h3>
                      <button
                        onClick={() => setEditingTag(null)}
                        className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-bold hover:bg-gray-600 hover:text-white transition-colors"
                      >
                        CANCEL
                      </button>
                    </div>
                    <TagForm
                      initialData={transformTagToFormData(tag)}
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
                        style={{ backgroundColor: tag.color }}
                      ></div>
                      <div>
                        <h4 className="font-bold text-gray-900">{tag.name}</h4>
                        {tag.description && <p className="text-gray-600">{tag.description}</p>}
                        {tag.iconUrl && (
                          <p className="text-sm text-blue-600">
                            <a href={tag.iconUrl} target="_blank" rel="noopener noreferrer">
                              View Icon
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          Created: {new Date(tag.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingTag(tag.id)}
                        className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDelete(tag.id)}
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
