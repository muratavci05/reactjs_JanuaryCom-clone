import {
  BrowserRouter,
  Routes,
  Route,   
  } from "react-router-dom";

import Header from "./components/pageWrapper/header/header";

import Home from "./Pages/home";
import Login from "./Pages/Login/login.js";


function App() {
  return (

    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
       
      </Routes>
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
