import React, { useState } from 'react'
import { About } from './components/About';
import { Alert } from './components/Alert';
import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = () => {
  const [mode, setMode] = useState('light');


  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#09254e';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Analyzer" Aboutus="About" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />
        {/* <About mode={mode}/> */}
        <div className="container my-5">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter text" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;