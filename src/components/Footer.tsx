import { Footer as IFooter } from '@/types/footer'
import { API_BASE_URL, REVALIDATE_TIME } from '@/utils/api'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

export async function Footer() {
  const response = await fetch(`${API_BASE_URL}/api/blocks/footer`, {
    next: { revalidate: parseInt(REVALIDATE_TIME) }
  })

  const data: IFooter[] = await response.json()

  const footer = data[0]

  return (
    <footer className='bg-[#171717] pt-[100px] pb-4'>
      <div className='lg:max-w-[1168px] mx-auto text-white px-6'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
          <div className='flex flex-col gap-7 mb-4 lg:mb-0'>
            <Image
              src={footer.logo}
              alt='Logo da pódio tecnologia'
              width={197}
              height={43}
            />

            <p className='text-xs lg:w-[657px]'>
              <Balancer>{footer.descricao}</Balancer>
            </p>
          </div>

          <div className='text-sm leading-6'>
            <address className='mb-5'>
              Contato:
              <br />
              <a href='#' className='font-bold'>
                {footer.Telefone}
              </a>
              <br />
              <a href='#'>{footer.email}</a>
            </address>

            <span>Redes sociais</span>
            <ul className='flex gap-2 items-center'>
              <li>
                <a
                  target='_blank'
                  href={footer.link_facebook.uri}
                  className='font-bold'
                >
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={footer.link_instagram.uri}
                  className='font-bold'
                >
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={footer.link_youtube.uri}
                  className='font-bold'
                >
                  <Youtube size={20} />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={footer.link_linkedin.uri}
                  className='font-bold'
                >
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className='lg:text-center text-xs mt-10'>
          <a
            href='https://termos-podiotech.netlify.app'
            target='_blank'
            className='underline hover:text-gray-300'
          >
            Confira nossa política de privacidade
          </a>
        </p>
        <p className='lg:text-center text-xs mt-2'>
          Podiotech©{new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
