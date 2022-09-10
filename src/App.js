import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addpost from './Components/Addpost';
import Editpost from './Components/Editpost';
import Postlist from './Components/Postlist';
import './App.css';
import RegisterUser from './Components/RegisterUser';
import Login from './Components/Login';
import ContactUs from './Components/ContactUs';
import Newheader from './Components/Newheader';
import RegistrationForm from './Components/RegistrationForm';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Newheader />
      <Routes>
        {/* <Route path="/" element={<Newheader/>}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/addpost' element={<Addpost />}></Route>
        <Route
          path='/editpost/:postid'
          element={<Editpost />}
        ></Route>
        <Route
          path='/registeruser'
          element={<RegisterUser />}
        ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contactUs' element={<ContactUs />}></Route>
        <Route
          path='/apply'
          element={<RegistrationForm />}
        ></Route>
        {/* <Route path='/footer' element={<Footer/>}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
