import userAvatar from '~/assets/images/avatar.png'

export default function UserHeader() {
  return (
    <div className='bg-white py-3 flex items-center justify-between fixed top-0 left-[0] w-full pl-[290px] pr-[30px]'>
      <div className='font-bold text-xl'>Create a new course</div>
      <div>
        <img src={userAvatar} alt='avatar' />
      </div>
    </div>
  )
}
