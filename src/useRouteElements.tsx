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

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
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
      path: '',
      element: <RejectedRoute></RejectedRoute>,
      children: [
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
        }
      ]
    }
  ])
  return routeElements
}
