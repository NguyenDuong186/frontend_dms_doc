import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ExpiredListingStoreState = {
  data: any[]
  loading: boolean
}
const initialState: ExpiredListingStoreState = {
  data: [],
  loading: false,
}

export const dataExpiredStoreSlice = createSlice({
  name: 'dataExpired',
  initialState,
  reducers: {
    SET_DATADOCUMENT: (state: ExpiredListingStoreState, action: PayloadAction<any[]>) => {
      state.data = action.payload
    },

    SET_IS_LOADING: (state: ExpiredListingStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { SET_DATADOCUMENT, SET_IS_LOADING } = dataExpiredStoreSlice.actions
export default dataExpiredStoreSlice.reducer
