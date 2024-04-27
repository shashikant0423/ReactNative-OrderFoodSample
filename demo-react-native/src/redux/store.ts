import { configureStore } from '@reduxjs/toolkit'
import  AccountReducer from  './accountSlice'
export const store = configureStore({
  reducer: {
    account: AccountReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
