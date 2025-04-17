import Link from 'next/link'
import { SolicitationDrawer } from '../SolicitationDrawer/SolicitationDrawer'
import { Button } from '../Button'
import { MenuItem } from '@/types/menu'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'

type NavDesktopPros = {
  items: MenuItem[]
}

export async function NavDesktop({ items }: NavDesktopPros) {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex flex-row space-x-4 items-center'>
        {items.map((item, index) => (
          <Fragment key={item.url}>
            <li key={index}>
              <Link
                href={item.url}
                className={cn('text-white', {
                  hidden: !!item.is_button
                })}
              >
                {item.title}
              </Link>
            </li>

            {item.is_button && (
              <li>
                <SolicitationDrawer
                  Trigger={
                    <Button className='h-9 bg-white text-foreground font-semibold items-center py-0 rounded-sm'>
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
  )
}
