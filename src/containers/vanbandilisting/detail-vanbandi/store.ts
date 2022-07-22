import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DIDetailStoreState = {
  detailDI: any
}
const initialState: DIDetailStoreState = {
  detailDI: null,
}

export const detailDIStoreSlice = createSlice({
  name: 'detailDI',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DIDetailStoreState, action: PayloadAction<any>) => {
      state.detailDI = action.payload
    },
    EDIT_DI_DOC: (state: DIDetailStoreState, action: PayloadAction<any>) => {
      state.detailDI = action.payload
    },
  },
})

export const { SET_DATA_DOCUMENT, EDIT_DI_DOC } = detailDIStoreSlice.actions
export default detailDIStoreSlice.reducer
