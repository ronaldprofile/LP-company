import { API_BASE_URL, REVALIDATE_TIME } from '@/utils/api'
import Balancer from 'react-wrap-balancer'

type HomeResponse = {
  title_content: string
  subtitle: string
  logo: string
}

export async function HomeSection() {
  const response = await fetch(`${API_BASE_URL}/api/banners/contents`, {
    next: { revalidate: parseInt(REVALIDATE_TIME) }
  })
  const data: HomeResponse[] = await response.json()

  const content = data[0]

  return (
    <section
      className='mt-[67px] lg:w-[1000px] mx-auto text-left lg:text-center px-6'
      id='home'
    >
      <h1 className='section-title text-white uppercase font-bold'>
        <Balancer>{content.title_content}</Balancer>
      </h1>

      <p className='mt-[18px] text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium'>
        <Balancer>{content.subtitle}</Balancer>
      </p>
    </section>
  )
}
