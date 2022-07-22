import axiosClient from './axiosClient'

const departmentApi = {
  getAll: () => {
    const url = '/departments'
    return axiosClient.get(url)
  },
  get: (id: string) => {
    const url = `/departments/${id}`
    return axiosClient.get(url)
  },

  create: (data: any) => {
    const url = '/departments'
    return axiosClient.post(url, data)
  },

  update: (id: number, data: any) => {
    const url = `/departments/${id}`
    return axiosClient.patch(url, data)
  },
  delete: (id: number) => {
    const url = `/departments/${id}`
    return axiosClient.delete(url)
  },
}

export default departmentApi
