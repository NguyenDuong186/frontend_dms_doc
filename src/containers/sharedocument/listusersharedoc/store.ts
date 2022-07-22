import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserStoreState = {
  listUserShareDoc: any[]
  loading: boolean
}

const initialState: UserStoreState = {
  listUserShareDoc: [],
  loading: false,
}

export const userShareDocStoreSlice = createSlice({
  name: 'userShareDoc',
  initialState,
  reducers: {
    SET_USER_LIST: (state: UserStoreState, action: PayloadAction<any>) => {
      state.listUserShareDoc = action.payload
    },
  },
})
export const { SET_USER_LIST } = userShareDocStoreSlice.actions
export default userShareDocStoreSlice.reducer
