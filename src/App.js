
import { useState } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(Math.max(0, count - 1))
  }
  return (

    <div className='app-container'>
      <h1>{`count is => ${count}`}</h1>
      <div>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
}

export default App;
