import Balancer from 'react-wrap-balancer'
import { Card } from './Card'

import { PodioResponse } from '@/types/podio'
import { API_BASE_URL } from '@/utils/api'
import { OpenSolicitationButton } from '../OpenSolicitationButton'

export type ICard = PodioResponse['itens'][number]

export async function AboutSection() {
  const response = await fetch(`${API_BASE_URL}/api/blocks/podio`)
  const data: PodioResponse = await response.json()

  return (
    <section className='lg:max-w-[1168px] mx-auto pt-28 px-6 pb-40' id='about'>
      <div className='flex flex-col gap-8 lg:flex-row lg:justify-between'>
        <div className='lg:w-[513px] flex flex-col gap-5 text-left'>
          <h2 className='section-title text-black uppercase font-bold'>
            <Balancer>{data.title}</Balancer>
          </h2>

          <p className='text-base sm:text-lg md:text-xl font-medium text-gray-text'>
            <Balancer>{data.description}</Balancer>
          </p>

          <OpenSolicitationButton
            title=' Veja demonstração'
            className='mt-auto w-max lg:w-full'
          />
        </div>

        <div className='flex flex-col gap-8 lg:w-[422px]'>
          {data.itens.map(card => (
            <Card key={card.description} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
