import Balancer from 'react-wrap-balancer'
import { ICard } from './AboutSection'
import Image from 'next/image'

type CardProps = {
  card: ICard
}

export function Card({ card }: CardProps) {
  return (
    <div className='flex'>
      <div className='rounded h-20 w-20 bg-[#20AB99] flex items-center justify-center flex-shrink-0'>
        <Image src={card.icon} alt={card.title} width={32} height={32} />
      </div>

      <div className='w-full pl-7 rounded h-20 bg-[#F5F5F5] text-base sm:text-lg md:text-xl text-black flex items-center '>
        <span>
          <Balancer>{card.title}</Balancer>
        </span>
      </div>
    </div>
  )
}
