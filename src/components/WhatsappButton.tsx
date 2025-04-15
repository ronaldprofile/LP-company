'use client'
import { WhatsappLogo } from '@phosphor-icons/react'

export function WhatsappButton() {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=5511941414444'
      target='_blank'
      rel='noopener noreferrer'
      className='animate-bounce fixed p-4 bottom-20 right-4 bg-gray-secondary text-black rounded-full shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out z-100'
    >
      <WhatsappLogo className='text-highlight' size={24} />
    </a>
  )
}
