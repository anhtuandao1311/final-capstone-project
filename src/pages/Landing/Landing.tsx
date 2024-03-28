import { Link } from 'react-router-dom'
import path from '~/constants/path'
import landingImage from '~/assets/images/landing_page.png'
import Course from '~/components/Course'
import { useContext } from 'react'
import { AppContext } from '~/contexts/app.context'
import { useQuery } from '@tanstack/react-query'
import courseApi from '~/apis/course.api'

export default function Landing() {
  const { isAuthenticated } = useContext(AppContext)

  const { data: allCourses } = useQuery({
    queryKey: ['courses'],
    queryFn: courseApi.getCourses
    // enabled: !isAuthenticated
  })

  // const { data: myCourses } = useQuery({
  //   queryKey: ['myCourses'],
  //   queryFn: courseApi.getStudentCourses,
  //   enabled: isAuthenticated
  // })

  let courses = allCourses?.data

  return (
    <div>
      <div className='bg-slate-200 py-16'>
        <div className='container grid grid-cols-2 pb-12'>
          <div className='flex flex-col col-span-1'>
            <h1 className='text-5xl font-bold mb-10'>Learn with expert anytime anywhere</h1>
            <p className='mb-10 text-[#4E5566] text-xl'>
              Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
            </p>
            <div className='flex items-center'>
              {!isAuthenticated ? (
                <Link to={path.register} className='py-3 px-6  font-bold bg-primary text-white'>
                  Create Account
                </Link>
              ) : (
                <Link to={path.search} className='py-3 px-6 font-bold bg-primary text-white'>
                  Browse Courses
                </Link>
              )}
            </div>
          </div>
          <div className='col-span-1 relative'>
            <img src={landingImage} alt='register' className='absolute top-0 right-0 object-cover' />
          </div>
        </div>
      </div>
      <div className='container'>
        {!isAuthenticated ? (
          <h1 className='font-bold text-5xl py-12 text-center'>Best Selling Courses</h1>
        ) : (
          <h1 className='font-bold text-5xl py-12 text-center'>My Courses</h1>
        )}

        <div className='grid grid-cols-5 gap-3 mb-12'>
          {courses && courses.map((course) => <Course key={course.id} course={course} />)}
        </div>
      </div>
      <div className='bg-[#1D2026]'>
        <div className='container'>
          <div className='grid grid-cols-12 py-20'>
            <div className='col-span-6 flex flex-col gap-10 pl-10'>
              <h1 className='text-4xl text-white'>Start learning with 67.1k students around the world.</h1>
              <div>
                <Link to={path.search} className='py-3 px-6  font-bold bg-primary text-white'>
                  Browse Courses
                </Link>
              </div>
            </div>
            <div className='col-span-2 flex flex-col justify-center ml-12 gap-3'>
              <p className='text-white text-4xl'>6.3k</p>
              <p className='text-[#B7BAC7]'>Online courses</p>
            </div>
            <div className='col-span-2 flex flex-col justify-center ml-12 gap-3'>
              <p className='text-white text-4xl'>26k</p>
              <p className='text-[#B7BAC7]'>Certified Instructor</p>
            </div>
            <div className='col-span-2 flex flex-col justify-center ml-12 gap-3'>
              <p className='text-white text-4xl'>99.9%</p>
              <p className='text-[#B7BAC7]'>Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
