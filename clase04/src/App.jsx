
import { useState } from 'react';
import './App.css'

function App() {


  //Crear un estado
  // Generar una vista del estado
  // Crear dos botones, uno que aumente y 
  //otro que disminuya en 1 el estado

  const [counter, setCounter] = useState(0)
  
  const click = () => setCounter(counter +1)
  const click2 = () => setCounter(counter -1)
  return (
    <div className='App' >
      <h1>{counter}</h1>
      <button onClick={click}>ponele</button>
      <button onClick={click2}>quitale</button>
      
    </div>
  )
}

export default App
