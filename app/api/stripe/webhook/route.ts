import { NextRequest, NextResponse } from 'next/server';

// ЗАГЛУШКА: В проекті використовується WayForPay, але десь є посилання на Stripe webhook
// Цей файл створено тільки для успішного білда
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    
    // Логування для демо
    console.log('Stripe webhook received (but project uses WayForPay):', {
      timestamp: new Date().toISOString(),
      note: 'This project uses WayForPay webhooks, not Stripe',
      bodyLength: body.length
    });

    // Переадресація на WayForPay webhook handler
    return NextResponse.json({
      error: 'This project uses WayForPay webhook system',
      message: 'Please use WayForPay webhook integration instead of Stripe',
      wayforpay: {
        note: 'WayForPay webhook handler should be implemented here',
        expectedSignature: 'WayForPay signature validation',
        documentation: 'https://wayforpay.com/uk/documentation'
      }
    }, { status: 400 });

  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: 'This project uses WayForPay, not Stripe webhooks' },
      { status: 500 }
    );
  }
}

// Метод GET для перевірки статусу webhook API
export async function GET() {
  return NextResponse.json({
    status: 'Stripe webhook stub (project uses WayForPay)',
    timestamp: new Date().toISOString(),
    note: 'This file exists only for build compatibility. Use WayForPay webhook integration.',
    paymentSystem: 'WayForPay',
    webhookUrl: '/api/wayforpay/webhook',
    documentation: 'https://wayforpay.com/uk/documentation'
  });
}

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}