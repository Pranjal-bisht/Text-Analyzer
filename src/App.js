import React from 'react'
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

const App = () => {
  return (
    <>
      <Navbar title="Textutils" Aboutus="About" />
      <div className="container my-3">
        <TextForm heading="Enter text" />
      </div>

    </>
  )
}

export default App;