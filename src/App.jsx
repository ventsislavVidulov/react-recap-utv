import { useState } from 'react'
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  const [inputValue, setInputValue] = useState('Initial value');

  const handleInput = (e) => {
    let timerId;
    const interval = 1 * 1000;

    setInputValue(e.target.value);
    timerId = setTimeout(() => {
      console.log(`Mock request to server with "${e.target.value}" after ${interval / 1000} seconds`);
    }, 1000);
  }

  return (
    <>
      <Counter />
      <ClassCounter />
      <h1>{inputValue}</h1>
      <input type="text" name="" id="" value={inputValue} onChange={e => handleInput(e)} />
    </>
  )
}

export default App;
