import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className='lg:max-w-7xl text-white flex justify-between items-center mx-auto pt-8'>
      <Link href='/' className='text-2xl font-bold'>
        <Image
          src={'/logo.svg'}
          alt='Logo da pódio tecnologia'
          width={197}
          height={43}
        />
      </Link>

      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link href='#about' className='text-white'>
              A pódio Tecnologia
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
        </ul>
      </nav>
    </header>
  )
}
