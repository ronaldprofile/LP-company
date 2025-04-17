'use client'
import Link from 'next/link'
import { Button } from '../Button'
import { SolicitationDrawer } from '../SolicitationDrawer/SolicitationDrawer'
import { Fragment, useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { MenuItem } from '@/types/menu'

type NavMobilePros = {
  items: MenuItem[]
}

export function NavMobile({ items }: NavMobilePros) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleLinkClick = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Drawer direction='top' open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <button
          className='lg:hidden text-white focus:outline'
          aria-label='Abrir menu'
          aria-expanded={isDrawerOpen}
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className='cursor-pointer' />
        </button>
      </DrawerTrigger>

      <DrawerContent className='w-full'>
        <div className='px-6 pb-6 pt-6'>
          <DrawerHeader className='flex flex-row items-center justify-between px-0'>
            <DrawerTitle className='text-xl'>Menu</DrawerTitle>
            <DrawerClose
              title='Fechar'
              className='cursor-pointer'
              onClick={() => setIsDrawerOpen(false)}
            >
              <X className='cursor-pointer' />
            </DrawerClose>
          </DrawerHeader>

          <nav>
            <ul className='flex flex-col space-y-5 items-start'>
              {items.map((item, index) => (
                <Fragment key={item.url}>
                  <li key={index}>
                    <Link
                      href={item.url}
                      className={cn('text-black block', {
                        hidden: !!item.is_button
                      })}
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  </li>

                  {item.is_button && (
                    <li>
                      <SolicitationDrawer
                        Trigger={
                          <Button
                            className='h-9 bg-highlight text-black font-semibold items-center py-0 px-2.5 rounded-sm'
                            onClick={handleLinkClick} // Close drawer on button click
                          >
                            Solicite uma demonstração
                          </Button>
                        }
                      />
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
