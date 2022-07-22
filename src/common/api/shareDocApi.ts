import axiosClient from './axiosClient'

const shareDocApi = {
  getlistShare: async (id: any) => {
    const url = `/sharedocuments/shareUsers/${id}`
    return await axiosClient.get(url)
  },

  getUserNotShared: async (id: any) => {
    const url = `/sharedocuments/notshareUsers/${id}`
    return await axiosClient.get(url)
  },

  addUser: async (id: any, data: any) => {
    const url = `/sharedocuments/shareUsers/${id}`
    return await axiosClient.post(url, data)
  },

  deleteUser: async (id: any, data: any) => {
    console.log(data)
    const url = `/sharedocuments/shareUsers/${id}`
    return await axiosClient.patch(url, data)
  },
}

export default shareDocApi
