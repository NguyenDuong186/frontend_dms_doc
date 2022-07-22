import axiosClient from './axiosClient'

const tagApi = {
  getAll: () => {
    const url = '/tags'
    return axiosClient.get(url)
  },

  create: (data: any) => {
    const url = '/tags'
    return axiosClient.post(url, data)
  },

  update: (id: number, data: any) => {
    const url = `/tags/${id}`
    return axiosClient.patch(url, data)
  },
  delete: (id: number) => {
    const url = `/tags/${id}`
    return axiosClient.delete(url)
  },
}

export default tagApi
