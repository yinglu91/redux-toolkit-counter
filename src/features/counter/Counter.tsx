import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incremented, decremented, amountAdded } from './couter-slice'

const Counter = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const incrementedHandler = () => {
    dispatch(incremented())
  }

  const decrementedHandler = () => {
    dispatch(decremented())
  }

  const amountAddedHandler = () => {
    dispatch(amountAdded(10))
  }

  return (
    <p>
      count is: {count} <br /><br />
      
      <button type="button" onClick={incrementedHandler}>
        Increment
      </button>

      <button type="button" onClick={decrementedHandler}>
        Decrement
      </button>

      <button type="button" onClick={amountAddedHandler}>
        Increment by 10
      </button>
    </p>
  )
}

export default Counter
