import UserHeader from '~/components/UserHeader'
import UserSideNav from '~/components/UserSideNav'

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex'>
      <UserSideNav />
      <div className='flex-1'>
        <UserHeader />
        {children}
      </div>
    </div>
  )
}
