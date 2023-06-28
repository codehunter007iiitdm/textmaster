import Navbar from './components/Navbar' 
import Form from './components/Form'
import About from './components/About'
import Alert from './components/Alert'
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("light")
  const[alert,setAlert]= useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("The dark mode has been turned on","Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("The light mode has been turned on","Success")
    }
  }


  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Form title="Enter the text to see the magic" showAlert={showAlert} mode={mode}/>
      {/*<About mode={mode}/> */}
      
    </div> 
    </>
  );
}

export default App;
