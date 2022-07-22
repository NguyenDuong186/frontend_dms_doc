import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DHListingStoreState = {
  listDocDH: any[]
  loading: boolean
}
const initialState: DHListingStoreState = {
  listDocDH: [],
  loading: false,
}

export const dataDhStoreSlice = createSlice({
  name: 'dataDH',
  initialState,
  reducers: {
    SET_DATA_DOCUMENT: (state: DHListingStoreState, action: PayloadAction<any>) => {
      state.listDocDH = action.payload
    },

    SET_IS_LOADING: (state: DHListingStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },

    ADD_DH_DOC: (state: DHListingStoreState, action: PayloadAction<any>) => {
      state.listDocDH.unshift(action.payload)
    },

    DELETE_DH_DOC: (state: DHListingStoreState, action: PayloadAction<any[]>) => {
      const idDoc = action.payload
      idDoc.forEach((item) => {
        const currentDocDH = [...state.listDocDH]
        const index = currentDocDH.findIndex((index) => index.id === item)
        currentDocDH.splice(index, 1)
        state.listDocDH = currentDocDH
      })
    },
  },
})

export const { SET_DATA_DOCUMENT, SET_IS_LOADING, ADD_DH_DOC, DELETE_DH_DOC } = dataDhStoreSlice.actions
export default dataDhStoreSlice.reducer
