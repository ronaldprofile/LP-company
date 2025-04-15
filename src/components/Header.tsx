import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import { SolicitationDrawer } from './SolicitationDrawer/SolicitationDrawer'

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

        <nav>
          <ul className='flex space-x-4 items-center'>
            <li>
              <Link href='#about' className='text-white'>
                A Podiotech
              </Link>
            </li>
            <li>
              <Link href='#products' className='text-white'>
                Nossos produtos
              </Link>
            </li>
            <li>
              <Link href='#contact' className='text-white'>
                Fale conosco
              </Link>
            </li>
            <li>
              <SolicitationDrawer
                Trigger={
                  <Button className='h-9 bg-white text-highlight font-semibold items-center py-0 rounded-sm'>
                    Solicite uma demostração
                  </Button>
                }
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
