import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { Characteristic } from '@/types/characteristics'
import { API_BASE_URL } from '@/utils/api'

export async function BenefitsSection() {
  const response = await fetch(`${API_BASE_URL}/api/blocks/characteristics`)

  const data: Characteristic[] = await response.json()

  const content = data[0]

  return (
    <>
      <div className='w-full bg-highlight'>
        <div className='lg:max-w-[1168px] mx-auto py-10 px-6'>
          <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl sm:w-[619px]'>
            <Balancer>{content.title_general}</Balancer>
          </h2>
        </div>
      </div>

      <div className='bg-gray-secondary'>
        <section className='px-6 pb-6 lg:max-w-[1168px] mx-auto'>
          <div className='flex justify-between'>
            <div className='flex flex-col gap-8 w-[540px] mt-6'>
              {content.items.map(benefit => {
                return (
                  <div key={benefit.image} className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                      <Image
                        src={benefit.image}
                        alt={benefit.itens.titulo}
                        height={26}
                        width={26}
                      />
                      <h3 className='md:text-xl font-bold text-black'>
                        {benefit.itens.titulo}
                      </h3>
                    </div>

                    <p className='text-gray-text'>
                      <Balancer>{benefit.itens.corpo}</Balancer>
                    </p>
                  </div>
                )
              })}
            </div>

            <div className='hidden lg:block transform -translate-y-1/7 translate-x-14'>
              <Image
                src={content.imagem_general}
                alt='Imagem de um escudo com um check'
                width={500}
                height={627}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
