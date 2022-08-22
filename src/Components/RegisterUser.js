import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RegisterUser () {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    
  });

  const history = useNavigate();
  const { name, email, password, cpassword } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    var users = {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
      userid:uniqid()
    };
    console.log(users);
    e.preventDefault();
    await axios
      .post("/api/post/registeruser", users)
      .then((res) => {
        alert(res.data);
        // localStorage.getItem("user",JSON.stringify(result));
        // localStorage.setItem('token-info', JSON.stringify(users));
        
          history('/login')
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div>
    
   
    <section class="mt-5  wraper ">
<div class="container">
    <div class="col-sm-8 offset-sm-2  col-lg-6 offset-lg-3 text-center">
        <div class="logo ">
            {/* <img class="w-25 h-25" src="/images/1218776_company_logo_apple_ipad_iphone_icon.png"/> */}
        </div>
        <form class="rounded shadow p-5 mt-5">
         <h1 className="mb-2">Register Here !</h1>
            
              <div class="form-floating">
                {/* <input type="text" class="form-control" id="floatingPassword" placeholder="Last Name"/> */}
                <input
            type="text"
            id="floatingPassword"
            placeholder="name"
            name="name"
            value={name}
            onChange={onInputChange}
            className="form-control mt-2"
          />
                <label for="floatingPassword">Your Name</label>
              </div>
              <div class="form-floating  mt-2 mb-3">
                {/* <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/> */}
                <input
            type="email"
            id="floatingInput"
            placeholder="email"
            name="email"
            value={email}
            onChange={onInputChange}
            className="form-control mt-2"
          />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
              <input
            type="password"
            id="floatingPassword"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
            className="form-control mt-2"
          />
                {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/> */}
                <label for="floatingPassword">Password</label>
              </div>
              <div class="information mt-1 d-inline-block ">
                <h6>Use 0 or more characters with a mix of letters,numbers </h6>
              </div>
              <div class="form-floating">

                {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/> */}
                <input
            type="password"
            id="floatingPassword"
            placeholder="confirm password"
            name="cpassword"
            value={cpassword}
            onChange={onInputChange}
            className="form-control mt-2"
          />
                <label for="floatingPassword"> Conform Password</label>
              </div>
              <div class="policy">
                <div class="form-check ms-5 mt-2">
                    <input class="form-check-input  rediobtn " type="checkbox" value=""/>
                   I Agree <a href="#">Term and Conditions</a>
                  </div>
                  
              </div>
              {/* <button type="submit" class="btn btn-primary w-100 my-4">Continue</button>
               */}
                <button
            type="submit"
            onClick={handleuser}
            className="mt-2  btn btn-primary w-100"
          >
            {" "}
            Signup
          </button>

        </form>
    </div>
</div>



</section>

    </div>
  );
}

export default RegisterUser;
