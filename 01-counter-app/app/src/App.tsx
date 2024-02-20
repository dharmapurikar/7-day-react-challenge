import { useState } from 'react';
import './App.css'
import Button from './components/Button';

function App() {

  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter(counter + 1);
  }

  const decrementHandler = () => {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-1">{counter}</h1>
          <div>
            <Button label="Increment" onClick={incrementHandler} />
            <Button label="Decrement" onClick={decrementHandler} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
