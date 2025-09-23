import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState({ count: 0 });

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

  return (
    <>
      <h1>{likes.count}</h1>
      <button onClick={() => setLikes(handleIncrement(likes))}>Increment</button>
      <button onClick={() => setLikes(handleDecrement(likes))}>Decrement</button>
    </>
  )
}

export default Counter