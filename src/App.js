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
import Intermediate from './Components/Programs/Intermediate_Programs/Intermediate';
import Bscs from './Components/Programs/Bechelor/Bscs_Programs/Bscs';
import Bschemistry from './Components/Programs/Bechelor/BsChemistry/Bschemistry';
import BsPhysics from './Components/Programs/Bechelor/Bs_Physics/BsPhysics';
import Bacholer_programs_list from './Components/Programs/Bechelor/Bacholer_programs_list';

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
        <Route
          path='/intermediate'
          element={<Intermediate />}
        ></Route>
        <Route path='/bscs' element={<Bscs />}></Route>
        <Route
          path='/Bschemistry'
          element={<Bschemistry />}
        ></Route>
        <Route
          path='/Bacholer_programs_list'
          element={<Bacholer_programs_list />}
        ></Route>
        <Route path='/BsPhysics' element={<BsPhysics />}></Route>
        {/* <Route path='/footer' element={<Footer/>}></Route> */}
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
