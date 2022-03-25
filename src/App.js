
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
    <>
      <h4>server side rendereing GUIDE </h4>
      <h4>one => yarn build</h4>
      <h4>two => yarn ssr </h4>
      <h4>tree => http://localhost:3000/</h4>
      <h4>four => check view page source</h4>
      <h4>please checke network in inspect (*_*)</h4>
      <h4>disabled javascript from browser settings (*_*)</h4>

      <div className='app-container'>
        <h1>{`count is => ${count}`}</h1>
        <div>
          <button onClick={decrement}>decrement</button>
          <button onClick={increment}>increment</button>
        </div>
      </div>
    </>
  );
}

export default App;
