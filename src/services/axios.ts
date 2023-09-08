import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { ElMessage } from 'element-plus'

const BASE_URL = 'http://1.116.150.155:11451/api'
const TIME_OUT = 100000

export const service = (config?: AxiosRequestConfig):AxiosInstance  => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    withCredentials: true,
    ...config
  })

  //请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      console.log('config:', config)
      return config
    },
    function (err: any) {
      return Promise.reject(err)
    }
  )

  //响应拦截器
  instance.interceptors.response.use(
    function (response: any) {
      // 对相应的数据做些什么
      console.log('response:', response)
      const { code, data, message } = response.data
      if (code === 200) {
        // 200表示请求正确
        return data
      } else {
        // 出错的请求
        ElMessage.error(message)
        return Promise.reject(message)
      }
    },
    function (err: any) {
      // 对响应错误做些什么
      console.log('err-response', err.response)
      console.log('err-config', err.config)
      console.log('err-request', err.request)
      if (err.response) {
        // 服务器返回错误
        const { message } = err.response.data
        ElMessage.error(message || '服务器错误')
        return Promise.reject(message)
      }
      return Promise.reject(err)
    }
  )
  return instance
}
