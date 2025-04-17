import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import roundCheck from './icons/round-check.svg'

import { cn } from '@/utils/cn'
import { Advantage } from '@/types/advantages'
import { API_BASE_URL } from '@/utils/api'

export async function AdvantagesSection() {
  const response = await fetch(`${API_BASE_URL}/api/blocks/accordion`)
  const advantages: Advantage = await response.json()

  return (
    <section
      className='lg:max-w-[1168px] mx-auto px-6 pt-[136px]'
      id='products'
    >
      <h2 className='section-title text-black font-bold text-center'>
        <Balancer>{advantages.title_general}</Balancer>
      </h2>

      <div className='pt-[100px] pb-[127px]'>
        <div className='flex flex-col gap-[70px]'>
          {advantages.conteudo.map((item, index) => (
            <div
              key={item.title}
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
                  {item.itens.map(item => (
                    <li
                      key={item.description}
                      className='text-black text-xl uppercase font-medium'
                    >
                      <Image
                        src={roundCheck}
                        alt='check'
                        className='inline-block mr-2'
                        width={20}
                        height={20}
                      />

                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>

              <Image
                src={item.imagem}
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
