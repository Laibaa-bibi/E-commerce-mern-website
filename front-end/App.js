

import './App.css';
import MyHeader from './components/Header';
import Footer from './components/Footer';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Products from './components/Products';
import Addp from './components/Addp';
import Updatep from './components/Updatep';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

import PrivateComponents from './components/PrivateComponents';



 
function App() {
  const verify=localStorage.getItem('user');


  return(


    <Router>
    <div>


      <MyHeader/>
      
     
      <Routes>
           
           <Route element={<PrivateComponents/>}>

           <Route path="/" element={<Products/>}></Route>
           <Route path="/Addp" element={<Addp/>}></Route>
           <Route path="/Updatep/:id" element={<Updatep/>}></Route>
           <Route path="/Logout" element={<Logout/>}></Route> 
           

           </Route>

          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      
      <Footer/>
    </div>

    </Router>
  );


}


export default App;






