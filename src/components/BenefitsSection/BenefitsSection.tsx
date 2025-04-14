import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import terminalIcon from './icons/terminal.svg'
import lockIcon from './icons/lock.svg'
import heartIcon from './icons/heart.svg'
import starIcon from './icons/star.svg'

const benefits = [
  {
    id: 1,
    title: 'Acessível',
    description:
      'Interface amigável e fácil de usar, é acessível até mesmo para aqueles que não têm muita experiência em tecnologia. Descomplicamos o caminho para garantir que todos alcancem o sucesso.',
    icon: terminalIcon
  },

  {
    id: 2,
    title: 'Facilidade',
    description:
      'Em apenas alguns dias, você e sua equipe dominarão as rédeas de todos os processos da sua loja de maneira simples e intuitiva. Esqueça a preocupação com a complexidade da gestão de veículos, a PODIOTECH torna tudo possível.',
    icon: heartIcon
  },

  {
    id: 3,
    title: 'Seguro',
    description:
      ' Investimos nas tecnologias mais avançadas para garantir a segurança dos seus dados. Levamos a sério a proteção dos nossos clientes, oferecendo recursos de ponta para tranquilidade total.',
    icon: lockIcon
  },
  {
    id: 4,
    title: 'Suporte',
    description:
      'Equipe de suporte sempre pronta para auxiliar em qualquer problema ou dúvida que possa surgir durante o uso da plataforma. Profissionais qualificados e capacitados, garantindo a melhor experiência possível para os nossos clientes.',
    icon: starIcon
  }
]

export function BenefitsSection() {
  return (
    <div className='bg-gray-secondary'>
      <section className='px-6 pb-6 lg:max-w-[1168px] mx-auto'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-8 w-[540px] mt-6'>
            {benefits.map(benefit => (
              <div key={benefit.id} className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    height={26}
                    width={26}
                  />
                  <h3 className='text-xl font-bold text-black'>
                    {benefit.title}
                  </h3>
                </div>

                <p className='text-gray-text'>
                  <Balancer>{benefit.description}</Balancer>
                </p>
              </div>
            ))}
          </div>

          <div className='transform -translate-y-1/7 translate-x-14'>
            <Image
              src={'/shield-check.svg'}
              alt='Imagem de um escudo com um check'
              width={500}
              height={627}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
