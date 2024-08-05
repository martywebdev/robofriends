import { configureStore } from '@reduxjs/toolkit'
import robotsReducer from './robots/robotsSlice'

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
})