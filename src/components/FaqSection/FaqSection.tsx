import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion'

import './style.css'

export function FaqSection() {
  return (
    <section className='px-6 py-[128px] lg:max-w-[1168px] mx-auto'>
      <div className='flex flex-col gap-10 lg:flex-row lg:justify-between'>
        <h2 className='section-title'>faq</h2>

        <Accordion type='single' collapsible className='w-[767px]'>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='AccordionTrigger pb-9 border-b border-b-gray-text rounded-none text-xl font-medium flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <span className='font-bold text-highlight text-xl'>01.</span>
                <span className='text-black '>O que é o Pódio</span>
              </div>
            </AccordionTrigger>

            <AccordionContent className='pt-2 text-xl text-black font-medium'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
