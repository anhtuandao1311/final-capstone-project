import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'

export default function CourseVideo() {
  return (
    <div className='p-4 mb-10'>
      <div className='flex justify-end'>
        <button className='bg-primary text-white font-bold p-3 rounded-xs mb-6'>View predictions</button>
      </div>

      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-7'>
          <video src='' className='min-h-[300px] bg-black w-full'></video>
          <div className='text-2xl font-bold pt-5'>Intro To Machine Learning</div>
          <div className='text-xl font-bold pt-8 pb-4'>Lecture Notes</div>
          <div>
            In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris finibus vel. Praesent eget mi in
            mi maximus egestas. Mauris eget ipsum in justo bibendum pellentesque. Sed id arcu in arcu ullamcorper
            eleifend condimentum quis diam. Phasellus tempus, urna ut auctor mattis, nisi nunc tincidunt lorem, eu
            egestas augue lectus sit amet sapien. Maecenas tristique aliquet massa, a venenatis augue tempor in. Aliquam
            turpis urna, imperdiet in lacus a, posuere suscipit augue. Nullam non quam a lectus finibus varius nec a
            orci. Aliquam efficitur sem cursus elit efficitur lacinia Morbi sit amet pretium tellus. Donec blandit
            fermentum tincidunt. Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id sodales. Donec iaculis
            interdum mattis. Curabitur posuere ultricies diam in egestas. Donec id diam et lacus pharetra vestibulum a
            id est. Mauris vestibulum massa quis elit feugiat, dictum maximus ipsum pellentesque. Sed elementum, libero
            id lacinia aliquet, purus nibh consectetur mauris, eget interdum mi lacus vitae sem.
          </div>
        </div>
        <div className='col-span-5'>
          <h1 className='text-4xl font-bold mb-5'>Course Contents</h1>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='border px-4 py-6'>
                    <div className='flex items-center flex-1 justify-between'>
                      <div className='text-lg text-primary mr-14'>Getting Started</div>
                      <div className='flex justify-between gap-3 text-sm'>
                        <div className='flex items-center gap-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5 stroke-blue-600'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                            />
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z'
                            />
                          </svg>
                          <div>4 lectures</div>
                        </div>
                        <div className='flex items-center gap-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5 stroke-primary'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                            />
                          </svg>
                          <div>51m</div>
                        </div>
                        <div className='flex items-center gap-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5 stroke-green-700'
                          >
                            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                          </svg>

                          <div>25% finish</div>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className='p-3 flex justify-between'>
                          <p>1. Introduction</p>
                          <div className='flex'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-6 h-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
                              />
                            </svg>
                            7:31
                          </div>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
        </div>
      </div>
    </div>
  )
}
