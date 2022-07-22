import { message } from 'antd'
import { useRouter } from 'next/router'
import departmentApi from '../../../../common/api/departmentApi'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/hooks-redux'
import { RootState } from '../../../../common/hooks/store-redux'
import { SET_DEPARTMENTLIST, SET_IS_LOADING, ADD_DEPARTMENT, EDIT_DEPARTMENT, DELETE_DEPARTMENT } from './store'

export function UseDepartmentController() {
  const state = useAppSelector((state: RootState) => state.department)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const getAllDepartment = async () => {
    try {
      dispatch(SET_IS_LOADING(true))
      const department = await departmentApi.getAll()
      dispatch(SET_DEPARTMENTLIST(department.data))
      if (department.status === 403) await router.push('/error/403')
      dispatch(SET_IS_LOADING(false))
    } catch (error) {
      console.log('ERROR : ', error)
      await router.push('/error/404')
    }
  }
  const addDepartment = async (data: any) => {
    try {
      const department = await departmentApi.create(data)
      dispatch(ADD_DEPARTMENT(department.data))
      message.success(`Thêm phòng ban thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa phòng ban thất bại !`)
    }
  }
  const editDepartment = async (id: any, data: any) => {
    try {
      console.log('data: ', data)
      await departmentApi.update(id, data)
      dispatch(EDIT_DEPARTMENT({ data, id }))
      message.success(`Chỉnh sửa phòng ban thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Chỉnh sửa phòng ban thất bại !`)
    }
  }
  const deleteDepartment = async (id: any) => {
    try {
      await departmentApi.delete(id)
      dispatch(DELETE_DEPARTMENT(id))
      message.success(`Xóa phòng ban thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa phòng ban thất bại !`)
    }
  }
  return {
    state,
    getAllDepartment,
    addDepartment,
    editDepartment,
    deleteDepartment,
  }
}
