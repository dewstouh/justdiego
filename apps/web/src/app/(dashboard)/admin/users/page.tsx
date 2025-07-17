"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Country {
  id: string;
  name: string;
  flag: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  countryId: string;
  country: Country;
  createdAt: string;
}

interface CreateUserData {
  email: string;
  name: string;
  avatarUrl?: string;
  countryId: string;
}

export default function ManageUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createData, setCreateData] = useState<CreateUserData>({
    email: '',
    name: '',
    avatarUrl: '',
    countryId: '',
  });
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    loadUsers();
    loadCountries();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Failed to load users:', error);
      setStatus({type: 'error', message: 'Failed to load users'});
    } finally {
      setIsLoading(false);
    }
  };

  const loadCountries = async () => {
    try {
      const response = await fetch('/api/admin/countries');
      const data = await response.json();
      setCountries(data.countries || []);
    } catch (error) {
      console.error('Failed to load countries:', error);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'User created successfully!'});
        setCreateData({ email: '', name: '', avatarUrl: '', countryId: '' });
        setShowCreateForm(false);
        loadUsers();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to create user'});
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsCreating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'User deleted successfully!'});
        loadUsers();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to delete user'});
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading users...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MANAGE USERS</h2>
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">Create and manage system users</p>
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
          {showCreateForm ? 'CANCEL' : 'CREATE NEW USER'}
        </button>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <form onSubmit={handleCreate} className="bg-gray-50 p-6 border-2 border-gray-300 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">CREATE NEW USER</h3>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">EMAIL *</label>
            <input
              type="email"
              value={createData.email}
              onChange={(e) => setCreateData(prev => ({...prev, email: e.target.value}))}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">NAME *</label>
            <input
              type="text"
              value={createData.name}
              onChange={(e) => setCreateData(prev => ({...prev, name: e.target.value}))}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">AVATAR URL</label>
            <input
              type="url"
              value={createData.avatarUrl}
              onChange={(e) => setCreateData(prev => ({...prev, avatarUrl: e.target.value}))}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">COUNTRY *</label>
            <select
              value={createData.countryId}
              onChange={(e) => setCreateData(prev => ({...prev, countryId: e.target.value}))}
              className="w-full p-3 border-2 border-gray-300 focus:border-gray-900 outline-none"
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.flag} {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isCreating}
              className={`px-6 py-2 border-2 border-gray-900 font-bold text-white transition-colors ${
                isCreating 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gray-900 hover:bg-white hover:text-gray-900'
              }`}
            >
              {isCreating ? 'CREATING...' : 'CREATE USER'}
            </button>
          </div>
        </form>
      )}

      {/* Users List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">EXISTING USERS ({users.length})</h3>
        
        {users.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No users found</p>
        ) : (
          <div className="grid gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white p-6 border-2 border-gray-300 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  {user.avatarUrl && (
                    <Image src={user.avatarUrl} alt={user.name} width={48} height={48} className="rounded-full object-cover" />
                  )}
                  <div>
                    <h4 className="font-bold text-gray-900">{user.name}</h4>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-500">
                      {user.country.flag} {user.country.name} • Created: {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="px-4 py-2 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
