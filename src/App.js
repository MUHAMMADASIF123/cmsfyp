import React from "react";
import {Route,Routes} from 'react-router-dom'
import Addpost from "./Components/Addpost";
import Editpost from "./Components/Editpost";
import Postlist from "./Components/Postlist";
import './App.css'
import RegisterUser from "./Components/RegisterUser";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import RegistrationForm from "./Components/RegistrationForm";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      
<Route path="/" element={<Postlist/>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path='/addpost' element={<Addpost/>}></Route>
<Route path='/editpost/:postid' element={<Editpost/>}></Route>
<Route path='/registeruser' element={<RegisterUser/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/contactus' element={<ContactUs/>}></Route>
<Route path='/apply' element={<RegistrationForm/>}></Route>




     </Routes>
    </div>
  );
}

export default App;
