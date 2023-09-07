import axios from 'axios'

const BASE_URL = 'http://1.116.150.155:11451/api/'
const TIME_OUT = 100000

const service = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

service.interceptors.request.use()
service.interceptors.response.use()

export default service
