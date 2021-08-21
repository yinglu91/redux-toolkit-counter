import React from "react"
import Counter from "./features/counter/Counter"
import Dogs from "./features/dogs/Dogs"
import logo from "./logo.svg"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        <Dogs />
      </header>
    </div>
  )
}

export default App
