import { useQuery } from '@tanstack/react-query'
import courseApi from '~/apis/course.api'
import Course from '~/components/Course'

export default function ManageCourse() {
  const { data: allCourses } = useQuery({
    queryKey: ['courses'],
    queryFn: courseApi.getCourses
    // enabled: !isAuthenticated
  })

  if (!allCourses) return null

  const courses = allCourses.data

  return (
    <div className='bg-slate-200 py-16 px-8 ml-[260px] pt-28 min-h-screen'>
      <div className='bg-white p-6'>
        <h1 className='font-bold text-2xl text-center mb-6'>Manage Courses</h1>
        <hr className='mb-6' />
        <div className='grid grid-cols-5 gap-3'>
          {courses.map((course, index) => (
            <Course key={index} linkTo='/dashboard/manage-courses/id' course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}
