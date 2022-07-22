import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
// ...reducers
import rootReducer from '../reducers'

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
