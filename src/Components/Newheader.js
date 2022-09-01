import React from "react";
import "./Header.css";
const Newheader = () => {
  return (
    <>
      <div className="main">
        <div className="logo">
          <img src="/images/colglogo.png" />
          <a href="/">GOVERNMENT GRADUATE COLLEGE OF SCIENCE | GCS</a>
        </div>
        <div className="newbtn">
          <button>LogIn</button>
          <button>SignUp</button>
          <button>Apply</button>
        </div>
      </div>
      <div className="menu">
    
            <nav>
                    <a href="#">Home</a>
                    <a href="#">Programs</a>
                    <a href="#">Departements</a>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
            </nav>
        
      </div>
    </>
  );
};

export default Newheader;
