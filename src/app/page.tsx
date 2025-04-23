import { AboutSection } from '@/components/AboutSection/AboutSection'
import { AdvantagesSection } from '@/components/AdvantagesSection/AdvantagesSection'
import { BenefitsSection } from '@/components/BenefitsSection/BenefitsSection'
import { FaqSection } from '@/components/FaqSection/FaqSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { HomeSection } from '@/components/HomeSection'
import { ScrollToTopButton } from '@/components/ScrollToTop/ScrollToTop'
import { SolicitationSection } from '@/components/SolicitationSection/SolicitationSection'
import Image from 'next/image'
import { Banner } from '@/types/banners'
import { cn } from '@/lib/utils'
import { API_BASE_URL, REVALIDATE_TIME } from '@/utils/api'
import { Cookies } from '@/components/Cookies'

export default async function Home() {
  const response = await fetch(`${API_BASE_URL}/api/banners`, {
    next: { revalidate: parseInt(REVALIDATE_TIME) }
  })
  const data: Banner[] = await response.json()

  const generalBanners = data[0]

  const homeBannerBackground = generalBanners.banner_section
  const platformPrintBanner = generalBanners.print_platform_svg

  return (
    <div className='w-full h-screen'>
      <ScrollToTopButton />
      <Cookies />

      <div className='relative w-full h-[600px] lg:h-[800px]'>
        <div className='absolute inset-0 bg-radial from-[#20AB99] to-[#0D453E] to-75% opacity-80 z-10' />
        <div
          className={cn('absolute inset-0 bg-cover bg-no-repeat bg-center z-0')}
          style={{
            backgroundImage: `url(${homeBannerBackground})`
          }}
        />
        <div className='relative z-20'>
          <Header />
          <HomeSection />
        </div>
      </div>

      <div className='px-6 relative lg:max-w-[870px] mx-auto transform -translate-y-1/2 z-10'>
        <Image
          src={platformPrintBanner}
          alt='Imagem da plataforma de gestão de veículos'
          width={870}
          height={497}
        />
      </div>

      <AboutSection />

      <BenefitsSection />
      <AdvantagesSection />
      <FaqSection />

      <SolicitationSection />

      <Footer />
    </div>
  )
}
