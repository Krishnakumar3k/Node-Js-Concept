import React from 'react'
import  './App.css';
import NavBar from './components/NavBar'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
function App() {
  return (
   <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<PrivateComponent/>}>
          <Route path="/" element={<h1>Product Listing Component</h1>}></Route>
          <Route path="add/" element={<h1>Add Product Component</h1>}></Route>
          <Route path="/update" element={<h1> UpdateProduct Component</h1>}></Route>
          <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp/>}>Signup page</Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
     
{/*       <h1>E-Dashboard</h1>
 */}     
   </>
  )
}

export default App
