import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Newheader = () => {
  const history=useNavigate();
  const logout = () => {
    localStorage.clear('token-info');
    // setIsLoggedin(false);
    history('/')
  };
  // const auth= localStorage.getItem("token-info")
  var auth = JSON.parse(localStorage.getItem("token-info"));
  console.log(auth);
  

  return (
    <div>
      <div className="main">
        <div className="logo">
          <img src="/images/colglogo.png" />
          <a href="/">GOVERNMENT GRADUATE COLLEGE OF SCIENCE | GCS</a>
        </div>
        
        <div className="newbtn">
          {/* <button>LogIn</button>
           */}
           
            {
        localStorage.getItem("token-info") ?
        <>
      <button onClick={logout} className="hbtn me-2 text-white"> logout </button>
      {/* <Link to={'/login'} className="btn btn-primary me-2"> Login </Link> */}
     <button> <Link to={'/profile'} className="hbtn text-white me-2"> {auth.email}</Link></button>
      </> :
      <>
       <button>< Link to={'/login'} className="hbtn text-white "> Login </Link></button>
      <button>  <Link to={'/registeruser'} className="hbtn me-3 text-white  ">SignUp</Link></button>
      <button><Link to={'/apply'} className="hbtn w-100 apply text-white "> Apply</Link></button>
    

      </>   
}
          {/* <button>SignUp</button>
          <button>Apply</button> */}
        </div>
      </div>

   <div className="menu">
  

            <nav>
                    <a href="/">Home</a>
                    <a href="#">Programs</a>
                    <a href="#">Departements</a>
                    <a href="/contactUs">Contact Us</a>
                    <a href="#">About Us</a>
            </nav>
        </div>
      </div>
  
  );
};

export default Newheader;