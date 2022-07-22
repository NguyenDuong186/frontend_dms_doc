import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoginStoreState = {
  accessToken: string
  currentUser: any
  error: boolean
  isAuthentication: boolean
  loading: boolean
}
const initialState: LoginStoreState = {
  accessToken: null,
  currentUser: null,
  error: false,
  isAuthentication: false,
  loading: false,
}

export const loginStoreSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_IS_AUTHENTICATION: (state: LoginStoreState, action: PayloadAction<boolean>) => {
      state.isAuthentication = action.payload
    },

    SET_IS_LOADING: (state: LoginStoreState) => {
      state.loading = true
    },
    LOGIN_SUCCESS: (state: LoginStoreState, action: PayloadAction<any>) => {
      state.loading = false
      const response = action.payload
      state.accessToken = response.accessToken
      state.currentUser = response.currentUser
      state.error = false
    },
    LOGIN_FAILED: (state: LoginStoreState) => {
      state.loading = false
      state.error = true
    },
    SET_TOKEN: (state: LoginStoreState, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    SET_CURRENT_USER: (state: LoginStoreState, action: PayloadAction<any>) => {
      state.currentUser = action.payload
    },
  },
})

export const { SET_IS_AUTHENTICATION, SET_TOKEN, SET_CURRENT_USER, SET_IS_LOADING, LOGIN_SUCCESS, LOGIN_FAILED } =
  loginStoreSlice.actions
export default loginStoreSlice.reducer
