import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import courseApi from '~/apis/course.api'
import path from '~/constants/path'
import { AppContext } from '~/contexts/app.context'
import { Course as CourseType } from '~/types/course.type'

export default function CourseDetails() {
  const { isAuthenticated } = useContext(AppContext)

  const { data } = useQuery({
    queryKey: ['courses'],
    queryFn: courseApi.getCourses,
    enabled: !isAuthenticated
  })

  const { data: studentCourses } = useQuery({
    queryKey: ['studentCourses'],
    queryFn: courseApi.getStudentCourses,
    enabled: isAuthenticated
  })

  const studentEnrollCourseMutation = useMutation({
    mutationFn: courseApi.enrollCourse
  })

  const navigate = useNavigate()

  const handleEnrollCourse = (courseId: number) => {
    if (!isAuthenticated) return navigate('/login')
    studentEnrollCourseMutation.mutate(
      { courseId },
      {
        onSuccess: () => {
          toast.success('Enrolled successfully', { autoClose: 2000 })
        },
        onError: (error) => {
          toast.error('Failed to enroll in course', { autoClose: 2000 })
        }
      }
    )
  }

  const { courseId } = useParams()
  const courseIdNumber = Number(courseId)
  const courses = data?.data
  if (!courses || !studentCourses) return null

  const isEnrolledCourse = studentCourses?.data.some((course: any) => course.course.id === courseIdNumber)

  const course = courses.find((course: CourseType) => course.id === courseIdNumber)

  return (
    <div className='container py-6'>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-8'>
          <div className='flex flex-col gap-8 mb-8'>
            <h1 className='font-bold text-3xl'>{course?.title}</h1>

            <div className='flex items-center justify-between'>
              <div>
                {/* <p className='text-gray-500 mb-2'>Created by:</p>
                <p className='font-bold'>John Doe</p> */}
                <p className='text-gray-500 mb-2'>Level:</p>
                <p className='font-bold uppercase text-primary'>{course?.level}</p>
              </div>
              <div className='flex flex-col gap-1 items-start'>
                {/* {Array(5)
                  .fill(0)
                  .map((_, index) => (
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
                  ))}
                5<p className='text-gray-500'> (451,444 Rating)</p> */}
                <div>Language: </div>
                <div className='uppercase font-bold text-primary'>{course?.language}</div>
              </div>
            </div>
          </div>
          <div className='mb-8'>
            <video controls className='w-full'>
              <source src={course?.trailerPath} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* <ReactPlayer url={course?.trailerPath} controls width='100%' /> */}
          </div>
          <h2 className='font-bold text-2xl mb-8'>Description</h2>
          <p className='text-gray-500 mb-8 whitespace-pre-line'>{course?.description}</p>

          {/* <div className='bg-[#23BD33]/20 mt-8 mb-8 p-8'>
            <h2 className='font-bold text-xl mb-6'>What you will learn in this course</h2>
            <div className='grid grid-cols-2 gap-4'>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6 fill-[#23BD33] flex-shrink-0 mr-2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                      />
                    </svg>
                    <p className='text-gray-500'>
                      You will learn how to design beautiful websites using Figma, an interface design tool used by
                      designers at Uber, Airbnb and Microsoft..
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <h2 className='font-bold text-xl mb-8'>Course Requirements</h2>
          <ul className='list-disc'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <li className='text-gray-500 ml-5 mb-1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illu
                </li>
              ))}
          </ul> */}
        </div>
        <div className='col-span-4'>
          <div className='p-6 border border-gray-300'>
            {/* <div className='flex items-start justify-between mb-8'>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-2'>
                  <span className='text-xl '>$14.00</span>
                  <span className='text-sm text-gray-400 line-through'>$26.00</span>
                </div>
                <div className='text-primary flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  2 days left at this price!
                </div>
              </div>
              <div className='text-primary font-bold'>56% OFF</div>
            </div>
            <hr className='mb-8' /> */}
            <div className='flex flex-col gap-3 mb-8'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 stroke-gray-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                  Course Duration
                </div>
                <div className='text-gray-500'>~ 2 Months</div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 stroke-gray-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
                    />
                  </svg>
                  Course Level
                </div>
                <div className='text-gray-500'>{course?.level}</div>
              </div>

              {/* <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 stroke-gray-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                    />
                  </svg>
                  Students Enrolled
                </div>
                <div className='text-gray-500'>69,419</div>
              </div> */}

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 stroke-gray-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
                    />
                  </svg>
                  Language
                </div>
                <div className='text-gray-500 uppercase'>{course?.language}</div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 stroke-gray-400'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                    />
                  </svg>
                  Subtittle Language
                </div>
                <div className='text-gray-500 uppercase'>{course?.language}</div>
              </div>
            </div>
            <hr className='mb-8' />
            {!isEnrolledCourse ? (
              <button
                onClick={() => handleEnrollCourse(course?.id as number)}
                className='py-4 px-8 text-white bg-primary w-full font-bold mb-8'
              >
                Enroll Now
              </button>
            ) : (
              <Link
                to={`${path.home}${courseId}/videos`}
                className='py-4 px-8 text-white bg-primary w-full font-bold mb-8 block text-center rounded-sm'
              >
                Learn Now
              </Link>
            )}

            {/* <button className='py-2 px-8  w-full font-bold text-gray-700 border border-gray-300 text-sm mb-8'>
              Add To Wishlist
            </button> */}
            <h1 className='text-gray-800 font-bold mb-8'>This course includes:</h1>
            <div className='flex flex-col gap-3 mb-8 text-gray-500 text-sm'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                Lifetime access
              </div>

              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
                30-days money-back guarantee
              </div>

              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
                  />
                </svg>
                Free exercises file & downloadable resources
              </div>

              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0'
                  />
                </svg>
                Shareable certificate of completion
              </div>

              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z'
                  />
                </svg>
                Access on mobile , tablet and TV
              </div>

              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                  />
                </svg>
                English subtitles
              </div>

              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 stroke-primary'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z'
                  />
                </svg>
                100% online course
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between pt-20'>
        <div className='font-bold text-3xl'>Related Courses</div>
        <Link to='/search' className='text-primary flex items-center gap-2'>
          View All
          <span>
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
          </span>
        </Link>
      </div>
      {/* <div className='grid grid-cols-5 gap-3 pt-10 pb-10'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Course key={index} />
          ))}
      </div> */}
    </div>
  )
}
