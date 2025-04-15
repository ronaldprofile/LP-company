import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { Button } from './Button'
import { SolicitationDrawer } from './SolicitationDrawer/SolicitationDrawer'

export function SolicitationSection() {
  return (
    <section className='px-6 pb-[128px] lg:max-w-[1168px] mx-auto'>
      <div className='bg-gray-secondary rounded flex flex-col lg:flex-row lg:justify-between items-center gap-10'>
        <Image
          src={'/macbook.svg'}
          width={430}
          height={406}
          alt='Imagem de um computador com a plataforma de gestão de veículos'
        />

        <div className='px-6'>
          <span className='text-lg text-black font-medium'>
            Leve sua loja para o próximo nível agora mesmo!
          </span>

          <h4 className='mt-2 font-bold text-2xl sm:text-3xl md:text-4xl text-black uppercase'>
            <Balancer>
              conheça o Sistema web para lojas de automóveis com tudo o que você
              precisa
            </Balancer>
          </h4>

          <SolicitationDrawer
            Trigger={
              <Button className='h-16 text-white w-full mt-6 uppercase font-semibold md:text-xl px-0'>
                Solicitar uma demonstração
              </Button>
            }
          />
        </div>
      </div>
    </section>
  )
}
