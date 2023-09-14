import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { handleAuthError, handleGeneralError, handleNetWorkError } from './handleError'

const BASE_URL = 'http://1.116.150.155:11451/api'
const TIME_OUT = 100000

const service=(config?: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
      token: localStorage.getItem('token') || ''
    },
    ...config
  })

  //请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      return config
    },
    function (err: any) {
      return Promise.reject(err)
    }
  )

  //响应拦截器
  instance.interceptors.response.use(
    function (response: any) {
      //处理错误
      handleAuthError(response.data.code)
      handleGeneralError(response.data.errno, response.data.errmsg)
      return response.data
    },
    function (err: any) {
      if (err.response) {
        // 服务器返回错误
        handleNetWorkError(err.response.status)
        return Promise.reject(err.response)
      }
    }
  )
  return instance
}
export default service()

// //请求拦截器
// axios.interceptors.request.use(
//   function (config: any) {
//     return config
//   },
//   function (err: any) {
//     return Promise.reject(err)
//   }
// )

// //响应拦截器
// axios.interceptors.response.use(
//   function (response: any) {
//     if (response.data.code !== 200) {
//       return Promise.reject(response.data.message)
//     }
//     //处理错误
//     handleAuthError(response.data.code)
//     handleGeneralError(response.data.errno, response.data.errmsg)
//     return response.data
//   },
//   function (err: any) {
//     if (err.response) {
//       // 服务器返回错误
//       handleNetWorkError(err.response.status)
//       return Promise.reject(err.response)
//     }
//   }
// )
