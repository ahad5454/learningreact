import "./App.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/textform";


function App() {
  return (
    <>
      <Navbar title="Monodyme" home='MonoHome'/> 

       <div className ="container my-3">

      <TextForm heading="Enter your text"/>   

       <About/>


      </div> 

  
    </>
  );
}

export default App;
