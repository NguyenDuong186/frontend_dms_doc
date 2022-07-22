import { message } from 'antd'
import docApi from '../../../common/api/docApi'
import shareDocApi from '../../../common/api/shareDocApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'

import { SET_DATA_DOCUMENT, SET_IS_LOADING, ADD_DH_DOC, DELETE_DH_DOC } from './store'

export function UseDCListController() {
  const state = useAppSelector((state: RootState) => state.dataDC)
  const dispatch = useAppDispatch()

  const getAllData = async () => {
    dispatch(SET_IS_LOADING(true))
    // fetch Api from Server
    // lâý dc data thì lư da ta vào store thông qua action
    const params = { phan_nhom_van_ban: 'DC' }
    const response = await docApi.getDoc(params)
    dispatch(SET_DATA_DOCUMENT(response.data))
    dispatch(SET_IS_LOADING(false))
  }

  const getDocByFilter = async (data: any) => {
    dispatch(SET_IS_LOADING(true))
    const params = {
      ...data,
      phan_nhom_van_ban: 'DC',
    }
    const response = await docApi.getDocByFilter(params)
    dispatch(SET_DATA_DOCUMENT(response.data))
    dispatch(SET_IS_LOADING(false))
  }

  const addData = async (data: any) => {
    try {
      const document = await docApi.creatDoc(data)

      if (document.status === 201) {
        dispatch(ADD_DH_DOC(document.data))
        const params = { phan_nhom_van_ban: 'DC' }
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
      dispatch(DELETE_DH_DOC(idDoc))
      message.success(`Xóa văn bản thành công !`)
    } catch (error) {
      console.log('ERROR : ', error)
      message.error(`Xóa văn bản thất bại !`)
    }
  }

  return {
    state,
    getDocByFilter,
    getAllData,
    addData,
    deleteDoc,
  }
}
