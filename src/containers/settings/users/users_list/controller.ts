import { message } from 'antd'
import { useRouter } from 'next/router'
import shareDocApi from '../../../../common/api/shareDocApi'
import userApi from '../../../../common/api/userApi'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/hooks-redux'
import { RootState } from '../../../../common/hooks/store-redux'
import { SET_USER_LIST, SET_IS_LOADING, ADD_USER, DELETE_USER, EDIT_USER } from './store'

export function UseUserController() {
  const state = useAppSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const getAllUser = async () => {
    try {
      dispatch(SET_IS_LOADING(true))
      const userList = await userApi.getAll()
      dispatch(SET_USER_LIST(userList.data))
      if (userList.status === 403) await router.push('/error/403')
      dispatch(SET_IS_LOADING(false))
    } catch (error) {
      console.log('ERROR : ', error)
      await router.push('/error/404')
    }
  }

  const getUserNotShared = async (id: any) => {
    try {
      const listNotShare = await shareDocApi.getUserNotShared(id)
      dispatch(SET_USER_LIST(listNotShare.data))
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }

  const shareDocUser = async (idDoc: any, dataUser: any[]) => {
    try {
      const dataIdUser = dataUser.map((item) => item.id)
      const dataPost = {
        users: dataIdUser,
      }
      await shareDocApi.addUser(idDoc, dataPost)
      message.success(`Chia sẻ văn bản thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Chia sẻ văn bản thất bại !`)
    }
  }

  const getUserNotDepartId = async () => {
    try {
      dispatch(SET_IS_LOADING(true))
      const userListNotDepartId = await userApi.getUser()
      dispatch(SET_USER_LIST(userListNotDepartId.data))
      dispatch(SET_IS_LOADING(false))
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }

  const addUser = async (data: any) => {
    try {
      const user = await userApi.create(data)
      dispatch(ADD_USER(user.data))
      message.success(`Thêm người dùng thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Thêm người dùng thất bại !`)
    }
  }
  const editUser = async (data: any, id: any) => {
    try {
      const response = await userApi.update(id, data)
      console.log('res: ', response)
      if (response.status === 200) dispatch(EDIT_USER({ data, id }))
      message.success(`Cập nhật người dùng thành công !`)
    } catch (error) {
      console.log('ERROR : ', error.message)
      message.error(`Cập nhật người dùng thất bại !`)
    }
  }
  const deleteUser = async (id: any) => {
    try {
      await userApi.delete(id)
      dispatch(DELETE_USER(id))
      message.success(`Xóa người dùng thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa người dùng thất bại !`)
    }
  }
  return {
    state,
    getAllUser,
    getUserNotDepartId,
    getUserNotShared,
    addUser,
    deleteUser,
    editUser,
    shareDocUser,
  }
}
