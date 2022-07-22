import { message } from 'antd'
import docApi from '../../../common/api/docApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'

import { SET_DATA_DOCUMENT, EDIT_DI_DOC } from './store'

export function UseDIDetailController() {
  const state = useAppSelector((state: RootState) => state.detailDI)
  const dispatch = useAppDispatch()
  const getDetail = async (id: any) => {
    const detailDI = await docApi.getDetail(id)
    dispatch(SET_DATA_DOCUMENT(detailDI.data))
  }
  const editDoc = async (idDoc: any, data: any) => {
    try {
      const response = await docApi.updateDoc(idDoc, data)
      if (response.status === 200) {
        dispatch(EDIT_DI_DOC(data))
        const detailDI = await docApi.getDetail(idDoc)
        dispatch(SET_DATA_DOCUMENT(detailDI.data))
        message.success(`Cập nhật văn bản thành công !`)
      }
    } catch (err) {
      console.log('ERR', err)
      message.error(`Cập nhật văn bản thất bại !`)
    }
  }

  return {
    state,
    getDetail,
    editDoc,
  }
}
