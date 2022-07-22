import axiosClient from './axiosClient'
type TokenApi = {
  access_token: string
  refresh_token: string
  currentUser: any
}
const authApi = {
  login: async (user: any): Promise<any> => {
    const url = '/auth/signin/admin'
    return await axiosClient.post(url, user)
  },
}

export default authApi
