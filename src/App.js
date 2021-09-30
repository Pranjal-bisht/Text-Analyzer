import React, {useState} from 'react'
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

const App = () => {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#09254e';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Text Analyzer" Aboutus="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter text" mode={mode} />
      </div>

    </>
  )
}

export default App;