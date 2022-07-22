import { message } from 'antd'
import shareDocApi from '../../../common/api/shareDocApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'
import { SET_USER_LIST } from './store'

export function UseShareDocController() {
  const state = useAppSelector((state: RootState) => state.userShareDoc)
  const dispatch = useAppDispatch()
  const getListShare = async (id: any) => {
    try {
      const listShare = await shareDocApi.getlistShare(id)
      dispatch(SET_USER_LIST(listShare.data))
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }

  const recalUserFromList = async (idDoc: any, dataUser: any[]) => {
    try {
      const dataIdUser = dataUser.map((item) => item.id)
      const dataPost = {
        users: dataIdUser,
      }
      await shareDocApi.deleteUser(idDoc, dataPost)
      message.success(`Thu hồi quyền xem thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Thu hồi quyền xem thất bại !`)
    }
  }

  return {
    state,
    getListShare,
    recalUserFromList,
  }
}
