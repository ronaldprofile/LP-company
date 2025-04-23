import { FaqResponse } from '@/types/faq'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'

import './style.css'
import { REVALIDATE_TIME } from '@/utils/api'

export async function FaqSection() {
  const path = `${process.env.NEXT_PUBLIC_GEST_API_BASE_URL}/help/api`

  const response = await fetch(`${path}/help-topics/?category=FAQ`, {
    next: { revalidate: parseInt(REVALIDATE_TIME) }
  })
  const topics: FaqResponse = await response.json()

  return (
    <section className='px-6 py-[128px] lg:max-w-[1168px] mx-auto' id='faq'>
      <div className='flex flex-col gap-10 lg:flex-row lg:justify-between'>
        <h2 className='section-title font-bold'>faq</h2>

        <Accordion type='single' collapsible className='lg:w-[767px]'>
          {topics.results.map((faq, index) => (
            <AccordionItem
              value={`item-${faq.id}`}
              key={faq.id}
              className='border-b-black'
            >
              <AccordionTrigger className='AccordionTrigger pb-9  rounded-none text-xl font-medium flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                  <span className='font-bold text-highlight text-xl'>
                    {index + 1}.
                  </span>
                  <span className='text-black text-xl'>{faq.title}</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className='pt-2 text-xl text-black font-medium'>
                <div dangerouslySetInnerHTML={{ __html: faq.content }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
