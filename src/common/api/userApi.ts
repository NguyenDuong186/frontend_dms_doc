import axiosClient from './axiosClient'

const userApi = {
  getAll: () => {
    const url = '/users'
    return axiosClient.get(url)
  },

  getUser: () => {
    const url = '/users/notdepartmentid'
    return axiosClient.get(url)
  },

  addUserToDepartment: (id: any, data: any) => {
    const url = `/departments/${id}/add-employee`
    return axiosClient.patch(url, data)
  },

  removeUserFromDepart: (id: any) => {
    const url = `/departments/delete-employee/${id}`
    return axiosClient.delete(url)
  },
  create: (data: any) => {
    const url = '/users'
    return axiosClient.post(url, data)
  },

  update: (id: number, data: any) => {
    const url = `/users/${id}`
    return axiosClient.patch(url, data)
  },
  delete: (id: number) => {
    const url = `/users/${id}`
    return axiosClient.delete(url)
  },
}

export default userApi
