import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TagStoreState = {
  listTag: any[]
  loading: boolean
}

const initialState: TagStoreState = {
  listTag: [],
  loading: false,
}

export const tagStoreSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    SET_ARGENCYLIST: (state: TagStoreState, action: PayloadAction<any>) => {
      state.listTag = action.payload
    },
    SET_IS_LOADING: (state: TagStoreState, action: PayloadAction<any>) => {
      state.loading = action.payload
    },
    ADD_TAG: (state: TagStoreState, action: PayloadAction<any>) => {
      state.listTag.push(action.payload)
    },
    EDIT_TAG: (state: TagStoreState, action: PayloadAction<any>) => {
      const { data, id } = action.payload
      const currentListTag = [...state.listTag]
      const index = currentListTag.findIndex((item: any) => item.id === id)
      currentListTag.splice(index, 1, data)
      state.listTag = currentListTag
    },
    DELETE_TAG: (state: TagStoreState, action: PayloadAction<any>) => {
      const id = action.payload

      const currentListTag = [...state.listTag]
      const index = currentListTag.findIndex((item: any) => item.id === id)
      currentListTag.splice(index, 1)
      state.listTag = currentListTag
    },
  },
})
export const { SET_ARGENCYLIST, SET_IS_LOADING, ADD_TAG, EDIT_TAG, DELETE_TAG } = tagStoreSlice.actions
export default tagStoreSlice.reducer
