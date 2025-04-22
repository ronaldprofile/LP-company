'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../Button'
import { SolicitationDrawer } from '../SolicitationDrawer/SolicitationDrawer'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { MenuItem } from '@/types/menu'

type NavMobilePros = {
  items: MenuItem[]
}

export function NavMobile({ items }: NavMobilePros) {
  const [isOpen, setIsOpen] = useState(false)

  function handleCloseMenu() {
    const checkbox = document.getElementById(
      'nav-mobile-toggle'
    ) as HTMLInputElement
    if (checkbox) {
      checkbox.checked = false
    }
  }

  function onOpenChange() {
    setIsOpen(prevState => !prevState)
    handleCloseMenu()
  }

  return (
    <div>
      <input type='checkbox' id='nav-mobile-toggle' className='hidden peer' />
      <label
        htmlFor='nav-mobile-toggle'
        className={cn('lg:hidden text-white focus:outline cursor-pointer')}
        aria-label='Abrir menu'
      >
        <Menu className={cn('cursor-pointer')} />
      </label>

      <div
        className={cn(
          'fixed inset-0 bg-black/65 z-50 transition-opacity duration-300 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto'
        )}
      />

      <div
        className={cn(
          'fixed top-0 left-0 w-full max-h-max bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 -translate-y-full peer-checked:translate-y-0'
        )}
      >
        <div className={cn('flex flex-row items-center justify-between')}>
          <h2 className={'text-xl font-semibold text-black'}>Menu</h2>
          <label
            htmlFor='nav-mobile-toggle'
            className='cursor-pointer text-black'
            aria-label='Fechar menu'
          >
            <X className='cursor-pointer' />
          </label>
        </div>

        <nav>
          <ul className={cn('flex flex-col space-y-5 items-start mt-6')}>
            {items.map(item => (
              <li key={item.url}>
                {item.is_button ? (
                  <SolicitationDrawer
                    open={isOpen}
                    onOpenChange={onOpenChange}
                    Trigger={
                      <Button
                        className={cn(
                          'h-9 bg-highlight text-black font-semibold items-center py-0 px-2.5 rounded-sm'
                        )}
                      >
                        {item.title}
                      </Button>
                    }
                  />
                ) : (
                  <NavItem
                    key={item.url}
                    item={item}
                    onClick={handleCloseMenu}
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

type NavItemProps = {
  item: MenuItem
  onClick: () => void
}

const NavItem = ({ item, onClick }: NavItemProps) => {
  return (
    <Link href={item.url} className={cn('text-black block')} onClick={onClick}>
      {item.title}
    </Link>
  )
}
