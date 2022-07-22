import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DepartmentStoreState = {
  listDepartment: any[]
  loading: boolean
}

const initialState: DepartmentStoreState = {
  listDepartment: [],
  loading: false,
}

export const departmentStoreSlice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    SET_DEPARTMENTLIST: (state: DepartmentStoreState, action: PayloadAction<any>) => {
      state.listDepartment = action.payload
    },
    SET_IS_LOADING: (state: DepartmentStoreState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    ADD_DEPARTMENT: (state: DepartmentStoreState, action: PayloadAction<any>) => {
      state.listDepartment.push(action.payload)
    },
    EDIT_DEPARTMENT: (state: DepartmentStoreState, action: PayloadAction<any>) => {
      const { data, id } = action.payload
      const currentListDepartment = [...state.listDepartment]
      const index = currentListDepartment.findIndex((item) => item.id === id)
      currentListDepartment.splice(index, 1, data)
      state.listDepartment = currentListDepartment
    },
    DELETE_DEPARTMENT: (state: DepartmentStoreState, action: PayloadAction<any>) => {
      const id = action.payload
      const currentListDepartment = [...state.listDepartment]
      const index = currentListDepartment.findIndex((item) => item.id === id)
      currentListDepartment.splice(index, 1)
      state.listDepartment = currentListDepartment
    },
  },
})
export const { SET_DEPARTMENTLIST, SET_IS_LOADING, ADD_DEPARTMENT, DELETE_DEPARTMENT, EDIT_DEPARTMENT } =
  departmentStoreSlice.actions
export default departmentStoreSlice.reducer
