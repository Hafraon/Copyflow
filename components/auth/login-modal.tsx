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

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignup: () => void
}

export function LoginModal({ isOpen, onClose, onSwitchToSignup }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

      if (result?.error) {
        toast.error('Невірний email або пароль')
      } else {
        toast.success('Успішний вхід!')
        onClose()
        window.location.href = '/dashboard'
      }
    } catch (error) {
      toast.error('Помилка входу')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      toast.error(`Помилка входу через ${provider}`)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Вхід в акаунт
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Social Login */}
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin('google')}
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Продовжити з Google
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin('facebook')}
            >
              <Icons.facebook className="mr-2 h-4 w-4" />
              Продовжити з Facebook
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleSocialLogin('github')}
            >
              <Icons.github className="mr-2 h-4 w-4" />
              Продовжити з GitHub
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

          {/* Email Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Увійти
            </Button>
          </form>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Немає акаунта? </span>
            <Button
              variant="link"
              className="p-0 h-auto"
              onClick={() => {
                onClose()
                onSwitchToSignup()
              }}
            >
              Зареєструватися
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}