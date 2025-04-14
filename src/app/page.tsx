import { AboutSection } from '@/components/AboutSection/AboutSection'
import { AdvantagesSection } from '@/components/AdvantagesSection/AdvantagesSection'
import { BenefitsSection } from '@/components/BenefitsSection/BenefitsSection'
import { FaqSection } from '@/components/FaqSection/FaqSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HomeSection } from '@/components/HomeSection'
import { SolicitationSection } from '@/components/SolicitationSection'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

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

      <div className='w-full bg-highlight'>
        <div className='lg:max-w-[1168px] mx-auto py-10 px-6'>
          <h2 className='text-white font-bold text-4xl w-[619px]'>
            <Balancer>
              Dê um salto em direção ao sucesso no mercado, esqueça os processos
              manuais.
            </Balancer>
          </h2>
        </div>
      </div>

      <BenefitsSection />
      <AdvantagesSection />
      <FaqSection />

      <SolicitationSection />

      <Footer />
    </div>
  )
}
