import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// ЗАГЛУШКА: В проекті використовується WayForPay, але десь є посилання на Stripe
// Цей файл створено тільки для успішного білда
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { planId, priceId } = body;

    // Логування для демо
    console.log('Stripe checkout request (redirecting to WayForPay):', {
      userId: session.user.email,
      planId,
      priceId,
      timestamp: new Date().toISOString(),
      note: 'This project uses WayForPay, not Stripe'
    });

    // Переадресація на WayForPay
    return NextResponse.json({
      error: 'This project uses WayForPay payment system',
      redirect: '/pricing',
      message: 'Please use WayForPay integration instead of Stripe',
      wayforpay: {
        note: 'Integrate WayForPay checkout here',
        merchantAccount: process.env.WAYFORPAY_MERCHANT_ACCOUNT || '',
        merchantDomainName: process.env.WAYFORPAY_DOMAIN || 'copyflow.com',
        merchantSignature: 'Generated signature would go here'
      }
    }, { status: 400 });

  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'This project uses WayForPay, not Stripe' },
      { status: 500 }
    );
  }
}

// Метод GET для перевірки статусу API
export async function GET() {
  return NextResponse.json({
    status: 'Stripe API stub (project uses WayForPay)',
    timestamp: new Date().toISOString(),
    note: 'This file exists only for build compatibility. Use WayForPay integration.',
    paymentSystem: 'WayForPay',
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