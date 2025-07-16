import { NextRequest } from 'next/server';
import { useState, useEffect } from 'react';

export function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

export function isAdminAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');
  
  // In a production app, you'd verify the token against a database
  // For this simple implementation, we'll just check if token exists and looks valid
  return token ? token.length === 64 : false; // Our tokens are 32 bytes = 64 hex chars
}

// Client-side authentication utilities
export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAdminAuth = () => {
      try {
        const adminToken = localStorage.getItem('admin_token');
        const tokenExpiry = localStorage.getItem('admin_token_expiry');
        
        if (adminToken && tokenExpiry) {
          const expiryTime = parseInt(tokenExpiry);
          const isValid = Date.now() < expiryTime;
          setIsAdmin(isValid);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error('Admin auth check error:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminAuth();
  }, []);

  return { isAdmin, isLoading };
}

export function checkIsAdmin(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const adminToken = localStorage.getItem('admin_token');
    const tokenExpiry = localStorage.getItem('admin_token_expiry');
    
    if (adminToken && tokenExpiry) {
      const expiryTime = parseInt(tokenExpiry);
      return Date.now() < expiryTime;
    }
    
    return false;
  } catch {
    return false;
  }
}

export function requireAdminAuth(request: NextRequest) {
  if (!isAdminAuthenticated(request)) {
    throw new Error('Admin authentication required');
  }
}

export function logAdminAction(action: string, request: NextRequest, details?: Record<string, unknown>) {
  console.log('Admin action:', {
    action,
    ip: getClientIP(request),
    userAgent: request.headers.get('user-agent') || 'unknown',
    timestamp: new Date().toISOString(),
    details
  });
}
