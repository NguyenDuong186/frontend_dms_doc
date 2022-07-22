import { message } from 'antd'
import { useRouter } from 'next/router'
import tagApi from '../../../../common/api/tagApi'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/hooks-redux'
import { RootState } from '../../../../common/hooks/store-redux'
import { SET_ARGENCYLIST, SET_IS_LOADING, ADD_TAG, EDIT_TAG, DELETE_TAG } from './store'

export function UseTagController() {
  const state = useAppSelector((state: RootState) => state.tag)

  const dispatch = useAppDispatch()
  const router = useRouter()

  const getAllTag = async () => {
    try {
      const tag = await tagApi.getAll()
      dispatch(SET_IS_LOADING(true))
      dispatch(SET_ARGENCYLIST(tag.data))
      if (tag.status === 403) await router.push('/error/403')
      dispatch(SET_IS_LOADING(false))
    } catch (error) {
      console.log('ERROR : ', error)
      await router.push('/error/404')
    }
  }

  const addTags = async (data: any) => {
    try {
      const tag = await tagApi.create(data)
      dispatch(ADD_TAG(tag.data))
      message.success(`Thêm loại văn bản thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Thêm loại văn bản thất bại !`)
    }
  }
  const editTag = async (id: any, data: any) => {
    try {
      await tagApi.update(data.id, data)
      dispatch(EDIT_TAG({ data, id }))
      message.success(`Chỉnh sửa loại văn bản thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Chỉnh sửa loại văn bản thất bại !`)
    }
  }

  const deleteTag = async (id: any) => {
    try {
      await tagApi.delete(id)
      dispatch(DELETE_TAG(id))
      message.success(`Xóa loại văn bản thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa loại văn bản thất bại !`)
    }
  }

  return {
    state,
    getAllTag,
    addTags,
    deleteTag,
    editTag,
  }
}
