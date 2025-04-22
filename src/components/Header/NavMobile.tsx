'use client'
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
  return (
    <div>
      {/* Controle do menu com checkbox */}
      <input type='checkbox' id='nav-mobile-toggle' className='hidden peer' />
      <label
        htmlFor='nav-mobile-toggle'
        className={cn('lg:hidden text-white focus:outline cursor-pointer')}
        aria-label='Abrir menu'
      >
        <Menu className={cn('cursor-pointer')} />
      </label>

      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/65 z-50 transition-opacity duration-300 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto'
        )}
      />

      {/* Menu deslizante no topo */}
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

        {/* Navegação */}
        <nav>
          <ul className={cn('flex flex-col space-y-5 items-start mt-6')}>
            {items.map(item => (
              <li key={item.url}>
                {item.is_button ? (
                  <SolicitationDrawer
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
                  <NavItem key={item.url} item={item} />
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
}

const NavItem = ({ item }: NavItemProps) => {
  const handleCloseMenu = () => {
    const checkbox = document.getElementById(
      'nav-mobile-toggle'
    ) as HTMLInputElement
    if (checkbox) {
      checkbox.checked = false
    }
  }

  return (
    <Link
      href={item.url}
      className={cn('text-black block')}
      onClick={handleCloseMenu}
    >
      {item.title}
    </Link>
  )
}
