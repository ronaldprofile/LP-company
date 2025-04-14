import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

export function Footer() {
  return (
    <footer className='bg-[#171717] pt-[100px] pb-4'>
      <div className='lg:max-w-[1168px] mx-auto text-white px-6'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
          <div className='flex flex-col gap-7 mb-4 lg:mb-0'>
            <Image
              src={'/logo.svg'}
              alt='Logo da pódio tecnologia'
              width={197}
              height={43}
            />

            <p className='text-xs w-[657px]'>
              <Balancer>
                Experiência Premium a Preços Imbatíveis: Dedicação incessante
                resultou em uma experiência excepcional para nossos usuários em
                nosso sistema de revenda de automóveis. Tudo isso a um preço
                verdadeiramente irresistível. Descubra o melhor da revenda
                automotiva sem comprometer seu orçamento.
              </Balancer>
            </p>
          </div>

          <div className='text-sm leading-6'>
            <address className='mb-5'>
              Contato:
              <br />
              <a href='#' className='font-bold'>
                88 9223-4675
              </a>
              <br />
              <a href='#'>vendas@podiotecnologia.com.br</a>
            </address>

            <span>Redes sociais</span>
            <ul className='flex gap-2 items-center'>
              <li>
                <a href='#' className='font-bold'>
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a href='#' className='font-bold'>
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a href='#' className='font-bold'>
                  <Youtube size={20} />
                </a>
              </li>
              <li>
                <a href='#' className='font-bold'>
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className='lg:text-center text-xs mt-10'>
          Podiotech©{new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
