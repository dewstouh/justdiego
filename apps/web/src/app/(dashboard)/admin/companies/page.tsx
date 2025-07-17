"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import CompanyForm from './_components/CompanyForm';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface Company {
  id: string;
  name: string;
  description?: string;
  logoUrl?: string;
  website?: string;
  countryId: string;
  country: Country;
  createdAt: string;
}

export default function ManageCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingCompany, setEditingCompany] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await fetch('/api/admin/companies');
      const data = await response.json();
      setCompanies(data.companies || []);
    } catch (error) {
      console.error('Failed to load companies:', error);
      setStatus({type: 'error', message: 'Failed to load companies'});
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (companyData: {
    name: string;
    description: string;
    logoUrl?: string;
    website?: string;
    countryId: string;
    ownerId: string;
  }) => {
    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Company created successfully!'});
        setShowCreateForm(false);
        loadCompanies();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to create company'});
      }
    } catch (error) {
      console.error('Error creating company:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (companyData: {
    name: string;
    description: string;
    logoUrl?: string;
    website?: string;
    countryId: string;
    ownerId: string;
  }) => {
    if (!editingCompany) return;

    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/companies/${editingCompany}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Company updated successfully!'});
        setEditingCompany(null);
        loadCompanies();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to update company'});
      }
    } catch (error) {
      console.error('Error updating company:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const transformCompanyToFormData = (company: Company) => {
    return {
      name: company.name,
      description: company.description || '',
      logoUrl: company.logoUrl,
      website: company.website,
      countryId: company.countryId,
      ownerId: 'user-1', // Default owner, should be improved
    };
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this company?')) return;

    try {
      const response = await fetch(`/api/admin/companies/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Company deleted successfully!'});
        loadCompanies();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to delete company'});
      }
    } catch (error) {
      console.error('Error deleting company:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading companies...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MANAGE COMPANIES</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create and manage companies</p>
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
          {showCreateForm ? 'CANCEL' : 'CREATE NEW COMPANY'}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-gray-50 p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">CREATE NEW COMPANY</h3>
          <CompanyForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitStatus={status}
          />
        </div>
      )}

      {/* Companies List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">EXISTING COMPANIES ({companies.length})</h3>
        
        {companies.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No companies found</p>
        ) : (
          <div className="grid gap-4">
            {companies.map((company) => (
              <div key={company.id} className="bg-white border-2 border-gray-300">
                {editingCompany === company.id ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">EDIT COMPANY</h3>
                      <button
                        onClick={() => setEditingCompany(null)}
                        className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-bold hover:bg-gray-600 hover:text-white transition-colors"
                      >
                        CANCEL
                      </button>
                    </div>
                    <CompanyForm
                      initialData={transformCompanyToFormData(company)}
                      isEditing={true}
                      onSubmit={handleEditSubmit}
                      isSubmitting={isSubmitting}
                      submitStatus={status}
                    />
                  </div>
                ) : (
                  <div className="p-6 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      {company.logoUrl && (
                        <Image src={company.logoUrl} alt={company.name} width={48} height={48} className="rounded object-cover" />
                      )}
                      <div>
                        <h4 className="font-bold text-gray-900">{company.name}</h4>
                        <p className="text-gray-600">{company.description}</p>
                        {company.website && (
                          <p className="text-sm text-blue-600">
                            <a href={company.website} target="_blank" rel="noopener noreferrer">
                              {company.website}
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-gray-500">
                          {company.country.flag} {company.country.name} • Created: {new Date(company.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingCompany(company.id)}
                        className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDelete(company.id)}
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
