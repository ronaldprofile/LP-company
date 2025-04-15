import Balancer from 'react-wrap-balancer'
import { Card } from './Card'

import icon1 from './icons/1.svg'
import icon2 from './icons/2.svg'
import icon3 from './icons/3.svg'
import icon4 from './icons/4.svg'
import { Button } from '../Button'
import { SolicitationDrawer } from '../SolicitationDrawer/SolicitationDrawer'

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
    <section className='lg:max-w-[1168px] mx-auto pt-28 px-6 pb-40' id='about'>
      <div className='flex flex-col gap-8 lg:flex-row lg:justify-between'>
        <div className='lg:w-[513px] flex flex-col gap-5 text-left'>
          <h2 className='section-title text-black uppercase font-bold'>
            <Balancer>Potencialize seu negócio automotivo</Balancer>
          </h2>

          <p className='text-base sm:text-lg md:text-xl font-medium text-gray-text'>
            <Balancer>
              O Sistema Completo de Gestão que Transforma sua Loja de Carros em
              Sucesso!
            </Balancer>
          </p>

          <SolicitationDrawer
            Trigger={
              <Button className='mt-auto w-max lg:w-full'>
                Veja demonstração
              </Button>
            }
          />
        </div>

        <div className='flex flex-col gap-8 lg:w-[422px]'>
          {cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
