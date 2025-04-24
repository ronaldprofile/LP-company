'use client'
import { MessageSquareWarning } from 'lucide-react'
import { Button } from './Button'
import Balancer from 'react-wrap-balancer'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function Cookies() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = document.cookie
      .split('; ')
      .find(row => row.startsWith('userConsent='))
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  function handleConsent() {
    document.cookie = 'userConsent=true; path=/; max-age=2592000' // 30 days (30 * 24 * 60 * 60)
    setIsVisible(false)
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 left-4 sm:bottom-6 sm:left-6 sm:right-6 z-100 shadow-lg lg:max-w-3xl w-auto',
        {
          'hidden opacity-0 invisible': !isVisible
        }
      )}
    >
      <div className='p-6 bg-gray-secondary text-foreground rounded-lg border border-gray-300 shadow-md'>
        <div className='flex items-center mb-4'>
          <MessageSquareWarning className='w-8 h-8 text-highlight mr-3' />
          <h2 className='text-lg font-semibold'>Aviso de Cookies</h2>
        </div>

        <p className='text-sm leading-relaxed'>
          <Balancer>
            Para proteger e melhorar sua experiência no site, nós utilizamos
            cookies e dados pessoais de acordo com{' '}
            <a
              href='https://privacidade.podiotech.com.br'
              target='_blank'
              rel='noopener noreferrer'
              className='decoration-highlight underline text-highlight'
            >
              Termos de uso e Política de Privacidade.
            </a>{' '}
            Ao navegar pela nossa plataforma, você declara estar ciente dessas
            condições.
          </Balancer>
        </p>

        <div className='mt-6'>
          <Button
            onClick={handleConsent}
            className='px-6 py-2 rounded-lg bg-highlight text-white hover:bg-highlight-dark transition-all'
          >
            Concordo
          </Button>
        </div>
      </div>
    </div>
  )
}
