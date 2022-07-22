import { message } from 'antd'
import docApi from '../../../common/api/docApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'
import { SET_IS_LOADING, SET_DATA_DOCUMENT, ADD_DI_DOC, DELETE_DI_DOC } from './store'

export function UseDIListController() {
  const state = useAppSelector((state: RootState) => state.dataDI)
  const dispatch = useAppDispatch()
  const getAllData = async () => {
    dispatch(SET_IS_LOADING(true))
    const params = { phan_nhom_van_ban: 'DI' }
    const response = await docApi.getDoc(params)
    dispatch(SET_DATA_DOCUMENT(response.data))
    dispatch(SET_IS_LOADING(false))
  }

  const getDocByFilter = async (data: any) => {
    dispatch(SET_IS_LOADING(true))
    const params = {
      ...data,
      phan_nhom_van_ban: 'DI',
    }
    const response = await docApi.getDocByFilter(params)
    dispatch(SET_DATA_DOCUMENT(response.data))
    dispatch(SET_IS_LOADING(false))
  }

  const addDoc = async (data: any) => {
    try {
      const document = await docApi.creatDoc(data)
      if (document.status === 201) {
        dispatch(ADD_DI_DOC(document.data))
        const params = { phan_nhom_van_ban: 'DI' }
        const response = await docApi.getDoc(params)
        dispatch(SET_DATA_DOCUMENT(response.data))
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
      await docApi.deleteDoc(deleteDoc)
      dispatch(DELETE_DI_DOC(idDoc))
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }
  return {
    state,
    getAllData,
    getDocByFilter,
    addDoc,
    deleteDoc,
  }
}
