import { Link } from 'react-router-dom'
import path from '~/constants/path'
import courseImage from '~/assets/images/course_image.png'

export default function Course() {
  return (
    <Link to={path.courseDetails}>
      <div className='bg-white shadow-sm rounded-sm hover:translate-y-[-0.2rem] hover:shadow-md duration-100 transition-transform overflow-hidden border'>
        <div className='w-full pt-[100%] relative'>
          <img src={courseImage} alt='product' className='absolute top-0 left-0 w-full h-full object-cover' />
        </div>
        <div className='p-4'>
          <div className='flex justify-between mb-4'>
            <div className='text-red-500 text-sm font-bold'>Design</div>
            <div className='text-primary text-sm font-bold'>$57</div>
          </div>
          <div className='line-clamp-2 text-sm min-h-[2.5rem] mb-4'>
            Machine Learning A-Z™: Hands-On Python & R In Data Science
          </div>
          <hr className='mb-4' />
          <div className='flex justify-between'>
            <div className='flex gap-1'>
              <svg enableBackground='new 0 0 15 15' viewBox='0 0 15 15' x={0} y={0} className='w-4 h-4 fill-primary'>
                <polygon
                  points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeMiterlimit={10}
                />
              </svg>
              5
            </div>
            <div className='text-sm'>
              <span className='text-[#4E5566]'>265.7K </span>
              <span className='text-gray-400'>students</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
