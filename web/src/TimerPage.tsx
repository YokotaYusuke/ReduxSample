import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { AppDispatch, RootState } from './store.ts'
import { setCount } from './TimerSlice.ts'

const startCountUp = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const timer = setInterval(() => {
      const { count } = getState().timer
      if (count < 10) {
        dispatch(setCount(count + 1))
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
}

export default function TimerPage() {
  const {count} = useSelector((state: RootState) => state.timer)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(startCountUp())
  }, [])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(setCount(count + 1))}>increment</button>
    </>
  )
}