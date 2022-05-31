import React, { useState } from 'react'
import IndividualLamp from './components/IndividualLamp'
import './App.css'

function App() {

  const [count, setCount] = useState(0)


  return (
    <div className='App'>
      <IndividualLamp />
    </div>
  )
}

export default App