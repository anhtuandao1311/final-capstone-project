import { useState } from 'react'
import { Link } from 'react-router-dom'
import registerImage from '~/assets/images/register_page.png'
import path from '~/constants/path'
import { UserLoginCredentialsDtos, UserLoginFormDtos } from '~/dtos/UserLoginCredentialsDto'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HttpErrorMessage } from '~/constants/httpErrorMessage.enum'
import axios from 'axios';

export default function Register() {
  const [userLoginFormInfo, setUserLoginFormInfo] = useState<UserLoginFormDtos>({
    password: '',
    email: '',
    name: '',
    confirmPassword: ''
  })

  const {password, email, name, confirmPassword} = userLoginFormInfo;

  const submitUserRegistrationFormHandler = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error(HttpErrorMessage.UnmatchPasswordError, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    await axios.post<UserLoginCredentialsDtos>('/user/user_register', {
      password,
      email,
      name,
    })
  }

  return (
      <div className='grid grid-cols-12'>
        {/* <ToastContainer/> */}
        <div className='col-span-5 relative pt-[100%] w-full bg-[#EBEBFF]'>
          <img src={registerImage} alt='register' className='absolute top-0 left-0 w-full h-full object-cover' />
        </div>
        <div className='col-span-7 flex items-center justify-center flex-col py-10 px-48'>
          <h1 className='text-3xl font-bold mb-6'>Create your account</h1>
          <form onSubmit={submitUserRegistrationFormHandler} className='w-full'>
            <div className='mb-6'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Username</label>
              <input
                type='text'
                className='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Username'
                required
                value={name}
                onChange={(e) => setUserLoginFormInfo(prev => ({...prev, name: e.target.value}))}
              />
            </div>

            <div className='mb-6'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
              <input
                type='text'
                className=' border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setUserLoginFormInfo(prev => ({...prev, email: e.target.value}))}
              />
            </div>

            <div className='mb-6 grid grid-cols-2 gap-5'>
              <div className='col-span-1'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                <input
                  type='password'
                  className=' border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Password'
                  required
                  value={password}
                  onChange={(e) => setUserLoginFormInfo(prev => ({...prev, password: e.target.value}))}
                />
              </div>
              <div className='col-span-1'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm Password</label>
                <input
                  type='password'
                  className=' border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                  placeholder='Confirm Password'
                  required
                  value={confirmPassword}
                  onChange={(e) => setUserLoginFormInfo(prev => ({...prev, confirmPassword: e.target.value}))}
                />
              </div>
            </div>

            <div className='mb-6 flex justify-end'>
              <button type="submit" className='py-2 px-6 flex items-center justify-center bg-primary text-white gap-1 rounded-sm'>
                <span>Create Account</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3' />
                </svg>
              </button>
            </div>
          </form>

          <div className='flex items-center w-full gap-2 mb-6'>
            <div className='flex-grow h-[1px] bg-gray-300'></div>
            <p className='uppercase flex-shrink text-gray-500'>Sign Up With</p>
            <div className='flex-grow h-[1px] bg-gray-300'></div>
          </div>

          <div className='w-full flex justify-center mb-6'>
            <button className='flex justify-center items-center'>
              <span className='border border-gray-300 py-1 px-2'>
                <svg
                  className='w-5 h-[19px]'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 19'
                >
                  <path
                    fillRule='evenodd'
                    d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
              <span className='py-1 px-8 border border-gray-300 text-sm'>Google</span>
            </button>
          </div>

          <div>
            <Link to={path.login} className='text-gray-500 hover:text-primary'>
              Already have account?
            </Link>
          </div>
        </div>
      </div>
  )
}
