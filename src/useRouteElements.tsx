import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import RegisterLayout from './layouts/RegisterLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'
import Landing from './pages/Landing'
import CourseDetails from './pages/CourseDetails'
import Search from './pages/Search'
import CourseVideo from '~/pages/CourseVideo'
import Cart from '~/pages/Cart'
import UserLayout from '~/layouts/UserLayout'
import Dashboard from '~/pages/Dashboard'
import CreateCourse from '~/pages/CreateCourse'
import ManageCourse from '~/pages/ManageCourse'
import EditCourse from '~/pages/EditCourse'

const isAuthenticated = true

function RejectedRoute() {
  // const { isAuthenticated } = useContext(AppContext)

  return !isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function ProtectedRoute() {
  // const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    // all public page should be defined here
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      )
    },
    {
      path: path.courseDetails,
      element: (
        <MainLayout>
          <CourseDetails />
        </MainLayout>
      )
    },
    {
      path: path.search,
      index: true,
      element: (
        <MainLayout>
          <Search />
        </MainLayout>
      )
    },
    {
      path: path.login,
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: path.register,
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '',
      element: <ProtectedRoute></ProtectedRoute>,
      // all protected routes should be defined down here
      children: [
        {
          path: path.courseVideo,
          element: (
            <MainLayout>
              <CourseVideo />
            </MainLayout>
          )
        },
        {
          path: path.cart,
          element: (
            <MainLayout>
              <Cart />
            </MainLayout>
          )
        },
        {
          path: path.dashboard,
          element: (
            <UserLayout>
              <Dashboard />
            </UserLayout>
          )
        },
        {
          path: path.createCourse,
          element: (
            <UserLayout>
              <CreateCourse />
            </UserLayout>
          )
        },
        {
          path: path.manageCourses,
          element: (
            <UserLayout>
              <ManageCourse />
            </UserLayout>
          )
        },
        {
          path: path.editCourse,
          element: (
            <UserLayout>
              <EditCourse />
            </UserLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
