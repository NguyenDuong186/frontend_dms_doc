import axiosClient from './axiosClient'

const taskDocApi = {
  getTaskDoc: async () => {
    const url = '/taskdocuments'
    return await axiosClient.get(url)
  },
  creatDoc: async (data: any): Promise<any> => {
    const url = '/taskdocuments'
    return await axiosClient.post(url, data)
  },
  getDetail: async (id: any) => {
    const url = `/taskdocuments/${id}`
    return await axiosClient.get(url)
  },
  updateDoc: async (id: any, data: any): Promise<any> => {
    const url = `/taskdocuments/${id}`
    return await axiosClient.patch(url, data)
  },

  // deletedDoc,
}

export default taskDocApi
