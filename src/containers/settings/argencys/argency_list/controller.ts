import { useAppDispatch, useAppSelector } from '../../../../common/hooks/hooks-redux'
import { RootState } from '../../../../common/hooks/store-redux'
import { SET_ARGENCYLIST, SET_IS_LOADING, DELETE_ARGENCY, ADD_ARGENCY, EDIT_ARGENCY } from './store'
import argencyApi from '../../../../common/api/argencyApi'
import { message } from 'antd'
import { useRouter } from 'next/router'

export function UseArgencyController() {
  const state = useAppSelector((state: RootState) => state.argency)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const getAllArgency = async () => {
    try {
      dispatch(SET_IS_LOADING(true))
      const response = await argencyApi.getAll()
      dispatch(SET_ARGENCYLIST(response.data))
      if (response.status === 403) await router.push('/error/403')
      dispatch(SET_IS_LOADING(false))
    } catch (error) {
      console.log('ERROR : ', error)
      await router.push('/error/404')
    }
  }
  const addArgency = async (data: any) => {
    try {
      const response = await argencyApi.create(data)
      dispatch(ADD_ARGENCY(response.data))
      message.success(`Thêm cơ quan thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Thêm cơ quan thất bại !`)
    }
  }
  const editArgency = async (id: any, data: any) => {
    try {
      await argencyApi.update(id, data)
      dispatch(EDIT_ARGENCY({ id, data }))
      message.success(`Chỉnh sửa cơ quan thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Chỉnh sửa cơ quan thành công !`)
    }
  }
  const deleteArgency = async (id: any) => {
    try {
      await argencyApi.delete(id)
      dispatch(DELETE_ARGENCY(id))
      message.success(`Xóa cơ quan thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa cơ quan thành công !`)
    }
  }
  return {
    state,
    getAllArgency,
    addArgency,
    deleteArgency,
    editArgency,
  }
}
