import { AboutSection } from '@/components/AboutSection/AboutSection'
import { Header } from '@/components/Header'
import { HomeSection } from '@/components/HomeSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <div className='relative w-full h-[800px]'>
        {/* Radial gradient overlay */}
        <div className='absolute inset-0 bg-radial from-[#20AB99] to-[#0D453E] to-75% opacity-80 z-10' />

        {/* Background image */}
        <div className='absolute inset-0 bg-[url(/banner-section-home.png)] bg-cover bg-no-repeat bg-center z-0' />

        <div className='relative z-20'>
          <Header />
          <HomeSection />
        </div>
      </div>

      <div className='px-6 relative lg:max-w-[870px] mx-auto transform -translate-y-1/2 z-30'>
        <Image
          src={'/print-platform.svg'}
          alt='Imagem da plataforma de gestão de veículos'
          width={870}
          height={497}
        />
      </div>

      <AboutSection />
    </div>
  )
}
