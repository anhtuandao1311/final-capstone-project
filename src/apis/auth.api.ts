import http from '~/utils/http'

const authApi = {
  registerAccount: (body: { email: string; password: string }) => http.post('user/user_register', body),
  loginAccount: (body: { email: string; password: string }) => http.post('user/user_login', body),
  logoutAccount: () => http.post('user/user_logout')
}

export default authApi
