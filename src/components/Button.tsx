import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        'bg-highlight rounded-lg px-6 py-4 cursor-pointer hover:brightness-105 transition-all',
        className
      )}
    >
      {children}
    </button>
  )
}
