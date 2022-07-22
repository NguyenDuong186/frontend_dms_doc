import axiosClient from './axiosClient'

const docApi = {
  getDoc: async (params: any) => {
    const url = '/documents'
    return await axiosClient.get(url, { params })
  },

  getDocByFilter: async (data: any) => {
    const url = '/documents/filterdoc'
    return await axiosClient.post(url, data)
  },

  creatDoc: async (data: any): Promise<any> => {
    const url = '/documents'
    return await axiosClient.post(url, data)
  },

  getDetail: async (id: any) => {
    const url = `/documents/${id}`
    return await axiosClient.get(url)
  },
  upLoadFile: async (id: any, data: any) => {
    const url = `/documents/upload/${id}`
    return await axiosClient.post(url, data)
  },
  updateDoc: async (id: any, data: any) => {
    const url = `/documents/${id}`
    return await axiosClient.patch(url, data)
  },

  deleteDoc: async (data: any) => {
    const url = '/documents/deletedoc'
    return await axiosClient.post(url, data)
  },
  showFile: async () => {
    return axiosClient.get('/documents/download/file/44eeaf1c-c771-48da-9ca7-5e8215746aa2.pdf')
  },
}

export default docApi
