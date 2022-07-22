import historyEditApi from '../../common/api/historyEditApi'
import shareDocApi from '../../common/api/shareDocApi'
import { useAppDispatch, useAppSelector } from '../../common/hooks/hooks-redux'
import { RootState } from '../../common/hooks/store-redux'
import { SET_HISTORY_LIST } from './store'

export function UseHistoryEditController() {
  const state = useAppSelector((state: RootState) => state.listEditHistory)
  const dispatch = useAppDispatch()
  const getListHistory = async (id: any) => {
    try {
      const listShare = await historyEditApi.getHistoryEditList(id)
      dispatch(SET_HISTORY_LIST(listShare.data))
    } catch (error) {
      console.log('ERROR : ', error)
    }
  }

  return {
    state,
    getListHistory,
  }
}
