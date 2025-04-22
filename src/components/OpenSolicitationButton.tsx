'use client'

import { useState } from 'react'
import { Button } from './Button'
import { SolicitationDrawer } from './SolicitationDrawer/SolicitationDrawer'

type Props = {
  title: string
  className?: string
}

export function OpenSolicitationButton({ title, className }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  function onOpenChange() {
    setIsOpen(prevState => !prevState)
  }

  return (
    <SolicitationDrawer
      open={isOpen}
      onOpenChange={onOpenChange}
      Trigger={<Button className={className}>{title}</Button>}
    />
  )
}
