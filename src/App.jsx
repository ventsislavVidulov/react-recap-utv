import { useState } from 'react'
import "./styles/App.css"
import PostItem from './components/PostItem';
import ControledInput from './components/ControledInput';

function App() {

  return (
    <div className='app'>
      <PostItem title="1. Java Script" description="Java Script is a script language, used for web development and others"/>
      <PostItem title="2. C Sharp" description="C Sharp is OOP language createt by Microsoft"/>
    </ div>
  )
}

export default App;
