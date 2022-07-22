import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DcListingStoreState = {
  listDocDC: any[]
  loading: boolean
}
const initialState: DcListingStoreState = {
  listDocDC: [],
  loading: false,
}

export const dataDCStoreSlice = createSlice({
  name: 'dataDC',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DcListingStoreState, action: PayloadAction<any>) => {
      state.listDocDC = action.payload
    },

    SET_IS_LOADING: (state: DcListingStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    ADD_DH_DOC: (state: DcListingStoreState, action: PayloadAction<any>) => {
      state.listDocDC.unshift(action.payload)
    },

    DELETE_DH_DOC: (state: DcListingStoreState, action: PayloadAction<any[]>) => {
      const idDoc = action.payload
      idDoc.forEach((item) => {
        const currentDocDC = [...state.listDocDC]
        const index = currentDocDC.findIndex((index) => index.id === item)
        currentDocDC.splice(index, 1)
        state.listDocDC = currentDocDC
      })
    },
  },
})

export const { SET_DATA_DOCUMENT, SET_IS_LOADING, ADD_DH_DOC, DELETE_DH_DOC } = dataDCStoreSlice.actions
export default dataDCStoreSlice.reducer
