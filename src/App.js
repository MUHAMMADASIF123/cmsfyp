import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Addpost from './Components/Addpost';
import Editpost from './Components/Editpost';
import Postlist from './Components/Postlist';
import './App.css';
import RegisterUser from './Components/RegisterUser';
import Login from './Components/Login';
import ContactUs from './Components/ContactUs';
import Administration from './Components/Administration';
import Newheader from './Components/Newheader';
import RegistrationForm from './Components/RegistrationForm';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Intermediate from './Components/Programs/Intermediate_Programs/Intermediate';
import Bscs from './Components/Programs/Bechelor/BsCS/Bscs';
import BsBotany from './Components/Programs/Bechelor/Bs_Botany/BsBotany';
import Bschemistry from './Components/Programs/Bechelor/BsChemistry/Bschemistry';
import BsPhysics from './Components/Programs/Bechelor/Bs_Physics/BsPhysics';
import BsStatistic from './Components/Programs/Bechelor/Bs_Statistic/BsStatistic';
import BsIslamiat from './Components/Programs/Bechelor/Bs_Islamiat/BsIslamiat';
import Bacholer_programs_list from './Components/Programs/Bechelor/Bacholer_programs_list';
import BsPoliticalScience from './Components/Programs/Bechelor/Bs_PoliticalScience/BsPoliticalScience';
import BsZoology from './Components/Programs/Bechelor/Bs_Zoology/BsZoology';
import BsEducation from './Components/Programs/Bechelor/Bs_Education/BsEducation';
import BsMath from './Components/Programs/Bechelor/Bs_Math/BsMath';
import BBA_ from './Components/Programs/Bechelor/BBA/BBA_';
import BsEnglish from './Components/Programs/Bechelor/Bs_English/BsEnglish';
import BsSociology from './Components/Programs/Bechelor/Bs_Sociology/BsSociology';
import BsEconomics from './Components/Programs/Bechelor/Bs_Economics/BsEconomics';
import BsMass_Communication from './Components/Programs/Bechelor/Bs_Mass_Communication/BsMass_Communication';
import BsUrdu from './Components/Programs/Bechelor/Bs_Urdu/BsUrdu';
import ComputerScience from './Components/Departments/Computer_Science/ComputerScience';
import Chemistry_ from './Components/Departments/Chemistry/Chemistry_';
import Zoology_ from './Components/Departments/Zoology/Zoology_';
import Physics_ from './Components/Departments/Physics/Physics_';
import Mathematics_ from './Components/Departments/Mathematics/Mathematics_';
import Economics_ from './Components/Departments/Economics/Economics_';
import Islamiyat_ from './Components/Departments/Islamiyat/Islamiyat_';
import BBA from './Components/Departments/BBA_Department/BBA';
import MassCom from './Components/Departments/MassCom_Department/MassCom';
import Sociology from './Components/Departments/Sociology_Department/Sociology';
import Botany from './Components/Departments/Botany_Department/Botany';
import Education from './Components/Departments/Education_Department/Education';
import English from './Components/Departments/English_Department/English';
import Urdu from './Components/Departments/Urdu_Department/Urdu';
import Statistics from './Components/Departments/Statistics_Department/Statistics';
import PoliticalScience from './Components/Departments/PoliticalScience_Department/PoliticalScience';

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
          path='/Administration'
          element={<Administration />}
        ></Route>
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
        <Route path='/BsBotany' element={<BsBotany />}></Route>
        <Route
          path='/Bacholer_programs_list'
          element={<Bacholer_programs_list />}
        ></Route>
        <Route path='/BsPhysics' element={<BsPhysics />}></Route>
        <Route
          path='/BsStatistic'
          element={<BsStatistic />}
        ></Route>
        <Route
          path='/BsPoliticalScience'
          element={<BsPoliticalScience />}
        ></Route>
        <Route
          path='/BsIslamiat'
          element={<BsIslamiat />}
        ></Route>
        <Route path='/BsZoology' element={<BsZoology />}></Route>
        <Route
          path='/BsEducation'
          element={<BsEducation />}
        ></Route>
        <Route path='/BsMath' element={<BsMath />}></Route>
        <Route path='/BsEnglish' element={<BsEnglish />}></Route>
        <Route
          path='/BsSociology'
          element={<BsSociology />}
        ></Route>
        <Route path='/BBA_' element={<BBA_ />}></Route>
        <Route
          path='/BsEconomics'
          element={<BsEconomics />}
        ></Route>
        <Route
          path='/BsMass_Communication'
          element={<BsMass_Communication />}
        ></Route>
        <Route path='/BsUrdu' element={<BsUrdu />}></Route>
        <Route
          path='/ComputerScience'
          element={<ComputerScience />}
        ></Route>
        <Route
          path='/Chemistry_'
          element={<Chemistry_ />}
        ></Route>
        <Route path='/Zoology_' element={<Zoology_ />}></Route>
        <Route path='/Physics_' element={<Physics_ />}></Route>
        <Route
          path='/Mathematics_'
          element={<Mathematics_ />}
        ></Route>
        <Route
          path='/Economics_'
          element={<Economics_ />}
        ></Route>
        <Route
          path='/Islamiyat_'
          element={<Islamiyat_ />}
        ></Route>
        <Route path='/BBA' element={<BBA />}></Route>
        <Route path='/MassCom' element={<MassCom />}></Route>
        <Route path='/Sociology' element={<Sociology />}></Route>
        <Route path='/Botany' element={<Botany />}></Route>
        <Route path='/Education' element={<Education />}></Route>
        <Route path='/Urdu' element={<Urdu />}></Route>
        <Route path='/English' element={<English />}></Route>
        <Route
          path='/PoliticalScience'
          element={<PoliticalScience />}
        ></Route>
        <Route
          path='/Statistics'
          element={<Statistics />}
        ></Route>
        {/* <Route path='/footer' element={<Footer/>}></Route> */}
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
