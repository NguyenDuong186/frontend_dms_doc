import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DHDetailStoreState = {
  detailDH: any
}
const initialState: DHDetailStoreState = {
  detailDH: null,
}

export const detailDHStoreSlice = createSlice({
  name: 'detailDH',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DHDetailStoreState, action: PayloadAction<any>) => {
      state.detailDH = action.payload
    },
    EDIT_DH_DOC: (state: DHDetailStoreState, action: PayloadAction<any>) => {
      state.detailDH = action.payload
    },
  },
})

export const { SET_DATA_DOCUMENT, EDIT_DH_DOC } = detailDHStoreSlice.actions
export default detailDHStoreSlice.reducer
