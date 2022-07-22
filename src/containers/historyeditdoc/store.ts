import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type EditHistoryStoreState = {
  listEditHistory: any[]
  loading: boolean
}

const initialState: EditHistoryStoreState = {
  listEditHistory: [],
  loading: false,
}

export const listEditHistoryStoreSlice = createSlice({
  name: 'listEditHistory',
  initialState,
  reducers: {
    SET_HISTORY_LIST: (state: EditHistoryStoreState, action: PayloadAction<any>) => {
      state.listEditHistory = action.payload
    },
  },
})
export const { SET_HISTORY_LIST } = listEditHistoryStoreSlice.actions
export default listEditHistoryStoreSlice.reducer
