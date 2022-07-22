import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DCDetailStoreState = {
  detailDC: any
}
const initialState: DCDetailStoreState = {
  detailDC: null,
}

export const detailDCStoreSlice = createSlice({
  name: 'detailDC',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DCDetailStoreState, action: PayloadAction<any>) => {
      state.detailDC = action.payload
    },
    EDIT_DC_DOC: (state: DCDetailStoreState, action: PayloadAction<any>) => {
      state.detailDC = action.payload
    },
  },
})

export const { SET_DATA_DOCUMENT, EDIT_DC_DOC } = detailDCStoreSlice.actions
export default detailDCStoreSlice.reducer
