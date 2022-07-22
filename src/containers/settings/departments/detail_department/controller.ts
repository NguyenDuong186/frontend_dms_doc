import { message } from 'antd'
import departmentApi from '../../../../common/api/departmentApi'
import userApi from '../../../../common/api/userApi'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/hooks-redux'
import { RootState } from '../../../../common/hooks/store-redux'
import { SET_USER_TO_LIST, START_LOADING, LOAD_ERROR, DELETE_USER_FROM_LIST, ADD_USER_TO_DEPART } from './store'

export function UseDetailDepartmentController() {
  const state = useAppSelector((state: RootState) => state.detailDepartment)
  const dispatch = useAppDispatch()
  const getAllUserFromDepartment = async (id: any) => {
    dispatch(START_LOADING())
    try {
      const userFromDepartment = await departmentApi.get(id)
      dispatch(SET_USER_TO_LIST(userFromDepartment.data))
    } catch (error) {
      dispatch(LOAD_ERROR())
    }
  }
  const addUserToDepartment = async (idDepartment: string, dataOjb: any[]) => {
    try {
      const dataId = dataOjb.map((item) => item.id)
      const dataRedux = dataOjb.map((item) => ({
        id: item.id,
        name: item.name,
        job_title: item.job_title,
      }))
      const dataPost = {
        users: dataId,
      }
      const response = await userApi.addUserToDepartment(idDepartment, dataPost)
      if (response.status === 200) {
        dispatch(ADD_USER_TO_DEPART(dataRedux))
        message.success(`Thêm nhân viên vào phòng ban thành công !`)
      }
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Thêm nhân viên vào phòng ban thất bại !`)
    }
  }

  const removeUser = async (idUser: number) => {
    try {
      await userApi.removeUserFromDepart(idUser)
      dispatch(DELETE_USER_FROM_LIST(idUser))
      message.success(`Xóa nhân viên vào phòng ban thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa nhân viên vào phòng ban thất bại !`)
    }
  }

  return {
    state,
    getAllUserFromDepartment,
    addUserToDepartment,
    removeUser,
  }
}
