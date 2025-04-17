import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { Button } from './Button'
import { SolicitationDrawer } from './SolicitationDrawer/SolicitationDrawer'
import { CTO } from '@/types/CTO'
import { API_BASE_URL } from '@/utils/api'

export async function SolicitationSection() {
  const response = await fetch(`${API_BASE_URL}/api/blocks/cto`)

  const data: CTO[] = await response.json()

  const content = data[0]

  return (
    <section
      className='px-6 pb-[128px] lg:max-w-[1168px] mx-auto'
      id='contact_us'
    >
      <div className='bg-gray-secondary rounded flex flex-col lg:flex-row lg:justify-between items-center gap-10'>
        <Image
          src={content.macbook_image}
          width={430}
          height={406}
          alt='Imagem de um computador com a plataforma de gestão de veículos'
        />

        <div className='px-6'>
          <span className='text-lg text-black font-medium'>
            {content.titulo}
          </span>

          <h4 className='mt-2 font-bold text-2xl sm:text-3xl md:text-4xl text-black uppercase'>
            <Balancer>{content.descricao}</Balancer>
          </h4>

          <SolicitationDrawer
            Trigger={
              <Button className='h-16 text-white w-full mt-6 uppercase font-semibold md:text-xl px-2'>
                {content.link.title}
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}
