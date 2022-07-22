import { message } from 'antd'
import docApi from '../../../common/api/docApi'
import taskDocApi from '../../../common/api/taskDocApi'
import { useAppDispatch, useAppSelector } from '../../../common/hooks/hooks-redux'
import { RootState } from '../../../common/hooks/store-redux'
import { SET_DATA_DOCUMENT } from '../../vanbandenlisting/detail-vanbanden/store'
import { ADD_TASK, SET_DATADOCUMENT, SET_IS_LOADING, EDIT_TASK } from './store'

export function UseTaskListController() {
  const state = useAppSelector((state: RootState) => state.dataTask)
  const dispatch = useAppDispatch()
  const getAllData = async () => {
    dispatch(SET_IS_LOADING(true))
    // fetch Api from Server
    const taskDoc = await taskDocApi.getTaskDoc()
    // lâý dc data thì lư da ta vào store thông qua action
    dispatch(SET_DATADOCUMENT(taskDoc.data))
    ///
    dispatch(SET_IS_LOADING(false))
  }
  const getTaskById = async (id: any) => {
    dispatch(SET_IS_LOADING(true))
    const detailTask = await taskDocApi.getDetail(id)
    dispatch(SET_DATADOCUMENT(detailTask.data))
    dispatch(SET_IS_LOADING(false))
  }
  const addTask = async (data: any, id: any) => {
    try {
      const taskDoc = await taskDocApi.creatDoc(data)
      console.log('taskdoc', taskDoc)
      if (taskDoc.status === 201) {
        dispatch(ADD_TASK(taskDoc.data))
        const response = await docApi.getDetail(id)
        if (response.status === 200) {
          dispatch(SET_DATA_DOCUMENT(response.data))
        }
        message.success(`Chuyển xử lý thành công !`)
      }
    } catch (err) {
      console.log('ERR', err)
      message.error(`Chuyển xử lý thành công !`)
    }
  }

  const updateCompleted = async (id: any, data: any) => {
    try {
      console.log('data: ', data)
      const updateTask = await taskDocApi.updateDoc(id, data)
      console.log('abc: ', updateTask)
      if (updateTask.status === 200) {
        dispatch(EDIT_TASK(updateTask.data))
        const detailTask = await taskDocApi.getDetail(id)
        dispatch(SET_DATADOCUMENT(detailTask.data))
        const response = await docApi.getDetail(id)
        if (response.status === 200) {
          dispatch(SET_DATA_DOCUMENT(response.data))
        }
        message.success(`Hoàn thành xử lý thành công !`)
      }
    } catch (err) {
      console.log('ERR', err)
      message.success(`Hoàn thành xử lý thất bại !`)
    }
  }
  return {
    state,
    getAllData,
    getTaskById,
    addTask,
    updateCompleted,
  }
}
