import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ArgencyStoreState = {
  listArgency: any[]
  loading: boolean
}

const initialState: ArgencyStoreState = {
  listArgency: [],
  loading: false,
}

export const argencyStoreSlice = createSlice({
  name: 'argency',
  initialState,
  reducers: {
    SET_ARGENCYLIST: (state: ArgencyStoreState, action: PayloadAction<any>) => {
      state.listArgency = action.payload
    },
    SET_IS_LOADING: (state: ArgencyStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    ADD_ARGENCY: (state: ArgencyStoreState, action: PayloadAction<any>) => {
      state.listArgency.push(action.payload)
    },
    EDIT_ARGENCY: (state: ArgencyStoreState, action: PayloadAction<any>) => {
      const { data, id } = action.payload
      const currentListArgency = [...state.listArgency]
      const index = currentListArgency.findIndex((item) => item.id === id)
      currentListArgency.splice(index, 1, data)
      state.listArgency = currentListArgency
    },

    DELETE_ARGENCY: (state: ArgencyStoreState, action: PayloadAction<any>) => {
      const id = action.payload
      const currentListArgency = [...state.listArgency]
      const index = currentListArgency.findIndex((item: any) => item.id === id)
      currentListArgency.splice(index, 1)
      state.listArgency = currentListArgency
    },
  },
})
export const { SET_ARGENCYLIST, SET_IS_LOADING, DELETE_ARGENCY, EDIT_ARGENCY, ADD_ARGENCY } = argencyStoreSlice.actions
export default argencyStoreSlice.reducer
