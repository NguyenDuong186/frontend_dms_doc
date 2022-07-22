import { message } from 'antd'
import docApi from '../../../common/api/docApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'
import { ADD_DE_DOC, SET_DATA_DOCUMENT, DELETE_DE_DOC, SET_IS_LOADING } from './store'

export function UseDEListController() {
  const state = useAppSelector((state: RootState) => state.dataDE)
  const dispatch = useAppDispatch()
  const getAllData = async () => {
    try {
      dispatch(SET_IS_LOADING(true))
      const params = { phan_nhom_van_ban: 'DE' }
      const response = await docApi.getDoc(params)
      dispatch(SET_DATA_DOCUMENT(response.data))
      dispatch(SET_IS_LOADING(false))
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }
  const getDocByFilter = async (data: any) => {
    dispatch(SET_IS_LOADING(true))
    const params = {
      ...data,
      phan_nhom_van_ban: 'DE',
    }
    const response = await docApi.getDocByFilter(params)
    dispatch(SET_DATA_DOCUMENT(response.data))
    dispatch(SET_IS_LOADING(false))
  }

  const addDoc = async (data: any) => {
    try {
      const response = await docApi.creatDoc(data)
      console.log(response)
      if (response.status === 201) {
        dispatch(ADD_DE_DOC(response.data))
        const params = { phan_nhom_van_ban: 'DE' }
        const doc = await docApi.getDoc(params)
        dispatch(SET_DATA_DOCUMENT(doc.data))
        message.success(`Thêm văn bản thành công !`)
      }
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Thêm văn bản thất bại !`)
    }
  }

  const deleteDoc = async (data: any[]) => {
    try {
      const idDoc = data.map((item) => item.id)
      const deleteDoc = {
        docs: idDoc,
      }
      const res = await docApi.deleteDoc(deleteDoc)
      if (res.status === 201) {
        dispatch(DELETE_DE_DOC(idDoc))
        message.success(`Xóa văn bản thành công !`)
      }
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa văn bản thất bại !`)
    }
  }

  return {
    state,
    getDocByFilter,
    getAllData,
    addDoc,
    deleteDoc,
  }
}
