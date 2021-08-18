import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks';
import {incremented, decremented, amountAdded} from './features/counter/couter-slice'
import logo from './logo.svg'
import './App.css'

const App = () => {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>


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
        <p>
          Edit <code>App.tsx</code> and save to test the updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
