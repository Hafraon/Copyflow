import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Демо реєстрація - в продакшні тут буде база даних
    console.log('Registration attempt:', { name, email, password: '***' })

    // Симуляція перевірки існуючого користувача
    if (email === 'existing@example.com') {
      return NextResponse.json(
        { message: 'Користувач з таким email вже існує' },
        { status: 400 }
      )
    }

    // Симуляція створення користувача
    const user = {
      id: Date.now().toString(),
      name,
      email,
      subscription_plan: 'free',
      generations_used: 0,
      generations_limit: 5
    }

    console.log('User created successfully:', user)

    return NextResponse.json({
      message: 'Користувач створений успішно',
      user: { id: user.id, name: user.name, email: user.email }
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Помилка реєстрації' },
      { status: 500 }
    )
  }
}