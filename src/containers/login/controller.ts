import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks-redux'
import {
  SET_IS_AUTHENTICATION,
  SET_TOKEN,
  SET_CURRENT_USER,
  SET_IS_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './store'
import { useRouter } from 'next/router'
import type { RootState } from '../../common/hooks/store-redux'
import authApi from '../../common/api/authApi'
import { message } from 'antd'

type TokenApi = {
  access_token: string
  refresh_token: string
  currentUser: any
}
export function UseLoginController() {
  const state = useAppSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()
  const router = useRouter()

  async function getIsAuth() {
    const accessToken = localStorage.getItem('accessToken')
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if (!accessToken) return await router.replace('/login')
    dispatch(SET_IS_AUTHENTICATION(true))
    dispatch(SET_TOKEN(accessToken))
    dispatch(SET_CURRENT_USER(currentUser))
  }
  const setLocalStore = (data: TokenApi) => {
    localStorage.setItem('accessToken', data.access_token)
    localStorage.setItem('refreshToken', data.refresh_token)
    localStorage.setItem('currentUser', JSON.stringify(data.currentUser))
  }
  const login = async (user: any) => {
    dispatch(SET_IS_LOADING())
    try {
      const response = await authApi.login(user)
      if (response.status === 200) {
        setLocalStore(response.data)
        dispatch(SET_IS_AUTHENTICATION(true))
        dispatch(LOGIN_SUCCESS(response.data))
        message.success(`Đăng nhập thành công !`)
        await router.replace('/')
      }
    } catch (error) {
      dispatch(LOGIN_FAILED())
      message.error(`Đăng nhập thất bại !`)
    }
  }

  return {
    state: state,
    getIsAuth,
    login,
  }
}
