import { useState } from 'react'
import "./styles/App.css"
import PostItem from './components/PostItem';
import ControledInput from './components/ControledInput';

function App() {

  return (
    <div className='app'>
      <PostItem />
      <PostItem />
      <ControledInput />
    </ div>
  )
}

export default App;
