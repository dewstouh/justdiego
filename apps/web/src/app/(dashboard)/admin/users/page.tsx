"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import UserForm from './_components/UserForm';

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

interface UserData {
  name: string;
  avatarUrl?: string;
  countryId: string;
}

export default function ManageUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

  useEffect(() => {
    loadUsers();
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

  const handleCreateSubmit = async (userData: UserData) => {
    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'User created successfully!'});
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
      setIsSubmitting(false);
    }
  };

  const handleEditSubmit = async (userData: UserData) => {
    if (!editingUser) return;

    setIsSubmitting(true);
    setStatus({type: null, message: ''});

    try {
      const response = await fetch(`/api/admin/users/${editingUser}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'User updated successfully!'});
        setEditingUser(null);
        loadUsers();
      } else {
        const result = await response.json();
        setStatus({type: 'error', message: result.error || 'Failed to update user'});
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsSubmitting(false);
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

  const transformUserToFormData = (user: User): UserData => {
    return {
      name: user.name,
      avatarUrl: user.avatarUrl,
      countryId: user.countryId,
    };
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
        <div className="bg-gray-50 p-6 border-2 border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">CREATE NEW USER</h3>
          <UserForm
            onSubmit={handleCreateSubmit}
            isSubmitting={isSubmitting}
            submitStatus={status}
          />
        </div>
      )}

      {/* Users List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">EXISTING USERS ({users.length})</h3>
        
        {users.length === 0 ? (
          <p className="text-gray-600 text-center py-8">No users found</p>
        ) : (
          <div className="grid gap-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white border-2 border-gray-300">
                {editingUser === user.id ? (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">EDIT USER</h3>
                      <button
                        onClick={() => setEditingUser(null)}
                        className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-bold hover:bg-gray-600 hover:text-white transition-colors"
                      >
                        CANCEL
                      </button>
                    </div>
                    <UserForm
                      initialData={transformUserToFormData(user)}
                      isEditing={true}
                      onSubmit={handleEditSubmit}
                      isSubmitting={isSubmitting}
                      submitStatus={status}
                    />
                  </div>
                ) : (
                  <div className="p-6 flex justify-between items-center">
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
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingUser(user.id)}
                        className="px-4 py-2 border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
                      >
                        EDIT
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
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
