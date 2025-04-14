import Balancer from 'react-wrap-balancer'

export function HomeSection() {
  return (
    <section className='mt-[67px] lg:max-w-[870px] mx-auto text-center px-6'>
      <h1 className='section-title text-white leading-[105%] uppercase font-bold'>
        <Balancer>
          Sua Plataforma Completa para Gestão de Lojas de Veículos
        </Balancer>
      </h1>

      <p className='mt-[18px] text-xl text-white font-medium'>
        <Balancer>Conheça nosso Sistema Web para lojas de automóveis</Balancer>
      </p>
    </section>
  )
}
