import Balancer from 'react-wrap-balancer'

export function HomeSection() {
  return (
    <section className='mt-[67px] lg:w-[1000px] mx-auto text-left lg:text-center px-6'>
      <h1 className='section-title text-white uppercase font-bold'>
        <Balancer>
          Sua Plataforma Completa para Gestão de Lojas de Veículos
        </Balancer>
      </h1>

      <p className='mt-[18px] text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium'>
        <Balancer>Conheça nosso Sistema Web para lojas de automóveis</Balancer>
      </p>
    </section>
  )
}
