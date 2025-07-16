"use client";

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/app/(marketing)/contact/_components/ui/Card';

interface AdminAuthProps {
  children: React.ReactNode;
}

export default function AdminAuth({ children }: AdminAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Quick bypass for development 
  const forceAuth = typeof window !== 'undefined' && window?.location?.search?.includes('bypass=true');

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuth = () => {
      try {
        const adminToken = localStorage.getItem('admin_token');
        const tokenExpiry = localStorage.getItem('admin_token_expiry');
        
        console.log('Checking auth:', { adminToken: !!adminToken, tokenExpiry });
        
        if (adminToken && tokenExpiry) {
          const expiryTime = parseInt(tokenExpiry);
          const isValid = Date.now() < expiryTime;
          
          console.log('Token validation:', { expiryTime, now: Date.now(), isValid });
          
          if (isValid) {
            setIsAuthenticated(true);
            return;
          } else {
            // Token expired, clear it
            localStorage.removeItem('admin_token');
            localStorage.removeItem('admin_token_expiry');
            console.log('Token expired, cleared');
          }
        }
        
        setIsAuthenticated(false);
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
      }
    };

    // Add a small delay to prevent flash
    const timer = setTimeout(checkAuth, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Store token with 24-hour expiry
        const expiryTime = Date.now() + (24 * 60 * 60 * 1000);
        localStorage.setItem('admin_token', result.token);
        localStorage.setItem('admin_token_expiry', expiryTime.toString());
        setIsAuthenticated(true);
      } else {
        setError(result.error || 'Invalid credentials');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_token_expiry');
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  // Show loading state while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center py-20">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Checking authentication...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated && !forceAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">ADMIN LOGIN</CardTitle>
              <div className="w-16 h-1 bg-gray-900 mx-auto mt-2"></div>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 p-3 bg-red-50 border-2 border-red-200 text-red-800 text-sm">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 focus:outline-none"
                    placeholder="admin@justdiego.com"
                    disabled={isLoading}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-gray-300 bg-white text-gray-900 focus:border-gray-900 focus:outline-none"
                    placeholder="Enter admin password"
                    disabled={isLoading}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 border-2 border-gray-900 font-bold text-white transition-colors duration-200 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gray-900 hover:bg-white hover:text-gray-900'
                  }`}
                >
                  {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
                </button>
              </form>
              
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500">
                  Authorized personnel only. All access attempts are logged.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Show admin content with logout option if authenticated
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Admin Header with Logout */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">
              {forceAuth ? 'Bypassed authentication (dev mode)' : 'Authenticated as admin'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            LOGOUT
          </button>
        </div>
        
        {children}
      </div>
    </div>
  );
}
