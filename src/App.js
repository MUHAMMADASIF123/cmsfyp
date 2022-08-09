import React from "react";
import {Route,Routes} from 'react-router-dom'
import Addpost from "./Components/Addpost";
import Editpost from "./Components/Editpost";
import Postlist from "./Components/Postlist";
import './App.css'
import Adduser from "./Components/Adduser";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      
<Route path="/" element={<Postlist/>}></Route>
<Route path='/addpost' element={<Addpost/>}></Route>
<Route path='/editpost/:postid' element={<Editpost/>}></Route>
<Route path='/adduser' element={<Adduser/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/contactus' element={<ContactUs/>}></Route>




     </Routes>
    </div>
  );
}

export default App;
