import http from '~/utils/http'

const userApi = {
  getTeachers: () => http.get('user/get_available_teachers')
}

export default userApi
