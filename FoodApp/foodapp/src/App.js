import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './screens/Home';
import Login from './screens/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
         <BrowserRouter>
    <Routes>
      <Route exact path='/' element={  <Home/>}/>
      <Route exact path='/login' element={  <Login/>}/>
      
     {/*  <Home/>
      <Login/> */}
      
    
    </Routes>
   </BrowserRouter>
    </>
    
  );
}

export default App;
