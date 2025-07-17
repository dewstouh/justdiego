"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Document {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  slug: string;
  content: string;
  type: 'LEGAL' | 'GUIDE' | 'OTHER';
  views: number;
  author?: {
    id: string;
    name: string;
    email: string;
  };
  createdAt: string;
}

interface CreateDocumentData {
  title: string;
  description: string;
  thumbnailUrl: string;
  slug: string;
  content: string;
  type: 'LEGAL' | 'GUIDE' | 'OTHER';
}

export default function ManageDocuments() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  
  const [editData, setEditData] = useState<CreateDocumentData>({
    title: '',
    description: '',
    thumbnailUrl: '',
    slug: '',
    content: '',
    type: 'GUIDE',
  });

  const [createData, setCreateData] = useState<CreateDocumentData>({
    title: '',
    description: '',
    thumbnailUrl: '',
    slug: '',
    content: '',
    type: 'GUIDE',
  });

  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const response = await fetch('/api/admin/documents');
      const data = await response.json();
      setDocuments(data.documents || []);
    } catch (error) {
      console.error('Failed to load documents:', error);
      setStatus({type: 'error', message: 'Failed to load documents'});
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectDocument = (document: Document) => {
    setSelectedDocument(document);
    setEditData({
      title: document.title,
      description: document.description,
      thumbnailUrl: document.thumbnailUrl || '',
      slug: document.slug,
      content: document.content,
      type: document.type,
    });
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    if (!selectedDocument) return;
    
    setIsSaving(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/documents/${selectedDocument.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus({type: 'success', message: 'Document updated successfully!'});
        setSelectedDocument(result.document);
        setIsEditing(false);
        loadDocuments(); // Refresh the list
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to update document'});
      }
    } catch (error) {
      console.error('Error updating document:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSaving(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Document created successfully!'});
        setCreateData({ title: '', description: '', thumbnailUrl: '', slug: '', content: '', type: 'GUIDE' });
        setShowCreateForm(false);
        loadDocuments();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to create document'});
      }
    } catch (error) {
      console.error('Error creating document:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsCreating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this document?')) return;

    try {
      const response = await fetch(`/api/admin/documents/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Document deleted successfully!'});
        if (selectedDocument?.id === id) {
          setSelectedDocument(null);
        }
        loadDocuments();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to delete document'});
      }
    } catch (error) {
      console.error('Error deleting document:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading documents...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Documents</h1>

      {status.type && (
        <div className={`mb-4 p-4 rounded ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}

      <div className="mb-6">
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showCreateForm ? 'Cancel' : 'Create New Document'}
        </button>
      </div>

      {showCreateForm && (
        <div className="mb-8 p-6 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Create New Document</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Title"
                value={createData.title}
                onChange={(e) => setCreateData({...createData, title: e.target.value})}
                required
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Slug"
                value={createData.slug}
                onChange={(e) => setCreateData({...createData, slug: e.target.value})}
                required
                className="p-2 border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Description"
              value={createData.description}
              onChange={(e) => setCreateData({...createData, description: e.target.value})}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="url"
              placeholder="Thumbnail URL (optional)"
              value={createData.thumbnailUrl}
              onChange={(e) => setCreateData({...createData, thumbnailUrl: e.target.value})}
              className="w-full p-2 border rounded"
            />
            <select
              value={createData.type}
              onChange={(e) => setCreateData({...createData, type: e.target.value as 'LEGAL' | 'GUIDE' | 'OTHER'})}
              className="w-full p-2 border rounded"
            >
              <option value="GUIDE">Guide</option>
              <option value="LEGAL">Legal</option>
              <option value="OTHER">Other</option>
            </select>
            <textarea
              placeholder="Content (Markdown)"
              value={createData.content}
              onChange={(e) => setCreateData({...createData, content: e.target.value})}
              required
              rows={10}
              className="w-full p-2 border rounded font-mono"
            />
            <button
              type="submit"
              disabled={isCreating}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isCreating ? 'Creating...' : 'Create Document'}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents List */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Documents</h2>
          <div className="space-y-2">
            {documents.map((document) => (
              <div
                key={document.id}
                className={`p-3 border rounded cursor-pointer hover:bg-gray-50 ${
                  selectedDocument?.id === document.id ? 'bg-blue-50 border-blue-300' : ''
                }`}
                onClick={() => handleSelectDocument(document)}
              >
                <h3 className="font-semibold">{document.title}</h3>
                <p className="text-sm text-gray-600">{document.type}</p>
                <p className="text-xs text-gray-500">{document.views} views</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(document.id);
                  }}
                  className="mt-2 text-red-600 text-xs hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Editor/Preview */}
        {selectedDocument && (
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {isEditing ? 'Edit Document' : 'Document Preview'}
              </h2>
              <div className="space-x-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  {isEditing ? 'Preview' : 'Edit'}
                </button>
                {isEditing && (
                  <button
                    onClick={handleUpdate}
                    disabled={isSaving}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                  >
                    {isSaving ? 'Saving...' : 'Update'}
                  </button>
                )}
              </div>
            </div>

            {isEditing ? (
              /* Edit Mode - Left Raw, Right Preview */
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={editData.title}
                    onChange={(e) => setEditData({...editData, title: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={editData.description}
                    onChange={(e) => setEditData({...editData, description: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="url"
                    placeholder="Thumbnail URL"
                    value={editData.thumbnailUrl}
                    onChange={(e) => setEditData({...editData, thumbnailUrl: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                  <select
                    value={editData.type}
                    onChange={(e) => setEditData({...editData, type: e.target.value as 'LEGAL' | 'GUIDE' | 'OTHER'})}
                    className="w-full p-2 border rounded"
                  >
                    <option value="GUIDE">Guide</option>
                    <option value="LEGAL">Legal</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <textarea
                    placeholder="Content (Markdown)"
                    value={editData.content}
                    onChange={(e) => setEditData({...editData, content: e.target.value})}
                    className="w-full p-2 border rounded font-mono resize-none"
                    style={{ height: 'calc(100% - 180px)' }}
                  />
                </div>
                <div className="border rounded p-4 overflow-auto bg-white">
                  <h3 className="text-xl font-bold mb-2">{editData.title}</h3>
                  {editData.thumbnailUrl && (
                    <Image src={editData.thumbnailUrl} alt="Thumbnail" width={128} height={80} className="object-cover mb-4 rounded" />
                  )}
                  <p className="text-gray-600 mb-4">{editData.description}</p>
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {editData.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ) : (
              /* Preview Mode */
              <div className="border rounded p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4">{selectedDocument.title}</h3>
                {selectedDocument.thumbnailUrl && (
                  <Image 
                    src={selectedDocument.thumbnailUrl} 
                    alt="Thumbnail" 
                    width={192}
                    height={128}
                    className="object-cover mb-4 rounded" 
                  />
                )}
                <p className="text-gray-600 mb-6">{selectedDocument.description}</p>
                <div className="prose max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {selectedDocument.content}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
