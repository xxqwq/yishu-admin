import axios from 'axios'
import service from '@/services/axios'
const myRequest = service()
enum LOG {
  // 登录
  login = '/employee/login'
}
interface LoginParams {
  username: string
  password: string
}

const login = async (params: LoginParams) => {
  console.log(params);
  return await myRequest.post(LOG.login, params)

}

export { login }
