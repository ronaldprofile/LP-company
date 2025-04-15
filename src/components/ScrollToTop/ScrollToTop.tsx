'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const screenHeight = window.innerHeight / 2
      setIsVisible(window.scrollY > screenHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={cn(
        'p-4 fixed bottom-4 right-4 bg-highlight text-white rounded-full hover:brightness-105 transition cursor-pointer shadow-lg z-100 transform duration-300 ease-in-out',
        {
          'opacity-100 translate-y-0': isVisible,
          'opacity-0  translate-x-4 pointer-events-none': !isVisible
        }
      )}
      onClick={handleScrollToTop}
    >
      <ArrowUp size={24} />
    </button>
  )
}
