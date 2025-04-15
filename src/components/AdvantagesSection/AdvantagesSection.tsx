import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import roundCheck from './icons/round-check.svg'
import crmPrint from './images/crm.svg'
import leadsPrint from './images/leads.svg'
import comercialPrint from './images/comercial.svg'
import { cn } from '@/utils/cn'

const advantages = [
  {
    id: 1,
    title: 'crm',
    description:
      'Um CRM completo com as mais modernas ferramentas do mercado que ajuda a organizar e gerir as oportunidades do dia a dia da revenda.',
    image: crmPrint,
    options: ['fluxo de vendas', 'equipes e vendas', 'criação de site']
  },
  {
    id: 2,
    title: 'módulo comercial',
    description:
      'O módulo comercial da nossa plataforma oferece um gerenciamento objetivo e profissional para sua revenda, assegurando a integridade e segurança das informações.',
    image: comercialPrint,
    options: ['conversão', 'negociações', 'propostas e orçamentos']
  },
  {
    id: 3,
    title: 'leads',
    description:
      'Envie novidades, lançamentos e comunicados a todos os clientes, utilizando SMS para avaliações, parabenizações, notificações sobre multas de carros vendidos.',
    image: leadsPrint,
    options: ['whatsapp', 'email e ligação', 'histórico']
  }
]

export function AdvantagesSection() {
  return (
    <section className='lg:max-w-[1168px] mx-auto px-6 pt-[136px]'>
      <h2 className='section-title text-black font-bold text-center'>
        <Balancer>O que você encontra na pódio tecnologia</Balancer>
      </h2>

      <div className='pt-[100px] pb-[127px]'>
        <div className='flex flex-col gap-[70px]'>
          {advantages.map((item, index) => (
            <div
              key={item.id}
              className='flex flex-col lg:flex-row gap-[70px] lg:justify-between'
            >
              <div
                className={cn({
                  'lg:order-2': index % 2 !== 0
                })}
              >
                <span className='text-xl text-black uppercase font-bold'>
                  {item.title}
                </span>
                <p className='text-gray-text text-xl'>
                  <Balancer>{item.description}</Balancer>
                </p>

                <ul className='mt-5 flex flex-col gap-2'>
                  {item.options.map(option => (
                    <li
                      key={option}
                      className='text-black text-xl uppercase font-medium'
                    >
                      <Image
                        src={roundCheck}
                        alt='check'
                        className='inline-block mr-2'
                        width={20}
                        height={20}
                      />

                      {option}
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                src={item.image}
                alt={item.title}
                width={545}
                height={393}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
