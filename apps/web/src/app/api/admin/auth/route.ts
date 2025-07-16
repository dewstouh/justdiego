import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface LoginRequest {
  email: string;
  password: string;
}

// Admin credentials - in production, store these securely in environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@justdiego.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123!';

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();
    
    // Validate required fields
    if (!body.email || !body.password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check credentials
    if (body.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase() || body.password !== ADMIN_PASSWORD) {
      // Log failed login attempt
      console.warn('Failed admin login attempt:', {
        email: body.email,
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
        timestamp: new Date().toISOString()
      });
      
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate a simple token (in production, use JWT or a more secure method)
    const token = crypto.randomBytes(32).toString('hex');
    
    // Log successful login
    console.log('Successful admin login:', {
      email: body.email,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        message: 'Login successful',
        token: token,
        user: {
          email: ADMIN_EMAIL,
          role: 'admin'
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Admin auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: Add a GET endpoint to verify token validity
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    // In a real app, you'd verify the token against a database or JWT
    // For this simple implementation, we'll just check if token exists
    return NextResponse.json(
      { 
        valid: true,
        user: {
          email: ADMIN_EMAIL,
          role: 'admin'
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: 'Token verification failed' },
      { status: 500 }
    );
  }
}
