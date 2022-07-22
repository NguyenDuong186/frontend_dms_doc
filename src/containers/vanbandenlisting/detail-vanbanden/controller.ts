import { message } from 'antd'
import docApi from '../../../common/api/docApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'
import { useRouter } from 'next/router'
import { SET_DATA_DOCUMENT, EDIT_DE_DOC } from './store'

export function UseDEDetailController() {
  const state = useAppSelector((state: RootState) => state.detailDE)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const getDetail = async (id: any) => {
    try {
      const response = await docApi.getDetail(id)
      if (response.status === 200) {
        dispatch(SET_DATA_DOCUMENT(response.data))
      }
      if (response.status === 403) await router.push('/error/403')
    } catch (err) {
      console.log('ERR', err)
      await router.push('/error/404')
    }

    ///
  }
  const editData = async (idDoc: any, data: any) => {
    try {
      const response = await docApi.updateDoc(idDoc, data)
      console.log(response)
      if (response.status === 200) {
        dispatch(EDIT_DE_DOC(data))
        const detailDE = await docApi.getDetail(idDoc)
        dispatch(SET_DATA_DOCUMENT(detailDE.data))
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
    editData,
  }
}
