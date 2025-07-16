import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email using Resend
    try {
      await resend.emails.send({
        from: 'noreply@justdiego.com',
        to: 'contact@justdiego.com',
        subject: `New Contact Form Submission from ${body.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #333;">Message</h3>
              <div style="background-color: #fff; padding: 15px; border-left: 4px solid #333; border-radius: 0 5px 5px 0;">
                ${body.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
              <p>This email was sent from the JustDiego contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.</p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Company: ${body.company || 'Not provided'}

Message:
${body.message}

Submitted on: ${new Date().toISOString()}
        `.trim()
      });

      console.log('Contact form submission sent successfully:', {
        name: body.name,
        email: body.email,
        company: body.company || 'Not provided',
        timestamp: new Date().toISOString()
      });

    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // Continue to return success to user even if email fails
      // You might want to save to database as fallback here
    }
    
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
