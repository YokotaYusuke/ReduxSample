import { configureStore } from '@reduxjs/toolkit'
import { timerSlice } from './TimerSlice.ts'

export const store = configureStore({
  reducer: {
    spike: timerSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch