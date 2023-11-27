import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { HashRouter, Routes, Route
} from "react-router-dom";




function App () {
  const [mode, setMode] = useState('light');    // Whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type) =>
  {
    setAlert({msg: message,
      type:type
    })
  }
  setTimeout (() =>{
    setAlert (null);
  },3000);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.title = 'TextUtils - Dark Mode';
      showAlert("dark mode has been enbled","success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode';
      showAlert("light mode has been enabled","success");
    }
    
  }

  return(
   <>
   <HashRouter>
   <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} />

   <Alert alert= {alert}/>
    <div className="container my-3">

    <Routes>
      <Route exact path='/' element={< TextForm showAlert= {showAlert} heading = "Enter the text to analyze below" mode={mode}/>} />
      <Route exact path='/about' element={< About/>} />
    </Routes> 
      </div>
   </HashRouter>

       
   </>

  );
}

export default App;
