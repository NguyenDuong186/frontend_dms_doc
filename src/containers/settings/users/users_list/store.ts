import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserStoreState = {
  listUser: any[]
  loading: boolean
}

const initialState: UserStoreState = {
  listUser: [],
  loading: false,
}

export const userStoreSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER_LIST: (state: UserStoreState, action: PayloadAction<any>) => {
      state.listUser = action.payload
    },
    SET_IS_LOADING: (state: UserStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    ADD_USER: (state: UserStoreState, action: PayloadAction<any>) => {
      state.listUser.push(action.payload)
    },
    DELETE_USER: (state: UserStoreState, action: PayloadAction<any>) => {
      const id = action.payload
      const currentListUser = [...state.listUser]
      const index = currentListUser.findIndex((item) => item.id === id)
      currentListUser.splice(index, 1)
      state.listUser = currentListUser
    },
    EDIT_USER: (state: UserStoreState, action: PayloadAction<any>) => {
      const { data, id } = action.payload
      console.log('data:', data)
      const currentListUser = [...state.listUser]
      const index = currentListUser.findIndex((item) => item.id === id)
      currentListUser.splice(index, 1, data)
      state.listUser = currentListUser
    },
  },
})
export const { SET_USER_LIST, SET_IS_LOADING, ADD_USER, DELETE_USER, EDIT_USER } = userStoreSlice.actions
export default userStoreSlice.reducer
