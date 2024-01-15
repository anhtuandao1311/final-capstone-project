import Course from '~/components/Course'

export default function Search() {
  return (
    <div className='container py-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 mr-5'>
          <div className='px-2 py-2 border border-gray-300 flex gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5'
              />
            </svg>
            <span className='font-bold'>Filter</span>
          </div>
        </div>
        <div className='col-span-4'>
          <form className='w-full relative'>
            <div className='absolute top-2 left-2'>
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
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>

            <input
              type='text'
              placeholder='AI'
              className='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2 pl-10'
            />
          </form>
        </div>
        <div className='col-span-2 col-start-11'>
          <div className='flex items-center justify-between'>
            <div className='text-gray-400'>Sort by:</div>
            <div className='flex items-center p-2 gap-5 border-gray-300 border'>
              <p className='text-gray-400'>Trending</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-8 my-8'>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Course key={index} />
          ))}
      </div>
      <div className='flex items-center justify-center gap-10'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 stroke-primary'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18' />
        </svg>

        <div className='flex gap-5 items-center'>
          <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white'>
            <p>1</p>
          </div>
          <div className='mx-2'>2</div>
          <div className='mx-2'>3</div>
          <div className='mx-2'>4</div>
          <div className='mx-2'>5</div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 stroke-primary'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
        </svg>
      </div>
    </div>
  )
}
