import React, { useState } from "react";
// import uniqid from "uniqid";
import axios from "axios";
// import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
function Login() {
  const history=useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  // const history = useNavigate();
  const {  email, password, } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleuser = async (e) => {
    var user = {
    
      email: email,
      password: password,
    
    };
    // console.log(users);
    e.preventDefault();
    await axios
      .post("/api/post/login", user)
      .then((res) => {
        localStorage.setItem('token-info', JSON.stringify(user));
        alert(res.data);
          history('/')
      })
      .catch((err) => {
        console.log(err);
      });
    // history.push("/");
   
         
      // </style>
  };
  return (
    <div>
    {/* <div className="row justify-content-center">
      <div className="col-md-6">
        <div>
         
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={onInputChange}
            className="form-control mt-2"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
            className="form-control mt-2"
          />
         
          <button
            type="submit"
            onClick={handleuser}
            className="mt-2  btn btn-success"
          >
            {" "}
            Login
          </button>
        </div>
      </div>
    </div> */}
    <section class="Wraper  " >
      <div class="container ">
        <div class="col-sm-8 offset-sm-2  col-lg-6 offset-lg-3 text-center mt-5">
          <div class="logo">
            {/* <img
              class="w-25 h-25"
              src="/images/1218776_company_logo_apple_ipad_iphone_icon.png"
              alt="image"
            /> */}
          </div>
          <form class="rounded bg-white shadow p-5 mt-5">
            <h3 class="text-dark fw-bolder fs-4 mb-2">Login to here</h3>
<div class="fw-normal text-muted mb-4">
    New here ? <a href="#" class="text-decoration-none text-primary fw-bolder">create a account</a>
</div>
<div class="form-floating mb-3">
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
    {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
     */}
      <input
            type="password"
            id="floatingPassword"
            placeholder="password"
            name="password"
            value={password}
            onChange={onInputChange}
            className="form-control mt-2"
          />
    <label for="floatingPassword">Password</label>
  </div>
  <div class="mt-2 text-end">
    <a href="#" class="fw-bold text-primary text-decoration-none "> Forget password ?</a>
  </div>
{/* <button type="submit" class="btn btn-primary w-100 my-4">Continue</button> */}
<button
            type="submit"
            onClick={handleuser}
            className="mt-4 btn btn-primary w-100 "
          >
            {" "}
            Login
          </button>

          </form>
        </div>
      </div>
    </section>

    </div>
  );
  
}

export default Login;
