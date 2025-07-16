import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // TODO: Implement your email sending logic here
    // Options include:
    // 1. Send email using a service like SendGrid, Mailgun, or Resend
    // 2. Save to database and send notification
    // 3. Forward to your email service
    
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      company: body.company || 'Not provided',
      message: body.message,
      timestamp: new Date().toISOString()
    });

    // For now, we'll just log the submission and return success
    // In production, you would actually send the email here
    
    return NextResponse.json(
      { message: 'Thank you for your message! We will get back to you soon.' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
