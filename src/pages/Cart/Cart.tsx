import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import courseImage from '~/assets/images/course_image.png'

export default function Cart() {
  return (
    <div className='container'>
      <h1 className='font-bold text-3xl py-12'>Shoping Cart</h1>

      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-8'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className='flex items-center gap-3 min-h-[200px]'>
                  <div>
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
                        d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                  </div>
                  <img src={courseImage} alt='course image' className='w-[200px] h-[120px]' />
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-1 items-center'>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='w-4 h-4 fill-primary'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                      5
                      <div className='text-sm'>
                        <span className='text-[#4E5566]'>(265.7K) </span>
                      </div>
                    </div>
                    <div className='line-clamp-2 font-bold text-xl'> Machine Learning A-Z™: Hands-On Python & R</div>
                    <div className='text-slate-600'>Course by: John Doe</div>
                  </div>
                </TableCell>
                <TableCell className='text-primary font-bold text-2xl'>$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='flex items-center gap-3 min-h-[200px]'>
                  <div>
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
                        d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                  </div>
                  <img src={courseImage} alt='course image' className='w-[200px] h-[120px]' />
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-1 items-center'>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='w-4 h-4 fill-primary'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                      5
                      <div className='text-sm'>
                        <span className='text-[#4E5566]'>(265.7K) </span>
                      </div>
                    </div>
                    <div className='line-clamp-2 font-bold text-xl'> Machine Learning A-Z™: Hands-On Python & R</div>
                    <div className='text-slate-600'>Course by: John Doe</div>
                  </div>
                </TableCell>
                <TableCell className='text-primary font-bold text-2xl'>$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='flex items-center gap-3 min-h-[200px]'>
                  <div>
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
                        d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                  </div>
                  <img src={courseImage} alt='course image' className='w-[200px] h-[120px]' />
                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-1 items-center'>
                      <svg
                        enableBackground='new 0 0 15 15'
                        viewBox='0 0 15 15'
                        x={0}
                        y={0}
                        className='w-4 h-4 fill-primary'
                      >
                        <polygon
                          points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                      </svg>
                      5
                      <div className='text-sm'>
                        <span className='text-[#4E5566]'>(265.7K) </span>
                      </div>
                    </div>
                    <div className='line-clamp-2 font-bold text-xl'> Machine Learning A-Z™: Hands-On Python & R</div>
                    <div className='text-slate-600'>Course by: John Doe</div>
                  </div>
                </TableCell>
                <TableCell className='text-primary font-bold text-2xl'>$25.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className='col-span-4'>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              <div className='text-slate-500'>Subtotal</div>
              <div className='font-bold text-slate-700'>$75.00 USD</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-slate-500'>Tax</div>
              <div className='font-bold text-slate-700'>$21.00 USD</div>
            </div>
          </div>
          <hr className='my-6' />
          <div className='flex justify-between'>
            <div className='text-slate-900 text-xl'>Total</div>
            <div className='font-bold text-xl'>$75.00 USD</div>
          </div>
          <button className='mt-8 py-4 px-8 text-white bg-primary w-full font-bold mb-8'>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}
