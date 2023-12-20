import "./App.css";
import Navbar from "./components/Navbar";
import React, {useState} from 'react';
// import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light'); 

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text to analyze" mode={mode}/>
        {/* <About */}
      </div>
    </>
  );
}

export default App;

// video number 12 was finished so start to watch from 13
