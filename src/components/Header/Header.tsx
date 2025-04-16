import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'
import { SolicitationDrawer } from '../SolicitationDrawer/SolicitationDrawer'
import { Menu, X } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'
import { NavDesktop } from './NavDesktop'

export function Header() {
  return (
    <>
      <header className='px-6 lg:max-w-7xl text-white flex justify-between items-center mx-auto pt-8'>
        <Link href='/' className='text-2xl font-bold'>
          <Image
            src={'/logo-white.svg'}
            alt='Logo da pódio tecnologia'
            width={197}
            height={43}
          />
        </Link>

        <Drawer direction='top'>
          <DrawerTrigger>
            <button
              className='lg:hidden text-white focus:outline-none'
              aria-label='Abrir menu'
              aria-expanded='false'
            >
              <Menu />
            </button>
          </DrawerTrigger>

          <DrawerContent className='w-full'>
            <div className='px-6 pb-6 pt-6'>
              <DrawerHeader className='flex flex-row items-center justify-between px-0'>
                <DrawerTitle className='text-xl'>Menu</DrawerTitle>
                <DrawerClose title='Fechar'>
                  <X className='cursor-pointer' />
                </DrawerClose>
              </DrawerHeader>

              <nav>
                <ul className='flex flex-col space-y-5 items-start'>
                  <li>
                    <Link href='#about' className='text-black block'>
                      A Podiotech
                    </Link>
                  </li>
                  <li>
                    <Link href='#products' className='text-black block'>
                      Nossos produtos
                    </Link>
                  </li>
                  <li>
                    <Link href='#contact' className='text-black block'>
                      Fale conosco
                    </Link>
                  </li>
                  <li>
                    <SolicitationDrawer
                      Trigger={
                        <Button className='h-9 bg-highlight text-black font-semibold items-center py-0 px-2.5 rounded-sm'>
                          Solicite uma demonstração
                        </Button>
                      }
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>

        <NavDesktop />
      </header>
    </>
  )
}
