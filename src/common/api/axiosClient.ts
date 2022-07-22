import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import queryString from 'query-string'

const defaultConfig = {
  baseURL: 'http://localhost:5001/api/v1',
  headers: {
    'content-type': 'application/json',
  },
}

const axiosClient = axios.create({
  baseURL: 'http://localhost:5001/api/v1',
  headers: {
    'content-type': 'application/json',
  },
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  const tokenType = 'Bearer'
  const accessToken = localStorage.getItem('accessToken')
  config.headers['Authorization'] = `${tokenType} ${accessToken}`
  config.paramsSerializer = (params: any) => queryString.stringify(params)
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response
    }
    return response
  },
  (error) => {
    // Handle errors
    throw error
  }
)

export default axiosClient
