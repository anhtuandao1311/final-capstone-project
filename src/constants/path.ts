const path = {
  home: '/',
  profile: '/profile',
  login: '/login',
  register: '/register',
  logout: '/logout',
  courseDetails: '/:courseId',
  search: '/search',
  dashboard: '/dashboard',
  authentication: '/authentication',
  courseVideo: '/:courseId/videos',
  cart: '/cart',
  createCourse: '/dashboard/create-course',
  manageCourses: '/dashboard/manage-courses',
  editCourse: '/dashboard/manage-courses/id'
} as const

export default path
