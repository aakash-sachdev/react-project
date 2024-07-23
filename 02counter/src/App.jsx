import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
 

  const addValue = () => {
    if (counter > 19){
      counter = 19;
    }
    setCounter(counter + 1);
  }
  
  const subValue = () => {
    if (counter < 1){
      counter = 1;
    }
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>2nd Project - Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}> Increase value </button>
      <br/>
      <button onClick={subValue}> Decrease value </button>
      <br/>
    </>
  )
}

export default App
