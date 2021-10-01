import React, {useState} from 'react'
import { Alert } from './components/Alert';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';

const App = () => {
  const [mode, setMode] = useState('light');


  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=> {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#09254e';
      showAlert("Dark Mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Text Analyzer" Aboutus="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text" mode={mode} />
      </div>

    </>
  )
}

export default App;