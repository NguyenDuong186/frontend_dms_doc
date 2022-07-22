import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DEListingStoreState = {
  listDocDE: any[]
  loading: boolean
}
const initialState: DEListingStoreState = {
  listDocDE: [],
  loading: false,
}

export const dataDEStoreSlice = createSlice({
  name: 'dataDE',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DEListingStoreState, action: PayloadAction<any>) => {
      state.listDocDE = action.payload
    },

    SET_IS_LOADING: (state: DEListingStoreState, action: PayloadAction<any>) => {
      state.loading = action.payload
    },
    ADD_DE_DOC: (state: DEListingStoreState, action: PayloadAction<any>) => {
      state.listDocDE.unshift(action.payload)
    },

    DELETE_DE_DOC: (state: DEListingStoreState, action: PayloadAction<any[]>) => {
      const idDoc = action.payload
      idDoc.forEach((item) => {
        const currentDocDe = [...state.listDocDE]
        const index = currentDocDe.findIndex((index) => index.id === item)
        currentDocDe.splice(index, 1)
        state.listDocDE = currentDocDe
      })
    },
  },
})

export const { SET_DATA_DOCUMENT, SET_IS_LOADING, ADD_DE_DOC, DELETE_DE_DOC } = dataDEStoreSlice.actions
export default dataDEStoreSlice.reducer
