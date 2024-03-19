import { Link } from 'react-router-dom'
import path from '~/constants/path'

export default function Header() {
  return (
    <div>
      <div className='flex justify-between bg-[#1D2026] text-[#8C94A3]'>
        <div className='flex '>
          <div className='py-3 px-5'>Home</div>
          <div className='py-3 px-5'>Courses</div>
          <div className='py-3 px-5'>About</div>
          <div className='py-3 px-5'>Contact</div>
        </div>
        <div className='py-3 px-5 flex '>
          English
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </div>
      </div>
      <div className='grid grid-cols-12 px-5 py-5 border-b border-gray-300'>
        <div className='col-span-2 flex items-center gap-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-9 h-9 stroke-primary'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
            />
          </svg>
          <Link to={path.home} className='text-3xl font-bold'>
            E-Tutor
          </Link>
        </div>
        <div className='col-span-4 flex items-center'>
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
              placeholder='What do you want to learn...'
              className='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 pl-10'
            />
          </form>
        </div>
        <div className='col-start-10 col-span-1 flex gap-6'>
          <Link to={path.cart} className='flex items-center'>
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
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </Link>

          <Link to={path.cart} className='flex items-center'>
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
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>
          </Link>
        </div>

        <div className='col-start-11 col-span-1 flex items-center'>
          <Link to={path.register} className='text-primary font-bold'>
            Create Account
          </Link>
        </div>

        <div className='col-start-12 col-span-1 flex items-center justify-center'>
          <Link to={path.login} className='py-3 px-6  font-bold bg-primary text-white'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
