import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TaskListingStoreState = {
  data: any[]
  loading: boolean
}
const initialState: TaskListingStoreState = {
  data: [],
  loading: false,
}

export const dataTaskStoreSlice = createSlice({
  name: 'dataTask',
  initialState,
  reducers: {
    SET_DATADOCUMENT: (state: TaskListingStoreState, action: PayloadAction<any>) => {
      state.data = action.payload
    },

    SET_IS_LOADING: (state: TaskListingStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    ADD_TASK: (state: TaskListingStoreState, action: PayloadAction<any>) => {
      state.data.push(action.payload)
    },
    EDIT_TASK: (state: TaskListingStoreState, action: PayloadAction<any>) => {
      const updateCompleted = action.payload
      console.log(updateCompleted)
      const currrentTask = [...state.data]
      const index = currrentTask.findIndex((item) => item.id === updateCompleted.id)
      currrentTask.splice(index, 1, updateCompleted)
      state.data = currrentTask
    },
  },
})

export const { SET_DATADOCUMENT, SET_IS_LOADING, ADD_TASK, EDIT_TASK } = dataTaskStoreSlice.actions
export default dataTaskStoreSlice.reducer
