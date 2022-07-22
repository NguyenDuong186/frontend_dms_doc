import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DetailDepartmentStoreState = {
  detail: {
    id: any
    employee: any
    title: string
    van_thu_id: any
  }
  loading: boolean
  error: boolean
}

const initialState: DetailDepartmentStoreState = {
  detail: {
    employee: [],
    id: null,
    title: 'string',
    van_thu_id: null,
  },
  loading: false,
  error: false,
}

export const detailDepartmentStoreSlice = createSlice({
  name: 'detailDepartment',
  initialState,
  reducers: {
    SET_USER_TO_LIST: (state: DetailDepartmentStoreState, action: PayloadAction<any>) => {
      state.loading = false
      state.detail = action.payload
    },
    START_LOADING: (state: DetailDepartmentStoreState) => {
      state.loading = true
    },
    LOAD_ERROR: (state: DetailDepartmentStoreState) => {
      state.loading = false
      state.error = true
    },
    ADD_USER_TO_DEPART: (state: DetailDepartmentStoreState, action: PayloadAction<any>) => {
      const currentListEmployees = [...state.detail.employee].concat(action.payload)
      state.detail.employee = [...currentListEmployees]
    },
    DELETE_USER_FROM_LIST: (state: DetailDepartmentStoreState, action: PayloadAction<any>) => {
      const idUser = action.payload
      const currentListEmployee = [...state.detail.employee]
      const index = currentListEmployee.findIndex((item) => item.id === idUser)
      currentListEmployee.splice(index, 1)
      state.detail.employee = currentListEmployee
    },
  },
})
export const { SET_USER_TO_LIST, START_LOADING, LOAD_ERROR, ADD_USER_TO_DEPART, DELETE_USER_FROM_LIST } =
  detailDepartmentStoreSlice.actions
export default detailDepartmentStoreSlice.reducer
