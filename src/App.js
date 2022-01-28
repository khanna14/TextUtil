import { useState } from "react/cjs/react.development";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode=()=>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='black'
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white'
      }
  }
  return (
    <>
    <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode}/> 
    <TextForm mode={mode} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
