import Image from 'next/image'
import Link from 'next/link'
import { NavDesktop } from './NavDesktop'
import { Header as IHeader } from '@/types/menu'
import { API_BASE_URL } from '@/utils/api'
import { NavMobile } from './NavMobile'

export async function Header() {
  const path = `${API_BASE_URL}/api/menu/main`

  const response = await fetch(path)
  const data: IHeader = await response.json()

  return (
    <>
      <header className='px-6 lg:max-w-7xl text-white flex justify-between items-center mx-auto pt-8'>
        <Link href='/' className='text-2xl font-bold'>
          <Image
            src={data.logo}
            alt='Logo da pódio tecnologia'
            width={197}
            height={43}
          />
        </Link>

        <NavMobile items={data.items} />

        <NavDesktop items={data.items} />
      </header>
    </>
  )
}
