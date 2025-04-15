import Link from 'next/link'
import { SolicitationDrawer } from '../SolicitationDrawer/SolicitationDrawer'
import { Button } from '../Button'

export function NavDesktop() {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex flex-row space-x-4 items-center'>
        <li>
          <Link href='#about' className='text-white block'>
            A Podiotech
          </Link>
        </li>
        <li>
          <Link href='#products' className='text-white block'>
            Nossos produtos
          </Link>
        </li>
        <li>
          <Link href='#contact' className='text-white block'>
            Fale conosco
          </Link>
        </li>
        <li>
          <SolicitationDrawer
            Trigger={
              <Button className='h-9 bg-white text-foreground font-semibold items-center py-0 rounded-sm'>
                Solicite uma demonstração
              </Button>
            }
          />
        </li>
      </ul>
    </nav>
  )
}
