import axiosClient from './axiosClient'

const argencyApi = {
  getAll: () => {
    const url = '/argencys'
    return axiosClient.get(url)
  },

  create: (data: any) => {
    const url = '/argencys'
    return axiosClient.post(url, data)
  },

  update: (id: number, data: any) => {
    const url = `/argencys/${id}`
    return axiosClient.patch(url, data)
  },
  delete: (id: number) => {
    const url = `/argencys/${id}`
    return axiosClient.delete(url)
  },
}

export default argencyApi
