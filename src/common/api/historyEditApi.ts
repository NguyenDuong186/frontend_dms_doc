import axiosClient from './axiosClient'

const historyEditApi = {
  getHistoryEditList: async (id: any) => {
    const url = `/historyeditdoc/${id}`
    return await axiosClient.get(url)
  },
}

export default historyEditApi
