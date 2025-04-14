import Balancer from 'react-wrap-balancer'
import { Card } from './Card'

import icon1 from './icons/1.svg'
import icon2 from './icons/2.svg'
import icon3 from './icons/3.svg'
import icon4 from './icons/4.svg'

const cards = [
  {
    id: 1,
    title: 'Recebimento de propostas automáticas dos portais',
    icon: icon1
  },
  {
    id: 2,
    title: 'Rastreamento da origem dos leads',
    icon: icon2
  },
  {
    id: 3,
    title: 'Automação de oportunidades de negócio',
    icon: icon3
  },
  {
    id: 4,
    title: 'Relatórios avançados de acompanhamento',
    icon: icon4
  }
]

export type ICard = (typeof cards)[number]

export function AboutSection() {
  return (
    <section
      className='lg:max-w-[1168px] mx-auto pt-28 pb-40 flex justify-between'
      id='about'
    >
      <div className='w-[513px] flex flex-col gap-5 text-left'>
        <h2 className='section-title text-black leading-20 uppercase font-bold'>
          <Balancer>Potencialize seu negócio automotivo</Balancer>
        </h2>

        <p className='text-xl font-medium text-[#676767]'>
          O Sistema Completo de Gestão que Transforma sua Loja de Carros em
          Sucesso!
        </p>
      </div>

      <div className='flex flex-col gap-8 w-[422px]'>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
