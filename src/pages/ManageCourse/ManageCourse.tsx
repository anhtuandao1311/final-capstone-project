import Course from '~/components/Course'

export default function ManageCourse() {
  return (
    <div className='bg-slate-200 py-16 px-8 ml-[260px] pt-28 min-h-screen'>
      <div className='bg-white p-6'>
        <h1 className='font-bold text-2xl text-center mb-6'>Manage Courses</h1>
        <hr className='mb-6' />
        <div className='grid grid-cols-5 gap-3'>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <Course key={index} linkTo='/dashboard/manage-courses/id' />
            ))}
        </div>
      </div>
    </div>
  )
}
