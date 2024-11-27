import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SpikeState {
  count: number
}

const initialState: SpikeState = {
  count: 0,
}

export const timerSlice = createSlice({
  name: 'spike',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    }
  }
})

export default timerSlice
export const { setCount } = timerSlice.actions