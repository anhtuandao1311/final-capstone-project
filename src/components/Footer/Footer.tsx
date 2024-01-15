import { Link } from 'react-router-dom'
import path from '~/constants/path'

export default function Footer() {
  return (
    <div className='flex justify-center bg-[#1D2026] py-16 gap-16'>
      <div className='flex flex-col'>
        <div className='flex gap-2 mb-3'>
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
          <Link to={path.home} className='text-3xl font-bold text-white'>
            E-Tutor
          </Link>
        </div>
        <div className='text-slate-500 max-w-[300px] text-sm'>
          Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec mattis odio at.
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='uppercase text-white mb-4 font-bold'>Top 4 category</h1>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          English
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Math
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Physics
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Chemistry
        </Link>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='uppercase text-white mb-4 font-bold'>Quick Links</h1>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          About
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Contact
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Career
        </Link>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='uppercase text-white mb-4 font-bold'>Support</h1>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Help Center
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          FAQs
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Terms & Condition
        </Link>
        <Link to={path.home} className='text-slate-500 hover:text-white'>
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}
