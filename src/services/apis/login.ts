import myRequest from '@/services/axios'
enum LOG {
  // 登录
  login = '/employee/login',
  //退出登录
  logOut = '/employee/logout'
}
interface LoginParams {
  username: string
  password: string
}

const login = async (params: LoginParams) => {
  return await myRequest.post(LOG.login, params)
}

const logOut = async () => {
  return await myRequest.post(LOG.logOut)
}
export { login,logOut }
