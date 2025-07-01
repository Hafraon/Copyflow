import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, firstName, lastName, subject } = body;

    // Валідація
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Логування для демо (в продакшні тут буде відправка на email)
    console.log('Contact form submission:', {
      name: name || `${firstName} ${lastName}`.trim(),
      email,
      subject: subject || 'Contact Form Message',
      message,
      timestamp: new Date().toISOString()
    });

    // Тимчасова заглушка - в продакшні тут буде інтеграція з email сервісом
    // Можна додати інтеграцію з Resend, SendGrid, або іншим email провайдером
    // 
    // const emailResult = await sendEmail({
    //   to: process.env.CONTACT_EMAIL || 'support@copyflow.com',
    //   subject: `New contact form message: ${subject || 'General Inquiry'}`,
    //   html: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${name || `${firstName} ${lastName}`.trim()}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //     <hr>
    //     <p><small>Sent at: ${new Date().toISOString()}</small></p>
    //   `
    // });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Метод GET для перевірки статусу API
export async function GET() {
  return NextResponse.json({
    status: 'Contact API is working',
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: 'Submit contact form',
      GET: 'Check API status'
    }
  });
}

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}