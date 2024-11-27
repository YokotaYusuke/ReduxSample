import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
  count: number
}

const initialState: TimerState = {
  count: 0,
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})

export const { setCount } = timerSlice.actions