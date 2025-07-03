'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/components/icons'
import { toast } from 'sonner'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Паролі не співпадають')
      return
    }

    if (formData.password.length < 6) {
      toast.error('Пароль має містити мінімум 6 символів')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      })

      if (response.ok) {
        toast.success('Акаунт створено! Автоматичний вхід...')
        
        // Автоматичний вхід після реєстрації
        const result = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false
        })

        if (result?.ok) {
          onClose()
          window.location.href = '/dashboard'
        }
      } else {
        const error = await response.json()
        toast.error(error.message || 'Помилка реєстрації')
      }
    } catch (error) {
      toast.error('Помилка реєстрації')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignup = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      toast.error(`Помилка реєстрації через ${provider}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Створити акаунт
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Social Signup */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-11 text-sm font-medium"
              onClick={() => handleSocialSignup('google')}
            >
              <Icons.google className="mr-3 h-5 w-5" />
              Продовжити з Google
            </Button>
            <Button
              variant="outline"
              className="w-full h-11 text-sm font-medium"
              onClick={() => handleSocialSignup('facebook')}
            >
              <Icons.facebook className="mr-3 h-5 w-5" />
              Продовжити з Facebook
            </Button>
            <Button
              variant="outline"
              className="w-full h-11 text-sm font-medium"
              onClick={() => handleSocialSignup('github')}
            >
              <Icons.github className="mr-3 h-5 w-5" />
              Продовжити з LinkedIn
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                або
              </span>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Повне ім'я</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ваше повне ім'я"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Електронна пошта</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Мінімум 6 символів"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Підтвердити пароль</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                placeholder="Повторіть пароль"
                required
                className="h-11"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
              disabled={isLoading}
            >
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Створити акаунт
            </Button>
          </form>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Вже є акаунт? </span>
            <Button
              variant="link"
              className="p-0 h-auto font-medium text-blue-600 hover:text-blue-700"
              onClick={() => {
                onClose()
                onSwitchToLogin()
              }}
            >
              Увійти
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}