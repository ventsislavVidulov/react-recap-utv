import { useState } from 'react'

function App() {

  const [likes, setLikes] = useState({ count: 0 });
  const [inputValue, setInputValue] = useState('Initial value');

  const handleIncrement = (likes) => {
    return {
      count: likes.count + 1
    }
  };

  const handleDecrement = (likes) => {
    return {
      count: likes.count - 1
    }
  };

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
      <h1>{likes.count}</h1>
      <h1>{inputValue}</h1>
      <input type="text" name="" id="" value={inputValue} onChange={e => handleInput(e)} />
      <button onClick={() => setLikes(handleIncrement(likes))}>Increment</button>
      <button onClick={() => setLikes(handleDecrement(likes))}>Decrement</button>
    </>
  )
}

export default App;
