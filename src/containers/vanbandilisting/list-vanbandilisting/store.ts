import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DIListingStoreState = {
  listDocDI: any[]
  loading: boolean
}
const initialState: DIListingStoreState = {
  listDocDI: [],
  loading: false,
}

export const dataDIStoreSlice = createSlice({
  name: 'dataDI',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DIListingStoreState, action: PayloadAction<any>) => {
      state.listDocDI = action.payload
    },

    SET_IS_LOADING: (state: DIListingStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    ADD_DI_DOC: (state: DIListingStoreState, action: PayloadAction<boolean>) => {
      state.listDocDI.unshift(action.payload)
    },
    DELETE_DI_DOC: (state: DIListingStoreState, action: PayloadAction<any[]>) => {
      const idDoc = action.payload
      idDoc.forEach((item) => {
        const currentDocDI = [...state.listDocDI]
        const index = currentDocDI.findIndex((index) => index.id === item)
        currentDocDI.splice(index, 1)
        state.listDocDI = currentDocDI
      })
    },
  },
})

export const { SET_DATA_DOCUMENT, SET_IS_LOADING, ADD_DI_DOC, DELETE_DI_DOC } = dataDIStoreSlice.actions
export default dataDIStoreSlice.reducer
