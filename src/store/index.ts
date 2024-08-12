import { configureStore } from '@reduxjs/toolkit'
import robotsReducer from './robots/robotsSlice'

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch