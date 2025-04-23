'use client'
import { WhatsappLogo } from '@phosphor-icons/react'

export function WhatsappButton({ number }: { number: string }) {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${number.replace(/\D/g, '')}`}
      target='_blank'
      rel='noopener noreferrer'
      className='animate-bounce fixed p-4 bottom-20 right-4 bg-gray-secondary text-black rounded-full shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out z-50'
    >
      <WhatsappLogo className='text-highlight' size={24} />
    </a>
  )
}
