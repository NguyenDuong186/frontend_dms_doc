import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DEDetailStoreState = {
  detailDE: any
}
const initialState: DEDetailStoreState = {
  detailDE: null,
}

export const detailDEStoreSlice = createSlice({
  name: 'detailDE',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DEDetailStoreState, action: PayloadAction<any>) => {
      state.detailDE = action.payload
    },
    EDIT_DE_DOC: (state: DEDetailStoreState, action: PayloadAction<any>) => {
      state.detailDE = action.payload
    },
  },
})

export const { SET_DATA_DOCUMENT, EDIT_DE_DOC } = detailDEStoreSlice.actions
export default detailDEStoreSlice.reducer
